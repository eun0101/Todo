import React from 'react';

function TodoBody(){
    return(
        <div className='todo-body'>
            <ul className='todo-list'>
                <li className='todo-item'>
                    <label>
                        <input type="checkbox" className='checkbox' />
                        <span className='todo-item__text'>일1</span>
                    </label>
                    <button className='delete-btn' type='button'>삭제</button>
                </li>
                <li className='todo-item is_checked'>
                    <label>
                        <input type="checkbox" className='checkbox' checked/>
                        <span className='todo-item__text'>일2</span>
                    </label>
                    <button className='delete-btn' type='button'>삭제</button>
                </li>
            </ul>

            <button className='control-btn' type='button'>할 일 추가</button>
        </div>
    )
}

export default TodoBody;