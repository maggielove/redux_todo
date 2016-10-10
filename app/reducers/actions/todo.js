
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'MARK_DONE';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    };
};

const editTodo = (id, text) => {
    return {
        type: EDIT_TODO,
        id,
        text
    }
}

const removeTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        index
    };
}
