import React, {createContext, useContext, useState, useReducer, useRef} from 'react';

const initialState =   [
    {
        id: 1,
        text: "할 일 첫 번째",
        done: false
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
    const {id: getId} = action.item;
    switch (action.type){
        case 'SUBMIT':
            return state.concat(action.item);
        case'REMOVE':
            return state.filter((todo)=> todo.id !== getId);
        case'DONE':

            return state.map((todo)=> (todo.id == getId)? {...todo, done:!(todo.done)} : todo)
        default :
            return state;
    }
}

export const TodoStateContext = createContext(initialState);
export const DispatchContext = createContext();
const TodoNextIdContext = createContext();



export function TodoProvider({children}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(reducer, initialState);
    let nextId = useRef(4); //다음 id값

    return(
        <TodoStateContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
                    <TodoNextIdContext.Provider value={nextId}>
                        {children}
                    </TodoNextIdContext.Provider>
                </DispatchContext.Provider>
        </TodoStateContext.Provider>
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

//다음 id값
export function UseTodoNextId(){
    const context = useContext(TodoNextIdContext);
    return context;
}

