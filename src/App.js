import logo from './logo.svg';
import './App.css';
import './index.css';
import './styles/style.scss'
import './components/Todo-head'
import {TodoProvider} from "./components/TodoContext";

import React from 'react';
import Todo from "./components/Todo";

function App() {
  return (
      <>
      <TodoProvider>
          <div className="wrap">
              <Todo/>
          </div>
      </TodoProvider>
      </>
  );
}

export default App;
