import React from 'react';
import { ITodo } from '../../models/todo';



const Todo = ({ todo }: { todo: ITodo }) => {

    return (
        <div>
            <h1 >
                {todo.title}
            </h1>
            <p>
                {todo.description}
            </p>
        </div>
    );
};

export default Todo;
