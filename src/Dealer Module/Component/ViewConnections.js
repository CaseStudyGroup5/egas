import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
//import './menustyle.css'
import '../Css/connections.css'
import DealerService from '../Service/DealerService';


class ViewConnections extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customers: [],

    };

  }

  componentDidMount() {
    DealerService.getConnections().then((res) => {
      this.setState({ customers: res.data });
    });
  }

  render() {

    return (
      <div>
        <div className="position">
          <h1>All Customer Details</h1>
        </div>
        <div className="tableposition">
          <table class="table table-striped " >
            <thead class="table-dark">
              <tr>
                <th> Pancard</th>
                <th> First Name</th>
                <th> Last Name</th>
                <th> State</th>
                <th> City</th>
                <th> Address</th>
                <th>Contact Number</th>
                <th>Connection Status</th>
              </tr>
            </thead>
            <tbody class="table-light">
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
                      <td> {customer.custConnectionStatus}</td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
        <div>
          <a href="/changeconnection"><button type="button" class="btn btn-outline-danger">New Connections</button></a>

        </div>

      </div>
    );
  }
}


export default ViewConnections;