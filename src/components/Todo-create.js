import React, {useContext} from 'react';
import {useState, useRef, useCallback} from "react";
import {UseDispatchItem,  UseTodoNextId} from "./TodoContext";


function TodoCreate(){
    const dispatch = UseDispatchItem();
    let nextId = UseTodoNextId();
    // const [nextId, setNextId] = useState(4);
    const [text, setText] = useState();
    const textInput = useRef();

    const [isOpen, setIsOpen]= useState(false);
    const openCreate = (e)=>{
        setIsOpen(!isOpen);
    }

    const onSubmit = useCallback ((e)=>{
        e.preventDefault();
        dispatch({
                type: 'SUBMIT',
                item: {
                    id: nextId.current,
                    text: text
                }
            });

        nextId.current += 1;
        setText(undefined);
    });

    const onChange = (e) => {
        const {value} = e.target;
        setText(value);
    }

    return(
        <div className={`todo-create ${isOpen? "is_open" : ''}`}>
            <button className='control-btn' type='button' onClick={openCreate}>할 일 추가</button>

            <input type="button" className='create-btn' value='추가' onClick={onSubmit}/>
            <form className="create" onSubmit={onSubmit}>
                <input type="text" className='create-text' placeholder='할 일을 적으세요.'
                       useref={textInput}
                       onChange={onChange}
                       value={text || ''}
                />
            </form>
        </div>
    )
}

export default TodoCreate;