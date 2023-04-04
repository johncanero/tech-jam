/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";

const index = () => {
  return (
    <div>
      <Head>
        <title>How To Buy / Tech Jam</title>
        <meta
          name="description"
          content="How To Buy: Tech Jam"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="How To Buy: Tech Jam" />
        <meta property="og:description" content="How To Buy: Tech Jam" />
        {/* Sitemap */}
      </Head>
      <div className="mx-auto lg:pl-16 sm:max-w-sm md:max-w-3xl lg:max-w-7xl">
        <h1 className="flex justify-center gap-3 mt-6 text-2xl font-bold lg:justify-start md:text-3xl font-ShareTechMono dark:text-green-400">
          How To Buy{" "}
          <AiOutlineQuestionCircle size={26} className="mt-1 text-green-400" />
        </h1>
        <div className="mx-8 mt-4 mb-12 md:mx-16 lg:mt-2 lg:mx-0 md:max-w-2xl lg:max-w-4xl">
          <p className="text-lg text-justify font-Roboto">
            1. First, decide on the tech products you want to buy. You can do
            this by browsing the store's website or visiting the store in person
            to see what they have available.
          </p>

          <p className="mt-2 text-lg text-justify font-Roboto">
            2. Once you have decided on the products you want to buy, add them
            to your shopping cart or basket. This can usually be done by
            clicking on the product and selecting "add to cart" or "add to
            basket".
          </p>

          <p className="mt-2 text-lg text-justify font-Roboto">
            3. After you have added all the products you want to buy to your
            cart or basket, go to the checkout page. This is usually where you
            will be asked to enter your payment and shipping information.
          </p>

          <p className="mt-2 text-lg text-justify font-Roboto">
            4. On the checkout page, review the products in your cart or basket
            to make sure they are the ones you want to buy. You can usually
            remove items from your cart or basket at this stage if you need to.
          </p>

          <p className="mt-2 text-lg text-justify font-Roboto">
            5. After you have reviewed your cart or basket, enter your payment
            and shipping information. This will usually include your name,
            billing address, and credit card information.
          </p>

          <p className="mt-2 text-lg text-justify font-Roboto">
            6. Once you have entered all the necessary information, review it
            again to make sure everything is correct. If everything looks good,
            submit your order.
          </p>

          <p className="mt-2 text-lg text-justify font-Roboto">
            7. After you have submitted your order, you should receive a
            confirmation email or message from the store, along with details of
            your order and an estimated delivery date.
          </p>

          <p className="mt-2 text-lg text-justify font-Roboto">
            8. Keep an eye on your email or the store's website for updates on
            your order, and be sure to contact the store if you have any
            questions or concerns.
          </p>
          {/* <p className="mt-4 text-xs font-ShareTechMono md:text-sm dark:text-green-900">
            From ChatGPT: Optimizing Language Model for Dialogue
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default index;
