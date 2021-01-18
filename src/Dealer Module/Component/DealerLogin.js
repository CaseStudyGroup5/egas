import React, { Component } from 'react'
import LoginImage from '../Images/Login Image.png'
import { Link} from 'react-router-dom'
import axios from 'axios';

export class DealerLogin extends Component {


    constructor(props) {
        super(props);
    
        this.state = {
          pancardNumber:"",  
          password: "",
          answer:"",
          showName: false
          
        };
        this.loginSubmit=this.loginSubmit.bind(this);
    
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

      loginSubmit = (e) => 
      {
       e.preventDefault();

        axios.get('http://localhost:8080/dealers/login/'+this.state.pancardNumber+'/'+this.state.password)
        .then(function(response){
            let that=this;
            if(response.status === 200){
                window.open("/menu1","_self");  
            }
            else{
            console.log("Username does not exists");
                    alert("Username does not exists")
            }}).catch(function(error){
            alert("Pancard number or Password is invalid");
                    console.log(error);
                   
                });
        }

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
                                <form method="POST" onSubmit={this.loginSubmit}>
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
                                       
                                    </div>
                                    <div class="row mb-6 px-3"><button type="submit" class="mybutton btn btn-blue text-center">Login</button></div>
                                    <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <Link class="text-danger " to="/dealerregister">Register</Link></small> </div>
                                </div>
                                </form>
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