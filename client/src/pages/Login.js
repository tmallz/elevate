import React, { useState, useEffect } from "react";
import API from '../utils/API';
import './login.css';

function Login(){
    return(
            <div className="logincard">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2 className="text-center">Log in</h2>       
                    <div className="card">
                        <input type="text" className="form-control" placeholder="Username" required="required"/>
                    </div>
                    <div className="card">
                        <input type="password" className="form-control" placeholder="Password" required="required"/>
                    </div>
                    <div className="card">
                        <button type="submit" className="login-btn">Log in </button>
                    </div>       
                </form>
                <p className="text-center"><a href="/signup">Create an Account</a></p>
            </div>
    );
}

export default Login;