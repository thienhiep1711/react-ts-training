import { ChangeEvent, FC, FormEvent, useState } from 'react'

interface TodoFormProps {
  addTodo: AddTodo
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <div>
      <input id="text-input" onChange={handleChange} value={newTodo}></input>
      <button type="button" className="button-primary ml-3" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default TodoForm
