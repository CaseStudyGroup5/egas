import React,{ Component } from 'react'
import '../Css/menu1.css'
import connection from '../Images/connection.png'
import cylinder from '../Images/cylinder.png'
import update1 from '../Images/update1.jpg'
import customers from '../Images/customers.png'
import staff1 from '../Images/staff5.png'
import accessories2 from '../Images/accessories2.jpg'
export class menu1 extends Component {
    render()
    {
        return (
            <div>
              
                <div className="row">
                <div class="flip-card">
                <div>
                <h3>My Profile</h3>
                </div>
                <div class="flip-card-inner">
                <div class="flip-card-front">
                     <img  src={update1}/>
                </div>
                <div class="flip-card-back">
                    <br></br>
                    <br></br>
                    <h2>Update Profile</h2>
                    <br></br>
                    <a  href="/profiledetail"><button  class="btn btn-danger">View</button></a>
                </div>
                </div>
                </div>
    
                <div class="flip-card">
                <div>
                <h3>Customer Details</h3>
                </div>
                <div class="flip-card-inner">
                <div class="flip-card-front">
                     <img  src={customers}/>
                </div>
                <div class="flip-card-back">
                    <br></br>
                    <br></br>
                    <h2>Customers Details</h2>
                    <br></br>
                    <a href="/viewconnections"><button  class="btn btn-danger">View</button></a>
                </div>
                </div>
                </div>
    
                <div class="flip-card">
                <div>
                <h3>Staff Details</h3>
                </div>
                <div class="flip-card-inner">
                <div class="flip-card-front">
                     <img  src={staff1}/>
                </div>
                <div class="flip-card-back">
                    <br></br>
                    <br></br>
                    <h2>Staff Details</h2>
                    <br></br>
                    <a href="/viewstaff"><button  class="btn btn-danger">View</button></a>
                </div>
                </div>
                </div>
                </div>
                
            <br></br>
                <div className="row" style={{marginLeft:"150px"}}>
                <div class="flip-card">
                <div>
                <h3>Booking Gas Details</h3>
                </div>
                <div class="flip-card-inner">
                <div class="flip-card-front">
                     <img  src={cylinder}/>
                </div>
                <div class="flip-card-back">
                <br></br>
                    <br></br>
                    <h2>Booking Gas</h2>
                    <br></br>
                    <a href="/viewbookings"><button  class="btn btn-danger">View</button></a>
                </div>
                </div>
                </div>
    
               
                <div class="flip-card">
                <div>
                <h3>Booking Accessories</h3>
                </div>
                <div class="flip-card-inner">
                <div class="flip-card-front">
                     <img  src={accessories2}/>
                </div>
                <div class="flip-card-back">
                <br></br>
                    <br></br>
                    <h2>Booking Accessories</h2>
                    <br></br>
                    <a href="/viewaccessories"><button  class="btn btn-danger">View</button></a>
                </div>
                </div>
                </div>
                </div>
    
            </div>
            
        )
    }
    
}

export default menu1