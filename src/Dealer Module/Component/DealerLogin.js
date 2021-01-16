import React, { Component } from 'react'
import LoginImage from './Login Image.png'
import { history } from 'react-router-dom'
import DealerService from '../Service/DealerService';

export class DealerLogin extends Component {


    constructor(props) {
        super(props);
    
        this.state = {
          pancardNumber:"",  
          password: "",
          answer:"",
          showName: false
        };
    
      }
    
      changePancardHandler=(e)=>
      {
          this.setState({
            pancardNumber:e.target.value
          })
      }
      changePasswordHandler=(e)=>
      {
          this.setState({
            password:e.target.value
          })
      }
      loginSubmit = (e) => {
        //e.preventDefault();
    
        let login = {pancardNumber: this.state.pancardNumber,password: this.state.password};
        console.log('login => ' + JSON.stringify(login));
        DealerService.login(login)
        .then((response)=>{this.setState({answer:response.data})});
        console.log('login => ' + JSON.stringify(login));
        if(this.state.answer === "Login Successfull"){
            alert("LOGIN SUCCESSFUL :)")
           // e.href='//viewConnections'
           // this.props.history.push('/viewConnections');
        }
    }
    /*{
        e.preventDefault();
        let login = {pancardNumber: this.state.pancardNumber,password: this.state.password};
        console.log('login => ' + JSON.stringify(login));
        DealerService.login(login)
        .then(function (response) {
            if(response.status == 200){
             this.props.history.push('/viewConnections');   
             //e.href="/viewConnections";
            console.log("Login successfull");
            }
            else{
            console.log("Username does not exists");
            alert("Username does not exist");
            }
            }
            )
            .catch(function (error) {
            console.log(error);
            alert("Username or Password is Invalid :(");
           
            });
            }
           */
        

    render() {
        return (
            <center>
                <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-6 mx-auto">
                    <div class="card card0 border-0">
                        <div class="row d-flex">
                            <div class="col-lg-6">
                                <div class="card1 pb-5">
                                    <div></div>
                                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"><img src={LoginImage} class="image"></img></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card2 card border-0 px-4 py-5">
                                    <label><h5> Dealer Login </h5></label>
                                    <div class="row px-3"><label class="mb-1">
                                        <h5 class="mb-0 text-sm">Pancard Number</h5>
                                    </label><input class="mb-4" type="text" name="pancard" placeholder="Enter a valid pancard number"onChange={this.changePancardHandler.bind(this)}></input>
                                    </div>
                                    <div class="row px-3"><label class="mb-1">
                                        <h5 class="mb-0 text-sm">Password</h5>
                                    </label><input class="mb-4" type="password" name="password" placeholder="Enter password" onChange={this.changePasswordHandler.bind(this)}></input>
                                    </div>
                                    <div class="row px-3 mb-3">
                                        <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                                    </div>
                                    <div class="row mb-6 px-3"> <a href="/menu"><button href=""type="submit" onClick={this.loginSubmit} class="btn btn-blue text-center">Login</button> </a></div>
                                    <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <a class="text-danger " href="/dealerregister">Register</a></small> </div>
                                </div>
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
export default DealerLogin