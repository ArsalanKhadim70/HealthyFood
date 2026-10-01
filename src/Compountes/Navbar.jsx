import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import MainLogo from '../assets/images/Navbar_Logo.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('menu-open')
        } else {
            document.body.classList.remove('menu-open')
        }
        return () => document.body.classList.remove('menu-open')
    }, [menuOpen])

    return (
        <>
            {/* Desktop Navbar */}
            <div className='flex items-center justify-between text-sm py-4 mb-5'>
                <a href="#home"><img className='w-15 cursor-pointer' src={MainLogo} alt="" /></a>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-start gap-5 font-medium'>
                    <li><a href="#home" className='hover:text-[#5B6846] transition cursor-pointer'>Home</a></li>
                    <li><a href="#about" className='hover:text-[#5B6846] transition cursor-pointer'>About Us</a></li>
                    <li><a href="#services" className='hover:text-[#5B6846] transition cursor-pointer'>Our Services</a></li>
                    <li><a href="#advantages" className='hover:text-[#5B6846] transition cursor-pointer'>Advantages</a></li>
                    <li><a href="#growth-plans" className='hover:text-[#5B6846] transition cursor-pointer'>Growth Plans</a></li>
                    <li><a href="#reviews" className='hover:text-[#5B6846] transition cursor-pointer'>Blogs</a></li>
                    <li><a href="#contact" className='hover:text-[#5B6846] transition cursor-pointer'>Contact Us</a></li>
                </ul>

                <a href="#get-started" className='hidden md:block'>
                    <button className='flex items-center gap-1.5 px-4 py-2 border border-green-800 bg-[#5B6846] text-white rounded-full text-sm font-medium hover:bg-green-900 hover:border-indigo-300 transition cursor-pointer'
                    >Get Started →</button>
                </a>

                {/* Mobile Hamburger */}
                <button
                    className='md:hidden text-2xl text-[#193322] cursor-pointer'
                    onClick={() => setMenuOpen(true)}
                >
                    <HiMenu />
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            {menuOpen && (
                <div
                    className='fixed inset-0 bg-black/40 z-40 md:hidden'
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                    <a href="#home"><img className='w-12 cursor-pointer' src="\images\13_logo.png" alt="" /></a>
                    <button
                        className='text-2xl text-[#193322] cursor-pointer'
                        onClick={() => setMenuOpen(false)}
                    >
                        <HiX />
                    </button>
                </div>

                <ul className='flex flex-col gap-2 p-6 font-medium'>
                    <li><a href="#home" className='block py-2 px-3 rounded-lg hover:bg-[#EBEAE3] transition cursor-pointer' onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" className='block py-2 px-3 rounded-lg hover:bg-[#EBEAE3] transition cursor-pointer' onClick={() => setMenuOpen(false)}>About Us</a></li>
                    <li><a href="#services" className='block py-2 px-3 rounded-lg hover:bg-[#EBEAE3] transition cursor-pointer' onClick={() => setMenuOpen(false)}>Our Services</a></li>
                    <li><a href="#advantages" className='block py-2 px-3 rounded-lg hover:bg-[#EBEAE3] transition cursor-pointer' onClick={() => setMenuOpen(false)}>Advantages</a></li>
                    <li><a href="#growth-plans" className='block py-2 px-3 rounded-lg hover:bg-[#EBEAE3] transition cursor-pointer' onClick={() => setMenuOpen(false)}>Growth Plans</a></li>
                    <li><a href="#reviews" className='block py-2 px-3 rounded-lg hover:bg-[#EBEAE3] transition cursor-pointer' onClick={() => setMenuOpen(false)}>Blogs</a></li>
                    <li><a href="#contact" className='block py-2 px-3 rounded-lg hover:bg-[#EBEAE3] transition cursor-pointer' onClick={() => setMenuOpen(false)}>Contact Us</a></li>
                </ul>

                <a href="#get-started" className='block px-6 mt-2'>
                    <button className='w-full py-2.5 bg-[#5B6846] text-white rounded-full text-sm font-medium hover:bg-green-900 transition cursor-pointer'
                    onClick={() => setMenuOpen(false)}>Get Started →</button>
                </a>
            </div>
        </>
    )
}

export default Navbar