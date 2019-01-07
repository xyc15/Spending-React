import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory'//https://www.npmjs.com/package/history
import AddItemPage from '../components/AddItemPage';
import DashboardPage from '../components/DashboardPage';
import EditItemPage from '../components/EditItemPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SignUpPage from '../components/SignUpPage';
import SignInPage from '../components/SignInPage';
//browser router uses browser history by default, so we switch <BrowserRouter> to regular <Router>
//and create our own history

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}> 
    <div>
        <Switch>
            <PublicRoute path='/' exact={true} component={LoginPage} />
            <PublicRoute path='/signUp' component={SignUpPage} />
            <PublicRoute path='/signIn' component={SignInPage} />
            <PrivateRoute path='/dashboard' component={DashboardPage} />
            <PrivateRoute path= '/addExpense' component={AddItemPage} />
            <PrivateRoute path= '/addIncome' component={AddItemPage} />
            <PrivateRoute path= '/editExpense/:id' component={EditItemPage} />
            <PrivateRoute path= '/editIncome/:id' component={EditItemPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div> 
</Router>
);
export default AppRouter;