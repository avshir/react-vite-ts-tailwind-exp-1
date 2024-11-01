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
    <main className="container mx-auto max-w-[1000px] p-8">
      <h1>Products Page</h1>
      <button
        className="fixed right-5 top-[92px] mx-auto rounded-full bg-purple-700 px-6 py-2 text-base text-white duration-300 hover:bg-purple-500"
        onClick={() => setIsModal(true)}
      >
        + Add new product
      </button>
      {isLoading && <Loader />}
      {error && <ErrorMessage textError={error} />}
      <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
