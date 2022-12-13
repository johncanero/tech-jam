import React from "react";
import Image from "next/image";
import { useState } from "react";
// Data
import DataComponent from "../pages/DataComponent";
import data from "../pages/DataComponent";
// Icons

const Hero = () => {
const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);




  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) setAmount(0);
  };
  return (
    <div>
      <section className="justify-center py-6 mx-auto lg:py-12 lg:flex">
        {/* Hide in Desktop */}
        <h2 className="block mb-3 text-lg font-bold text-green-400 md:ml-16 md:mb-4 lg:hidden lg:mt-0 font-ShareTechMono">
          Technology Marketplace
        </h2>
        <DataComponent />
        <article className="flex-col w-full md:ml-16 md:w-10/12 lg:w-5/12 lg:ml-20 ">
          {/* Hide in Tablet and Mobile */}
          <h2 className="hidden mt-10 text-xl font-bold text-green-400 lg:mt-0 font-ShareTechMono lg:block">
            Technology Marketplace
          </h2>
          {/* Heading Product */}
          <h1 className="mt-6 text-2xl font-bold md:mt-10 md:text-3xl lg:text-5xl font-Roboto">
            Logitech MX Keys Wireless Keyboard with Backlit Keys
          </h1>

          {/* Features */}
          <h1 className="mt-6 lg:mt-12 font-Roboto">
            • Perfect stroke keys: Spherically dished keys match the shape of
            your fingertips, offering satisfying feedback with every tap.
            <br></br>• Comfort and stability: Type with confidence on a keyboard
            crafted for comfort, stability, and precision.
            <br></br>• Smart illumination hand proximity detection and automatic
            backlighting
          </h1>

          {/* Pricing */}
          <div>
            <h3 className="mt-8 text-3xl font-bold font-roboto">
              $119.99{" "}
              <span className="px-2 text-lg text-green-500 align-middle bg-green-200 rounded-md dark:text-green-400 dark:bg-neutral-800">
                50%
              </span>
            </h3>

            <p className="mt-3 text-base font-Roboto text-neutral-400 dark:text-neutral-500">
              <s>$250.00</s>
            </p>
          </div>

          {/* Add to Cart */}
          <div>
            <ul>
              <li>
                -
              </li>
              <li>{amount}</li>
              <li>+</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Hero;
