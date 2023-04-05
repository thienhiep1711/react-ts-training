type AddTodo = (newTodo: string) => void
type RemoveTodo = (todoToRemove: TodoItem) => void
type EditTodo = (todoEdit: TodoItem) => void

type TodoItem = {
  completed: Boolean
  title: String
  archived: Boolean
}

type ToggleCompleted = (selectedTodo: TodoItem) => void
