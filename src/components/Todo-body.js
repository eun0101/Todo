import React, {useRef} from 'react';
import TodoItem from "./Todo-item";
import {UseStateContext, UseTodoOpenPopupContext} from "./TodoContext";
import TodoPopup from "./Todo-popup";

function TodoBody(){
    const body = useRef();
    const items = UseStateContext();
    const {popText}= UseTodoOpenPopupContext();

    return(
            <div className='todo-body' ref={body}>
                <ul className='todo-list'>
                    {items.map(item => (
                        <TodoItem
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                done={item.done}
                        />
                    ))}
                </ul>
                {popText.popup == true ? <TodoPopup/> : ''}
            </div>
    )
}

export default TodoBody;