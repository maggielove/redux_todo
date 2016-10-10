import { createStore } from 'redux';

export default function configureStore(initialState, global = {}) {

    const store = createStore(todoApp);
}
