import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';

/********import react-redux library********/
import {Provider} from 'react-redux';

import AppRouter, {history} from './routers/AppRouter';
/********connect Redux and React********/
import configureStore from './store/configureStore';
import {login, logout} from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
//import './playground/promises';

const store = configureStore();//return value from configureStore.js
const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderAppp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        renderAppp();
        if(history.location.pathname === '/') {
            history.push('./dashboard');
        }
    } else {
        store.dispatch(logout());
        renderAppp();
        history.push('/');
    }
});   