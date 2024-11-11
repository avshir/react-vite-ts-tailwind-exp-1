import { useEffect, useState, useRef } from 'react';

import Button from '../Button';
import { YoutubeColorIcon, GoogleIcon } from '../Icons';

export default function ButtonList() {
  const [isListOpen, setIsListOpen] = useState(false);
  const toggleList = () => setIsListOpen((prev) => !prev);
  const elemRef = useRef<HTMLSpanElement | null>(null)

  // close by click outside open list
  useEffect(() => {
    if (!isListOpen) return;

    const handleOnWindowClick = (event: MouseEvent) => {
      if (elemRef.current && !event.composedPath().includes(elemRef.current)) {
        setIsListOpen(false);
      }
    } 

    document.body.addEventListener('click', handleOnWindowClick);

    return () => document.body.removeEventListener('click', handleOnWindowClick);
  }, [isListOpen]);

  return (
    <>
      <h3>ButtonList component</h3>
      <span ref={elemRef} className="relative inline-block mb-4">
        <Button onClick={toggleList} isActive={true}>
          Show list with animation opacity + SVG icons
        </Button>
        <ul
          className={`${isListOpen ? 'opacity-100' : 'invisible opacity-0'} absolute my-2 rounded bg-white px-3 py-1 text-lg shadow-lg transition-all duration-500`}
        >
          <li>
            <a
              href="http://google.com"
              target="_blank"
              className="flex items-center gap-2 whitespace-nowrap px-4 py-2"
            >
              <GoogleIcon className="h-4 w-4" />
              Link 1 go to Google
            </a>
          </li>
          <li>
            <a
              href="http://youtube.com"
              target="_blank"
              className="flex items-center gap-2 whitespace-nowrap px-4 py-2"
            >
              <YoutubeColorIcon className="h-4 w-4" />
              Link 2 go to Youtube
            </a>
          </li>
        </ul>
      </span>
    </>
  );
}
