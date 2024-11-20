// https://ui.aceternity.com/components/grid-and-dot-backgrounds
import { ReactNode } from 'react';

interface DotBackgroundDemoProps {
  children: ReactNode;
}

export function DotBackgroundDemo({ children }: DotBackgroundDemoProps) {
  return (
    <div className="relative flex h-[25rem] w-full items-center justify-center bg-purple-200 bg-dot-black/[0.4] dark:bg-black dark:bg-dot-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-indigo-500 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="mx-auto w-full max-w-4xl p-8">{children}</div>
    </div>
  );
}
