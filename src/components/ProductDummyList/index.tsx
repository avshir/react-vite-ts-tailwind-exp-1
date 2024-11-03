import { useEffect, useRef, useState } from 'react';

import { IProductDummy } from './ProductDummy/index';
import ProductDummy from './ProductDummy';
import { Loader } from '../Loader';

const RESPONSE_DELAY: number = 1500; 
const AMOUNT_ELEM_ON_PAGE: number = 10; 

export default function ProductDummyList() {
  const [products, setProducts] = useState<IProductDummy[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const elementRef = useRef(null);

  function onIntersection(entries: IntersectionObserverEntry[]) {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreItems();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [products]);

  async function fetchMoreItems() {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${AMOUNT_ELEM_ON_PAGE}&skip=${page * AMOUNT_ELEM_ON_PAGE}&delay=${RESPONSE_DELAY}`
    );

    const data: { products: IProductDummy[] } = await response.json();

    if (data.products.length === 0) {
      setHasMore(false);
    } else {
      const newProducts: IProductDummy[] = data.products;
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setPage((prevPage) => prevPage + 1);
    }
  }
  return (
    <>
      {products.map((product) => <ProductDummy key={product.id} item={product}/>
      )}
      {hasMore && (
        <div ref={elementRef} className="sm:col-span-2 lg:col-span-3">
          <Loader />
        </div>
      )}
    </>
  );
}
