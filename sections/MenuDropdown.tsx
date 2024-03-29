import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
// Icons
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { AiOutlineOrderedList } from "@react-icons/all-files/ai/AiOutlineOrderedList";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { RiFileHistoryLine } from "@react-icons/all-files/ri/RiFileHistoryLine";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"
// Header Main Icons
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
// Framer-Motion
import { motion } from "framer-motion"
import Login from "../components/Login";

const MenuDropdown = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="flex gap-1 text-neutral-900"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="">Light/Dark Mode</span>
        </Button>
      );
    } else {
      return (
        <Button
          className="flex gap-1 text-neutral-900"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <span className="">Light/Dark Mode</span>
        </Button>
      );
    }
  };

  return (
    // Mobile Visibility
    <div className="dark:bg-neutral-800 dark:text-gray-100">
      <div className="flex justify-between px-2 mt-4 text-right md:mt-6 lg:hidden top-16 md:w-full md:px-6 font-ShareTechMono">
        <div>
          {/* Image */}
          <Link rel="noopener noreferrer" href="/">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="flex">
              <Image
                src="/images/techStore.png"
                width={35}
                height={40}
                alt="jLogo"
                className="ml-1"
              />
              {/* Heading Title: Tech Jam */}
              <h1 className="ml-3 text-3xl font-bold dark:text-green-400 font-Roboto">
                Tech Jam
              </h1>
            </motion.div>
          </Link>
        </div>

        {/* Dark Mode and Toggle */}
        <div className="z-10 flex">
          {/* Tablet Icons */}
          <AiOutlineShoppingCart size={26} className="mt-1 mr-4 md:mr-4" />
          <Login />

          {/* Toggle Button */}
          <Menu as="div" className="relative inline-block mr-2 text-left">
            {/* Toggle Button */}
            <div>
              <Menu.Button className="inline-flex justify-center w-full py-1 text-sm font-medium rounded-md text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <GiHamburgerMenu
                  className="w-6 h-6 dark:text-white"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {/* Home */}
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/">
                        <button
                          className={`${active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                        >
                          <FaHome size={17} />
                          <span className="ml-2">Home</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/search">
                        <button
                          className={`${active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                        >
                          <AiOutlineSearch size={17} />
                          <span className="ml-2">Search</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  {/* Categories */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/categories">
                        <button
                          className={`${active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                            } group flex items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                        >
                          <AiOutlineOrderedList size={17} />
                          <span className="ml-2">Categories</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                {/* Create a New Section */}
                {/* How To Buy */}
                <div className="px-1 py-1 pb-2">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/howtobuy">
                        <button
                          className={`${active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                            } group flex items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                        >
                          <AiOutlineQuestionCircle size={17} />
                          <span className="ml-2">How To Buy</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  {/* About */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/about">
                        <button
                          className={`${active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                            } group flex items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                        >
                          <RiFileHistoryLine size={17} />
                          <span className="ml-2">About</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>

                {/* Contact */}
                <div className="px-1 py-1 pb-2">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        // target="_blank"
                        rel="noopener noreferrer"
                        href="/contact"
                      >
                        <button
                          className={`${active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                            } group flex items-center rounded-md px-2 py-1 text-sm font-Poppins`}
                        >
                          <AiOutlineMail size={17} />
                          <span className="ml-2">Contact</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>

                {/* Contact */}
                <div className="px-1 py-1 pb-2">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active ? "bg-violet-500 text-white" : "text-gray-900"
                          } group flex items-center rounded-md  py-1 text-sm font-Poppins`}
                      >
                        {renderThemeChanger()}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
