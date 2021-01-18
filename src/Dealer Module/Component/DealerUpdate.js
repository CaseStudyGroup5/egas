import React, { Component } from 'react'
import DealerService from '../Service/DealerService';
import '../Css/update.css'
export class DealerUpdate extends Component {

    
    constructor(props) {
        super(props);
    
        this.state = {
          firstName: "",
          lastName:"",
          email: "",
          contactNumber:"",
          password:"",
          confirmPassword:"",
          answer:"",
          dealer:{}
        }; 
    
      }
    
      componentDidMount(){
        DealerService.getInfo().then((res) => {
            this.setState({ dealer: res.data});
          //  thisthis.state.dealer.firstName
        });
       
        }
    changePancardHandler=(e)=>
      {
          this.setState({
            pancardNumber:e.target.value
          })
      }
      changeConfirmPasswordHandler=(e)=>
      {
          this.setState({
            confirmPassword:e.target.value
          })
      }
      changefirstHandler=(e)=>
      {
          this.setState({
            firstName:e.target.value
          })
      }
      changelastHandler=(e)=>
      {
          this.setState({
            lastName:e.target.value
          })
      }
      changeEmailHandler=(e)=>
      {
          this.setState({
            email:e.target.value
          })
      }
      changeContactHandler=(e)=>
      {
          this.setState({
            contactNumber:e.target.value
          })
      }
      changePasswordHandler=(e)=>
      {
          this.setState({
            password:e.target.value
          })
      }

      validate = ()=>{
        let  firstNameError="";
        let  lastNameError="";
        let contactError="";
        let emailError="";
        let passwordError="";

        if(this.state.firstName!=="")
        {
            if(this.state.firstName.length<3){
                firstNameError = "Enter Valid First Name"
               }
        }
        if(this.state.lastName!=="")
        {
            if(this.state.lastName.length<3){
                lastNameError = "Enter Valid Last Name"
               }
        }
        
        if(this.state.email!==""){
        if(!/\S+@\S+\.\S+/.test(this.state.email)){
            emailError = "Email address is invalid"
        }
        }

        if(this.state.password!==""){
        if(this.state.password.length<6){
            passwordError = "Password needs to be 6 characters or more"
        }
        }
       
        if(this.state.contactNumber!==""){
        if(!/[7-9]\d{9}/.test(this.state.contactNumber)){
            contactError = "Contact number is invalid"
        }
        }
        if(firstNameError||lastNameError||emailError||passwordError|| contactError)
        {
            this.setState({firstNameError,lastNameError,emailError,passwordError,contactError});
            return false;
        }
        return true;
     };
     update = (e) => 

     {
     e.preventDefault();
     const isValid = this.validate();
         
         if(isValid){       
     let data = {firstName:this.state.firstName,lastName:this.state.lastName
         ,email:this.state.email, contactNumber:this.state.contactNumber,password: this.state.password,confirmPassword:this.state.confirmPassword};
     if(data.confirmPassword==="" && data.password!=="")
     {
         alert("Please Enter Confirm Password");
     }
     else if(data.confirmPassword!=="" && data.password==="")
     {
         alert("Please Enter Password");
     }
     else if(data.confirmPassword!==data.password)
     {
         alert("Password and Confirm Password Not Matching");
     }
     else{
         DealerService.update(data)
         .then((response)=>{
             this.setState({answer:response.data})
             alert(response.data);
         });
         console.log(this.state.answer);
     }
    }
    } 
    render() 
    {
        return (
            <center>
                <div >
                <div   class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-6 mx-auto">
                <div class="card card0 border-0">
                    <div >

                        <div class="col-lg-7">
                            <div class="card2 card border-0 px-4 py-5">
                                <label><h3> UPDATE PROFILE </h3></label>
                                <div class="row px-9 mb-9">
                                </div>
                                
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> First Name </h6></label>
                                    <input className="px-3" placeholder={this.state.dealer.firstName}  onChange={this.changefirstHandler.bind(this)} />
                                    {this.state.firstName.length < 3 && 
                                    <span className='error'>{this.state.firstNameError}</span>}
                                    
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Last Name </h6></label>
                                    <input className="px-3"  placeholder={this.state.dealer.lastName}  onChange={this.changelastHandler.bind(this)} />
                                    {this.state.lastName.length < 3 && 
                                    <span className='error'>{this.state.lastNameError}</span>}
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Email Id: </h6></label>
                                    <input className="px-3" placeholder={this.state.dealer.email} onChange={this.changeEmailHandler.bind(this)}/>
                                    <p className="error">{this.state.emailError}</p>
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Contact No. </h6></label>
                                    <input className="px-3"  placeholder={this.state.dealer.contactNumber} onChange={this.changeContactHandler.bind(this)} />
                                    {this.state.contactNumber.length < 10 && 
                                    <span className='error'>{this.state.contactError}</span>}
        
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Password </h6></label>
                                    <input type="password" className="px-3" placeholder="Enter Password" onChange={this.changePasswordHandler.bind(this)}/>
                                    {this.state.password.length < 6 && 
                                    <span className='error'>{this.state.passwordError}</span>}
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Confirm Password </h6></label>
                                    <input type="password" value={this.state.dealer.confirmPassword}  className="px-3" placeholder="Enter Confirm Password" onChange={this.changeConfirmPasswordHandler.bind(this)}/>
                                    
                                </div>
                               <br></br>
                                <button  onClick={this.update} class=" mybutton btn btn-blue text-center"> Update </button>

                            </div>
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
export default DealerUpdate;