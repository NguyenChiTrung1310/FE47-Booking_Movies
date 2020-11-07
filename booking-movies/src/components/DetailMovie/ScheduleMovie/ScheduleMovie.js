import { Grid } from '@material-ui/core'
import React from 'react'
import TheaterInfo from '../TheaterInfo/TheaterInfo'
 
 
const ScheduleMovie = ({schedule}) => { 
    // console.log('SCHEDULE',schedule)
    const renderScheduleMovie = () => {
        return schedule.map((item, index) => {
            // console.log('ITEM', item);
            const {
                    thongTinRap, 
                    maLichChieu, 
                    maRap, 
                    maPhim, 
                    tenPhim, 
                    ngayChieuGioChieu, 
                    giaVe, 
                    thoiLuong
                  } = item;
          return (
                <Grid key={index}>
                <h4>MÃ LỊCH CHIẾU: {maLichChieu}</h4> 
                <TheaterInfo
                item={thongTinRap} 
                 />   
                </Grid>
          )
        })
      }
    return(
        <div>
             {renderScheduleMovie()}
        </div>
    )
}

export default ScheduleMovie


// const { 
//     maLichChieu,
//     maRap, 
//     maPhim,
//     tenPhim, 
//     ngayChieuGioChieu, 
//     giaVe, 
//     thoiLuong,  
//    thongTinRap,
//    } = schedule; 
// console.log("SCHEDULE", schedule);
// return schedule.map((item, index)=>{
//    console.log('ITEM', item);
//    <>
//        {/* <CinemaInfo
//            CinemiInfo= {thongTinRap}
//        /> */}
//        <h4>{thoiLuong}</h4>
//        <h4>{giaVe}</h4>
//    </>

// });