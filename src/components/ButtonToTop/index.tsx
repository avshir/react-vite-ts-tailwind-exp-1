import { ReactNode } from 'react';
import Button from '../Button';

interface ButtonToTopProps {
  children: ReactNode
}

export default function ButtonToTop({children}: ButtonToTopProps ) {
  return (
    <Button
      className='rounded-full'
      isActive={true}
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      {children}
    </Button>
  );
}