import { FC } from 'react'

interface TodoItemProps {
  item: TodoItem
}

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  return <div>{item.title}</div>
}

export default TodoItem
