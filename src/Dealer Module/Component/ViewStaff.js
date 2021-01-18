import React, { Component } from 'react';
//import '../Css/connections.css'
import DealerService from '../Service/DealerService';
import '../Css/table.css'

class ViewStaff extends Component 
{
  constructor(props) 
  {
    super(props)

    this.state = {
      staff: [],
     
      };  
      
  }
  
    componentDidMount(){
    DealerService.getAllDeliveryStaff().then((res) => {
        this.setState({ staff: res.data});
    });
    }

    render()
    {
        
      return(
        <div>
<div className="position">
    <h1>Staff Details</h1>
</div>

<table cellpadding="0" cellspacing="0" border="0">
    <thead class="tbl-header">
        <tr>
            <th>Pancard</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>City</th>
            <th>Staff Request Status</th>
            
        </tr>
    </thead>
   
    <tbody class="tbl-content">
    {
         this.state.staff.map(
            staff => 
            <tr>
            <td>  {staff.pancardNumber} </td>
             <td> {staff.fname} { } {staff.lname}</td>
             <td> {staff.contact} </td>
             <td> {staff.email} </td>
             <td> {staff.city}  </td>  
             <td class="text-color-green-bold"> {staff.status} </td>
             
             </tr>
    )
    }
    </tbody>
</table>

<div>
<a href="/changestaff"><button type="button" class="btn btn-outline-danger">Pending Staff Status</button></a> 

</div>

        </div>
      );
    }
}


export default ViewStaff;