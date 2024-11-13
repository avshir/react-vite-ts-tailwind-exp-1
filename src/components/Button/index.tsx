import { ReactNode, ButtonHTMLAttributes, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive: boolean;
  isRipple?: boolean;
}

export default function Button({
  children,
  isActive,
  isRipple = false,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const rippleRef = useRef<HTMLSpanElement | null>(null);

  // const btnBgClassName = isActive ? 'bg-purple-400' : 'bg-gray-300';
  // const btnClasses = ['py-2 px-6 rounded text-base hover:bg-purple-500', btnBgClassName];
  // className={btnClasses.join(' ')}

  const rippleHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If the ripple effect is disabled, just call onClick and exit.
    if (!isRipple) {
      onClick?.(e);
      return;
    }

    if (rippleRef.current && btnRef.current) {
      rippleRef.current.remove();

      const diameter = Math.max(btnRef.current.clientWidth, btnRef.current.clientHeight);
      const radius = diameter / 2;

      rippleRef.current.style.width = rippleRef.current.style.height = `${diameter}px`;
      rippleRef.current.style.left = `${e.clientX - (btnRef.current.offsetLeft + radius)}px`;
      rippleRef.current.style.top = `${e.clientY - (btnRef.current.offsetTop + radius)}px`;

      // Add ripple to the button and remove it after animation
      btnRef.current.appendChild(rippleRef.current);
    }
    // Call the passed onClick if it exists
    onClick?.(e);
  };

  return (
    <button
      className={twMerge(
        `${isActive ? 'bg-purple-400' : 'bg-gray-300'} relative overflow-hidden rounded border-2 border-solid border-transparent px-6 py-2 text-base transition-colors duration-300 hover:bg-purple-500`,
        className
      )}
      onClick={rippleHandler}
      {...props}
      ref={btnRef}
    >
      {children}
      {isRipple && <span ref={rippleRef} className="ripple"></span>}
    </button>
  );
}
