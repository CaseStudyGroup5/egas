import React, { Component } from 'react'
import '../Css/regstyle.css'
import { Link } from 'react-router-dom'
import StaffMemberService from '../StaffService/StaffMemberService'
export class StaffRegistration extends Component {

    constructor(props){
        super(props)
        this.state={
            pancardNumber:'',
            fname:'',
            lname:'',
            gender:'',
            city:'',
            password:'',
            email:'',
            contact:'',
            status:'Pending'
        }
        this.changePancardHandler= this.changePancardHandler.bind(this)
        this.changeFnameHandler= this.changeFnameHandler.bind(this)
        this.changeLnameHandler= this.changeLnameHandler.bind(this)
        this.changeGenderHandler= this.changeGenderHandler.bind(this)
        this.changeCityHandler= this.changeCityHandler.bind(this)
        this.changePasswordHandler= this.changePasswordHandler.bind(this)
        this.changeEmailHandler= this.changeEmailHandler.bind(this)
        this.changeContactHandler= this.changeContactHandler.bind(this)
    }
    addStaffMember = (e) =>{
        e.preventDefault();
        let staffmember={pancardNumber:this.state.pancardNumber,fname:this.state.fname,lname:this.state.lname,gender:this.state.gender,city:this.state.city,password:this.state.password,email:this.state.email,contact:this.state.contact,status:this.state.status}
        console.log('staffmember=>'+ JSON.stringify(staffmember));
        StaffMemberService.createStaffMember(staffmember)
    }
    changePancardHandler=(e)=>{
        this.setState({pancardNumber:e.target.value});
    }
    changeFnameHandler=(e)=>{
        this.setState({fname:e.target.value});
    }
    changeLnameHandler=(e)=>{
        this.setState({lname:e.target.value});
    }
    changeGenderHandler=(e)=>{
        this.setState({gender:e.target.value});
    }
    changeCityHandler=(e)=>{
        this.setState({city:e.target.value});
    }
    changePasswordHandler=(e)=>{
        this.setState({password:e.target.value});
    }
    changeEmailHandler=(e)=>{
        this.setState({email:e.target.value});
    }
    changeContactHandler=(e)=>{
        this.setState({contact:e.target.value});
    }

    validate=()=>{
        let pancardError="";
        let fnameError="";
        let lnameError="";
        let genderError="";
        let cityError="";
        let passwordError="";
        let emailError="";
        let contactError="";
        if(!this.state.pancardNumber){
            pancardError="Pancard is required"
        }
        else if(!/([A-Z]){5}([0-9]){4}([A-Z]){1}/.test(this.state.pancardNumber)){
            pancardError = "Pan number is invalid"

        }
        if(!this.state.fname){
            fnameError="FirstName is required"
        }
        if(!this.state.lname){
            lnameError="LastName is required"
        }
        if(!this.state.gender){
            genderError="Gender is required"
        }
        if(!this.state.password){
            passwordError="Password is required"
        }
        else if(this.state.password.length<6){
            passwordError = "Password needs to be 6 characters or more"
        }
        if(!this.state.city){
            cityError="City is required"
        }
        if(!this.state.contact){
            contactError="Contact must be at least 10 digit required"
        }
        else if(!/[6-9]{1}\d{9}/.test(this.state.contact)){
            contactError = "Contact number is invalid"
        }
        if(!this.state.email){
            emailError="Email is required"
        }
        else if(!/\S+@\S+\.\S+/.test(this.state.email)){
            emailError = "Email address is invalid"
        }
        if(pancardError || fnameError || lnameError || cityError || contactError ||emailError || passwordError || genderError){
            this.setState({pancardError,fnameError,lnameError,genderError,passwordError,cityError,contactError,emailError});
            return false;
        }
        return true;
    };
    onSubmission=(e)=>{
        <div>{`${this.state.pancardNumber} ${this.state.fname} ${this.state.lname} ${this.state.gender} 
                ${this.state.city} ${this.state.password} ${this.state.email} ${this.state.contact}`}
        </div>
        e.preventDefault()
        const isValid=this.validate();
        if(isValid){
            <div>{this.state}</div>
            console.log(this.state)
            if(this.state){

                let staffmember={pancardNumber:this.state.pancardNumber,fname:this.state.fname,lname:this.state.lname,
                    gender:this.state.gender,city:this.state.city,password:this.state.password,email:this.state.email,
                    contact:this.state.contact}
                    
                StaffMemberService.createStaffMember(staffmember);
                alert(`Registration for Pan number: ${this.state.pancardNumber} is successful.`);
            }
        }
    
    };
    render() {
        return (
            <center>
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-6 mx-auto">
                <div class="card card0 border-0">
                    <div >
                        <form onSubmit={this.onSubmission.bind(this)}>
                        <div class="col-lg-7">
                            <div class="card2 card border-0 px-4 py-5">
                                <label><h3> Registration Page </h3></label>
                                <div class="row px-9 mb-9">
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> User Id </h6></label>
                                    <input value={this.state.pancardNumber} 
                                    name="pancardNumber" className="row px-3" 
                                    placeholder="Enter PAN No. " 
                                    onChange={this.changePancardHandler}/>
                                    <div style={{color:"red"}}>{this.state.pancardError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> First Name </h6></label>
                                    <input value={this.state.fname} 
                                    name="fname" className="row px-3" 
                                    placeholder="Enter Firstname " 
                                    onChange={this.changeFnameHandler} />
                                    <div style={{color:"red"}}>{this.state.fnameError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Last Name </h6></label>
                                    <input value={this.state.lname} 
                                    name="lname" className="row px-3" 
                                    placeholder="Enter Lastname " 
                                    onChange={this.changeLnameHandler}/>
                                    <div style={{color:"red"}}>{this.state.lnameError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Gender </h6></label>
                                    <input value={this.state.gender} 
                                    name="gender" className="row px-3" 
                                    placeholder="Enter Gender " 
                                    onChange={this.changeGenderHandler}/>
                                    <div style={{color:"red"}}>{this.state.genderError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Email Id: </h6></label>
                                    <input value={this.state.email} 
                                    name="email" className="row px-3" 
                                    placeholder="Email Address" 
                                    onChange={this.changeEmailHandler}/>
                                    <div style={{color:"red"}}>{this.state.emailError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Contact No. </h6></label>
                                    <input value={this.state.contact} 
                                    name="contact" className="row px-3" 
                                    placeholder="Enter Contact Number" 
                                    onChange={this.changeContactHandler}/>
                                    <div style={{color:"red"}}>{this.state.contactError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Address </h6></label>
                                    <input value={this.state.city} 
                                    name="city" className="row px-3" 
                                    placeholder="Enter city" 
                                    onChange={this.changeCityHandler}/>
                                    <div style={{color:"red"}}>{this.state.cityError}</div>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Password </h6></label>
                                    <input value={this.state.password} 
                                    name="password"  className="row px-3" 
                                    placeholder="Enter Password" 
                                    onChange={this.changePasswordHandler}/>
                                    <div style={{color:"red"}}>{this.state.passwordError}</div>
                                </div>
                               
                                <button class="btn btn-blue text-center" Link to="/stafflogin"> Register </button>
                                <div class="row mb-4 px-3"> <small class="font-weight-bold">Already have an account? <Link class="text-danger " to="/stafflogin">Login</Link></small> </div>
                            </div>
                        </div>
                        </form>
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
export default StaffRegistration;