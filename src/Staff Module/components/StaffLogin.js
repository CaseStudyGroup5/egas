import React, { Component } from 'react'
import '../Css/regstyle.css'
import LoginImage from '../Images/Login Image.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
export class StaffLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pancardNumber: "",
            password: "",
            answer: "",
            showName: false
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let that = this
        axios.get('http://localhost:8080/staffmembers/stafflogin/' + this.state.pancardNumber + '/' + this.state.password)
            .then(function (response) {
                if (response.status === 200) {
                    alert(" *** LOGIN SUCCESSFUL ***")
                    alert("ENJOY THE SERVICES :)")
                    that.props.history.push('/staffView');
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exists")
                }
            }).catch(function (error) {
                console.log(error);
                alert("Pancard number or Password is invalid");
            });
    }

    render() {
        return (

            <center>
                <marquee><h6> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; Note : Hello Staff Delivery :) You will not be able to logged in until your status gets approved by the dealer</h6></marquee>
                <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-6 mx-auto">
                    <div class="card card0 border-0">
                        <div class="row d-flex">
                            <div class="col-lg-6">
                                <div class="card1 pb-5">
                                    <div></div><br /><br />
                                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"><img src={LoginImage} class="image" alt="LoginImage"></img></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <form method="POST" onSubmit={this.handleSubmit}>
                                    <div class="card2 card border-0 px-4 py-5">
                                        <label><h5> StaffDelivery Login </h5></label>
                                        <div class="row px-3"><label class="mb-1">
                                            <h5 class="mb-0 text-sm">Pancard Number</h5>
                                        </label><input value={this.state.pancardNumber} class="mb-4" type="text" name="pancardNumber" placeholder="Enter a valid pancard number" onChange={this.onChange}></input>
                                        </div>
                                        <div class="row px-3"><label class="mb-1">
                                            <h5 class="mb-0 text-sm">Password</h5>
                                        </label><input value={this.state.password} class="mb-4" type="password" name="password" placeholder="Enter password" onChange={this.onChange}></input>
                                        </div>
                                        <div></div>
                                        <div class="row mb-6 px-3"> <button type="submit" class="btn btn-blue text-center">Login</button></div>
                                        <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <Link class="text-danger " to="/staffregister">Register</Link></small> </div>
                                    </div>
                                </form>
                                <div></div>
                                <br />
                            </div>
                        </div>
                        <div class="bg-blue py-1">
                            <div class="row px-8"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </center>

        )
    }
}
export default StaffLogin