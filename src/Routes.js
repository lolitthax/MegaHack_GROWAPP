import React from 'react';
import Home from './Home';
import Login from './Login';
import Sign from './SignUp';
import Dashboard from './Dashboard'
import { Switch, Route } from 'react-router-dom';

function Routes(){
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Sign} />
            <Route path="/painel" component={Dashboard} />
        </Switch>
    )
}
export default Routes