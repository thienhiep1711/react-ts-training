import { FC, ReactNode, useState } from 'react'
import PageLayout from '../../components/page-layout/page-layout'
import TodoForm from './todo-form'
import TodoList from './todo-list'

interface TodoAppProps {
  children: ReactNode
  addTodo: AddTodo
}

const TodoApp: FC<TodoAppProps> = ({ children }) => {
  const [todos, setTodos] = useState<Array<TodoItem>>([])

  const onAddTodo: AddTodo = (newTodo) => {
    if (newTodo !== '') {
      setTodos([...todos, { title: newTodo, completed: false, archived: false }])
    }
  }

  return (
    <PageLayout title="Todo List App" author="Hiep Nguyen" completedDate="Not completed" startDate="04/04/2023">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[600px]">
          <div>{children}</div>
          <div className="flex">
            <TodoForm addTodo={onAddTodo} />
            <TodoList items={todos}/>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default TodoApp
