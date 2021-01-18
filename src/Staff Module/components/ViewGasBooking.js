import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StaffMemberService from '../StaffService/StaffMemberService';
import '../Css/viewGas.css'
export class ViewGasBooking extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          customers: []
    
        };
    
      }
      componentDidMount() {
        StaffMemberService.viewGasBooking().then((res) => {
          this.setState({ customers: res.data });
        });
      }

      render(){
          return(
            <div>
        <div className="position">
          <h2>Customer Gas Booking</h2>
        </div>
        <center>
        <div className="tableposition">
          <table class="table table-bordered" >
            <thead class="table-dark">
              <tr>
                <th>Pancard</th>
                <th> Name</th>
                <th> Address</th>
                <th> City</th>
                <th>State</th>
                <th>Contact Number</th>
                <th> Accessories</th>
                <th > GasBooking Status</th>
                <th> GasDelivery Status</th>
              </tr>
            </thead>
            <tbody class="table-light">
              {
                this.state.customers.map(
                  customer =>
                    <tr class="first active-row">
                     <td>{customer.custPancard}</td>
                      <td> {customer.custName} </td>
                      <td> {customer.custAddress}</td>
                      <td> {customer.custCity}</td>
                      <td> {customer.custState}</td>
                      <td> {customer.custContact}</td>
                      <td> {customer.accessory}</td>
                      <td> {customer.custGasBookingStatus}</td>
                      <td> {customer.custGasDeliveryStatus}</td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
        <div>
          <Link to="/newGas"><button type="button" class="btn btn-outline-danger">New Gas Booking</button></Link>

        </div>
        </center>
      </div>
    );
  }
}
export default ViewGasBooking