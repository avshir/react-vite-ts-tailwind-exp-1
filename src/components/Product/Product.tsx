import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { IProduct } from '../../models';
import { ProductSkeleton } from './ProductSkeleton';

import './product.css';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */   
    threshold: 0.4,
    triggerOnce: true,
    // rootMargin: '100px 0px',
  });

  const toggleBtn = () => setShowDetails((prev) => !prev);
  // console.log(product);
  // console.log(showDetails);

  const btnBgClassName = showDetails ? 'bg-yellow-400' : 'bg-purple-400';
  const btnClasses = ['py-2 px-6 rounded text-base hover:bg-purple-500', btnBgClassName];

  return (
    <div
      ref={ref}
      className="product-card flex mx-auto w-[280px] md:w-[225px] flex-col items-center gap-2 rounded-lg bg-gray-50 px-6 py-4 shadow-lg duration-500 ease-in-out hover:scale-[1.05]"
    >
      {inView ? (
        <>
          <div className="relative w-[50%] pb-[75%]">
            <img src={product.image} className="absolute h-full w-full" alt={product.title} />
          </div>
          <p className="h-[72px] text-balance text-base">{product.title}</p>
          <p className="text-2xl font-bold">{product.price} $</p>
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
        </>
      ) : (
        <ProductSkeleton />
      )}
    </div>
  );
};
