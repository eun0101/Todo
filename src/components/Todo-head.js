import React, {useEffect, useState} from 'react';
import {UseStateContext} from "./TodoContext";

function TodoHead(){
    const items = UseStateContext();

    const todayDate = new Date;
    const date = todayDate.toLocaleString("ko-Kr", {
        year: "numeric",
        weekday: "narrow",
        month: "numeric",
        day: "numeric"
    });

    const count = ()=> items.filter((item)=> (item.done === false)).length;

return(
    <div className='todo-head'>
        <h1>Todo!</h1><span className="date">{date}</span>
        <p className="todo-count">남은 할 일 <span className="num">{count()}</span> 개</p>

    </div>
)
}

export default TodoHead;