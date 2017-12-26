import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'; 

import 'normalize.css/normalize.css';
import './styles/styles.scss';
 
const store = configureStore();

const waterBill = store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
const gasBill = store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
const rent = store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));