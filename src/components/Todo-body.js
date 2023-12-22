import React, {useCallback, useRef, useMemo} from 'react';
import TodoItem from "./Todo-item";
import {UseStateContext, UseTodoOpenPopupContext} from "./TodoContext";
import TodoPopup from "./Todo-popup";

function TodoBody(){
    const body = useRef();
    const items = UseStateContext();
    const {popText}= UseTodoOpenPopupContext();

    const todoItems = useMemo(()=>{
        return items
        }, [items]);

    return(
            <div className='todo-body' ref={body}>
                <ul className='todo-list'>
                    {todoItems.map(item => (
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