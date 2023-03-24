import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Fragment, useState, useEffect } from "react";
import Button from "../components/Button";
// Icons
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"
// headless UI
import { Menu, Transition } from "@headlessui/react";


const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "light") {
      return (
        <Button className=" text-neutral-900" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="text-green-400" onClick={() => setTheme("light")}>
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
        </Button>
      );
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-800 dark:text-gray-100">
      <div className="hidden pt-3 mx-auto lg:block sm:max-w-sm md:max-w-3xl lg:max-w-6xl">
        <header className="flex items-center justify-between h-16 mt-1 md:mt-3 font-ShareTechMono">
          {/* Justify Between: Left */}
          <div className="flex">
            {/* Heading Title Link */}
            <div className="flex">
              <Link rel="noopener noreferrer" href="/">
                <Image
                  src="/images/techStore.png"
                  width={50}
                  height={45}
                  alt="aLogo"
                  className=""
                />
              </Link>
              <Link rel="noopener noreferrer" href="/">
                {/* Heading Title: Tech Jam */}
                <h1 className="mt-1 ml-6 text-4xl font-black dark:text-green-400 font-Roboto">
                  Tech Jam
                </h1>
              </Link>
            </div>

            <ul className="flex gap-12 mt-2 text-sm ml-14 lg:text-lg">
              {/* Header Links */}
              <Link
                rel="noopener noreferrer"
                href="/"
                className="mt-1 font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Home
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/categories"
                className="mt-1 font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Categories
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/howtobuy"
                className="mt-1 font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                How To Buy
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/about"
                className="mt-1 font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                About
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/contact"
                className="mt-1 font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
              >
                Contact
              </Link>

              {/* <Link
                rel="noopener noreferrer"
                href="/"
                className="mt-1 text-lg font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-30"
              >
                Warranty
              </Link> */}
            </ul>
          </div>

          {/* Icons */}
          <div className="flex">
            <Menu as="div" className="relative inline-block mt-1 mr-4 text-left">
              {/* Toggle Button */}
              <div>
                <Menu.Button className="inline-flex justify-center w-full py-2 text-sm font-medium rounded-md text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  <AiOutlineSearch
                    className="w-9 h-9 dark:text-white"
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
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {/* Home */}
                  <div className="px-1 py-1 ">
                    <div>
                      <div>
                        <div className="text-white dark:text-black">
                          <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0  focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>


            <button>
              <AiOutlineShoppingCart size={34} className="mr-6" />
            </button>

            <button>
              <CgProfile size={34} className="mr-6" />
            </button>
            {renderThemeChanger()}
          </div>
        </header>
        <hr className="h-px mt-8 border-0 bg-neutral-100 dark:bg-neutral-700"></hr>
      </div>
    </div>
  );
};

export default Header;
