'use client';

import { useState } from 'react';
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';
import MenuIcon from '../icons/menu-icon';
import Image from 'next/image';
import NavbarAuthButtons from './navbar-auth-buttons';

const NavbarAuth = () => {
    const [state, setState] = useState(false);

    const menus = [
        { title: 'Inicio', path: '/' },
        { title: 'Blog', path: '/' },
        { title: 'Nosotros', path: '/' },
    ];

    return (
        <nav className=' w-full border-b md:border-0'>
            <div className='items-center justify-between px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
                <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                    {/* LOGO */}
                    <Link href='/'>
                        <h1 className='text-3xl font-bold text-purple-600'>
                            <Image
                                src='/simplelife.png'
                                alt='logo'
                                width={200}
                                height={40}
                            />
                        </h1>
                    </Link>

                    {/* TOGGLE THEME */}
                    <div className='md:hidden'>
                        <ModeToggle />
                    </div>

                    {/* MENU ICON */}
                    <div className='md:hidden'>
                        <button
                            className='outline-none p-2 rounded-md focus:border-gray-400'
                            onClick={() => setState(!state)}
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:hidden md:pb-0 md:mt-0 ${
                        state ? 'block' : 'hidden'
                    }`}
                >
                    <ul className='justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                        <div className='md:hidden flex justify-center'>
                            <NavbarAuthButtons />
                        </div>

                        {menus.map((item, idx) => (
                            <li key={idx} className='hover:text-indigo-600'>
                                <Link href={item.path} className='text-base'>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* TOGGLE THEME */}
                <div className='max-w-menu flex items-center gap-2'>
                    <ModeToggle />
                    <NavbarAuthButtons />
                </div>
            </div>
        </nav>
    );
};

export default NavbarAuth;
