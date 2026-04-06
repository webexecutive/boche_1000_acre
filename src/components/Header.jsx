import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logos/1000 acre logo black.svg";
import navLinks from "../data/navLinksData";
import Button from "./Button";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const isHome = pathname === "/";
    const isTransparent = isHome && !scrolled;

    const isActive = (path) =>
        path === "/" ? pathname === "/" : pathname.startsWith(path);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isTransparent
                    ? "bg-linear-to-b from-black/75 to-transparent"
                    : "bg-[#FEFFFB] shadow-md"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Boche 1000 Acre Logo"
                        className="h-6 lg:h-8 w-auto transition-all duration-300"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`transition-all duration-200 hover:underline hover:underline-offset-4 ${isTransparent
                                    ? `text-white ${isActive(link.path) ? "underline underline-offset-4" : ""}`
                                    : `${isActive(link.path)
                                        ? "text-[#3a5a1c] underline underline-offset-4"
                                        : "text-gray-500 hover:text-[#3a5a1c]"
                                    }`
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-10">
                    {isTransparent
                        ? <Button variant="glass" size="sm" className="hidden md:flex">Book Now</Button>
                        : <Button size="sm" className="hidden md:flex">Book Now</Button>
                    }

                    {/* Hamburger */}
                    <button
                        className="xl:hidden flex justify-center"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        {/* Hamburger icon — inline SVG so it renders before font loads */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={isTransparent ? "text-white" : "text-black"}
                        >
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Backdrop */}
            {menuOpen && (
                <div
                    className="xl:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            {menuOpen && (
                <div className="xl:hidden fixed top-0 right-0 h-dvh w-[min(360px,100vw)] bg-[#FEFFFB] z-50 flex flex-col shadow-2xl">

                    {/* Top bar */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-300">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            <img
                                src={Logo}
                                alt="Boche 1000 Acre Logo"
                                className="h-6 w-auto"
                            />
                        </Link>
                        <button
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#e8f0dc] hover:border-[#3a5a1c] hover:text-[#3a5a1c] transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>                                                                                                                                                                                                                                                                   
                    </div>

                    {/* Nav links */}
                    <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={`text-base font-medium py-3 px-4 rounded-full transition-all duration-200 ${isActive(link.path)
                                        ? "bg-[#3a5a1c] text-white pl-6"
                                        : "text-[#2c2c2c] hover:bg-[#e8f0dc] hover:text-[#3a5a1c] hover:pl-6"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA buttons */}
                    <div className="px-6 py-6 border-t border-gray-300 flex flex-col gap-3">
                        <Button fullWidth onClick={() => setMenuOpen(false)}>Book Now</Button>
                    </div>

                </div>
            )}
        </header>
    );
}

export default Header;