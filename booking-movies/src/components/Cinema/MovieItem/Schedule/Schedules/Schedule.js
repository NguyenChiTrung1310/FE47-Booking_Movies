// import React from 'react'
// import { CardMedia, Divider, Grid, Link } from '@material-ui/core'
// import { CONTACT_PAGE } from '../../../../../constants/constant';
// import PropTypes from 'prop-types';


// const Schedule = ({item}) => {
//   const {hinhAnh, tenPhim, lstLichChieuTheoPhim} = item;

//   // const renderSchedule = () => {
//   //   return lstLichChieuTheoPhim.map((item, index) => {
//   //     console.log('LICH CHIEU: ', item);
//   //   });
//   // }

//   const handleClickMovie = () => {
//     console.log('Clicked movie');
//   }

//   return (
//     <Grid
//       className='movie-item'
//       onClick={handleClickMovie}
//     >
//       <Grid className='item'>
//         <Link to={CONTACT_PAGE}>
//           <CardMedia
//             className='movie-img'
//             image={hinhAnh}
//           />
//         </Link>
//         <Link
//           className='movie-content'
//           color='textPrimary'
//           to={CONTACT_PAGE}
//           variant='body2'
//         >
//           {tenPhim}
//         </Link>
//         <Link to={CONTACT_PAGE}>
//           <ScheduleMovie schedule={lstLichChieuTheoPhim}/>
//         </Link>
//       </Grid>
//       <Divider className='movie-divider'/>
//     </Grid>
//   )
// }

// Schedule.propTypes = {
//   handleClickMovie: PropTypes.func,
//   index: PropTypes.number,
//   item: PropTypes.object,
// };

// export default Schedule
