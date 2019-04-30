import React from 'react';
import {firebase}from '../firebase/firebase';
import {Link} from 'react-router-dom';
import FlashMessage from 'react-flash-message';

export class SignUpPage extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    }
    userSignUp = (e) => {
        e.preventDefault();
        //this.props.signUp(this.state.email, this.state.password);
        const credential = firebase.auth.EmailAuthProvider.credential(this.state.email, this.state.password);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            this.setState(() => ({error: error.message}));
        });
    }
    onInputEmail = (e) => {
        const email=e.target.value;
        this.setState(() => ({email}));
    }
    onInputPassword = (e) => {
        const password = e.target.value;
        this.setState(() => ({password}));
    }

    render() {
        return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Sign Up</h1>
                </div>
            </div>
            <div className='content-container'>
                <div className='box-login'>
                    {this.state.error &&
                        <FlashMessage duration={5000} persistOnHover={true}>
                        <p>{this.state.error}</p>
                    </FlashMessage>}
                    <div className='box__empty'>
                    </div>
                    <form className='form-login'>
                        <label className='form__label'>E-mail Address <br />
                            <input className='form__input' type='email' value={this.state.email} onChange={this.onInputEmail} />
                        </label>
                        <label className='form__label'>Password <br />
                            <input className='form__input' type='password' value={this.state.password} onChange={this.onInputPassword}/>
                        </label>

                        <button className='button--login button--click' onClick={this.userSignUp} >Sign up</button>
                        <p className='form__note'>Aleady a customer?</p>
                        <div  className='button--login button--click'>
                            <Link className='button--link' to='/signIn'>Sign in to your Spending Acccount</Link>
                        </div>
                        </form>
                </div>
            </div>
        </div>
        )
    }
}

export default SignUpPage;
