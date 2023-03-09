import { FC, ReactNode } from 'react'

interface RadioInputProps {
  children: ReactNode
}

const RadioInput: FC<RadioInputProps> = ({ children }) => {
  return <div>{children || 'RadioInputProps'}</div>
}

export default RadioInput
