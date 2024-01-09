import './App.css';
import './index.css';
import './styles/style.scss'
import './components/Todo-head'
import {TodoPopupProvider, TodoProvider} from "./components/TodoContext";

import React from 'react';
import Todo from "./components/Todo";

function App() {
  return (
      <>
      <TodoProvider>
          <div className="wrap">
              <TodoPopupProvider>
                  <Todo/>
              </TodoPopupProvider>
          </div>
      </TodoProvider>
      </>
  );
}

export default App;
