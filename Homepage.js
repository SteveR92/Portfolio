import React, { useState, useRef, useEffect } from 'react'
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import './styles/Homepage.css'
import bgn from '../images/bgn.jpg'
import bgn1 from '../images/bgn1.jpg'
import bgn2 from '../images/bgn2.jpg'
import bgn3 from '../images/bgn3.jpg'
import bgn4 from '../images/bgn4.jpg'
import bgn5 from '../images/bgn5.jpg'

function Homepage() {
    const imageRef = useRef()
    const sliderRef = useRef()

    const [value, setValue] = React.useState({value: 0});
  
    const handleChange = (e, newValue) => {
     setValue(newValue++);
    };

    const marks = [
      {
      value: 0,
      label: 'c'
      },
      {
      value: 1,
      label: 'o'
      },
      {
      value: 2,
      label: 'l'
      },
      {
      value: 3,
      label: 'o'
      },
      {
      value: 4,
      label: 'u'
      },
      {
      value: 5,
      label: 'r'
      }]

  useEffect((e) => {
    const handleClick = (e) => {
      if (value === 0) {
        imageRef.current.src = bgn
      } else if (value === 1) {
        imageRef.current.src = bgn1
      } else if (value === 2) {
        imageRef.current.src = bgn2
      } else if (value === 3) {
        imageRef.current.src = bgn3
      } else if (value === 4) {
        imageRef.current.src = bgn4
      } else if (value === 5) {
        imageRef.current.src = bgn5
      }
    }
    sliderRef.current.addEventListener('click', handleClick);
  });

      
    
  const useStyles = makeStyles({
    thumb: {
      opacity: 0
    },
    mark: {
      height: 10,
      color: 'white'
    },
    root: {
      width: 280,
      top: 0,
      left: 0,
      color: 'white',
    
    },
    step: {
      color: 'white'
    }
  })

  const classes = useStyles()

  return <div className="homepage-container" >
      <div className="homepage" >
        <div className="left-container">
          <ul className="homepage-ul">
            <li className="homepage-li">Steve Roe:</li>
            <li className="homepage-li">Web Developer,</li>
            <li className="homepage-li">Photographer.</li>
          </ul>
        </div>
        <div className="right-side">
          <div className="image-container">
            <img src={bgn} ref={imageRef} alt="bgn" id="homepage-image"/>
          </div>
          <div className="range">
            <h3 className="range-text">Add Some Colour:</h3>
          <div className="range-container">
            <Slider
              defaultValue={0}
              id="slider"
              value={value}
              ref={sliderRef}
              min={0}
              step={1}
              max={5}
              onChange={handleChange}
              aria-labelledby="discrete-slider-restrict"
              valueLabelDisplay="auto"
              marks={marks}
              aria-label="white"
              classes={ {
                thumb: classes.thumb,
                mark: classes.mark,
                root: classes.root,
                step: classes.step,
                label: classes.root,
              }}
            />
          </div>
          </div>
        </div>
    </div>
</div> 
    
}

export default Homepage



   