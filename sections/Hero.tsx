import React from "react";
import Image from "next/image";
import { useState } from "react";
import { data } from "../pages/data";

const Hero = () => {
  const [products] = useState(data);
  const [value, setValue] = useState(0);

  const { mainImage } = products[value];

  return (
    <div>
      <section className="mx-auto max-w-7xl">
        <article>
          <Image src={mainImage} width={450} height={200} alt="" />

          {/* Products Map */}
          <div>
            <ul className="flex-wrap items-center justify-start gap-5 mt-5 md:flex">
              {products.map((item, index) => (
                <li key={item.id} onClick={() => setValue(index)}>
                  <Image src={item.thumbnail} width={100} height={200} alt="" className="w-24" />
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Hero;
