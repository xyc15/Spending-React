import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {firebase}from '../firebase/firebase';
import FlashMessage from 'react-flash-message';
import {loginWithGoogle} from '../actions/auth';

export class SignInPage extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    }
    userSignIn = (e) => {
        e.preventDefault();
        //this.props.signIn(this.state.email, this.state.password);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            this.setState(() => ({error: error.message}));
        });
    }
    loginAsGuest = (e) => {
        e.preventDefault();

        firebase.auth().signInAnonymously().catch(function(error) {
          // Handle Errors here.
          this.setState(() => ({error: error.message}));
          // ...
        });
    }
    onInputEmail = (e) => {
        const email = e.target.value;
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
                    <h1 className='page-header__title'>Sign In</h1>
                </div>
            </div>
            <div className='content-container'>
                <div className='box-login'>
                {  this.state.error &&
                    <FlashMessage duration={5000} persistOnHover={true}>
                        <p className='red font-size-medium'>{this.state.error}</p>
                    </FlashMessage>
                }
                    <button className="button--login" onClick={this.loginAsGuest}>Continue as Guest</button>
                    <p>OR</p>
                    <button className="button--login" onClick={this.props.loginWithGoogle}>Login With Google</button>
                    <p>OR</p>
                    <form className='form-login'>
                        <label className='form__label'>E-mail Address <br />
                            <input type='email' className='form__input' value={this.state.email} onChange={this.onInputEmail} />
                        </label>
                        <label className='form__label'>Password <br />
                            <input className='form__input' type='password' value={this.state.password} onChange={this.onInputPassword}/>
                        </label>
                        <button onClick={this.userSignIn} className='button--login button--click'>Sign in</button>
                        <p className='form__note'>New To Spending?</p>
                        <div className='button--login button--click'>
                        <Link to='/signUp' className='button--link'>Create your Spending Acccount</Link>
                        </div>
                        </form>
                </div>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginWithGoogle: dispatch(loginWithGoogle)
});
export default connect(undefined, mapDispatchToProps)(SignInPage);
