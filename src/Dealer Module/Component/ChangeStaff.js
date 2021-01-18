import React, { Component } from 'react';
import DealerService from '../Service/DealerService';
//import '../Css/connections.css'
import '../Css/table.css';

class ChangeStaff extends Component 
{
  constructor(props) 
  {
    super(props)

    this.state = {
      staff: [],
      data:
      {
        pancardNumber: "",
        status: ""
      }
     
      };  
  
  }
  
  componentDidMount(){
    DealerService.getPendingStaff().then((res) => {
        this.setState({ staff: res.data});
    });
    }
  
approveStaff(ename)
{
  var status="Approved"

 this.setState(prevState => ({
  data: {                   // object that we want to update
                          // keep all other key-value pairs
      pancardNumber: ename,      // update the value of specific key
      status:status
  }
 
}))
console.log(this.state.data);
DealerService.changeStaffStatus(this.state.data);
}

  disapproveStaff(ename)
{

  var status="DisApproved"
  this.setState(prevState => ({
    data: {                   // object that we want to update
                            // keep all other key-value pairs
        pancardNumber: ename,      // update the value of specific key
        status:status
    }
   
  }))
  console.log(this.state.data);
  DealerService.changeStaffStatus(this.state.data);
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
    <h1> Pending Staff Details</h1>
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
            <th>Status</th>
        </tr>
    </thead>
   
    <tbody class="tbl-content">
    {
         this.state.staff.map(
            staff => 
            <tr class="active-row">
              <td>  {staff.pancardNumber} </td>
             <td> {staff.fname} { } {staff.lname}</td>
             <td> {staff.contact} </td>
             <td> {staff.email} </td>
             <td> {staff.city}  </td>  
             <td class="text-color-red-bold"> {staff.status} </td>
             <td>
             <button type="button" class="button-green" onSubmit={this.stopSubmission.bind(this)} onClick={ () => this.approveStaff(staff.pancardNumber)}>Approve</button>
             <button type="button" class="button-red" onSubmit={this.stopSubmission.bind(this)}  onClick={ () => this.disapproveStaff(staff.pancardNumber)}>Disapprove</button>
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


export default ChangeStaff;