interface ButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export default function Button({ children, isActive, ...props }: ButtonProps) {
  const btnBgClassName = isActive ? 'bg-purple-400' : 'bg-gray-300';
  const btnClasses = ['py-2 px-6 rounded text-base hover:bg-purple-500', btnBgClassName];

  return (
    <button {...props} className={btnClasses.join(' ')}>
      {children}
    </button>
  );
}
