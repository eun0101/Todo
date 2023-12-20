import React, {useCallback, useRef} from 'react';
import {UseStateContext, UseDispatchItem} from "./TodoContext";



function TodoItem({id, text, done}){
    const dispatch = UseDispatchItem();

    const onRemove = useCallback(()=>{
            dispatch({
                type: 'REMOVE',
                item: {
                    id: id
                }
            })
        });

    const onChange = useCallback(() => {
        dispatch({
            type: 'DONE',
            item:{
                id: id
            }
        })
    });

    return(
            <li className='todo-item'>
                <label role="checkbox" tabIndex="0">
                    <input type="checkbox" className='checkbox' name="DONE" onChange={onChange} />
                    <span className='todo-item__text'>{text}</span>
                </label>
                <button className='delete-btn' type='button' onClick={onRemove}>삭제</button>
            </li>
    )
}

export default TodoItem;