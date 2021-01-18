import React, { Component } from 'react'
import StaffMemberService from '../StaffService/StaffMemberService';
import '../Css/viewGas.css'
class UpdateGasBooking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      data:
      {
        custPancard: "",
        custGasDeliveryStatus: ""
      }
    };

  }
  componentDidMount() {
    StaffMemberService.viewPendingGasDelivery().then((res) => {
      this.setState({ customers: res.data });
    });
  }
  deliverCustomer(ename) {
    var status = "Delivered"//Approved

    this.setState(prevState => ({
      data: {                   // object that we want to update
        // keep all other key-value pairs
        custPancard: ename,      // update the value of specific key
        custGasDeliveryStatus: status
      }

    }))
    console.log(this.state.data);
    StaffMemberService.changeDeliveryStatus(this.state.data);
  }
  stopSubmission = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <div className="position">
          <h2>New Gas Booking</h2>
        </div>
        <center>
          <div className="tableposition">
            <table class="table table-striped " >
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
                        <td>
                          <button type="button" class="btn btn-success " onSubmit={this.stopSubmission.bind(this)} onClick={() => this.deliverCustomer(customer.custPancard)}>Deliver</button>
                        </td>
                      </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </center>
      </div>
    );
  }
}
export default UpdateGasBooking