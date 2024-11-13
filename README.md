# React + Vite + TypeScript + Tailwind CSS + Experiments

## Demo: [https://avshir.github.io/react-vite-ts-tailwind-exp-1/](https://avshir.github.io/react-vite-ts-tailwind-exp-1/)

### Used technologies:
- React, Vite, 
- TypeScript
- Tailwind CSS
- utility classnames
- prettier
- react-router-dom (BrowserRouter)
- "react-intersection-observer" (for Lazy image load in ProductPage)
- Intersection observer API (for Lazy image load and infinite scrolling in ProductDummyPage)
- vite-plugin-svgr (for to transform SVGs into React components )
- tailwind-merge (utility function to efficiently merge Tailwind CSS classes in JS without style conflicts)
- deploy: gh-pages

### Feat
- ModalPotal (used React.createPortal, dialog HTML, close: on "X" button, "Cancel" button, outside, by key 'Escape', )
ButtonList
- IconsList - use SVG icons as React components
- ButtonList  - use animation opacity for list, close by click outside (use useRef, event.composedPath(), document.body.addEventListener('click', handleOnWindowClick) )
- [Convert SVG to JSX - free web tool] (https://svg2jsx.com/)
- [Simple icons for brands](https://simpleicons.org/)
- Button - reuseable, ripple effect, animation
- ButtonToTop - with smooth effect to top


### Used API:
- [fakestoreapi.com](https://fakestoreapi.com/products) - for ProductPage
- [dummyjson.com](https://dummyjson.com/) - for ProductDummyPage with Infinitely Load More Data using Intersection observer

### Used tutorials:
- [React и TypeScript - Быстрый Курс 2020 Minin](https://www.youtube.com/watch?v=OJ16BaPC6VI&list=PLsRtCt_LrZRZzfZE1QxtYYtibGfDh8sYv)
- [Tailwind М.Непомнящий](https://www.youtube.com/watch?v=B6Aw8Ed-0eE&list=PLsRtCt_LrZRZzfZE1QxtYYtibGfDh8sYv&index=14)
- [Infinitely Load More Data in React with the IntersectionObserver API](https://www.youtube.com/watch?v=WFw_SgVlXUY)
- [React Intersection Observer (scroll + lazy-load картинок)](https://www.youtube.com/watch?v=a9GQFD5t6Jo) with plugin "react-intersection-observer" (for ProductPage)

- [Deploy Vite to gh-pages](https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf)
- [Deploy Vite to gh-pages fix routes errors](https://medium.com/@Satyam_Mishra/react-router-deployment-to-gh-pages-issue-fixed-2024-bc7fd80946ad) to fix routes errors with createBrowserRouter/BrowserRouter

- [Transform SVGs into React components](https://dev.to/cassidoo/importing-svg-files-as-react-components-with-vite-l3n)
- [ButtonList tailwind][https://www.youtube.com/watch?v=1gX6_WMjLxo]
- [Detect Clicks Anywhere on a Page in React](https://www.youtube.com/watch?v=M_HujIFsIb0)
- [Smooth Scroll to an Element in React](https://www.youtube.com/watch?v=MjHlltcA-nA)
- [Tailwind is messy. Make reusable components (button) instead with ReactJS, TailwindCSS, & TypeScript](https://www.youtube.com/watch?v=wg3c1Q2nzUQ)
