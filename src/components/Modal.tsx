import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  asterix?: boolean;
  onClose: () => void;
}

export const Modal = ({ children, title = 'Modal', asterix = false, onClose }: ModalProps) => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black/50" onClick={onClose}></div>
      <div className="absolute left-1/2 top-1/3 z-10 w-[500px] -translate-x-1/2 rounded-xl bg-white p-8">
        <h1 className="mb-2 text-center text-2xl">{title}</h1>
        {asterix && <span>*</span>}
        {children}
      </div>
    </>
  );
};
