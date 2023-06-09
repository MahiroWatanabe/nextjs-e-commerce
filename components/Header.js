import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";

const Header = () => {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-5 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 sm:mr-5">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            alt=""
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>

        <div
          className="hidden sm:flex items-center h-10 rounded-md
         bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer"
        >
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md
            focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        <div
          className="text-white flex items-center text-xs space-x-6
        mx-6 whitespace-nowrap"
        >
          <div onClick={signIn} className="link hover:underline">
            <p>Hello guys</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link hover:underline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link hover:underline relative flex items-center
          "
          >
            <span
              className="absolute top-0 right-0 md:right-10 
            h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold"
            >
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Busket
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center p-2 pl-6 space-x-3 bg-amazon_blue-light text-white text-sm">
        <p className="link hover:underline flex items-center">
          <Bars3Icon className="h-6 mr-1" />
        </p>
        <p className="link hover:underline">Prirme Video</p>
        <p className="link hover:underline">Amazon Businness</p>
        <p className="link hover:underline">Todey's Deals</p>
        <p className="link hover:underline hidden lg:inline-flex">
          Electronics
        </p>
        <p className="link hover:underline hidden lg:inline-flex">
          Food & Grocery
        </p>
        <p className="link hover:underline hidden lg:inline-flex">Prime</p>
        <p className="link hover:underline hidden lg:inline-flex">Buy Again</p>
        <p className="link hover:underline hidden lg:inline-flex">
          Shopper Toolkit
        </p>
        <p className="link hover:underline hidden lg:inline-flex">
          Health & Personal Care
        </p>
      </div>
    </header>
  );
};

export default Header;
