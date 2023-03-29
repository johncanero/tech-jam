/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
    return (
        <div>
            <div className=' lg:ml-16 md:block font-Roboto'>
                {/* Categories */}
                <div className='px-6 py-2 text-gray-900 bg-white dark:bg-zinc-800 dark:text-white md:mx-12 lg:mx-0'>
                    <p>CATEGORIES</p>
                </div>
                {/* Categories Tabs */}
                <div className="text-white bg-white shadow-lg dark:bg-zinc-800 md:mx-12 lg:mx-0 ring-1 ring-black ring-opacity-5">
                    <div className="flex-col justify-center py-1 text-center lg:flex-row md:flex md:flex-row md:flex-wrap" role="menu" aria-orientation="horizontal" aria-labelledby="options-menu">

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-2 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 hover:dark:bg-zinc-700 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/laptop.png"
                                    width={50}
                                    height={45}
                                    alt="Computer and Laptops"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-28'>Computer and Laptops</p>
                            </div>
                        </Link>
                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-2 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 hover:dark:bg-zinc-700 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/keyboard.png"
                                    width={50}
                                    height={45}
                                    alt="Peripherals and Accessories"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-28'>Peripherals and Accessories</p>
                            </div>
                        </Link>

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:dark:bg-zinc-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/smartphone.png"
                                    width={50}
                                    height={45}
                                    alt="Mobile Phones and Accessories"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-28'>Mobile Phones and Accessories</p>
                            </div>
                        </Link>

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:dark:bg-zinc-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/audio.png"
                                    width={50}
                                    height={45}
                                    alt="Audio and Video"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-24'>Audio and Video</p>
                            </div>
                        </Link>

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:dark:bg-zinc-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/photography.png"
                                    width={50}
                                    height={45}
                                    alt="Cameras and Photography"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-24'>Cameras and Photography</p>
                            </div>
                        </Link>

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-2 py-2 text-sm text-gray-700 dark:text-white hover:dark:bg-zinc-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/game-controller.png"
                                    width={50}
                                    height={45}
                                    alt="Gaming"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-24'>Gaming</p>
                            </div>
                        </Link>

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:dark:bg-zinc-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/smart-house.png"
                                    width={50}
                                    height={45}
                                    alt="Smart Home"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-24'>Smart Home</p>
                            </div>
                        </Link>

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:dark:bg-zinc-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/internet.png"
                                    width={50}
                                    height={45}
                                    alt="Network and Internet"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-24'>Network and Internet</p>
                            </div>
                        </Link>

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-2 py-2 text-sm text-gray-700 dark:text-white hover:dark:bg-zinc-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/smartwatch.png"
                                    width={50}
                                    height={45}
                                    alt="Wearables"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-24'>Wearables</p>
                            </div>
                        </Link>


                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:dark:bg-zinc-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/design-software.png"
                                    width={50}
                                    height={45}
                                    alt="Software"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-24'>Software</p>
                            </div>
                        </Link>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories