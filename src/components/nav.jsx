import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Sobre mí", href: "/sobre-mi" },
        { name: "Servicios", href: "/servicios" },
        { name: "Planes", href: "/planes" },
    ];

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <img className="h-full object-cover" src={Logo} alt="Jorge Encalada"/>
                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-700 hover:text-blue-700 font-medium transition"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-700 hover:text-blue-700 focus:outline-none"
                            aria-label="Abrir menú"
                        >
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block text-gray-700 hover:text-blue-700 font-medium transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}