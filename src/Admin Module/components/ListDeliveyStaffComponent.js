import React, { Component } from 'react';
import AdminService from '../services/AdminService'

class ListDeliveryStaffComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                staff: [] 
        }
    
    }
    componentDidMount(){
        AdminService.getDeliveryStaff().then((res) => {
           this.setState({ staff: res.data});
        });
        console.log(this.state.staff);
    }
   
    render() {
        return (
            <div style={{marginLeft:'3%',marginRight:'3%', marginTop:'2%'}}>
            <h2 className="text-center">Delivery List</h2> 
                 <div className ="row">
                     <table className = "table table-stripped table-bordered">

                         <thead>
                             <tr >
                                
                                <th>Staff pancardNumber</th> 
                                <th>Staff fname</th> 
                                <th>Staff lname</th>
                                <th>Staff gender</th> 
                                <th>Staff city</th> 
                                <th>Staff email</th> 
                                <th>Staff contact</th> 
                                <th>staff status</th>
                             </tr>
                         </thead>


                         <tbody>
                             {
                                 this.state.staff.map(
                                     staff =>
                                       <tr key= {staff.staffId}>
                                           
                                           <td>{staff.pancardNumber}</td>
                                           <td>{staff.fname}</td>
                                           <td>{staff.lname}</td>
                                           <td>{staff.gender}</td>
                                           <td>{staff.city}</td>
                                           <td>{staff.email}</td>
                                           <td>{staff.contact}</td>
                                           <td>{staff.status}</td>
                                       </tr>
                                    )

                                 }
                             
                         </tbody>
                     </table>
                </div>
            </div>
        )
    }
}

export default ListDeliveryStaffComponent;