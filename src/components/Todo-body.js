import React, {useContext} from 'react';
import TodoItem from "./Todo-item";
import {UseStateContext} from "./TodoContext";

function TodoBody(){
    const items = UseStateContext();

    return(
            <div className='todo-body'>
                <ul className='todo-list'>
                    {items.map(item => (
                        <TodoItem key={item.id} text={item.text}/>
                    ))}
                </ul>

                <button className='control-btn' type='button'>할 일 추가</button>
            </div>
    )
}

export default TodoBody;