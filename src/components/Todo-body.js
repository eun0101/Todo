import React, { useMemo} from 'react';
import TodoItem from "./Todo-item";
import {UseStateContext, UseTodoOpenPopupContext} from "./TodoContext";


function TodoBody(){
    const items = UseStateContext();

    const todoItems = useMemo(()=>{
        return items
        }, [items]);

    return(
            <div className='todo-body'>
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
            </div>
    )
}

export default React.memo(TodoBody);