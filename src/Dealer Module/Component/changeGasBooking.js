import React, { Component } from 'react';
import DealerService from '../Service/DealerService';
import '../Css/table.css'

class ChangeGasBooking extends Component 
{
  constructor(props) 
  {
    super(props)

    this.state = {
      customers: [],
      data:
      {
        custPancard: "",
        custGasBookingStatus: ""
      }
     
      };  
  
  }
  
  componentDidMount(){
    DealerService.getPendingGasBookings().then((res) => {
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
      custGasBookingStatus:status
  }
 
}))
console.log(this.state.data);
DealerService.changeGasBookingStatus(this.state.data);
}

  disapproveCustomer(ename)
{

  var status="DisApproved"
  this.setState(prevState => ({
    data: {                   // object that we want to update
                            // keep all other key-value pairs
        custPancard: ename,      // update the value of specific key
        custGasBookingStatus:status
    }
   
  }))
  console.log(this.state.data);
  DealerService.changeGasBookingStatus(this.state.data);
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
    <h1>Pending Gas Booking Details</h1>
</div>

<table cellpadding="0" cellspacing="0" border="0">
    <thead class="tbl-header">
        <tr>
            <th>Pancard</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>Gas Booking Status</th>
            <th>Gas Delivery Status</th>
            <th>Status</th>
        </tr>
    </thead>
    
    <tbody class="tbl-content">
    {
         this.state.customers.map(
            customer => 
            <tr class="active-row">
             <td>{customer.custPancard}</td>
             <td>{customer.custName}</td>
             <td>{customer.custContact}</td>
             <td>{customer.custAddress}</td>
             <td>{customer.custState}</td>
             <td>{customer.custCity}</td>  
             <td class="text-color-red-bold">{customer.custGasBookingStatus}</td>
             <td>{customer.custGasDeliveryStatus}</td>
             <td>
             <button type="button" class="button-green" onSubmit={this.stopSubmission.bind(this)} onClick={ () => this.approveCustomer(customer.custPancard)}>Approve</button>
             <button type="button" class="button-red" onSubmit={this.stopSubmission.bind(this)}  onClick={ () => this.disapproveCustomer(customer.custPancard)}>Disapprove</button>
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


export default ChangeGasBooking;