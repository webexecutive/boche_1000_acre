import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "@/components/Button";

function Contact() {
    return (
        <section className="py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm">
                        We’d love to hear from you whether you have questions, need support,
                        want to learn more about our services or for booking please contact us.
                    </p>
                </div>

                {/* Info Section */}
                <div className="relative py-10">

                    {/* Top & Bottom Lines */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gray-300"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

                    <div className="grid md:grid-cols-3 text-center relative">

                        {/* Address */}
                        <div className="relative py-6 md:py-0 px-4 space-y-3">

                            {/* Icon + Heading */}
                            <div className="flex items-center justify-center gap-2">
                                <FaMapMarkerAlt className="text-gray-600 text-lg" />
                                <h3 className="text-lg font-medium">Address</h3>
                            </div>

                            <p className="text-sm text-gray-500 leading-relaxed">
                                Chulika Estate, Cottappadi P O,
                                <br />
                                Vythiri, Meppadi, Kerala 673577
                            </p>

                            <Button size="sm">Get Direction</Button>

                            {/* Vertical Line (Desktop only) */}
                            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>

                            {/* Horizontal Line (Mobile only) */}
                            <div className="md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                        </div>

                        {/* Call Us */}
                        <div className="relative py-6 md:py-0 px-4 space-y-3">

                            <div className="flex items-center justify-center gap-2">
                                <FaPhoneAlt className="text-gray-600 text-lg" />
                                <h3 className="text-lg font-medium">Call Us</h3>
                            </div>

                            <p className="text-sm text-gray-500">Reception</p>
                            <p className="text-sm text-gray-700">+91 70340 48884</p>
                            <p className="text-sm text-gray-700">+91 80860 04747</p>

                            {/* Vertical Line */}
                            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>

                            {/* Horizontal Line */}
                            <div className="md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                        </div>

                        {/* Mail */}
                        <div className="py-6 md:py-0 px-4 space-y-3">

                            <div className="flex items-center justify-center gap-2">
                                <FaEnvelope className="text-gray-600 text-lg" />
                                <h3 className="text-lg font-medium">Mail Id</h3>
                            </div>

                            <p className="text-sm text-gray-700">
                                boche1000acre@gmail.com
                            </p>

                        </div>

                    </div>
                </div>

                {/* Form */}
                <div className="mt-16">
                    <h4 className="mb-6">Write to Us</h4>

                    <form className="space-y-6">

                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">
                                Email Address :
                            </label>
                            <input
                                type="email"
                                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3a5a1c]"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">
                                Subject:
                            </label>
                            <input
                                type="text"
                                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3a5a1c]"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <textarea
                                rows="6"
                                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3a5a1c]"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <div className="flex justify-end">
                            <Button type="submit" size="sm">
                                Send
                            </Button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact;