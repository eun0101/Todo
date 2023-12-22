import React from 'react';
import TodoHead from "./Todo-head";
import TodoBody from "./Todo-body";
import TodoCreate from "./Todo-create";
import TodoPopup from "./Todo-popup";
import {UseTodoOpenPopupContext} from "./TodoContext";


function Todo(){
    const {popText}= UseTodoOpenPopupContext();

    return (
        <div className="todo">
            <TodoHead/>
            <TodoBody/>
            <TodoCreate></TodoCreate>
            {popText.popup == true ? <TodoPopup/> : ''}
        </div>
    )
}
export default Todo;