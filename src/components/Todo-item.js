import React, {createContext} from 'react';



function TodoItem({key, text}){
    return(
            <li className='todo-item' key = {key}>
                <label>
                    <input type="checkbox" className='checkbox' />
                    <span className='todo-item__text'>{text}</span>
                </label>
                <button className='delete-btn' type='button'>삭제</button>
            </li>
    )
}

export default TodoItem;