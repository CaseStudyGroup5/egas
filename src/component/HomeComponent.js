import React from 'react'
import Background from './gas.jpg'
import { Link } from 'react-router-dom'
import './HeaderComponent.css'
var sectionStyle = {
  width: '100%',
height: '630px',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover' ,
  backgroundPosition: 'center'
  
};
function HomeComponent() {
    return (
        <div>
        <section style={ sectionStyle }>
        <Link to="/customerlogin" ><button id="bookNow"class="button button1">ORDER NOW</button></Link>
        </section>
        </div>
    )
}

export default HomeComponent