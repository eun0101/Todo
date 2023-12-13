import React, {useContext} from 'react';
import {useState, useRef, useCallback} from "react";
import {UseDispatchItem,  UseTodoNextId} from "./TodoContext";


function TodoCreate(){
    const dispatch = UseDispatchItem();
    let nextId = UseTodoNextId();
    // const [nextId, setNextId] = useState(4);
    const [text, setText] = useState();
    const textInput = useRef();


    const onClick = useCallback (()=>{

        dispatch({
                type: 'SUBMIT',
                item: {
                    id: nextId,
                    text: text
                }
            });

        nextId += 1;
        setText('');
    });

    const onChange = (e) => {
        const {value} = e.target;
        setText(value);
    }

    return(
        <div className='todo-create'>
            <input type="button" className='create-btn' value='할 일 추가하기' onClick={onClick}/>
            <form className="create">
                <input type="text" className='create-text' placeholder='할 일을 적으세요.'
                       useref={textInput}
                       onChange={onChange}
                       onSubmit={onClick}
                       value={text}
                />
            </form>
        </div>
    )
}

export default TodoCreate;