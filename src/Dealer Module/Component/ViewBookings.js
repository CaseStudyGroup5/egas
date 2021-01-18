import React, { Component } from 'react';
import DealerService from '../Service/DealerService';
import '../Css/table.css'

class ViewBookings extends Component 
{
  constructor(props) 
  {
    super(props)

    this.state = {
      customers: [],
     
      };  
      
  }
  
  componentDidMount(){
    DealerService.getGasBookings().then((res) => {
        this.setState({ customers: res.data});
    });
    }

    render()
    {
        
      return(
        <div>
<div className="position">
    <h1>All Customer Gas Bookings</h1>
</div>
{/*<div className="tableposition">*/}

{/*<table class="table table-striped " >*/}
<table cellpadding="0" cellspacing="0" border="0">
    <thead class="tbl-header">
    {/*<thead class="table-dark">*/}
        <tr>
            <th>Pancard</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Address</th>
            
            <th>City</th>
            <th>State</th>
            <th>Gas Booking Status</th>
            <th>Gas Delivery Status</th>
        </tr>
    </thead>
    
    <tbody class="tbl-content">
    {/*<tbody class="table-light">*/}
    {
         this.state.customers.map(
            customer => 
            <tr >
             {/*} <tr class="active-row"></tr>*/}
            <td>  {customer.custPancard} </td>
             <td> {customer.custName}    </td>
             <td> {customer.custContact} </td>
             <td> {customer.custAddress} </td>
             
             <td> {customer.custCity}    </td>  
             <td> {customer.custState}   </td> 
             <td class="text-color-green-bold"> {customer.custGasBookingStatus} </td>
             <td> {customer.custGasDeliveryStatus}</td>
             </tr>
    )
    }
    </tbody>
</table>

   <div>
    <a href="/changeGasbooking"><button type="button" class="btn btn-outline-danger">Pending Gas Bookings</button></a> 

    </div>
    </div>
   
      );
    }
}


export default ViewBookings;