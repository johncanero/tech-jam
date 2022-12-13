import React from "react";
import DataComponent from "../pages/DataComponent";

const Hero = () => {
  return (
    <div>
      <section className="justify-center py-6 mx-auto lg:py-12 lg:flex">
        {/* Hide in Desktop */}
        <h2 className="block mb-3 text-lg font-bold text-green-400 md:mb-4 lg:hidden lg:mt-0 font-ShareTechMono">
          Technology Marketplace
        </h2>
        <DataComponent />
        <article className="flex-col w-full lg:w-5/12 lg:ml-20 ">
          {/* Hide in Tablet and Mobile */}
          <h2 className="hidden mt-10 text-xl font-bold text-green-400 lg:mt-0 font-ShareTechMono lg:block">
            Technology Marketplace
          </h2>
          {/* Heading Product */}
          <h1 className="mt-6 text-3xl font-bold lg:text-5xl font-Roboto">
            Logitech MX Keys Wireless Keyboard with Backlit Keys
          </h1>

          {/* Features */}
          <h1 className="mt-6 lg:mt-12 font-Roboto">
            • Perfect stroke keys: Spherically dished keys match the shape of your
            fingertips, offering satisfying feedback with every tap. 
            <br></br>
            • Comfort and stability: Type with confidence on a keyboard crafted for comfort,
            stability, and precision. 
            <br></br>
            • Smart illumination hand proximity detection and automatic backlighting
          </h1>

          {/* Pricing */}
          <h3 className="mt-8 text-3xl font-bold font-roboto">
            $119.99{" "}
            <span className="px-2 text-lg text-green-500 align-middle bg-green-200 rounded-md dark:text-green-400 dark:bg-neutral-800">
              50%
            </span>
          </h3>
        </article>
      </section>
    </div>
  );
};

export default Hero;
