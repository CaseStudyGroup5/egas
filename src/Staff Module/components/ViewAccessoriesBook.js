import React, { Component } from 'react'
import StaffMemberService from '../StaffService/StaffMemberService';
import { Link } from 'react-router-dom'
import '../Css/viewGas.css'
export class ViewAccessoriesBook extends Component {

    constructor(props){
        super(props)
        this.state={
            customers: []
        };
    }
    componentDidMount() {
        StaffMemberService.viewAccessoriesBooking().then((res) => {
          this.setState({ customers: res.data });
        });
      }
      render(){
          return(
            <div>
            <div className="position">
              <h2>Customer Accessories Booking</h2>
            </div>
            <center>
            <div className="tableposition">
              <table class="table table-bordered " >
                <thead class="table-dark">
                  <tr>
                    <th>Pancard</th>
                    <th> First Name</th>
                    <th> Last Name</th>
                    <th> Address</th>
                    <th> State</th>
                    <th> City</th>
                    <th> Contact Number</th>
                    <th> Accessories</th>
                    <th> Booking Status</th>
                    <th > Delivery Status</th>
                  </tr>
                </thead>
                <tbody class="table-light">
                  {
                    this.state.customers.map(
                      customer =>
                        <tr class="first active-row">
                         <td>{customer.custPancard}</td>
                          <td> {customer.custFirstName} </td>
                          <td> {customer.custLastName}</td>
                          <td> {customer.custAddress}</td>
                          <td> {customer.custState}</td>
                          <td> {customer.custBookingCity}</td>
                          <td> {customer.custContact}</td>
                          <td> {customer.custAccessories}</td>
                          <td> {customer.custAccessoriesBookingStatus}</td>
                          <td> {customer.custAccessoriesDeliveryStatus}</td>
                        </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
            <div>
              <Link to="/newAccessories"><button type="button" class="btn btn-outline-danger">New Accessories Booking</button></Link>
    
            </div>
            </center>
          </div>
          )
      }
}
export default ViewAccessoriesBook