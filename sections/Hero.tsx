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
      <section>
        <Image src={mainImage} width={400} height={200} alt="" />
        {products.map((item, index) => (
          <ul key={item.id}>
            <li onClick={() => setValue(index) }>
              <Image src={item.thumbnail} width={100} height={200} alt="" />
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
};

export default Hero;
