import React, {createContext, useContext, useState, useReducer, useRef} from 'react';

const initialState =   [
    {
        id: 1,
        text: "할 일 첫 번째"
    },
    {
        id: 2,
        text: "할 일 두 번째"
    },
    {
        id: 3,
        text: "할 일 세 번째"
    }
];


function reducer(state, action){
    switch (action.type){
        case 'SUBMIT':
            return state.concat(action.item);
        default :
            return state;
    }
}

export const TodoStateContext = createContext();
export const DispatchContext = createContext();
const TodoNextIdContext = createContext();



export function TodoProvider({children}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4); //다음 id값

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

export function UseStateContext() {
    const context = useContext(TodoStateContext);

    return context;
}

export function UseDispatchItem() {
    const context = useContext(DispatchContext);

    return context;
}

export function UseTodoNextId(){
    const context = useContext(TodoNextIdContext);
    return context;
}

