import React, { Component } from 'react'
import StaffMemberService from './StaffService/StaffMemberService';
import './viewGas.css'
class UpdateAccessoriesBooking extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            customers: [],
            data:
            {
              custPancard: "",
              custAccessoriesDeliveryStatus: ""
            }
            };

        }
        componentDidMount() {
            StaffMemberService.viewPendingAccessoriesDelivery().then((res) => {
              this.setState({ customers: res.data });
            });
          }
          deliverCustomer(ename) {
            var status = "Delivered"
        
            this.setState(prevState => ({
              data: {                   // object that we want to update
                // keep all other key-value pairs
                custPancard: ename,      // update the value of specific key
                custAccessoriesDeliveryStatus: status
              }
        
            }))
            console.log(this.state.data);
            StaffMemberService.changeAccessoriesDeliveryStatus(this.state.data);
          }
          stopSubmission = (e) => {
            e.preventDefault()
        }
        render(){
            return(
              <div>
              <div className="position">
                <h2>New Accessories Booking</h2>
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
            )
        }
}
export default UpdateAccessoriesBooking
