import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogleMethod } from '../../firebase/firebase.util'
class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    };

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className={'sign-in'}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name={'email'}
                           value={this.state.email}
                           type={'email'}
                           required={true}
                           handleChange={this.handleChange}
                            label={'email'}
                    />

                    <FormInput
                        name={'password'}
                        value={this.state.password}
                        type={'password'}
                        required={true}
                        handleChange={this.handleChange}
                        label={'password'}
                    />

                    <div className={'buttons'}>
                        <CustomButton type={'submit'}>
                            SIGN IN
                        </CustomButton>

                        <CustomButton onClick={signInWithGoogleMethod} isGoogleSignIn={true}>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
export  default SignIn;