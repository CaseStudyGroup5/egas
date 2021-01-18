import React, { Component } from 'react'
//import './style.css'
import Service from '../services/AdminService';
export class ListDealerComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            dealers: [],
            data:
            {
                pancardNumber: "",
                dealerStatus: ""
            }
        };

    }

    componentDidMount() {
        Service.viewDealers().then((res) => {
            console.log('ressssss', res)
            this.setState({ dealers: res.data });
        });
    }
    approveDealer(ename) {
        var status = "Approved"//Approved

        // this.setState(prevState => ({
        //     data: {                   // object that we want to update
        //         // keep all other key-value pairs
        //         pancardNumber: ename,      // update the value of specific key
        //         dealerStatus: status
        //     }

        // }))
        console.log(this.state.data);
        let tempData = this.state.data;
        tempData.pancardNumber = ename;
        tempData.dealerStatus = status;
        this.setState({data: tempData})
        Service.updateDealerStatus(this.state.data);
        

    }
    stopSubmission = (e) => {
        e.preventDefault()
    }
    disapproveDealer(ename) {
        var status = "Disapproved"
        let tempData = this.state.data;
        tempData.pancardNumber = ename;
        tempData.dealerStatus = status;
        this.setState({data: tempData})
        Service.updateDealerStatus(this.state.data);
        setTimeout(()=>{
            console.log('stateData', this.state.data)

        }, 3000)
    }


    render() {
        return (
            <div style={{ margin: '2%' }}>
                <h2 className="text-center">Dealer List</h2>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>pancardNumber</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>gender</th>
                            <th>email</th>
                            <th>contactNumber</th>
                            <th>city</th>
                            <th>state</th>
                            <th>Dealer Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dealers.map(
                                dealer =>
                                    <tr>
                                        <td>{dealer.pancardNumber}</td>
                                        <td>{dealer.firstName}</td>
                                        <td>{dealer.lastName}</td>
                                        <td>{dealer.gender}</td>
                                        <td>{dealer.email}</td>
                                        <td>{dealer.contactNumber}</td>
                                        <td>{dealer.city}</td>
                                        <td>{dealer.state}</td>
                                        <td>
                                            <button type="button" class="btn btn-success " onSubmit={this.stopSubmission.bind(this)} onClick={() => this.approveDealer(dealer.pancardNumber)} >Approve</button>
                                            <span className="spacing"><button type="button" class="btn btn-danger" onSubmit={this.stopSubmission.bind(this)} onClick={() => this.disapproveDealer(dealer.pancardNumber)} >DisApprove</button></span>
                                        </td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}
export default ListDealerComponent;