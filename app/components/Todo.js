import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text, id }) => (
    <li
        onClick={onClick}
        className={completed ? 'completed' : 'active'}
    >
        <input className={'checkbox'} type='checkbox' />
        {text}
    </li>
);

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;
