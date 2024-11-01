import { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const newProduct: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 5,
    count: 22,
  },
};

interface CreateProduct {
  onCreate: (product: IProduct) => void;
}

export default function CreateProduct({ onCreate }: CreateProduct) {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (inputValue1.trim().length === 0) {
      setError("Please, enter valid title!");
      return;
    }

    newProduct.title = inputValue1;
    newProduct.price = +inputValue2;
    console.log(newProduct);

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      newProduct
    );
    // console.log(response.data);

    onCreate(response.data);
    setInputValue1("");
    setInputValue2("");
    // console.log("ku");
    // console.log(event.target);

    // сделать валидацию на днные в инпут. Если есть ошибка, то засетить текст ошибки.
    // сделать Post запрос на сервер  с данными из инпутов- стэйтов
    // очисить поля формы при успешном запросе
  };

  const input2Handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);

    setInputValue2(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="mb-2 mr-2 border px-4 py-2 outline-0"
        placeholder="Product name *"
        value={inputValue1}
        onChange={(event) => setInputValue1(event.target.value)}
      />
      {error && <ErrorMessage textError={error} />}
      <input
        type="text"
        className="mb-2 mr-2 border px-4 py-2"
        placeholder="Product price"
        value={inputValue2}
        onChange={input2Handler}
      />
      <button type="submit" className="rounded bg-yellow-400 px-4 py-2 hover:text-white">
        Create
      </button>
    </form>
  );
}
