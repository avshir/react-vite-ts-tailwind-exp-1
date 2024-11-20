// https://github.com/thebuilder/react-intersection-observer/blob/HEAD/docs/Recipes.md#trigger-animations
// use react-intersection-observer, tailwindcss-animated

import LazyAnimation from '../LazyAnimation';

const LazyAnimationSection = () => {
  return (
    <LazyAnimation>
      <h2 className="text-purple-300">Block with LazyAnimation</h2>
      <h4 className="text-2xl text-gray-300">
        use "react-intersection-observer", use "tailwindcss-animated" for list
      </h4>
      <span aria-label="Wave" className="block">
        👋 TEXT
      </span>

      <ul>
        <li className="animate-fade-up animate-delay-300 animate-once">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, modi?
        </li>
        <li className="animate-fade-up animate-delay-500 animate-once">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, modi?
        </li>
        <li className="animate-fade-up animate-delay-700 animate-once">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, modi?
        </li>
      </ul>
    </LazyAnimation>
  );
};

export default LazyAnimationSection;
