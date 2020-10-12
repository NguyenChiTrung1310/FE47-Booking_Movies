import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slider.scss'
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ButtonBase from '@material-ui/core/ButtonBase';  
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
export default class SliderComponent extends Component {
  renderArrows = () => {
    return (
      <div className='slider-arrow'>
        <ButtonBase
          className='arrow-btn prev'
          onClick={() => this.slider.slickPrev()}
        >
          <ArrowLeft />
        </ButtonBase>
        <ButtonBase
          className='arrow-btn next'
          onClick={() => this.slider.slickNext()}
        >
          <ArrowRight />
        </ButtonBase>
      </div>
    );
  };
  render() {
    return (
      <div className='App'> 
        <div style={{ position: 'relative', marginTop: '2rem' }}>
          {this.renderArrows()}
          <Slider
            arrows={false}
            centerMode
            className='slider-panel'
            dots={false}
            ref={c => (this.slider = c)}
            slidesToShow={4}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}