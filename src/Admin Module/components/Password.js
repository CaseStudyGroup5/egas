import React, { Component } from 'react';
import axios from 'axios'

class Password extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password:'',
            url: 'http://localhost:8080/admin/updatePassword',
            
        }
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (e) => {
        // alert(`${this.state.username} ${this.state.password} ${this.state.mail} ${this.state.company} `)
        // let recruiter = { firstname: this.state.firstname,
        // lastname: this.state.lastname,
        // username: this.state.username,
        // password: this.state.password,
        // mail: this.state.mail,
        // company: this.state.company };
        e.preventDefault()
        //this.state.username
        
        let a = { 
            username:this.state.username,
            password: this.state.password};
            console.log(a)
        console.log('a => ' + JSON.stringify(a));
            axios.patch((this.state.url ),a)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
           // this.props.history.push(`/`)
        }
    render() {
        return (
            <div>
                 <div className="container-xl ">
                <div className="row  my-5">
                    <div className="card col-md-6 offset-md-3 my-4">
                        <h3 className="a text-center my-2">Change Password</h3> <hr />
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label>username:</label>
                                    <input placeholder="enter your username" name="username" className="form-control"
                                        value={this.state.username} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>password:</label>
                                    <input placeholder="set password" name="password" type="password" className="form-control"
                                        value={this.state.password} onChange={this.onChange} />
                                </div>
                                <button className="btn btn-outline-primary">update</button> &nbsp;&nbsp;&nbsp;
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Password;