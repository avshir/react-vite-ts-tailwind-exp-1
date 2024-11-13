import { useState, ChangeEvent } from 'react';

import CreateProduct from '../components/CreateProduct';
import ErrorMessage from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product/Product';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
// import { products } from './data/products';

export default function ProductsPage() {
  const { products, isLoading, error, addProduct } = useProducts();
  const [isModal, setIsModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newSearchValue = event.target.value.trimStart();
    setSearchValue(newSearchValue);
  };

  const createProductHandler = (product: IProduct) => {
    setIsModal(false);
    addProduct(product);
  };

  return (
    <main className="container mx-auto p-8">
      <h1>Products Page</h1>
      <h4 className="text-base font-bold">Used: </h4>
      <ul className="list-disc pl-4 text-base">
        <li>
          <a href="https://fakestoreapi.com" target="_blank">
            API: https://fakestoreapi.com
          </a>{' '}
        </li>
        <li>Infinitely Load Data with 'react-intersection-observer'</li>
      </ul>
      <button
        className="fixed right-5 top-[92px] mx-auto rounded-full bg-purple-700 px-6 py-2 text-base text-white duration-300 hover:bg-purple-500"
        onClick={() => setIsModal(true)}
      >
        + Add new product
      </button>
      {isLoading && <Loader />}
      {error && <ErrorMessage textError={error} />}
      <div className="search-product-section">
        <label htmlFor="search-product" className="text-base font-bold text-yellow-700">
          Search by title:{' '}
        </label>
        <input
          id="search-product"
          type="text"
          placeholder="Search by title product"
          className="mb-2 mr-2 rounded border px-4 py-2"
          value={searchValue}
          onChange={(e) => onSearchChange(e)}
        />
      </div>

      <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-2 py-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
        {products
          .filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </div>
      {isModal && (
        <Modal title="Create new product" onClose={() => setIsModal(false)}>
          <CreateProduct onCreate={createProductHandler} />
        </Modal>
      )}
    </main>
  );
}
