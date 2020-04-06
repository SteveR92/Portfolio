import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import ImageAnimation from './ImageAnimation'
import NutApp from './NutApp'
import WedApp from './WeddingApp'
import FoodTruck from './FoodTruck'
import Ceefax from './Ceefax'
import Alphabet from './Alphabet';
import Portfolio from './Portfolio'
import data from './dev-info.json'

import CodeIcon from '@material-ui/icons/Code';
import './styles/DevPortfolio.css'

function DevPortfolio() {
    let [value, setValue] = React.useState({value: <ImageAnimation />});
    let [title, setTitle] = React.useState({title: 'Developer Portfolio'});

    let componentLink = value.value
    let nutriInfo = ''
    let weddingInfo = ''
    let foodInfo = ''
    let ceefaxInfo = ''
    let alphabetInfo = ''
    let portfolioInfo = ''
    let welcome = ''


    for (let info in data) {
      nutriInfo = data[info].nutriApp
      weddingInfo = data[info].weddingApp
      foodInfo = data[info].foodApp
      ceefaxInfo = data[info].ceefaxApp
      welcome = data[info].welcome
      alphabetInfo = data[info].alphabet
      portfolioInfo = data[info].portfolio
    }

    let [info, setInfo] = React.useState({info: welcome});

   
    const nutriClick = () => {
      setValue({value: <NutApp />})
      setInfo({info: nutriInfo})
      setTitle({title: 'Nutri-App'})
    }

    const weddingClick = () => {
      setValue({value: <WedApp />})
      setInfo({info: weddingInfo})
      setTitle({title: 'Wedding App'})
    }

    const foodClick = () => {
      setValue({value: <FoodTruck />})
      setInfo({info: foodInfo})
      setTitle({title: 'Food Truck App'})
    }

    const ceefaxClick = () => {
      setValue({value: <Ceefax />})
      setInfo({info: ceefaxInfo})
      setTitle({title: 'Footie Text'})
    }

    const alphabetClick = () => {
      setValue({value: <Alphabet />})
      setInfo({info: alphabetInfo})
      setTitle({title: 'Alphabet App'})
    }

    const portfolioClick = () => {
      setValue({value: <Portfolio />})
      setInfo({info: portfolioInfo})
      setTitle({title: 'Portfolio'})
    }

    
    

    
    return <div className="photography-portfolio-page" >
      <div className="photography-portfolio-container" >
        <div className="left-container-photog">
          <div className="component-link">
            {componentLink}
          </div>
        </div>

        <div className="right-container-photog">
        <div className='button-container'> 
         <div class="dropdown">
        <button class="dropbtn">Select a Project <span id="dropdown-arrow">&#9660;</span></button>
        <div class="dropdown-content">
          <ul>
            <li><Link onClick={() => ceefaxClick()}>Footie Text</Link></li>
            <li><Link onClick={() => foodClick()}>Food Truck App</Link></li>
            <li><Link onClick={() => weddingClick()}>Wedding App</Link></li>
            <li><Link onClick={() => nutriClick()}>Nutri-App</Link></li>
            <li><Link onClick={() => alphabetClick()}>Alphabet App</Link></li>
            <li><Link onClick={() => portfolioClick()}>Portoflio</Link></li>
          </ul>
        </div>
        </div>
        </div> 
        <div className="bio-container">
            <h2>{title.title}</h2>   
            <div className="card-container">
            <div className="info-card">
            <p>{info.info}</p>
            </div>
            <div className="small-logo-container">
            <CodeIcon id="small-icon"/>
            </div>
            </div>
        </div>    
        </div>
      </div>
    </div>
    
}

export default DevPortfolio