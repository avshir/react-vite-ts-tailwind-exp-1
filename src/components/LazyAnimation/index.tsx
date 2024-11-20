// https://github.com/thebuilder/react-intersection-observer/blob/HEAD/docs/Recipes.md#trigger-animations
// use react-intersection-observer, ?tailwindcss-animated
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyAnimationProps {
  children: ReactNode;
}

const LazyAnimation = ({ children }: LazyAnimationProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
    // rootMargin: '-50px 0px',
  });

  return (
    <section
      id="lazyAnimation-section"
      ref={ref}
      className={`transition-opacity duration-[3000ms] ${inView ? 'opacity-1' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl p-8 text-center text-white/50">{inView && children}</div>
    </section>
  );
};

export default LazyAnimation;
