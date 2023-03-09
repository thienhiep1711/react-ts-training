import { FC, ReactNode, useState } from 'react'
import Button from '../../components/button/button'
import TextInput from '../../components/text-input/text-input'

interface TodoListProps {
  children: ReactNode
}

const TodoList: FC<TodoListProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (value: string) => {
    setInputValue(value)
  }
  return (
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
  )
}

export default TodoList
