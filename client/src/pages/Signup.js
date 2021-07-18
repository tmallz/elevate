import React, {Component } from "react";
import './signup.css';
import API from '../utils/API'

class Signup extends Component{
    state = {
        username: '',
        email: '',
        password: ''
    };

    userSave = () => {
        API.createUser({
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            console.log(res)
            alert('Sign Up successful!');
            window.location = "/elevate";
        })
        .catch(err => {
            alert(err);
        })
    }

    handleTyping = e => {
        const target = e.target;
        let value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = e => {
        e.preventDefault()
        if (!this.state.email || !this.state.password || !this.state.email){
            alert('One or more form fields missing inputs');
        }else{
            this.userSave();
        }

        this.setState({
            username: '',
            email: '',
            password: ''
        });
    }

    render(){
        return (            
            <div>
                <form>
                    <h2 className="text-center">Sign Up</h2>       
                    <div className="card">
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        onChange={this.handleTyping}
                        name = "username"
                        value={this.state.username}
                        />
                    </div>
                    <div className="card">
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Email" 
                        onChange={this.handleTyping}
                        name = "email"
                        value={this.state.email}
                        />
                    </div>
                    <div className="card">
                        <input 
                        type="password" 
                        className="form-control"
                        placeholder="Password" 
                        onChange={this.handleTyping}
                        name = "password"
                        value={this.state.password}/>
                    </div>
                    <div className="card">
                        <button type="submit" className="signup-btn" onClick={this.handleFormSubmit}>Sign Up </button>
                    </div>       
                </form>
                <p className="text-center"><a href="/login">Already have an account? Sign in!</a></p>
            </div>
        );
    }
}

export default Signup;