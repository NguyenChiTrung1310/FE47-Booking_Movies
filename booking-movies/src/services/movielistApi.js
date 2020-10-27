
import axios from 'axios';
import { MOVIELIST_API } from './api';
 

export function MovieListService(maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia) {
  const movieListData={maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia};
  return  axios({
    method: 'GET',
    url: MOVIELIST_API,
    data: movieListData,
  });
}
