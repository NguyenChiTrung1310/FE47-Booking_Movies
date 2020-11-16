
import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
const CustomScheduleMovie = ({ arrayData }) => {

    const renderCustomMovie = () => {
        return arrayData.map((item, index) => {
            const { maRap, ngayChieuGioChieu } = item;
            return (
                <Grid key={index}>
                    <Grid
                        container
                    >
                        <Grid
                            className='button'
                            item
                            sm={3}
                            xs={12}
                        >  <Typography
                            className='title'
                            component='h5'
                            variant='h5'
                        >
                                {maRap}
                            </Typography></Grid>
                        <Grid
                            className='button'
                            item
                            sm={6}
                            xs={12}
                        >  <Typography
                            className='title'
                            component='h5'
                            variant='h5'
                        >
                                {ngayChieuGioChieu}
                            </Typography></Grid>
                    </Grid>

                </Grid>
            )
        })
    }
    return (
        <Container>
            {renderCustomMovie()}
        </Container>
    )
}

export default CustomScheduleMovie


/**
 *  <Typography
                        className='title'
                        component='h5'
                        variant='h5'
                    >
                        {maRap}
                    </Typography>
                    <Typography
                        className='title'
                        component='h5'
                        variant='h5'
                    >
                        {ngayChieuGioChieu}
                    </Typography>
 */