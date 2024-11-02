import ProductsDummyList from './../components/ProductDummyList';

export default function ProductsDummyPage() {
  return (
    <main className="container mx-auto p-8">
      <h1>ProductsDummyPage</h1>
      <h2 className="text-base font-bold">Used: </h2>
      <ul className="list-disc pl-4 text-base">
        <li>
          <a href="https://dummyjson.com/" target="_blank">
            API: https://dummyjson.com/
          </a>{' '}
          (with Delay Responses 1500)
        </li>
        <li>Infinitely Load Data with the IntersectionObserver API</li>
      </ul>
      <div className="mx-auto grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3 max-w-[1024px]">
        <ProductsDummyList />
      </div>
    </main>
  );
}
