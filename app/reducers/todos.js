import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from  './actions/todos'
const { SHOW_ALL } = VisibilityFilters

const initialState = {
    VisibilityFilters: VisibilityFilters.SHOW_ALL,
    todos: []
}

let todoId = 0;

function getTodoId () {
    for (let i = 0; i >= 0; i++) {
        return todoId++;
    }
}

//manages its own part of the global state
function todos (state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: getTodoId(),
                    text: action.text,
                    completed: false,
                }
            ]
        case TOGGLE_TODO:
                //Create a new array with the same todo items...
                return state.map((todo, index) => {
                    //..except at the index for the todo we want to toggle.
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
                //return previous state if action is unknown
                default: return state
    }
}

//manages its own part of the global state
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

//gets default state from child reducers (todos, VisibilityFilter)
export const todoApp = combineReducers({
    visibilityFilter,
    todos
});
