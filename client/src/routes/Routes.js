
import React from 'react'

import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Admin from '../pages/Admin';
import Auth from '../pages/Auth';
import { ProtectedRoutAdmin } from './ProtectedRoutAdmin';
import { ProtectedRoutAuth } from './ProtectedRoutAuth';




const Routes = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact={ true } from="/" to="/admin" />
                <ProtectedRoutAdmin path="/admin" component={ Admin } />
                <ProtectedRoutAuth path="/auth" component={ Auth } />
                <Redirect exact={ true } from={ `/*` } to={ `/admin` } />
            </Switch>
        </Router>
    )
}

export default Routes
