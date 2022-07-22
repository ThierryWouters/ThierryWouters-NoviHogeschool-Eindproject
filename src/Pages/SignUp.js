import React from "react";
import './Pages Stylesheets/SignUp.css';
import RegisterForm from "../Components/RegisterForm";

function SignUp() {
    return (
        <div className="main">
        <h4>Sign up here</h4>

        <RegisterForm/>
        </div>
    );
}

export default SignUp;