import React, {useContext, useState} from 'react';
import TodoItem from "./Todo-item";
import {TodoStateContext, UseDispatchItem, UseStateContext} from "./TodoContext";

function TodoBody(){
    const items = UseStateContext();
    return(
            <div className='todo-body'>
                <ul className='todo-list'>
                    {items.map(item => (
                        <TodoItem
                                key={item.id}
                                id={item.id}
                                text={item.text}
                        />
                    ))}
                </ul>
            </div>
    )
}

export default TodoBody;