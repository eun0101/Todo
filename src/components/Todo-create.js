import React, {useState, useRef, useCallback, useEffect} from 'react';
import {UseDispatchItem,  UseTodoNextId, UseOnChange} from "./TodoContext";


function TodoCreateForm({onSubmit, onChange, textInput, text}){
    return(
        <>
            <form className="create-form" onSubmit={onSubmit}>
                <input type="text" className='create-text' placeholder='할 일을 적으세요.'
                       ref={textInput}
                       onChange={onChange}
                       value={text || ''}
                />
                <input type="button" className='create-btn' value='추가' onClick={onSubmit}/>
            </form>

        </>
    )
}

function TodoCreate(){
    const dispatch = UseDispatchItem();
    let nextId = UseTodoNextId();
    const [text, setText] = useState();
    const textInput = useRef();

    const [isOpen, setIsOpen]= useState(false);
    const openCreate = ()=>{
        setIsOpen(!isOpen);
        setText('');
    };

    //isOpen 값이 바뀌면 실행 되도록 함
    useEffect(()=>{
        setTimeout(()=>{
            isOpen&& textInput.current.focus();
        },500)
    },[isOpen])

    const onSubmit = useCallback ((e)=>{
        e.preventDefault();
        dispatch({
                type: 'SUBMIT',
                item: {
                    id: nextId.current,
                    text: text,
                    done: false
                }
            });

        nextId.current += 1;
        setText('');
    });

    const onChange = (e) => {
        const {value} = e.target;
        setText(value);
    }

    return(
        <div className={`todo-create ${isOpen? "is_open" : ''}`}>
            <button className='control-btn' type='button' onClick={openCreate}>할 일 추가</button>
            <TodoCreateForm
                onSubmit={onSubmit}
                onChange={onChange}
                textInput = {textInput}
                text={text}
                />

        </div>
    )
}

export default TodoCreate;