import React, {} from 'react';

function TodoBody(){
    return(

            <li className='todo-item'>
                <label>
                    <input type="checkbox" className='checkbox' />
                    <span className='todo-item__text'>{initialTodos.text}</span>
                </label>
                <button className='delete-btn' type='button'>삭제</button>
            </li>
    )
}

export default TodoBody;