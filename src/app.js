import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Approuter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <Approuter />
    </Provider>
    
);

ReactDOM.render(jsx, document.getElementById('app'));
