import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated, 
    component:Component,//rename component pros to uppercase "c" component.
    ...restProps //all the rest props that not destruring, ... is a rest operator
    }) => (
    <Route {...restProps} component={(props)=>{
        return (//pass all the above destructured props to component
            isAuthenticated ? (
                <div>
                <Header />
                <Component {...props}/>
                </div>
                ) : (
                    <Redirect to="/"/>
                )
        )
    }}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);