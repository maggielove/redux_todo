import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoApp } from '../reducers/todos';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters  } from '../reducers/actions/todos';
import App from '../components/App';
import * as style from '../style/style.scss';

//hydrate the state of the client to match the state of Redux app on server
const store = createStore(todoApp, window.STATE_FROM_SERVER);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe()
