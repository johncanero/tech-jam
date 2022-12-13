import React from "react";
import DataComponent from "../pages/DataComponent";

const Hero = () => {

  return (
    <div>
      <section className="grid grid-cols-1 gap-10 mx-auto lg:grid-cols-2 max-w-7xl">
        <DataComponent />
        <article>
          <h1>
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
