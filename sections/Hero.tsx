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
          <h2 className="hidden mt-10 text-xl font-bold text-green-400 drop-shadow lg:mt-0 font-ShareTechMono lg:block">
            Technology Marketplace
          </h2>
          {/* Heading Product */}
          <h1 className="mt-6 text-3xl font-bold lg:text-5xl font-Roboto">
            Logitech MX Keys Wireless Keyboard with Backlit Keys
          </h1>
          <h1 className="mt-6 lg:mt-12 font-Roboto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            blanditiis quas excepturi animi laudantium! Aspernatur, iure velit
            praesentium cupiditate ducimus officia doloribus eveniet aut saepe,
            corrupti, fugiat tempora sunt. Qui.
          </h1>

          <h3 className="mt-8 text-3xl font-bold font-roboto">$119.99 <span className="px-2 text-lg text-green-500 align-middle bg-green-200 rounded-md">50%</span></h3>
        </article>
      </section>
    </div>
  );
};

export default Hero;
