import React, {useCallback, useState} from 'react';
import {UseTodoOpenPopupContext, UseDispatchItem} from "./TodoContext";


function TodoEditForm({onSubmit, defaultText, textChange}){
    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                   autoFocus
                   className='input-edit'
                   name="input-edit"
                   placeholder="수정 할 내용을 입력하세요."
                   defaultValue={defaultText}
                   onChange={textChange} />
        </form>
    )
}

function TodoPopup(){
    const dispatch = UseDispatchItem();
    let {popText, setPopOpen} = UseTodoOpenPopupContext();
    const {id: id, text: defaultText} = popText;

    const [editText= defaultText, setEditText] = useState();
    const textChange = (e)=>{
        const {value} = e.target;
        setEditText(value);
    }

    const onClose = useCallback(()=>{
        setPopOpen({popup: false});
    }, [popText]);

    const [guide, setGuide] = useState(false);
    const onSubmit = useCallback((e)=>{

            e.preventDefault();
            dispatch({
                type: 'EDIT',
                item:{
                    id: id,
                    text: editText
                }
            })
            setGuide(true);

    },[editText]);

    return(
        <>
            <section className="popup">
                <div className="edit-wrap">
                    <div className="edit-content">
                        {guide? "수정 되었습니다." : <TodoEditForm
                            onSubmit={onSubmit}
                            defaultText = {defaultText}
                            textChange={textChange}
                        />}
                    </div>

                    <div className="btns-wrap">
                        <input type="button" className="btn-close" value={`${guide? '닫기': '취소'}`} onClick={onClose}/>
                        <input type={`${guide? 'hidden' : 'button'}`} className="btn-edit-complete" value="수정 완료" onClick={onSubmit}/>
                    </div>
                </div>
            </section>

        </>
    )
}

export default React.memo(TodoPopup);