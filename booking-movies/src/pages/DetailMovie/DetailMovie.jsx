import React, {Component} from 'react';  
import Axios from 'axios';
import {connect} from 'react-redux'; 
 class DetailMovie extends Component {
    render() { 
        
        const{maLichChieu, maRap, maPhim, tenPhim, ngayChieuGioChieu, giaVe, thoiLuong}= this.props.movieDetail;
        return (
            <div>
                 <h5>{maLichChieu}</h5>
                 <h5>{maRap}</h5>
                 <h5>{maPhim}</h5> 
                 <h5>{tenPhim}</h5>
                 <h5>{ngayChieuGioChieu}</h5>
                 <h5>{giaVe}</h5> 
                 <h5>{thoiLuong}</h5> 
            </div>
        )
    }

    componentDidMount(){
        Axios({
            method:'GET',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1314'
        }).then(
            res=>{
                // console.log('CHI TIẾT PHIM THEO MA PHIM',res);
                // console.log('CHI TIẾT MA HE THONG RAP THEO MA PHIM',res.data.lichChieu[0].thongTinRap.maHeThongRap);
                // console.log('CHI TIẾT LICH CHIEU THEO MA PHIM',res.data.lichChieu[0].maLichChieu);
                // const test= ()=>{
                //     for(let i=0; i< (res.data.lichChieu).length;i++){
                //         //console.log('CHI TIẾT MA HE THONG RAP THEO MA PHIM',res.data.lichChieu[i].thongTinRap.maHeThongRap);
                //         return res.data.lichChieu[i] ;
                //     }
                // }
                // for(let i=0; i< (res.data.lichChieu).length; i++){
                //     console.log(res.data.lichChieu[0].thongTinRap);
                // }
                 
                this.props.dispatch({
                    type:'FETCH_MOVIE_DETAIL',
                    payload: res.data.lichChieu[0],
                })
            }
        ).catch(
            err=>{
                console.log(err);
            }
        );
    }
}

//lấy data từ store về để render lại
const mapStateToProps= (state)=>({
    movieDetail: state.movieList.initaialMovieList_Detail || {
        maLichChieu: '',
        maRap: '',
        maPhim: '',
        tenPhim: '',
        ngayChieuGioChieu: '',
        giaVe: '',
        thoiLuong: '',
    }
});
 
export default connect(mapStateToProps)(DetailMovie);

