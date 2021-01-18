//import React from 'react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Background from './cylinder.jpg';
import axios from 'axios';

var sectionStyle = {
    width: "1600px",
    height: "620px",
    //opacity: 3,
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat"
};
var customerName="";

export class CustomerComponent extends Component {
componentDidMount(){
    
    axios.get('http://localhost:8080/customers/getCustomerName/'+this.props.location.pancardnumber)
        .then(function(resp){
        customerName=resp.data;
        console.log(customerName);
        });
}
    render() {
        
        return (
            <div>
                <section style={sectionStyle}>
                 <br/>
                 <br/>   
                    <div className="container mt-2">
                        
                        <nav id="sidebar" className="navbar navbar-expand-md navbar-dark bg-lightblue fixed-left">
                            <div className="container">
                                <Link className="navbar-brand" to={'/'}> Home </Link>
                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link to={'/customernewconnection'} className="nav-link"> NewConnection </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/customergasbooking'} className="nav-link"> Book a Gas </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/customeraccessoriesbooking'} className="nav-link"> BookAccessories </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={{pathname:'/customerupdate',pannumber:this.props.location.pannumber, custName:this.props.location.data}} className="nav-link"> UpdateProfile </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/'} className="nav-link"> Logout </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2 style={{ color: 'yellow' }} >Welcome to the {this.props.location.data}</h2>
                    <br />
                    <h2 style={{ color: 'yellow' }} >Enjoy the services of our E-GAS Application</h2>
                    <br />
                    </div>
                </section>
            </div>
        )
    }
}

export default CustomerComponent