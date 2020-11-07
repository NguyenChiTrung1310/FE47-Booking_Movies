import React from 'react'

const TheaterInfo = ({item}) => {
    const {maRap, tenRap, maCumRap, tenCumRap, maHeThongRap, tenHeThongRap} =item;
    return (
        <div>
            <h4>TÊN HỆ THỐNG RẠP: {tenHeThongRap}</h4>
            <h4>TÊN CỤM RẠP: {tenCumRap}</h4>
        </div>
    )
}

export default TheaterInfo
