import { FC } from 'react'
import TodoItem from './todo-item'

interface TodoListProps {
  items: Array<TodoItem>
}

const TodoList: FC<TodoListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.title} item={item} />
      ))}
    </div>
  )
}

export default TodoList
