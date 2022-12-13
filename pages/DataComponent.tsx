import React from "react";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 1,
    mainImage: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    mainImage: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
  },
  {
    id: 3,
    mainImage: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  {
    id: 4,
    mainImage: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  {
    id: 5,
    mainImage: "/images/image-product-7.jpg",
    thumbnail: "/images/image-product-7-thumbnail.jpg",
  },
  // {
  //   id: 6,
  //   mainImage: "/images/image-product-6.jpg",
  //   thumbnail: "/images/image-product-6-thumbnail.jpg",
  // },
  // {
  //   id: 7,
  //   mainImage: "/images/image-product-5.jpg",
  //   thumbnail: "/images/image-product-5-thumbnail.jpg",
  // },
];

const DataComponent = () => {
  // useState
  const [products] = useState(data);
  const [value, setValue] = useState(0);

  const { mainImage } = products[value];
  return (
    <React.Fragment>
      <article className="">
        <Image
          src={mainImage}
          width={500}
          height={200}
          alt=""
          className="md:mx-auto lg:mx-0 rounded-2xl md:w-7/12 lg:w-11/12"
        />

        {/* Products Map */}
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-3 mt-5 md:gap-5 lg:justify-start md:flex">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value &&
                  "border-2 border-green-400  opacity-80"
                } border-2 rounded-2xl overflow-hidden cursor-pointer`}
              >
                <Image
                  src={item.thumbnail}
                  width={72}
                  height={200}
                  alt=""
                  className="w-14 md:w-16 lg:w-20 rounded-xl"
                />
              </li>
            ))}
          </ul>
        </div>
      </article>
    </React.Fragment>
  );
};

export default DataComponent;
