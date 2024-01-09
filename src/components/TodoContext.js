import React, {createContext, useContext, useState, useReducer, useRef} from 'react';

const initialState =   [
    {
        id: 1,
        text: "할 일 첫 번째",
        done: true
    },
    {
        id: 2,
        text: "할 일 두 번째",
        done: false
    },
    {
        id: 3,
        text: "할 일 세 번째",
        done: false
    }
];

function reducer(state, action){
    const {id: getId, text: getText} = action.item;
    switch (action.type){
        case 'SUBMIT':
            return state.concat(action.item);
        case'REMOVE':
            return state.filter((todo)=> todo.id !== getId );
        case'DONE':
            return state.map((todo)=> (todo.id == getId)? {...todo, done:!(todo.done)} : todo);
        case 'EDIT':
            return state.map((todo)=> (todo.id == getId)? {...todo, text: getText} : todo);
        default :
            return console.log('타입 틀림');
    }
}

export const TodoStateContext = createContext(initialState);
export const DispatchContext = createContext();
const TodoNextIdContext = createContext();
const TodoOpenPopupContext = createContext();



export function TodoProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <TodoStateContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
                    {children}
                </DispatchContext.Provider>
        </TodoStateContext.Provider>
    )
};

export function TodoPopupProvider({children}){
    const [isOpen, setIsOpen] = useState(false);
    const [popText, setPopText] = useState({popup: false, id: '', text:''});
    const setPopOpen = (popText)=> setPopText({...popText});
    return(
        <TodoOpenPopupContext.Provider value={{isOpen, setPopOpen, popText}}>
            {children}
        </TodoOpenPopupContext.Provider>
    )
};

//상태
export function UseStateContext() {
    const context = useContext(TodoStateContext);

    return context;
}

//reducer 이용할 떄
export function UseDispatchItem() {
    const context = useContext(DispatchContext);

    return context;
}

export function UseTodoOpenPopupContext(){
    const context = useContext(TodoOpenPopupContext);
    return context;
}
