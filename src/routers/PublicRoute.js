import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router';

export const PublicRoute = ({
    isAuthenticated, 
    component:Component,//rename component pros to uppercase "c" component.
    ...restProps //all the rest props that not d
}) => (
    <Route {...restProps} component={(props)=>(isAuthenticated ? (
       <Redirect to='/dashboard'/>
    ):(
        <Component {...props} />
    )
    )}/>
);
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.uid
});
export default connect(mapStateToProps)(PublicRoute);