import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Aphamd from "../assets/Aphamed.jpg";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const handleNav = () => {
        setOpenNav(!openNav);
    };

    const NavLinks = [
        { path: "/", pathName: "Home" },
        { path: "/about", pathName: "About" },
        { path: "/services", pathName: "Services" },
        { path: "/contact", pathName: "Contact" },
    ];

    return (
        <div className="sticky top-0 w-full bg-white shadow-md z-50" id="home">
            <div className="flex justify-between text-black">
                <img src={Aphamd} alt="Aphamed Logo" className="size-[50px]" />

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4">
                    {NavLinks.map(({ path, pathName }, index) => (
                        <NavLink
                            to={path}
                            key={index}
                            className={({ isActive }) =>
                                `p-2 m-2 text-xl font-normal capitalize ${
                                    isActive ? "text-colorPrimary font-bold" : "text-black"
                                }`
                            }
                        >
                            {pathName}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Navigation Toggle Button */}
                <button className="md:hidden" onClick={handleNav}>
                    <FaBars className="text-2xl" />
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {openNav && (
                <div
                    className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/50"
                    onClick={handleNav}
                ></div>
            )}

            {/* Mobile Sidebar Menu */}
            <div
                className={`md:hidden fixed top-0 left-0 h-screen bg-white shadow-md w-3/4 max-w-xs transform ${
                    openNav ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <button className="absolute top-5 right-5" onClick={handleNav}>
                    <FaTimes className="text-2xl" />
                </button>
                <div className="flex flex-col items-center pt-20">
                    {NavLinks.map(({ path, pathName }, index) => (
                        <NavLink
                            to={path}
                            key={index}
                            onClick={handleNav} // Close menu on click
                            className={({ isActive }) =>
                                `p-2 m-2 text-xl font-normal capitalize block text-center ${
                                    isActive ? "text-colorPrimary font-bold" : "text-black"
                                }`
                            }
                        >
                            {pathName}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
