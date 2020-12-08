import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import SearchIcon from '@material-ui/icons/Search';
import { createAction } from './../../redux/actions'
import { fetchSearchMovie } from '../../redux/actions/movieListAction';
import { CLEAR_SEARCHKEY } from '../../constants/constant';
import { connect } from 'react-redux';
import './SearchPage.scss'
import SearchItem from './../../components/SearchItem/SearchItem'

const SearchPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchMovie(props.match.params.tenPhim));
    return () => {
      dispatch(createAction(CLEAR_SEARCHKEY))
    }
  }, [dispatch, props]);
 
  const renderMovieSearch = () => { 
    if(props.movieSearchList.length){
      return props.movieSearchList.map((item, index) => { 
        return ( 
          <div
            className='col-3'
            key={index}
          >
            <SearchItem item={item} />
          </div>
        )
      })
    } else{
      return(
        <>
          <p className='error'>
        Search No Result
          </p>
          <p className='error' >
       We're sorry. We cannot find any matches for your search term.
          </p>
          <SearchIcon style={{fontSize: '60px'}}/>
        </>
      )
    }
  }

  return (
    <div>
      <p style={{fontSize: '40px'}}>
          Result found for{' '}
        <span className='text-danger'>{`"${props.match.params.tenPhim}"`}</span>
      </p>
      <div className='container'>
        <div
          className='row' 
        >{renderMovieSearch()}</div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => { 
  return {
    movieSearchList: state.movieList.initialMovieSearch,
  };
};
export default connect(mapStateToProps)(SearchPage); 