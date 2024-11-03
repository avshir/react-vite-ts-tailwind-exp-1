import { useState } from 'react';
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

  const createProductHandler = (product: IProduct) => {
    setIsModal(false);
    addProduct(product);
  };

  return (
    <main className="container mx-auto p-8">
      <h1>Products Page</h1>
      <h2 className="text-base font-bold">Used: </h2>
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
      <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-2 py-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
        {products.map((product) => (
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
