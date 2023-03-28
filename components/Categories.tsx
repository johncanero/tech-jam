/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
    return (
        <div>
            <div className='lg:ml-16 hidden md:block font-Roboto'>
                {/* Categories */}
                <div className='md:mx-12 lg:mx-0 text-gray-900 bg-white py-2 px-6'>
                    <p>CATEGORIES</p>
                </div>
                {/* Categories Tabs */}
                <div className="shadow-lg md:mx-12 lg:mx-0 bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1 flex md:flex-wrap lg:flex-nowrap text-center" role="menu" aria-orientation="horizontal" aria-labelledby="options-menu">

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/laptop.png"
                                    width={50}
                                    height={45}
                                    alt="Laptop"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-28'>Computer and Laptops</p>
                            </div>
                        </Link>
                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/keyboard.png"
                                    width={50}
                                    height={45}
                                    alt="Keyboard"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-28'>Peripherals and Accessorie</p>
                            </div>
                        </Link>

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/smartphone.png"
                                    width={50}
                                    height={45}
                                    alt="Keyboard"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-28'>Mobile Phones and Accessories</p>
                            </div>
                        </Link>

                        <Link
                            // target="_blank"
                            rel="noopener noreferrer"
                            href="/">
                            <div className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <Image
                                    src="/images/flaticons/audio.png"
                                    width={50}
                                    height={45}
                                    alt="Keyboard"
                                    className="mx-auto mb-2"
                                />
                                <p className='md:w-24'>Audio and Video</p>
                            </div>
                        </Link>


        
                        <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Cameras and Photography</a>
                        <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Gaming</a>
                        <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Smart Home</a>
                        <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Network and Internet</a>
                        <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Wearables</a>
                        <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Software</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories