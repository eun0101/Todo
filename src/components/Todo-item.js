import React, {useCallback} from 'react';
import { UseDispatchItem, UseTodoOpenPopupContext} from "./TodoContext";


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

    const {setPopOpen} =  UseTodoOpenPopupContext();
    const openPopup = useCallback(()=>{
        setPopOpen({popup: true, id: id, text: text});
    }, [id, text]);

    return(
            <li className='todo-item'>
                <label role="checkbox" tabIndex="0">
                    <input type="checkbox" className='checkbox' name="DONE" onChange={onChange} checked={done}/>
                    <div className='todo-item__text'>
                        {text}
                    </div>
                </label>
                <div className="btns-wrap">
                    <button className='btn-edit' type='button' onClick={openPopup}>수정</button>
                    <button className='btn-delete' type='button' onClick={onRemove}>삭제</button>
                </div>
            </li>
    )
}

export default TodoItem;