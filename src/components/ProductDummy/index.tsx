import React, { useEffect, useRef, useState } from 'react';
import { products } from '../../data/products';
import { ProductSkeleton } from '../Product/ProductSkeleton';
import { Loader } from '../Loader';

interface IProductDummy {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  // "discountPercentage": 7.17,
  // "rating": 4.94,
  // "stock": 5,
  // "tags": [
  //   "beauty",
  //   "mascara"
  // ],
  // "brand": "Essence",
  thumbnail: string;
  images: string[];
}

export default function ProductDummy() {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const elementRef = useRef(null);

  function onIntersection(entries) {
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
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}`);
    const data = await response.json();
    // const products: IProductDummy = data.products;

    if (data.products.length == 0) {
      setHasMore(false);
    } else {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      setPage((prevPage) => prevPage + 1);
    }
  }
  return (
    <>
      {products.map((item) => (
        <div
          className="product-dummy-card mx-auto mb-2 w-[600px] rounded-lg bg-gray-50 shadow-lg"
          key={item.id}
        >
          <div className="flex gap-4 p-4">
            <div className="product-dummy-card__img">
              <img src={item.thumbnail} alt="Product Image" className="m-2 w-full" />
            </div>
            <div className="product-dummy-card__body">
              <p className="text-base">{item.description}</p>
              <p className="text-lg font-bold">$ {item.price}</p>
            </div>
          </div>
        </div>
      ))}
      {hasMore && (
        <div ref={elementRef} className="text-center">
          <Loader />
        </div>
      )}
    </>
  );
}
