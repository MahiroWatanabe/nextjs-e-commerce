import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/legacy/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;
const rate = 150;

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();

  const [rating] = useState(3);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
    };

    dispatch(addToBasket(product));
  };

  const [convertedPrice, setConvertedPrice] = useState(price * rate);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic">{category}</p>
      <Image alt="" src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array.from({ length: 3 }, (_, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500" />
        ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={convertedPrice} currency="JPY" />
      </div>

      <button
        onClick={addItemToBasket}
        className="mt-auto button md:text-sm focus:outline-none
       focus:ring-2 focus:ring-yellow-500 active:from-yellow-500"
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
