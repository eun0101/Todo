import logo from './logo.svg';
import './App.css';
import './index.css';
import './styles/style.scss'
import './components/Todo-head'
import TodoHead from "./components/Todo-head";
import TodoBody from "./components/Todo-body";
import TodoCreate from "./components/Todo-create";
import {TodoProvider} from "./components/TodoContext";

import React from 'react';

function App() {
  return (
      <>
      <TodoProvider>
          <div className="wrap">
              <div className="todo">
                  <TodoHead/>
                  <TodoBody/>
                  <TodoCreate></TodoCreate>
              </div>
          </div>
      </TodoProvider>
      </>
  );
}

export default App;
