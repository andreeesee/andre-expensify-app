import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../component/Header';
import ExpenseDashboardPage from '../component/ExpenseDashboard';
import HelpPage from '../component/Help';
import NotFoundPage from '../component/NotFound';
import AddExpensePage from '../component/Add';
import EditExpensePage from '../component/Edit';
  

const Approuter = () => (
    <BrowserRouter>
        <div>
        <Header/>    
            <Switch>
                <Route exact path="/" component={ExpenseDashboardPage} />
                <Route exact path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>  
    </BrowserRouter>
);

export default Approuter;
  