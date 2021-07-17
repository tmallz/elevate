import React, { useState, useEffect } from "react";
import API from '../utils/API';
import './signup.css';

function Signup(){
    return(
            <div className="signupcard">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2 className="text-center">Sign Up</h2>       
                    <div className="card">
                        <input type="text" className="form-control" placeholder="Username" required="required"/>
                    </div>
                    <div className="card">
                        <input type="password" className="form-control" placeholder="Password" required="required"/>
                    </div>
                    <div className="card">
                        <button type="submit" className="signup-btn">Sign Up </button>
                    </div>       
                </form>
                <p className="text-center"><a href="/login">Already have an account? Sign in!</a></p>
            </div>
    );
}

export default Signup;