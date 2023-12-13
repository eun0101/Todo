import React from 'react';
import {ItemContext} from "./TodoContext";

function TodoHead(){
    const todayDate = new Date;
    const date = todayDate.toLocaleString("ko-Kr", {
        year: "numeric",
        weekday: "narrow",
        month: "numeric",
        day: "numeric"
    });
return(
    <div className='todo-head'>
        <h1>Todo!</h1>
        <div className="date">{date}</div>
    </div>
)
}

export default TodoHead;