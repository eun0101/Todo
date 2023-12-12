import logo from './logo.svg';
import './App.css';
import './index.css';
import './styles/style.scss'
import './components/Todo-head'
import TodoHead from "./components/Todo-head";
import TodoBody from "./components/Todo-body";
import TodoCreate from "./components/Todo-create";

import React, {createContext} from 'react';
export const TodoDispatch = React.createContext(null);

function App() {
  return (
      <TodoDispatch.Provider >
          <div className="wrap">
              <div className="todo">
                  <TodoHead></TodoHead>
                  <TodoBody></TodoBody>

                  <TodoCreate></TodoCreate>
              </div>
          </div>
      </TodoDispatch.Provider>
  );
}

export default App;
