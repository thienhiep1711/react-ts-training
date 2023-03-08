import { FC, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  return (
    <div>
      {children || 'carousel'}
    </div>
  );
};

export default Carousel;
