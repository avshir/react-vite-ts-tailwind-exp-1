import { createPortal } from 'react-dom';

import Button from '../Button/index';
import { ReactNode, useRef, useEffect } from 'react';

interface ModalPortalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  closeOnEsc?: boolean;
}

const modalEl = document.getElementById('modal-root');

export default function ModalPortal({
  children,
  onClose,
  isOpen,
  closeOnEsc = true,
}: ModalPortalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (closeOnEsc && isOpen && e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyPress);
    
    return () => window.removeEventListener('keydown', onKeyPress);
  }, [closeOnEsc, onClose, isOpen]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className="relative z-10 max-h-[80vh] w-[400px] max-w-[60%] rounded p-8 backdrop:bg-neutral-600/80"
      onClick={onClose}
    >
      <div onClick={(event) => event.stopPropagation()}>
        {/* closer in the corner */}
        <button
          className="absolute right-2 top-2 flex h-8 w-8 justify-center rounded-full bg-purple-400 shadow-xl hover:bg-purple-500"
          onClick={() => onClose()}
          title="Bye bye"
        >
          <span className="select-none text-2xl leading-7">&times;</span>
        </button>
        {children}
        <div className="text-center">
          <Button onClick={onClose} isActive={true}>
            Cancel
          </Button>
        </div>
      </div>
    </dialog>,
    modalEl!
  );
}
