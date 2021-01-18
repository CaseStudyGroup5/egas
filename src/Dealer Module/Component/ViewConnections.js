import React, { Component } from 'react';
import '../Css/table.css'
import DealerService from '../Service/DealerService';


class ViewConnections extends Component 
{
  constructor(props) 
  {
    super(props)

    this.state = {
      customers: [],
     
      };  
      
  }
  
  componentDidMount(){
    DealerService.getConnections().then((res) => {
        this.setState({ customers: res.data});
    });
    }

    render()
    {
        
      return(
        <div>
<div className="position">
    <h1>All Customer Details</h1>
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
            <th>Connection Status</th>
        </tr>
    </thead>

    <tbody class="tbl-content">
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
             <td class="text-color-green-bold"> {customer.custConnectionStatus}</td>
             </tr>
    )
    }
    </tbody>
</table>

   

    

<div>
  
<a href="/changeconnection"><button type="button" class="btn btn-danger">New Connections</button></a> 

</div>

        </div>
      );
    }
}


export default ViewConnections;