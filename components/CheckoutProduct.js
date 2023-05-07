import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/legacy/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/slices/basketSlice";

const CheckoutProduct = (props) => {
  const { id, title, price, rating, description, category, image, hasPrime } =
    props;

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    //   idを引数として渡すことでreducの方で処理を行うことができる
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array.from({ length: rating }, (_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="JPY" />
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button
          onClick={addItemToBasket}
          className="button md:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500"
        >
          Add to Basket
        </button>
        <button
          onClick={removeItemFromBasket}
          className="button md:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
