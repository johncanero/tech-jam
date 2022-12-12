import React from "react";

const Footer = () => {
  return (
    // Hide in Mobile
    <footer className="py-4 text-center text-gray-500 md:block md:py-6 font-ShareTechMono">
      <span className="mr-2 text-lg font-bold text-gray-900 dark:text-green-400">
        John Cañero
      </span>
      &copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;