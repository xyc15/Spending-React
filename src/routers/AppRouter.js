import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory'//https://www.npmjs.com/package/history
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
//browser router uses browser history by default, so we switch <BrowserRouter> to regular <Router>
//and create our own history

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}> 
    <div>
        <Switch>
            <PublicRoute path="/" exact={true} component={LoginPage}/>
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div> 
</Router>
);
export default AppRouter;