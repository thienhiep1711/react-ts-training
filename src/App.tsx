import TodoList from "./modules/todo-list/todo-list";

function App() {
  return (
    <div className="container py-5">
      <TodoList>
        <h1 className="h3 mb-3 text-primary">Todolist app</h1>
      </TodoList>
    </div>
  )
}

export default App
