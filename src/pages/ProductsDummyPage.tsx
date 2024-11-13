import ProductsDummyList from './../components/ProductDummyList';
import ButtonToTop from '../components/ButtonToTop';

export default function ProductsDummyPage() {
  return (
    <main className="container mx-auto p-8">
      <h1>ProductsDummyPage</h1>
      <h4 className="text-base font-bold">Used: </h4>
      <ul className="list-disc pl-4 text-base">
        <li>
          <a href="https://dummyjson.com/" target="_blank">
            API: https://dummyjson.com/
          </a>{' '}
          (with Delay Responses 1500)
        </li>
        <li>Infinitely Load Data with the IntersectionObserver API</li>
      </ul>
      <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProductsDummyList />
      </div>
      <div className="fixed bottom-6 right-4">
        <ButtonToTop>↑</ButtonToTop>
      </div>
    </main>
  );
}
