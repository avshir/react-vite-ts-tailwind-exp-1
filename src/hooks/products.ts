import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { IProduct } from "../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  function addProduct (product: IProduct) {
    setProducts(prev => [...prev, product]);
  }

  // console.log(products);

  // 1-variant
  // function fetchProducts () {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then(res => {
  //       console.log(res);
  //       return setProducts(res);
  //     });
  // };

  // 2-variant
  async function fetchProducts() {
    try {
      setError("");
      setIsLoading(true);
      const res = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      console.log(res);
      setProducts(res.data);
      setIsLoading(false);
    } catch (err: unknown) {
      const error = err as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    // console.log("1");
    fetchProducts();
  }, []);

  return { products, isLoading, error, addProduct };
}
