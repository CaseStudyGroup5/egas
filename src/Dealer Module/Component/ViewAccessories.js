import React, { Component } from 'react';
//import '../Css/connections.css'
import DealerService from '../Service/DealerService';


class ViewAccessories extends Component 
{
  constructor(props) 
  {
    super(props)

    this.state = {
      customers: [],
     
      };  
      
  }
  
  componentDidMount(){
    DealerService.getAccessoriesBookings().then((res) => {
        this.setState({ customers: res.data});
    });
    }

    render()
    {
        
      return(
        <div>
<div className="position">
<h1>All Customer Accessories Bookings</h1>
</div>

<table cellpadding="0" cellspacing="0" border="0">
    <thead class="tbl-header">
        <tr>
            <th>Pancard</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Accessory</th>
            <th>Booking Status</th>
            <th>Delivery Status</th>
        </tr>
    </thead>
    

    <tbody class="tbl-content">
    {
         this.state.customers.map(
            customer => 
            <tr class="active-row">
            <td>{customer.custPancard}</td>
             <td> {customer.custFirstName} </td>
             <td> {customer.custLastName} </td>
             <td> {customer.custContact}</td>
             <td> {customer.custAddress}</td>
             <td> {customer.custBookingCity}</td>
             <td> {customer.custState}</td> 
             <td> {customer.custAccessories}</td>
             <td class="text-color-green-bold"> {customer.custAccessoriesBookingStatus}</td>
             <td> {customer.custAccessoriesDeliveryStatus}</td>
             </tr>
    )
    }
    </tbody>
</table>

<div>
<a href="/changeaccessories"><button type="button" class="btn btn-outline-danger">Pending Bookings</button></a> 

</div>

        </div>
      );
    }
}


export default ViewAccessories;