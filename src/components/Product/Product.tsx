import { useState } from 'react';
import { IProduct } from '../../models';

import './product.css';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleBtn = () => setShowDetails((prev) => !prev);
  // console.log(product);
  // console.log(showDetails);

  const btnBgClassName = showDetails ? 'bg-yellow-400' : 'bg-purple-400';
  const btnClasses = ['py-2 px-6 rounded text-base hover:bg-purple-500', btnBgClassName];

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 px-6 py-4 shadow-lg duration-500 ease-in-out hover:scale-[1.05]">
      <div className="flex-auto">
        <img src={product.image} className="mx-auto w-1/3" alt={product.title} />
      </div>
      <p className="text-balance text-base">{product.title}</p>
      <p className="text-2xl font-bold">{product.price} $</p>
      {/* <button onClick={toggleBtn} className="px-2 px-4 border bg-yellow-400">Show details</button> */}
      <button onClick={toggleBtn} className={btnClasses.join(' ')}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
      {showDetails && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{' '}
            <span style={{ color: 'purple', fontWeight: 'bold' }}>{product.rating?.rate}</span>
          </p>
          <p>
            Count: <span className="product-btn">{product.rating?.count}</span>
          </p>
        </div>
      )}
    </div>
  );
};
