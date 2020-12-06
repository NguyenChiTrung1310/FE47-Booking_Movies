import React, {useEffect, Component} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { 
  Card,  
  Typography,  
} from '@material-ui/core';  
import {createAction} from './../../redux/actions'
import { fetchSearchMovie } from '../../redux/actions/movieListAction';
import { CLEAR_SEARCHKEY } from '../../constants/constant';
import { connect } from 'react-redux';

 
const SearchPage = (props) => {
  const dispatch= useDispatch(); 
  useEffect(()=>{
    dispatch(fetchSearchMovie(props.match.params.tenPhim));
    return () => {
      dispatch(createAction(CLEAR_SEARCHKEY))
    }
  },[dispatch, props]);
 
  // const movieSearchList= useSelector((state)=>{
  //   return state.movieSearchList.initaialMovieList_Detail
  // })  
  const renderMovieSearch=()=>{ 
    return props.movieSearchList.map((item, index)=>{  //will remove props syntax when use classComponent
      return (
        <div
          className='col-lg-3 col-sm-6 col-12 p-2'
          key={index}
        >
          <Card> 
            <Typography>{item.tenPhim}</Typography> 
          </Card>
        </div>
      )
    })
    
  }
 
  return (
    <div>
      {renderMovieSearch()}
    </div>
  )
}
// const mapStateToProps = (state) => {
//   return {
//     movieSearchList: state.initialMovieSearch,
//   };
// }; 
// export default connect(mapStateToProps)(SearchPage);
export default SearchPage;