import React, { Component } from 'react'
import LoginImage from './Login Image.png'
import AdminService from '../services/AdminService';
import axios from 'axios';

export class AdminLogin extends Component {


    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            answer: "",
            showName: false
        }

    }

    changeuserNameHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    changePasswordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }
        loginSubmit=(e)=>{
            e.preventDefault()
            let answer={
                username:this.state.username,
                password:this.state.password
            }
           axios.post("http://localhost:8080/admin/login",answer)
           .then(
               res => {
                   if(res.data==="....Login Succesful..."  && res.status===200){
                    console.log(res)
                    alert('Login successfully')
                    this.props.history.push(`/adminmenu`)
                   }else {
                    alert('Login failed')
                    }
                   }
           )
           .catch(
               error => {
                   alert('Login Failed')
                   console.log(error)}
           ) 
           
        }
    

    render() {
                return( 
            <div>   
            <center>
                <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-6 mx-auto">
                    <div className="card card0 border-0">
                        <div className="row d-flex">
                            <div className="col-lg-6">
                                <div className="card1 pb-5">
                                    <div></div>
                                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"><img src={LoginImage} className="image"></img></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card2 card border-0 px-4 py-5">
                                    <label><h5> Admin Login </h5></label>
                                    <div className="row px-3"><label className="mb-1">
                                        <h5 className="mb-0 text-sm">UserName</h5>
                                    </label><input className="mb-4" type="text" value={this.state.username} name="username" placeholder="Enter a valid username" onChange={this.changeuserNameHandler.bind(this)}></input>
                                    </div>
                                    <div className="row px-3"><label className="mb-1">
                                        <h5 className="mb-0 text-sm">Password</h5>
                                    </label><input className="mb-4" type="password" value={this.state.password} name="password" placeholder="Enter password" onChange={this.changePasswordHandler.bind(this)}></input>
                                    </div>
                                    <div className="row px-3 mb-3">
                                        <a href="/updatePassword" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                                    </div>
                                    <div className="row mb-6 px-3"> <a href="/menu"><button href="" type="submit" onClick={this.loginSubmit} className="btn btn-blue text-center">Login</button> </a></div>

                                </div>
                            </div>
                        </div>
                        <div className="bg-blue py-1">
                            <div className="row px-8"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
            </div > )
    }

}
export default AdminLogin