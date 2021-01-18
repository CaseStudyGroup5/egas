
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Adminmenu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {}
    }
    logOut() {
        this.props.history.push(`/admin`)
    }
    render() {
        return (
            <div style={{marginTop:'15px'}}>
            <h2>Welcome to the Admin </h2>
            <div style={{marginLeft:'10%',marginRight:'10%'}}>
            <nav style={{marginTop:'2%'}} class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div className="nav">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link to="/"class="nav-link" >Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/dealers" class="nav-link">DealerList</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/customers" class="nav-link">CustomerList</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/deliverystaff" class="nav-link">DeliveryList</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/gasbooking" class="nav-link">BookingGas Details</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/accessoriesbooking" class="nav-link">BookingAccessories Details</Link>
                            </li>
   
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
            </div>
                <div className="row d-flex">
                    <div style={{marginTop:'8%'}} className="col-lg-12">
                        <button type="button" class="btn btn-primary " onClick={() => this.logOut()}>LOGOUT</button>

                    </div>
                    {/* <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div></div>
                            <div className="row px-3 mt-4 mb-5 border-line"><img src={LoginImage} className="image"></img></div>
                        </div>
                    </div> */}
                </div>
                <div>

            </div>
            </div>

        )
    }
}

export default Adminmenu;