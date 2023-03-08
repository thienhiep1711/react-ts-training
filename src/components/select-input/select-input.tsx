import { FC, ReactNode } from 'react';

interface SelectInputProps {
  children: ReactNode;
}

const SelectInput: FC<SelectInputProps> = ({ children }) => {
  return (
    <div>
      {children || 'SelectInputProps'}
    </div>
  );
};

export default SelectInput;
