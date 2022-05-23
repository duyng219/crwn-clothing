import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { Notification } from "../antd/notification/Notification";

import './sign-in.styles.scss'
import history from "../../history";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        email: "",
        password: "",
        };
    }

    // handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const {email, password} = this.state

    //     try {
    //         await auth.signInWithEmailAndPassword(email,password)
    //         this.setState({email:'',password:''})
    //         Notification("success","Login successfull" ,"topRight")
    //         history.push("/");
    //     } catch (error) {
    //         console.log(error );
    //     }

    // };

    handleSubmit = async (event) => {
        // Something
        event.preventDefault()
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
            Notification("success","Login successfull" ,"topRight")
            window.location.href = '/'
        } catch (error) {
            // Accept the error and print it out
            // Run only when there is an error in try
            console.log(error.message)
            window.location.href = 'https://stackoverflow.com/search?q=[Js]+'+ error.message
        }
    };

    handleChange = event => {
        const { value,name } = event.target;
        this.setState({[name]:value })
    }

    render() {
        return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput 
                type="email" 
                name="email" 
                value={this.state.email} 
                handleChange={this.handleChange}
                label="Email"
                required 
            />
            <FormInput
                type="password"
                name="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="Password"
                required
            />
            <div className="buttons">
                <CustomButton type="submit"> Sign in </CustomButton>
                <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
            </div>
            </form>
        </div>
        );
    }
}

export default SignIn;
