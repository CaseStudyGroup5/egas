import React, { Component } from 'react';
import AdminService from '../services/AdminService'

class GasBookingListComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
             gas: []
        }
    }
    componentDidMount(){
        AdminService.getCustomerGasBooking().then((res) => {
         this.setState({gas: res.data});
        } );
        console.log(this.state.gas);
    }
    render() {
        return (
                <div style={{marginLeft:'4%',marginRight:'11%', marginTop:'2%'}}>
                <h2 className="text-center">GasBooking List</h2>
                 <div className = "row"></div>
                    <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> custName</th>
                            <th>custPancard</th>
                            <th>custAddress</th>
                            <th>custCity</th>
                            <th>custState</th>
                            <th>custContact</th>
                            <th>accessory</th>
                            <th>custGasBookingStatus</th>
                            <th>custGasDeliveryStatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.gas.map(
                                gas =>
                                <tr key = {gas.custGasBookingId}>
                                   <td>{gas.custName}</td>
                                   <td>{gas.custPancard}</td>
                                   <td>{gas.custAddress}</td>
                                   <td>{gas.custCity}</td>
                                   <td>{gas.custState}</td>
                                   <td>{gas.custContact}</td>
                                   <td>{gas.accessory}</td>
                                   <td>{gas.custGasBookingStatus}</td>
                                   <td>{gas.custGasDeliveryStatus}</td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
            </div>
        )
    }
}

export default GasBookingListComponent;