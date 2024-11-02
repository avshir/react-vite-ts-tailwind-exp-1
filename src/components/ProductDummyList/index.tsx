import { useEffect, useRef, useState } from 'react';

import { IProductDummy } from './ProductDummy/index';
import ProductDummy from './ProductDummy';
import { Loader } from '../Loader';


export default function ProductDummyList() {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const elementRef = useRef(null);

  function onIntersection(entries: unknown[]) {
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
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}&delay=1500`);

    const data = await response.json();

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
