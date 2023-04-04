import React from "react";
import Head from "next/head";
import Categories from "../../components/Categories";

const index = () => {
  return (
    <div>
      <Head>
        <title>Categories / Tech Jam</title>
        <meta
          name="description"
          content="Categories: Tech Jam"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Categories: Tech Jam" />
        <meta property="og:description" content="Categories: Tech Jam" />
        {/* Sitemap */}
      </Head>

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
