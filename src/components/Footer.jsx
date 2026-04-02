import { Link } from "react-router-dom";
import Logo from "../assets/logos/1000 acre logo black.svg";
import GroupLogo from "../assets/logos/group-logo.png";
import navLinks from "../data/navLinks";
import address from "../data/address";
import contacts from "../data/contacts";
import mail from "../data/mailId";
import socialmedia from "../data/socialmedia";

const half = Math.ceil(navLinks.length / 2);
const quickLinksCol1 = navLinks.slice(0, half);
const quickLinksCol2 = navLinks.slice(half);

export default function Footer() {
    return (
        <footer className="bg-[#2d2d2d] z-49  text-white index">

            {/* Main footer body */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4  xl:grid-cols-5 gap-12 xl:gap-12 items-center">

                    {/* Col 1 — Logo */}
                    <div className="flex h-full md:col-span-4 xl:col-span-1 items-center justify-center">
                        <img
                            src={Logo}
                            alt="Boche 1000 Acre"
                            className="h-7 w-auto"
                        />
                    </div>

                    {/* Col 2 — Quick Links */}
                    <div className="col-span-1 md:col-span-2">
                        <p className="text-sm font-semibold tracking-widest uppercase text-white mb-6">
                            Quick Links
                        </p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            <ul className="flex flex-col gap-4">
                                {quickLinksCol1.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex flex-col gap-4">
                                {quickLinksCol2.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Col 3 — Contact Info */}
                    <div className="flex flex-col gap-4">

                        {/* Email */}
                        {mail.map((m) => (
                            <a
                                key={m.label}
                                href={`mailto:${m.mailId}`}
                                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                            >
                                Mail us: {m.mailId}
                            </a>
                        ))}

                        {/* Address */}
                        <div className="text-gray-400 text-sm leading-relaxed">
                            <p className="text-gray-300 font-medium mb-1">Address:</p>
                            {address.line1},<br />
                            {address.line2},<br />
                            {address.city}, {address.state} {address.pin}
                        </div>

                        {/* Phone */}
                        {contacts.slice(0, 1).map((c) => (
                            <a
                                key={c.name}
                                href={`tel:+91${c.phone}`}
                                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                            >
                                +91 {c.phone}
                            </a>
                        ))}

                    </div>

                    {/* Col 4 — Badge Logo */}
                    <div className="flex shrink-0 items-center justify-center">
                        <img
                            src={GroupLogo}
                            alt="Boche Badge"
                            className="max-w-36  object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Copyright + legal */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-gray-500 text-xs text-center sm:text-left">
                        <span>Copyright © 2026 Boche 1000 Acre. All Rights Reserved</span>
                        <div className="flex gap-4">
                            <Link to="/terms" className="hover:text-white transition-colors duration-200">
                                Terms and Conditions
                            </Link>
                            <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                                Privacy and Policy
                            </Link>
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-3">
                        {socialmedia.map((s) => (
                            <a
                                key={s.platform}
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.platform}
                                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-200"
                            >
                                <img
                                    src={s.icon}
                                    alt={s.platform}
                                    className="w-6 h-6 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-200"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    );
}