import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css'
import DealerService from '../Service/DealerService';


class ChangeAccessoriesBooking extends Component 
{
  constructor(props) 
  {
    super(props)

    this.state = {
      customers: [],
      data:
      {
        custPancard: "",
        custAccessoriesBookingStatus: ""
      }
     
      };  
  
  }
  
  componentDidMount(){
    DealerService.getPendingAccessoriesBookings().then((res) => {
        this.setState({ customers: res.data});
    });
    }
  
approveCustomer(ename)
{
  var status="Approved"

 this.setState(prevState => ({
  data: {                   // object that we want to update
                          // keep all other key-value pairs
      custPancard: ename,      // update the value of specific key
      custAccessoriesBookingStatus:status
  }
 
}))
console.log(this.state.data);
DealerService.changeAccessoriesBookingStatus(this.state.data);
}

  disapproveCustomer(ename)
{

  var status="DisApproved"
  this.setState(prevState => ({
    data: {                   // object that we want to update
                            // keep all other key-value pairs
        custPancard: ename,      // update the value of specific key
        custAccessoriesBookingStatus:status
    }
   
  }))
  console.log(this.state.data);
  DealerService.changeAccessoriesBookingStatus(this.state.data);
  }

  stopSubmission=(e)=>
  {
         e.preventDefault()
  }

    render()
    {
        
      return( 
        <div>
<div className="position">
    <h1> Pending Booking Details</h1>
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
            <th>Accessories</th>
            <th>Accessories Booking Status</th>
            <th>Accessories Delivery Status</th>
            <th>Status</th>
        </tr>
    </thead>
    
    <tbody class="tbl-content">
    {
         this.state.customers.map(
            customer => 
            <tr>
              <td>{customer.custPancard}</td>
             <td>{customer.custFirstName} </td>
             <td>{customer.custLastName} </td>
             <td>{customer.custContact}</td>
             <td>{customer.custAddress}</td>
             <td>{customer.custBookingCity}</td>
             <td>{customer.custState}</td> 
             <td>{customer.custAccessories}</td>
             <td class="text-color-red-bold">{customer.custAccessoriesBookingStatus}</td>
             <td>{customer.custAccessoriesDeliveryStatus}</td>
             <td>
             <button type="button" class="button-green"  onSubmit={this.stopSubmission.bind(this)} onClick={ () => this.approveCustomer(customer.custPancard)}>Approve</button>
             <button type="button" class="button-red"  onSubmit={this.stopSubmission.bind(this)}  onClick={ () => this.disapproveCustomer(customer.custPancard)}>Disapprove</button>
              </td>
           
             </tr>
    )
    }
    </tbody>
</table>

<div>

</div>

        </div>
      );
    }
}


export default ChangeAccessoriesBooking;