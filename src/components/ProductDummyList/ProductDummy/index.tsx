export interface IProductDummy {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number,
  brand: string;
  thumbnail: string;
  images: string[];
}

interface ProductDummyProps {
  item: IProductDummy;
}

export default function ProductDummy({ item }: ProductDummyProps) {
  return (
    <div
      id={`product-dummy-card-${item.id}`}
      className="product-dummy-card mx-auto w-[280px] rounded-lg bg-gray-50 shadow-lg md:w-[320px]"
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
  );
}
