import React, { Component } from 'react';
import AdminService from '../services/AdminService'

class AccessoriesBookingList extends Component {
    constructor(props){
        super(props)
        this.state={
            customers: []
        }
    }
    componentDidMount(){
        AdminService.getCustomerAccessoriesBooking().then((res) => {
         this.setState({customers: res.data});
        } );
        console.log(this.state.customers);
    }
    render() {
        return (
            <div style={{marginLeft:'4%',marginRight:'10%', marginTop:'2%'}}>
                <h2 className="text-center">Accessories List</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                    
                   <thead>
                       <tr>
                            <th>custPancard</th>
                            <th>custFirstName</th>
                            <th>custLastName</th>
                            <th>custState</th>
                            <th>custBookingCity</th>
                            <th>custAddress</th>
                            <th>custAccessories</th>
                            <th>custAccessoriesBookingStatus</th>
                            <th>custAccessoriesDeliveryStatus </th>
                       </tr>

                   </thead>
                   <tbody>
                       {
                           this.state.customers.map(
                            customers =>
                            <tr key={customers.customerId}>
                                  <td>{customers.custPancard}</td>
                                   <td>{customers.custFirstName}</td>
                                   <td>{customers.custLastName}</td>
                                   <td>{customers.custState}</td>
                                   <td>{customers.custBookingCity}</td>
                                   <td>{customers.custAddress}</td>
                                   <td>{customers.custAccessories}</td>
                                   <td>{customers.custAccessoriesBookingStatus}</td>
                                   <td>{customers.custAccessoriesDeliveryStatus}</td>
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


export default AccessoriesBookingList;