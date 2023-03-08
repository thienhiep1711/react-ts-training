import Button from "./components/button/button"
import TextInput from "./components/text-input/text-input"
import { useState } from 'react'
import TodoList from "./modules/todo-list/todo-list";

function App() {
  return (
    <div className="container py-5">
      <TodoList>
        <h1 className="h3 mb-3">Todo list app</h1>
      </TodoList>
    </div>
  )
}

export default App
