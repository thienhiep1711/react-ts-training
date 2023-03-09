import { FC, ReactNode } from 'react'

interface CheckboxInputProps {
  children: ReactNode
}

const CheckboxInput: FC<CheckboxInputProps> = ({ children }) => {
  return <div>{children || 'CheckboxInput'}</div>
}

export default CheckboxInput
