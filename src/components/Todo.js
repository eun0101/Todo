import React from 'react';
import TodoHead from "./Todo-head";
import TodoBody from "./Todo-body";
import TodoCreate from "./Todo-create";



function Todo(){


    return (
        <div className="todo">
            <TodoHead/>
            <TodoBody/>
            <TodoCreate></TodoCreate>
        </div>
    )
}


export default Todo;