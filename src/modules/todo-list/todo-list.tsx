import { FC, ReactNode, useState } from 'react'
import Button from '../../components/button/button'
import TextInput from '../../components/text-input/text-input'
import PageLayout from '../../components/page-layout/page-layout'

interface TodoListProps {
  children: ReactNode
}

const TodoList: FC<TodoListProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (value: string) => {
    setInputValue(value)
  }
  return (
    <PageLayout title="Todo List App" author="Hiep Nguyen" completedDate="Not completed" startDate="04/04/2023">
      <div className="flex justify-center">
        <div className="flex-col">
          <div>{children}</div>
          <div className="flex w-[600px]">
            <TextInput id="text-input" label="Text input" classWrap="flex-auto" onChange={handleOnChange} value={inputValue}></TextInput>
            <Button className="button-primary ml-3" type="button" onClick={() => console.log('clicked button')}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default TodoList
