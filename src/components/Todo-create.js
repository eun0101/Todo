import React from 'react';

function TodoCreate(){
    return(
        <div className='todo-create'>
            <input type="button" className='create-btn' value='할 일 추가하기'/>
            <form className="create">
                <input type="text" className='create-text' placeholder='할 일을 적으세요.'/>
            </form>
        </div>
    )
}

export default TodoCreate;