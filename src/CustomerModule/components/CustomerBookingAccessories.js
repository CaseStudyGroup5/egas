import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

export default class CustomerBookingAccessories extends Component {


    constructor(props) {
        super(props)

        this.state = {
            custPancard: "",
            custFirstName: "",
            custLastName: "",
            custAddress:"",
            custBookingCity: "",
            custState: "",
            custContact: "",
            custAccessories:"",
        };
        this.changePancardNumber = this.changePancardNumber.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeContactNumber = this.changeContactNumber.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeBookingCity = this.changeBookingCity.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeAccessories = this.changeAccessories.bind(this);
    }
    changePancardNumber = (event) => {
        this.setState({
            custPancard: event.target.value
        })
    };
    changeFirstName = (event) => {
        this.setState({
            custFirstName: event.target.value
        })
    };
    changeLastName = (event) => {
        this.setState({
            custLastName: event.target.value
        })
    };
    changeContactNumber = (event) => {
        this.setState({
            custContact: event.target.value
        })
    };
    changeAddress = (event) =>{
        this.setState({
            custAddress: event.target.value
        })
    }
    changeBookingCity = (event) => {
        this.setState({
            custBookingCity: event.target.value
        })
    };
    changeState = (event) => {
        this.setState({
            custState: event.target.value
        })
    };
    changeAccessories = (event) => {
        this.setState({
            custAccessories: event.target.value
        })
    };
    validate = () => {
        let pancardError = "";
        let custFirstNameError = "";
        let custLastNameError = "";
        let contactError = "";
        let addressError = "";
        let bookingCityError ="";
        let stateError = "";
        let accessoriesError = "";

        if (!this.state.custPancard) {
            pancardError = "Pan number is required"
        }
        else if (!/([A-Z]){5}([0-9]){4}([A-Z]){1}/.test(this.state.custPancard)) {
            pancardError = "Pan number is invalid"

        }

        if (!this.state.custContact) {
            contactError = "Contact Number is required"
        }
        else if (!/[6-9]\d{9}/.test(this.state.custContact)) {
            contactError = "Contact number is invalid"
        }

        if (pancardError || custFirstNameError ||  custLastNameError || contactError || addressError || bookingCityError || stateError || accessoriesError) {
            this.setState({ pancardError, custFirstNameError, custLastNameError, contactError, addressError, bookingCityError, stateError, accessoriesError });
            return false;
        }
        return true;
    };
    customerAccessoriesBooking = (e) => {
        e.preventDefault()
        const isValid = this.validate();

        if (isValid) {
            console.log(this.state)
            if (this.state) {

                let customer = {
                    custPancard: this.state.custPancard, custFirstName: this.state.custFirstName, custLastName: this.state.custLastName ,custContact: this.state.custContact,
                     custAddress: this.state.custAddress, custBookingCity: this.state.custBookingCity, custState: this.state.custState, custAccessories: this.state.custAccessories
                };

                CustomerService.customerAccessoriesBooking(customer)
                alert(`Request for booking accessories with : ${this.state.custPancard} is successful.`);
            }
        }
    };

    render() {
        return (
            <center>
                <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                    <div class="card card0 border-0">

                            <div>

                            <div class="col-lg-7">
                                <div class="card2 card border-0 px-4 py-5">
                                    <label class="mb-1"><h3> Accessories Booking  </h3></label>

                                    <div class="row px-9 mb-9">

                                    </div>

                                    <div className="row px-3">

                                        <label class="mb-1"><h6 class="mb-0 text-sm"> PAN Card No : </h6></label>
                                        <input type="text"
                                            className="mb-2"
                                            placeholder="Enter PAN No. "
                                            value={this.state.custPancard}
                                            name="pancardNumber"
                                            onChange={this.changePancardNumber} />
                                        <p className="error">{this.state.pancardError}</p>

                                    </div>

                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> FirstName : </h6></label>
                                        <input type="text"
                                            className="mb-2"
                                            placeholder="Enter First Name "
                                            value={this.state.custFirstName}
                                            name="firstName"
                                            onChange={this.changeFirstName} />
                                        <p className="error">{this.state.custFirstNameError}</p>
                                    </div>
                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> LastName : </h6></label>
                                        <input type="text"
                                            className="mb-2"
                                            placeholder="Enter First Name "
                                            value={this.state.custLastName}
                                            name="firstName"
                                            onChange={this.changeLastName} />
                                        <p className="error">{this.state.custLastNameError}</p>
                                    </div>
                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> Contact No : </h6></label>
                                        <input type="text"
                                            className="mb-2"
                                            placeholder="Enter Contact Number"
                                            value={this.state.contactNumber}
                                            name="contactNumber"
                                            onChange={this.changeContactNumber} />
                                        <p className="error">{this.state.contactError}</p>
                                    </div>
                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm">Address :</h6></label>
                                        <input type="text"
                                            className="mb-2"
                                            placeholder="Enter address"
                                            value={this.state.custAddress}
                                            name="confirmPassword"
                                            onChange={this.changeAddress} />
                                        <p className="error">{this.state.addressError}</p>
                                    </div>
                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> City :</h6></label>
                                        <input type="text"
                                            className="mb-2"
                                            placeholder="Enter city"
                                            value={this.state.custBookingCity}
                                            name="confirmPassword"
                                            onChange={this.changeBookingCity} />
                                        <p className="error">{this.state.bookingCityError}</p>
                                    </div>
                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm">State :</h6></label>
                                        <input type="text"
                                            className="mb-2"
                                            placeholder="Enter state"
                                            value={this.state.custState}
                                            name="confirmPassword"
                                            onChange={this.changeState} />
                                        <p className="error">{this.state.stateError}</p>
                                    </div>
                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm">Accessories :</h6></label>
                                        <input type="text"
                                            className="mb-2"
                                            placeholder="Enter accessories"
                                            value={this.state.custAccessories}
                                            name="confirmPassword"
                                            onChange={this.changeAccessories} />
                                        <p className="error">{this.state.accessoriesError}</p>
                                    </div>
                                    <div>&nbsp;</div>
                                    <button class="btn btn-blue text-center"
                                        onClick={this.customerAccessoriesBooking}> Submit </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-blue py-4">
                        <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
}
