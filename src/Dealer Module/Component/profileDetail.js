import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
//import './menustyle.css'
import '../Css/profile.css'
import DealerService from '../Service/DealerService';


class profileDetail extends Component 
{
  constructor(props) 
  {
    super(props)

    this.state = {
      dealer: {}
     
      };  
      
  }
  
  componentDidMount(){
    DealerService.getInfo().then((res) => {
        this.setState({ dealer: res.data});
        console.log(this.state.dealer);
    });
    }

    render()
    {
      return(
            <div>
                <br></br>
            <h1 className = "text-center">My Profile</h1>
            
            <div className="">
            <div className = "mycard card col-md-4 offset-md-4">
                
                <div className = "card-body">
                    <div className = "row" >
                        <label> Pancard Number: </label>
                        <div className="l1"> { this.state.dealer.pancardNumber }</div>
                    </div>
                    <div className = "row">
                        <label> First Name: </label>
                        <div className="l2"> { this.state.dealer.firstName }</div>
                    </div>
                    <div className = "row">
                        <label> Last Name: </label>
                        <div className="l3"> { this.state.dealer.lastName }</div>
                    </div>
                    <div className = "row">
                        <label> Gender: </label>
                        <div className="l4"> { this.state.dealer.gender }</div>
                    </div>
                    <div className = "row">
                        <label> Email ID: </label>
                        <div className="l5"> { this.state.dealer.email }</div>
                    </div>
                    <div className = "row">
                        <label> Contact Number: </label>
                        <div className="l6"> { this.state.dealer.contactNumber }</div>
                    </div>
                    <div className = "row">
                        <label> City: </label>
                        <div className="l7"> { this.state.dealer.city }</div>
                    </div>
                    <div className = "row">
                        <label>  State: </label>
                        <div className="l8"> { this.state.dealer.state}</div>
                    </div>
                </div>
    
            </div>
            </div>
            
            <br></br>
                  <a href="/dealerupdate"><button type="button" class="btn mybutton">Update</button></a>  
        </div>
             
      );
   
    }
}

/*
     <div>
                <h1>Info</h1>
               
    {
         this.state.dealers.map(
            dealer => 
           {
                <p>{}</p>
                <p>{}</p>
                <p>{}</p>
                <p>{}</p>
                <p>{dealer.email}</p>
                <p>{dealer.contactNumber}</p>
                <p>{dealer.city}</p>
                <p>{dealer.state}</p>
           }
                
            
    )
    }
   
        </div>





<div className="position">
    <h1>All Customer Details</h1>
</div>
<div className="tableposition">
<table class="table table-striped " >
    <thead class="table-dark">
        <tr>
            <th>Pancard</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>State</th>
            <th>City</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Connection Status</th>
        </tr>
    </thead>
    <tbody class="table-light">
    {
         this.state.customers.map(
            customer => 
            <tr class="active-row">
            <td>{customer.custPancard}</td>
             <td> {customer.custFirstName} </td>   
             <td> {customer.custLastName}</td>
             <td> {customer.custState}</td>
             <td> {customer.custCity}</td>
             <td> {customer.custAddress}</td>
             <td> {customer.custContact}</td>
             <td> {customer.custConnectionStatus}</td>
             </tr>
    )
    }
    </tbody>
</table>
</div>
<div>
<a href="/changeconnection"><button type="button" class="btn btn-outline-danger">New Connections</button></a> 

</div>


*/
export default profileDetail;