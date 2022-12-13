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
  const [products] = useState(data);
  const [value, setValue] = useState(0);

  const { mainImage } = products[value];
  return (
    <React.Fragment>
      <article>
        <Image src={mainImage} width={500} height={200} alt="" className="w-9/12 " />

        {/* Products Map */}
        <div>
          <ul className="flex-wrap items-center justify-start gap-5 mt-5 md:flex">
            {products.map((item, index) => (
              <li key={item.id} onClick={() => setValue(index)}>
                <Image
                  src={item.thumbnail}
                  width={77}
                  height={200}
                  alt=""
                  className=""
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
