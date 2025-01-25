import React from "react";
import "./facebook.css";
function Facebook(){

    return(
        <div className="mainContainer">
            <h1>Facebook</h1>
            <div className="container">
                <span>Log in to Facebook</span>
                <input type="text" placeholder="   Email address or phone number"/>
                <input type="text" placeholder="   password"/>
                <button>Log In</button>
                <a href="#">Forgotten account?  Sign up for Facebook</a>\
            </div>
        </div>
    )
}

export default Facebook;