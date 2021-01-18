import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'

class CustomerUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname:'',
            lname:'',
            city: '',
            contactNumber: '',
            email: '',
            password: '',
            answer: ""
        }
        this.changePancardHandler = this.changePancardHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }
    updateCustomer = (e) => {
        e.preventDefault();
        let customer = { fname: this.state.fname, lname: this.state.lname, city: this.state.city, contactNumber: this.state.contactNumber, email: this.state.email, password: this.state.password };
        if (customer.contact === "") {
            alert("Please Enter contact number")
        } else if (!/[6-9]{1}\d{9}/.test(customer.contactNumber)) {
            alert("Please enter 10 digit mobile number")
        }
        else if (!/\S+@\S+\.\S+/.test(customer.email)) {
            alert("Please enter valid gmail id ")
        }
        else if (customer.password.length < 6) {
            alert("Enter Strong Password")
        }else if (customer.fname === ""){
            alert("Please Enter First Name")
        }
        else if (customer.lname === ""){
            alert("Please Enter Last Name")
        }
        else {
            CustomerService.updateCustomer(customer)
                .then((response) => {
                    this.setState({ answer: response.data })
                    alert(response.data);
                });
            console.log(this.state.answer);
        }
    }
    changeFirstNameHandler = (e) => {
        this.setState({ fname: e.target.value });
    }
    changeLastNameHandler = (e) => {
        this.setState({ lname: e.target.value });
    }
    changePancardHandler = (e) => {
        this.setState({ pancardNumber: e.target.value });
    }
    changeCityHandler = (e) => {
        this.setState({ city: e.target.value });
    }
    changePasswordHandler = (e) => {
        this.setState({ password: e.target.value });
    }
    changeEmailHandler = (e) => {
        this.setState({ email: e.target.value });
    }
    changeContactHandler = (e) => {
        this.setState({ contactNumber: e.target.value });
    }

    render() {
        return (
            <center>
                <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-6 mx-auto">
                    <div class="card card0 border-0">
                        <div >
                            <div class="col-lg-7">
                                <div class="card2 card border-0 px-4 py-5">
                                    <label><h3> Update Customer Details </h3></label>
                                    <div class="row px-9 mb-9">
                                    </div>
                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> FirstName : </h6></label>
                                        <input value={this.state.fname} name="email" className="row px-3" placeholder="First Name" onChange={this.changeFirstNameHandler} />
                                        {/* <div style={{color:"red"}}>{this.state.emailError}</div> */}
                                    </div>
                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> LastName : </h6></label>
                                        <input value={this.state.lname} name="email" className="row px-3" placeholder="Last Name" onChange={this.changeLastNameHandler} />
                                        {/* <div style={{color:"red"}}>{this.state.emailError}</div> */}
                                    </div>

                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> Email Id: </h6></label>
                                        <input value={this.state.email} name="email" className="row px-3" placeholder="Email Address" onChange={this.changeEmailHandler} />
                                        {/* <div style={{color:"red"}}>{this.state.emailError}</div> */}
                                    </div>

                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> Contact No. </h6></label>
                                        <input value={this.state.contactNumber} name="contactNumber" className="row px-3" placeholder="Enter Contact Number" onChange={this.changeContactHandler} />
                                        {/* <div style={{color:"red"}}>{this.state.contactError}</div> */}
                                    </div>

                                    <div className="row px-3">
                                        <label class="mb-1"><h6 class="mb-0 text-sm"> Password </h6></label>
                                        <input value={this.state.password} name="password" className="row px-3" placeholder="Enter Password" onChange={this.changePasswordHandler} />
                                        {/* <div style={{color:"red"}}>{this.state.passwordError}</div> */}
                                    </div>

                                    <button class="btn btn-blue text-center" onClick={this.updateCustomer}> Update </button>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="bg-blue py-1">
                        <div class="row px-8"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                        </div>

                    </div>
                </div>
            </center>
        )
    }
}
export default CustomerUpdate