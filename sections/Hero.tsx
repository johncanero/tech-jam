import React from "react";
import DataComponent from "../pages/DataComponent";

const Hero = () => {
  return (
    <div>
      <section className="justify-center py-12 lg:flex">
        <DataComponent />
        <article className="flex-col w-9/12 mx-auto lg:w-5/12 lg:ml-28 ">
          <h2 className="mt-10 text-lg font-bold text-green-400 lg:mt-0 font-ShareTechMono">
            Technology Marketplace
          </h2>
          <h1 className="mt-4 text-5xl font-bold font-Roboto">
            Logitech MX Keys Wireless Keyboard with Backlit Keys
          </h1>
          <h1 className="mt-8 lg:mt-12 font-Roboto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            blanditiis quas excepturi animi laudantium! Aspernatur, iure velit
            praesentium cupiditate ducimus officia doloribus eveniet aut saepe,
            corrupti, fugiat tempora sunt. Qui.
          </h1>
        </article>
      </section>
    </div>
  );
};

export default Hero;
