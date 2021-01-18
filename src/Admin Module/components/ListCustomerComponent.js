import React, { Component } from 'react';
import AdminService from '../services/AdminService'

class ListCustomerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                customers: [] 
        }
    
    }
    componentDidMount(){
        AdminService.getCustomers().then((res) => {
           this.setState({ customers: res.data});
        });
        console.log(this.state.customers);
    }
   
    render() {
        return (
            <div style={{marginLeft:'3%',marginRight:'3%', marginTop:'2%'}}>
            <h2 className="text-center">Customer List</h2> 
                 <div className ="row">
                     <table className = "table table-stripped table-bordered">

                         <thead>
                             <tr >
                                
                                <th>Customer fname</th> 
                                <th>Customer lname</th> 
                                <th>customer pancardNumber</th>
                                <th>Customer gender</th> 
                                <th>Customer email</th> 
                                <th>Customer contactNumber</th> 
                             </tr>
                         </thead>


                         <tbody>
                             {
                                 this.state.customers.map(
                                     customer =>
                                       <tr key= {customer.customerId}>
                                           
                                           <td>{customer.fname}</td>
                                           <td>{customer.lname}</td>
                                           <td>{customer.pancardNumber}</td>
                                           <td>{customer.gender}</td>
                                           <td>{customer.email}</td>
                                           <td>{customer.contactNumber}</td>
                                           
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

export default ListCustomerComponent;