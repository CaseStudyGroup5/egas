import React from 'react'
import { Link } from 'react-router-dom'
import Update from './Update.png'
import Cylinder from './Cylinder Booking.jpg'
import Accessories from './HTB1Vy9uac_vK1Rjy0Foq6xIxVXaM.jpg'
import './Card.css'
function StaffViewComponent() {

  return (
    <div>
      <br/>
      <h2> Welcome StaffDelivery</h2>
      <br/><br/>
      <div class="main">
      <div class="column">
        <img src={Update} alt="Update Profile"/><br/>
      <h4> Update Profile</h4>
      <p>You can update your profile here</p>
        <Link to="/updateStaffMember"><button type="button" class="btn btn-outline-danger">UPDATE</button></Link>
      </div>
      <div class="column">
        <img src={Cylinder} alt="Update Profile"/><br/>
      <h4> Gas Booking</h4>
      <p>You can view gas booking here</p>
        <Link to="/custGas"><button type="button" class="btn btn-outline-danger">VIEW LIST</button></Link>
      </div>
      <div class="column">
        <img src={Accessories} alt="Update Profile"/><br/>
      <h4> Accessories Booking</h4>
      <p>You can view accessories here</p>
        <Link to="/custAccessories"><button type="button" class="btn btn-outline-danger">VIEW LIST</button></Link>
      </div>
      </div>
    </div>
  )
   
  


}export default StaffViewComponent