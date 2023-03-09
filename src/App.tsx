import Modal from "./components/modal/modal";
import TodoList from "./modules/todo-list/todo-list";

function App() {
  const Heading = () => {
    return <div>
      Modal header
    </div>
  }
  return (
    <div className="container py-5">
      <TodoList>
        <h1 className="h3 mb-3 text-primary">Todolist app</h1>
      </TodoList>
      <Modal heading={<Heading />}>
        The content 1
      </Modal>
      <Modal heading="Modal header 2">
        The content 2
      </Modal>
    </div>
  )
}

export default App
