import React from "react";
import Categories from "../../components/Categories";

const index = () => {
  return (
    <div>
      <div className="mx-auto lg:block sm:max-w-sm md:max-w-3xl lg:max-w-7xl">
        <div className="mx-auto lg:pl-16">
          {/* <h1 className="mt-6 text-2xl font-bold text-center lg:text-left md:text-3xl font-ShareTechMono dark:text-green-400">
            Categories
          </h1> */}
        </div>
        <div className="mt-3">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default index;
