import React from "react";
import { useState } from "react";
import Link from "next/link";
// Data
import DataComponent from "../pages/DataComponent";
// Icons
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { BiMinus } from "@react-icons/all-files/bi/BiMinus";
import { BiPlus } from "@react-icons/all-files/bi/BiPlus";

const Hero = () => {
  const [amount, setAmount] = useState(0);

  // Subtract Function
  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) setAmount(0);
  };
  return (
    <div>
      <section className="justify-center py-6 mx-auto mb-12 lg:py-12 lg:flex">
        {/* Hide in Desktop */}
        <h2 className="block px-2 mb-3 text-lg font-bold text-green-500 md:text-left dark:text-green-400 md:ml-12 md:mb-4 lg:hidden lg:mt-0 font-ShareTechMono">
          Technology Marketplace
        </h2>
        <DataComponent />
        <article className="flex-col w-full px-4 md:ml-16 md:w-10/12 lg:w-5/12 lg:ml-20 ">
          {/* Hide in Tablet and Mobile */}
          <h2 className="hidden mt-10 text-xl font-bold text-green-500 dark:text-green-400 lg:mt-0 font-ShareTechMono lg:block">
            Technology Marketplace
          </h2>
          {/* Heading Product */}
          <h1 className="mt-6 text-2xl font-bold md:text-3xl lg:text-5xl font-Roboto">
            Logitech MX Keys Wireless Keyboard with Backlit Keys
          </h1>

          {/* Features */}
          <h1 className="mt-6 lg:mt-9 font-Roboto">
            • Perfect stroke keys: Spherically dished keys match the shape of
            your fingertips, offering satisfying feedback with every tap.
            <br></br>• Comfort and stability: Type with confidence on a keyboard
            crafted for comfort, stability, and precision.
            <br></br>• Smart illumination hand proximity detection and automatic
            backlighting
          </h1>

          {/* Pricing */}
          <div>
            <h3 className="text-3xl font-bold mt-7 lg:mt-10 font-roboto">
              $119.99{" "}
              <span className="px-1 py-1 text-lg text-green-500 align-middle bg-green-200 rounded-md dark:text-green-400 dark:bg-neutral-700">
                50%
              </span>
            </h3>

            <p className="mt-3 text-base font-Roboto text-neutral-400 dark:text-neutral-400">
              <s>$240.00</s>
            </p>
          </div>

          {/* Add to Cart */}
          <div className="items-center justify-between gap-2 mt-6 mb-6 md:mt-7 lg:flex">
            <ul className="flex items-center justify-between px-4 py-2 rounded shadow bg-slate-100 dark:bg-neutral-700 lg:flex-1">
              <li onClick={handleMinus} className="cursor-pointer">
                <BiMinus size={27} />
              </li>
              <li>{amount}</li>
              <li
                onClick={() => setAmount(amount + 1)}
                className="cursor-pointer"
              >
                <BiPlus size={27} />
              </li>
            </ul>

            {/* Shopping Cart */}
            <div className="lg:flex-1">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.logitech.com/en-us/products/keyboards/mx-keys-wireless-keyboard.920-009294.html"
              >
                <button className="flex items-center justify-center w-full gap-4 px-4 py-2 mt-3 font-bold text-white transition-all duration-200 bg-green-500 rounded-lg shadow lg:mt-0 hover:bg-green-600">
                  <AiOutlineShoppingCart /> Add to cart
                </button>
              </Link>
            </div>

            {/* Source Images */}
          </div>
          <p className="mt-4 text-xs md:text-sm text-end font-ShareTechMono dark:text-green-400">
            Images from{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.rtings.com/keyboard/reviews/logitech/mx-keys"
            >
              RTINGS{" "}
            </Link>{" "}
            &{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pcmag.com/reviews/logitech-mx-keys"
            >PC MAG</Link>: Logitech MX Keys Keyboard Review
          </p>
        </article>
      </section>
    </div>
  );
};

export default Hero;
