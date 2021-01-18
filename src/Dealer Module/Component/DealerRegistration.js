import React, { Component } from 'react'
import '../Css/registration_style.css'
import 'bootstrap/dist/css/bootstrap.css'
import DealerService from '../Service/DealerService'
import { Link } from 'react-router-dom'
export class DealerRegistration extends Component{


    constructor(props){
        super(props)
    
    this.state={
        pancardNumber:"",
        firstName:"",
        lastName:"",
        gender:"",
        email:"",
        contactNumber:"",
        city:"",
        state:"",
        password:"",
        confirmPassword:""
    };
    this.changePancardNumber=this.changePancardNumber.bind(this);
    this.changeFirstName=this.changeFirstName.bind(this);
    this.changeLastName=this.changeLastName.bind(this);
    this.changeGender=this.changeGender.bind(this);
    this.changeContactNumber=this.changeContactNumber.bind(this)
    this.changeEmail=this.changeEmail.bind(this);
    this.changeCity=this.changeCity.bind(this);
    this.changePassword=this.changePassword.bind(this);
    this.changeConfirmPassword=this.changeConfirmPassword.bind(this);
    }
    changePancardNumber=(event)=>
    {
        this.setState({
            pancardNumber:event.target.value
        })
    };
    changeFirstName=(event)=>
    {
        this.setState({
            firstName:event.target.value
        })
    };
    changeLastName=(event)=>
    {
        this.setState({
            lastName:event.target.value
        })
    };
    changeGender=(event)=>
    {
        this.setState({
            gender:event.target.value
        })
    };
    changeEmail=(event)=>
    {
        this.setState({
            email:event.target.value
        })
    };
    changeContactNumber=(event)=>
    {
        this.setState({
            contactNumber:event.target.value
        })
    };
    changeCity=(event)=>
    {
        this.setState({
            city:event.target.value
        })
    };
    changeState=(event)=>
    {
        this.setState({
            state:event.target.value
        })
    };
    changePassword=(event)=>
    {
        this.setState({
            password:event.target.value
        })
    };
    changeConfirmPassword=(event)=>
    {
        this.setState({
            confirmPassword:event.target.value
        })
    };
    validate = ()=>{
        let pancardError="";
        let  firstNameError="";
        let  lastNameError="";
        let genderError="";
        let contactError="";
        let emailError="";
        let passwordError="";
        let confirmPasswordError="";
        let cityError="";
        let stateError="";

        if(!this.state.pancardNumber){
            pancardError = "Pan number is required"
        }
        else if(!/([A-Z]){5}([0-9]){4}([A-Z]){1}/.test(this.state.pancardNumber)){
            pancardError = "Pan number is invalid"

        }
     
        if(!this.state.firstName){
         firstNameError = "First name is required"
     }
     if(!this.state.lastName){
        lastNameError = "Last name is required"
    }
        if(!this.state.email){
            emailError = "Email is required"
        }
        else if(!/\S+@\S+\.\S+/.test(this.state.email)){
            emailError = "Email address is invalid"
        }

        if(!this.state.password){
            passwordError = "Password is required"
        }
        else if(this.state.password.length<6){
            passwordError = "Password needs to be 6 characters or more"
        }
        if(!this.state.confirmPassword){
            confirmPasswordError = "Password confirmation is required"
        }
        else if(this.state.confirmPassword !== this.state.password){
            confirmPasswordError = "Password do not match"
        }
        if(!this.state.gender){
            genderError = "Gender is required"
        }
        
        if(!this.state.contactNumber){
            contactError = "Contact Number is required"
        }
        else if(!/[6-9]\d{9}/.test(this.state.contactNumber)){
            contactError = "Contact number is invalid"
        }
        if(!this.state.city){
            cityError = "City is required"
        }
        if(!this.state.state){
            stateError = "State is required"
        }
        
        if(pancardError||firstNameError||lastNameError||emailError||passwordError||confirmPasswordError||genderError  || contactError || cityError || stateError){
            this.setState({pancardError,firstNameError,lastNameError,emailError,passwordError,confirmPasswordError,genderError,contactError,cityError,stateError});
            return false;
        }
        return true;
     };
    registerDealer=(e)=>
    {
         e.preventDefault()
         const isValid = this.validate();
         
         if(isValid){            
         console.log(this.state)
            if(this.state){
            
            let dealer = {pancardNumber: this.state.pancardNumber, firstName: this.state.firstName, lastName: this.state.lastName, gender:this.state.gender,
                          email:this.state.email,contactNumber:this.state.contactNumber,city:this.state.city,state:this.state.state,password:this.state.password,
                          confirmPassword:this.state.confirmPassword};

            DealerService.dealerRegistration(dealer)
                 alert(`Registration for Pan number: ${this.state.pancardNumber} is successful.`);
            }
        }
      
    };
    render() {
    return(
        
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div class="card card0 border-0">
            <div class="row d-flex">

                <div class="col-lg-4"></div> 
                
                <div class="col-lg-4">          
                    <div class="card2 card border-0 px-4 py-5">
                    <label class="mb-1"><h3> Register </h3></label>
                    
                    <div class="row px-3 mb-4">
                        <div class="line"></div>
                        <div class="line"></div>
                        
                    </div>
                    
                    <div className = "row px-3">
                        
                            <label class="mb-1"><h6 class="mb-0 text-sm"> User Id </h6></label>
                            <input type ="text" 
                                   className="mb-2"
                                   placeholder="Enter PAN No. "
                                   value={this.state.pancardNumber}
                                   name="pancardNumber"
                                   onChange={this.changePancardNumber}/>
                             <p className="error">{this.state.pancardError}</p>
                            
                        </div>
                      
                      <div className = "row px-3">
                            <label class="mb-1"><h6 class="mb-0 text-sm">First Name </h6></label>
                            <input type ="text" 
                                   className="mb-2"
                                   placeholder="Enter First Name "
                                   value={this.state.firstName}
                                   name="firstName"
                                   onChange={this.changeFirstName}/>
                                   <p className="error">{this.state.firstNameError}</p> 
                        </div>
                        <div className = "row px-3">
                            <label class="mb-1"><h6 class="mb-0 text-sm"> Last Name </h6></label>
                            <input type ="text" 
                                   className="mb-2"
                                   placeholder="Enter Last Name "
                                   value={this.state.lastName}
                                   name="lastName"
                                   onChange={this.changeLastName}/>
                                   <p className="error">{this.state.lastNameError}</p> 
                        </div>
                        <div className = "row px-3">
                            <label class="mb-1"><h6 class="mb-0 text-sm"> Gender </h6></label>
                            <input type ="text" 
                                   className="mb-2"
                                   placeholder="Enter Male/Female "
                                   value={this.state.gender}
                                   name="gender"
                                   onChange={this.changeGender}/>
                                   <p className="error">{this.state.genderError}</p>
                        </div>
                       <div className = "row px-3">
                            <label class="mb-1"><h6 class="mb-0 text-sm"> Email Id: </h6></label>
                            <input type ="text" 
                                   className="mb-2"
                                   placeholder="Email Address"
                                   value={this.state.email}
                                   name="email"
                                   onChange={this.changeEmail}/>
                                   <p className="error">{this.state.emailError}</p>
                        </div>
                        <div className = "row px-3">
                            <label class="mb-1"><h6 class="mb-0 text-sm"> Contact No. </h6></label>
                            <input type ="text" 
                                   className="mb-2"
                                   placeholder="Enter Contact Number"
                                   value={this.state.contactNumber}
                                   name="contactNumber"
                                   onChange={this.changeContactNumber}/>
                                   <p className="error">{this.state.contactError}</p>
                        </div>
                        <div className = "row px-3">
                            <label class="mb-1"><h6 class="mb-0 text-sm"> City </h6></label>
                            <input type ="text" 
                                   className="mb-2"
                                   placeholder="Enter City"
                                   value={this.state.city}
                                   name="city"
                                   onChange={this.changeCity}/>
                                   <p className="error">{this.state.cityError}</p> 
                        </div>
                        <div className = "row px-3">
                            <label class="mb-1"><h6 class="mb-0 text-sm"> State </h6></label>
                            <input type ="text" 
                                   className="mb-2"
                                   placeholder="Enter State"
                                   value={this.state.state}
                                   name="state"
                                   onChange={this.changeState}/>
                                   <p className="error">{this.state.stateError}</p> 
                        </div>
                        <div className = "row px-3">
                            <label class="mb-1"><h6 class="mb-0 text-sm"> Password </h6></label>
                            <input type ="password" 
                                   className="mb-2"
                                   placeholder="Enter Password"
                                   value={this.state.password}
                                   name="password"
                                   onChange={this.changePassword}/>
                                   <p className="error">{this.state.passwordError}</p>
                        </div>
                        <div className = "row px-3">
                            <label class="mb-1"><h6 class="mb-0 text-sm"> Confirm Password </h6></label>
                            <input type ="password" 
                                   className="mb-2"
                                   placeholder="Enter Password again"
                                   value={this.state.confirmPassword}
                                   name="confirmPassword"
                                   onChange={this.changeConfirmPassword}/>
                                   <p className="error">{this.state.confirmPasswordError}</p>
                        </div>
                        
                        <div>&nbsp;</div>
                        <button  class="btn btn-blue text-center"
                                 onClick={this.registerDealer}> Register </button>
                        <div class="row mb-4 px-3"> <small class="font-weight-bold">Already have an account? 
                        <Link class="text-danger " to="/dealerlogin">Login</Link></small> </div>
                    </div>
                </div>       
            </div>          
            </div>       
            <div class="bg-blue py-4">
            <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
            </div>
        </div>
          </div>
    )
}
} 
export default DealerRegistration;
