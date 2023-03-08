import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
