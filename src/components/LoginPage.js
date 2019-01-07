import React from 'react';
import {Link} from 'react-router-dom';

export const LoginPage = () => (
    <div className="box-layout"> 
        <div className="box-layout__box">
            <h1 className="box-layout__title ">Spending</h1>
            <p>Get a clear knowledge of your daily spendings.</p>
            <Link className='button' to='/signUp'>Sign Up</Link>
            <p></p>
            <Link className='button' to='signIn'>Sign In</Link>
        </div>
    </div>
);



export default LoginPage;
