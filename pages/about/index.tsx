/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// Framer-Motion
import { motion } from "framer-motion"

const index = () => {
  return (
    <div>
      <Head>
        <title>About / Tech Jam</title>
        <meta
          name="description"
          content="About: Tech Jam"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="About: Tech Jam" />
        <meta property="og:description" content="About: Tech Jam" />
        {/* Sitemap */}
      </Head>

      <div className="mx-auto lg:pl-16 sm:max-w-sm md:max-w-3xl lg:max-w-7xl lg:flex">
        {/* Column 1 */}
        <div>
          <h1 className="mt-6 text-2xl font-bold text-center lg:text-left md:text-3xl font-ShareTechMono dark:text-green-400">
            About
          </h1>

          <div className="mx-8 mt-4 mb-6 md:mx-16 lg:mt-2 lg:mx-0 md:max-w-2xl flex-col lg:max-w-4xl">
            <p className="text-lg text-justify font-Roboto">
              Welcome to <Link
                // target="_blank"
                rel="noopener noreferrer"
                href="/">
                <span className="font-semibold dark:text-green-400">Tech Jam</span>
              </Link> ,the ultimate platform for all your technology needs. Our objective is to provide an easy and cost-effective way for people to discover and purchase the latest and most advanced tech products available in the market.
            </p>

            <p className="mt-2 text-lg text-justify font-Roboto">
              At Tech Jam, we understand that technology can be overwhelming at times. For this reason, we are committed to simplifying the process of buying tech products. Our website is designed to be user-friendly and straightforward to navigate, allowing you to find precisely what you're looking for without any complications.
            </p>

            <p className="mt-2 text-lg text-justify font-Roboto">
              We believe that everyone should have access to the best technology, which is why we offer a broad range of products at competitive prices. Whether you're in the market for a new smartphone, a cutting-edge laptop, or the latest gaming console, you'll find everything you need at Tech Jam.
            </p>

            <p className="mt-2 text-lg text-justify font-Roboto">
              Our team is passionate about technology and dedicated to providing exceptional customer service. We are always available to answer any questions you may have and assist you in finding the perfect product to suit your requirements. Our goal is to make your shopping experience an enjoyable and positive one.
            </p>

            <p className="mt-2 text-lg text-justify font-Roboto">
              Thank you for selecting Tech Jam as your primary source for all things tech. We are excited to serve you and help you stay at the forefront of technology.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="lg:mt-20 lg:ml-12 mb-6">
          <Link
            // target="_blank"
            rel="noopener noreferrer"
            href="/"
          >
            <Image
              src="/images/techStore.png"
              width={500}
              height={500}
              alt="techStoreLogo"
              className="mx-auto sm:w-48 md:w-64 lg:w-96"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default index;
