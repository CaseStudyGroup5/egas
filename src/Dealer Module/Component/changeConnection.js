import React, { Component } from 'react';
import '../Css/table.css'
import DealerService from '../Service/DealerService';


class changeConnection extends Component 
{
  constructor(props) 
  {
    super(props)

    this.state = {
      customers: [],
      data:
      {
        custPancard: "",
        custConnectionStatus: ""
      }
     
      };  
  
  }
  
  componentDidMount(){
    DealerService.getPendingConnections().then((res) => {
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
      custConnectionStatus:status
  }
 
}))
console.log(this.state.data);
DealerService.changeConnectionStatus(this.state.data);
}

  disapproveCustomer(ename)
{

  var status="DisApproved"
  this.setState(prevState => ({
    data: {                   // object that we want to update
                            // keep all other key-value pairs
        custPancard: ename,      // update the value of specific key
        custConnectionStatus:status
    }
   
  }))
  console.log(this.state.data);
  DealerService.changeConnectionStatus(this.state.data);
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
    <h1>New Connections Details</h1>
</div>


<table cellpadding="0" cellspacing="0" border="1" >
    <thead class="tbl-header">
        <tr>
            <th>Pancard</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>State</th>
            <th>City</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Action</th>
        </tr>
        </thead>
        
      
        
   
    <tbody class="tbl-content">
    {
         this.state.customers.map(
            customer => 
            <tr class="active-row">
            <td>  {customer.custPancard}</td>
             <td> {customer.custFirstName} </td>   
             <td> {customer.custLastName}</td>
             <td> {customer.custState}</td>
             <td> {customer.custCity}</td>
             <td> {customer.custAddress}</td>
             <td> {customer.custContact}</td>
             <td>
             <button type="button" class="button-green" onSubmit={this.stopSubmission.bind(this)} onClick={ () => this.approveCustomer(customer.custPancard)}>Approve</button>
             <button type="button" class="button-red" onSubmit={this.stopSubmission.bind(this)}  onClick={ () => this.disapproveCustomer(customer.custPancard)}>Disapprove</button>
             
              </td>
           
             </tr>
    )
    }
    </tbody>
    </table>




        </div>
      );
    }
}


export default changeConnection;