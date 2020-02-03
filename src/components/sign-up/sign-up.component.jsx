import React from "react";
import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            password: '',
            confirmPassword: '',
            email: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, password, confirmPassword, email} = this.state;

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return ;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                    displayName: '',
                    password: '',
                    confirmPassword: '',
                    email: ''
            })
        }catch (e) {
            console.error(e);
        }
    };

    render() {
        const { displayName, password, confirmPassword, email} = this.state;
        return (
            <div className={'sign-up'}>
                <h2 className={'title'}>I do not have an account</h2>
                <span className={'title'}>Sign up with your email and password</span>

                <form className={'sign-up-form'} onSubmit={this.handleSubmit}>
                    <FormInput type={'text'} name={'displayName'} value={displayName} handleChange={this.handleChange} label={'Display Name'}/>
                    <FormInput type={'email'} name={'email'} value={email} handleChange={this.handleChange} label={'Email'}/>
                    <FormInput type={'password'} name={'password'} value={password} handleChange={this.handleChange} label={'Password'}/>
                    <FormInput type={'password'} name={'confirmPassword'} value={confirmPassword} handleChange={this.handleChange} label={'Confirm Password'}/>

                    <CustomButton type={'submit'}>
                        SIGN UP
                    </CustomButton>
                </form>
            </div>
        );
    }
}
export default SignUp;