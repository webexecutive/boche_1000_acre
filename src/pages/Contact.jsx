import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "@/components/Button";
import axios from "axios";
function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const [status, setStatus] = useState("idle"); // idle | success | error
    const [errorMsg, setErrorMsg] = useState("");

    const onSubmit = async (data) => {
        setStatus("idle");
        setErrorMsg("");
        try {   
            const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
            await axios.post(`${serverUrl}/contact`, data);
            setStatus("success");
            reset();
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.response?.data?.message || "Could not connect to server. Please try again.");
        }
    };

    return (
        <section className="py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm">
                        We'd love to hear from you whether you have questions, need support,
                        want to learn more about our services or for booking please contact us.
                    </p>
                </div>

                {/* Info Section */}
                <div className="relative py-10">
                    <div className="absolute top-0 left-0 w-full h-px bg-gray-300"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

                    <div className="grid md:grid-cols-3 text-center relative">

                        {/* Address */}
                        <div className="relative py-6 md:py-0 px-4 space-y-3">
                            <div className="flex items-center justify-center gap-2">
                                <FaMapMarkerAlt className="text-gray-600 text-lg" />
                                <h3 className="text-lg">Address</h3>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Chulika Estate, Cottappadi P O,<br />
                                Vythiri, Meppadi, Kerala 673577
                            </p>
                            <a
                                href="https://maps.app.goo.gl/eL9urRpNbi4rnPyw5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Button size="sm">Get Direction</Button>
                            </a>
                            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
                            <div className="md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                        </div>

                        {/* Call Us */}
                        <div className="relative py-6 md:py-0 px-4 space-y-3">
                            <div className="flex items-center justify-center gap-2">
                                <FaPhoneAlt className="text-gray-600 text-lg" />
                                <h3 className="text-lg">Call Us</h3>
                            </div>
                            <p className="text-sm text-gray-500">Reception</p>
                            <p className="text-sm text-gray-700">
                                <a href="tel:+917034048884" className="hover:underline hover:text-[#3a5a1c] transition-colors">
                                    +91 70340 48884
                                </a>
                            </p>
                            <p className="text-sm text-gray-700">
                                <a href="tel:+918086004747" className="hover:underline hover:text-[#3a5a1c] transition-colors">
                                    +91 80860 04747
                                </a>
                            </p>
                            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
                            <div className="md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                        </div>

                        {/* Mail */}
                        <div className="py-6 md:py-0 px-4 space-y-3">
                            <div className="flex items-center justify-center gap-2">
                                <FaEnvelope className="text-gray-600 text-lg" />
                                <h3 className="text-lg">Mail Id</h3>
                            </div>
                            <p className="text-sm text-gray-700">
                                <a href="mailto:boche1000acre@gmail.com" className="hover:underline hover:text-[#3a5a1c] transition-colors">
                                    boche1000acre@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="mt-16">
                    <h4 className="mb-6">Write to Us</h4>

                    {/* Success Banner */}
                    {status === "success" && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                            ✅ Your message has been sent! We'll get back to you soon.
                        </div>
                    )}

                    {/* Error Banner */}
                    {status === "error" && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                            ❌ {errorMsg}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">
                                Email Address :
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className={`w-full bg-white border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3a5a1c] ${errors.email ? "border-red-400" : "border-gray-300"
                                    }`}
                                {...register("email", {
                                    required: "Email address is required.",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Please enter a valid email address.",
                                    },
                                })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ message }) => (
                                    <p className="text-red-500 text-xs mt-1">⚠ {message}</p>
                                )}
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">
                                Subject:
                            </label>
                            <input
                                type="text"
                                placeholder="What is this about?"
                                className={`w-full bg-white border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3a5a1c] ${errors.subject ? "border-red-400" : "border-gray-300"
                                    }`}
                                {...register("subject", {
                                    required: "Subject is required.",
                                    minLength: {
                                        value: 3,
                                        message: "Subject must be at least 3 characters.",
                                    },
                                })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="subject"
                                render={({ message }) => (
                                    <p className="text-red-500 text-xs mt-1">⚠ {message}</p>
                                )}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">
                                Message:
                            </label>
                            <textarea
                                rows="6"
                                placeholder="Write your message here..."
                                className={`w-full bg-white border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3a5a1c] ${errors.message ? "border-red-400" : "border-gray-300"
                                    }`}
                                {...register("message", {
                                    required: "Message is required.",
                                    minLength: {
                                        value: 10,
                                        message: "Message must be at least 10 characters.",
                                    },
                                })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="message"
                                render={({ message }) => (
                                    <p className="text-red-500 text-xs mt-1">⚠ {message}</p>
                                )}
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex justify-end">
                            <Button type="submit" size="sm" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send"}
                            </Button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact;