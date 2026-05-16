import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, NumberInput, Portal, DatePicker } from "@chakra-ui/react";
import { parseDate } from "@internationalized/date";
import { LuCalendar } from "react-icons/lu";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "@/components/Button";
import { isValidPhoneNumber } from "libphonenumber-js";
import axios from "axios";

// ✅ Convert any date format → YYYY-MM-DD
const toISO = (dateStr) => {
    if (!dateStr) return "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
        const [mm, dd, yyyy] = dateStr.split("/");
        return `${yyyy}-${mm}-${dd}`;
    }
    return dateStr;
};

// ✅ Safe parseDate — won't crash on bad format
const safeParse = (dateStr) => {
    try {
        const iso = toISO(dateStr);
        return iso ? parseDate(iso) : null;
    } catch {
        return null;
    }
};

function Booking() {
    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = useForm({ defaultValues: { adults: 2, children: 0, phone: "" } });

    const pincodeValue = watch("pincode");

    React.useEffect(() => {
        if (pincodeValue && pincodeValue.toString().length === 6) {
            const fetchPincodeDetails = async () => {
                try {
                    const response = await axios.get(`https://api.postalpincode.in/pincode/${pincodeValue}`);
                    const data = response.data;

                    if (data && data[0] && data[0].Status === "Success" && data[0].PostOffice && data[0].PostOffice.length > 0) {
                        const details = data[0].PostOffice[0];
                        setValue("city", details.District || "", { shouldValidate: true });
                        setValue("state", details.State || "", { shouldValidate: true });
                    }
                } catch (err) {
                    console.error("Error fetching pincode details", err);
                }
            };
            fetchPincodeDetails();
        }
    }, [pincodeValue, setValue]);

    const today = new Date().toISOString().split("T")[0];
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitError("");
        try {
            const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
            const response = await axios.post(`${serverUrl}/submit`, data);
            if (response.data.success) {
                setShowModal(true);
            } else {
                setSubmitError("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitError("Unable to reach server. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // ✅ Chakra UI v3 NumberInput
    const NumberStepper = ({ name, label, min, max }) => (
        <div>
            <label className="text-sm">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <NumberInput.Root
                        value={value}
                        min={min}
                        max={max}
                        onValueChange={(details) => onChange(details.valueAsNumber)}
                    >
                        <NumberInput.Control>
                            <NumberInput.IncrementTrigger />
                            <NumberInput.DecrementTrigger />
                        </NumberInput.Control>
                        <NumberInput.Input bg="white" borderRadius="7px" />
                    </NumberInput.Root>
                )}
            />
        </div>
    );

    return (
        <section className="py-24 px-4">
            {/* ── Success Modal ── */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl px-10 py-10 flex flex-col items-center gap-5 max-w-sm w-full mx-4"
                        style={{ animation: "fadeScaleIn 0.22s ease" }}
                    >
                        {/* Checkmark icon */}
                        <div
                            className="flex items-center justify-center rounded-full"
                            style={{
                                width: 64,
                                height: 64,
                                background: "#dfe8cf",
                            }}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 16.5L12.5 23L26 9"
                                    stroke="#4a7c59"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-800 text-center">
                            Enquiry Submitted!
                        </h3>
                        <p className="text-gray-500 text-sm text-center leading-relaxed">
                            Our executives will contact you shortly.
                        </p>

                        <a
                            href="/"
                            className="btn-primary"
                            style={{ textDecoration: "none" }}
                        >
                            Go Back to Home
                        </a>
                    </div>

                    {/* Fade + scale keyframe injected inline */}
                    <style>{`
                        @keyframes fadeScaleIn {
                            from { opacity: 0; transform: scale(0.92); }
                            to   { opacity: 1; transform: scale(1); }
                        }
                    `}</style>
                </div>
            )}

            <div className="max-w-6xl mx-auto space-y-10">

                {/* Banner */}
                <div className="bg-[#dfe8cf] rounded-2xl shadow-md py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-lg font-medium">
                        For booking call hello boCHE: +91 9961008008
                    </p>
                    <Button size="sm" as="a" href="tel:+919961008008">
                        Call Now
                    </Button>
                </div>

                {/* Form Card */}
                <div>
                    <h2 className="text-center text-2xl md:text-3xl mb-8">
                        Enquiry Form
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="border border-gray-400 p-6 rounded-2xl md:p-10 grid md:grid-cols-2 gap-10">

                            {/* ── LEFT SIDE ── */}
                            <div className="space-y-5">

                                {/* First / Second Name */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm">First Name</label>
                                        <Input
                                            {...register("firstName", { required: "Required" })}
                                            placeholder="John"
                                            bg="white"
                                            borderRadius="7px"
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="text-sm">Second Name</label>
                                        <Input {...register("secondName")} placeholder="Doe" bg="white" borderRadius="7px" />
                                    </div>
                                </div>

                                {/* Address Line 1 */}
                                <div>
                                    <label className="text-sm">Address Line 1</label>
                                    <Input
                                        {...register("address1", { required: "Required" })}
                                        placeholder="123 Main Street"
                                        bg="white"
                                        borderRadius="7px"
                                    />
                                    {errors.address1 && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.address1.message}
                                        </p>
                                    )}
                                </div>

                                {/* Address Line 2 */}
                                <div>
                                    <label className="text-sm">Address Line 2</label>
                                    <Input
                                        {...register("address2")}
                                        placeholder="Apt, Suite (optional)"
                                        bg="white"
                                        borderRadius="7px"
                                    />
                                </div>

                                {/* City / State */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm">City</label>
                                        <Input
                                            {...register("city", { required: "Required" })}
                                            placeholder="Mumbai"
                                            bg="white"
                                            borderRadius="7px"
                                        />
                                        {errors.city && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.city.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="text-sm">State</label>
                                        <Input
                                            {...register("state", { required: "Required" })}
                                            placeholder="Maharashtra"
                                            bg="white"
                                            borderRadius="7px"
                                        />
                                        {errors.state && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.state.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Pin Code */}
                                <div>
                                    <label className="text-sm">Pin Code</label>
                                    <Input
                                        {...register("pincode", {
                                            required: "Required",
                                            pattern: {
                                                value: /^\d{6}$/,
                                                message: "Must be 6 digits",
                                            },
                                        })}
                                        placeholder="400001"
                                        maxLength={6}
                                        bg="white"
                                        borderRadius="7px"
                                    />
                                    {errors.pincode && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.pincode.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* ── RIGHT SIDE ── */}
                            <div className="space-y-5 relative">
                                <div className="hidden md:block absolute left-[-20px] top-0 h-full w-px bg-gray-400" />

                                {/* Email */}
                                <div>
                                    <label className="text-sm">Email Address</label>
                                    <Input
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Invalid email address",
                                            },
                                        })}
                                        placeholder="john@example.com"
                                        bg="white"
                                        borderRadius="7px"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* ✅ Phone with react-phone-input-2 */}
                                <div>
                                    <label className="text-sm">Phone Number</label>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        rules={{
                                            required: "Phone number is required",
                                            validate: (value) =>
                                                isValidPhoneNumber("+" + value) || "Invalid phone number",
                                        }}
                                        render={({ field: { onChange, value } }) => (
                                            <PhoneInput
                                                country="in"
                                                value={value}
                                                onChange={onChange}
                                                inputStyle={{
                                                    width: "100%",
                                                    height: "40px",
                                                    fontSize: "0.93rem",
                                                    borderWidth: "1px",
                                                    borderStyle: "solid",
                                                    borderColor: errors.phone ? "#c0392b" : "#e4e4e7",
                                                    borderRadius: "7px",
                                                    backgroundColor: "white",
                                                    paddingLeft: "48px",
                                                }}
                                                buttonStyle={{
                                                    borderWidth: "1px",
                                                    borderStyle: "solid",
                                                    borderColor: errors.phone ? "#c0392b" : "#e4e4e7",
                                                    borderRadius: "7px 0 0 7px",
                                                    backgroundColor: "white",
                                                }}
                                                enableSearch
                                                placeholder="Enter phone number"
                                            />
                                        )}
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                {/* ✅ Chakra UI v3 NumberInput */}
                                <div className="grid grid-cols-2 gap-4">
                                    <NumberStepper
                                        name="adults"
                                        label="Number Of Adults"
                                        min={1}
                                        max={20}
                                    />
                                    <NumberStepper
                                        name="children"
                                        label="Number Of Children"
                                        min={0}
                                        max={10}
                                    />
                                </div>

                                {/* ✅ Range DatePicker for Check In → Check Out */}
                                <div>
                                    <label className="text-sm block mb-1">
                                        Check In — Check Out
                                    </label>
                                    <Controller
                                        name="dateRange"
                                        control={control}
                                        rules={{
                                            validate: (val) => {
                                                if (!val?.checkin) return "Check-in date is required";
                                                if (!val?.checkout) return "Check-out date is required";
                                                if (val.checkout <= val.checkin)
                                                    return "Check-out must be after check-in";
                                                return true;
                                            },
                                        }}
                                        render={({ field: { onChange, value } }) => {
                                            const checkinParsed = value?.checkin
                                                ? safeParse(value.checkin)
                                                : null;
                                            const checkoutParsed = value?.checkout
                                                ? safeParse(value.checkout)
                                                : null;
                                            const pickerValue = [
                                                checkinParsed,
                                                checkoutParsed,
                                            ].filter(Boolean);

                                            return (
                                                <DatePicker.Root
                                                    selectionMode="range"
                                                    locale="en-GB"
                                                    min={parseDate(today)}
                                                    value={pickerValue}
                                                    onValueChange={({ value }) => {
                                                        // .toString() always returns YYYY-MM-DD regardless of locale
                                                        onChange({
                                                            checkin: value?.[0] ? value[0].toString() : "",
                                                            checkout: value?.[1] ? value[1].toString() : "",
                                                        });
                                                    }}
                                                >
                                                    <DatePicker.Control
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px",
                                                            border: errors.dateRange
                                                                ? "1px solid #c0392b"
                                                                : "1px solid #e4e4e7",
                                                            borderRadius: "7px",
                                                            padding: "4px 8px",
                                                            background: "white",
                                                        }}
                                                    >
                                                        <DatePicker.Input
                                                            index={0}
                                                            style={{
                                                                border: "none",
                                                                background: "transparent",
                                                                outline: "none",
                                                                fontSize: "0.9rem",
                                                                width: "100px",
                                                            }}
                                                            placeholder="Check in"
                                                        />
                                                        <span style={{ color: "#6b7a5e" }}>→</span>
                                                        <DatePicker.Input
                                                            index={1}
                                                            style={{
                                                                border: "none",
                                                                background: "transparent",
                                                                outline: "none",
                                                                fontSize: "0.9rem",
                                                                width: "100px",
                                                            }}
                                                            placeholder="Check out"
                                                        />
                                                        <DatePicker.IndicatorGroup
                                                            style={{ marginLeft: "auto" }}
                                                        >
                                                            <DatePicker.Trigger
                                                                style={{
                                                                    background: "transparent",
                                                                    border: "none",
                                                                    cursor: "pointer",
                                                                    color: "#6b7a5e",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                }}
                                                            >
                                                                <LuCalendar size={18} />
                                                            </DatePicker.Trigger>
                                                        </DatePicker.IndicatorGroup>
                                                    </DatePicker.Control>

                                                    <Portal>
                                                        <DatePicker.Positioner>
                                                            <DatePicker.Content
                                                                style={{
                                                                    background: "#fff",
                                                                    borderRadius: "10px",
                                                                    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                                                                }}
                                                            >
                                                                <DatePicker.View view="day">
                                                                    <DatePicker.Header />
                                                                    <DatePicker.DayTable />
                                                                </DatePicker.View>
                                                                <DatePicker.View view="month">
                                                                    <DatePicker.Header />
                                                                    <DatePicker.MonthTable />
                                                                </DatePicker.View>
                                                                <DatePicker.View view="year">
                                                                    <DatePicker.Header />
                                                                    <DatePicker.YearTable />
                                                                </DatePicker.View>
                                                            </DatePicker.Content>
                                                        </DatePicker.Positioner>
                                                    </Portal>
                                                </DatePicker.Root>
                                            );
                                        }}
                                    />
                                    {errors.dateRange && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.dateRange.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex justify-end items-center gap-4 mt-6">
                            {submitError && (
                                <p className="text-red-600 text-sm font-medium">{submitError}</p>
                            )}
                            <Button
                                type="submit"
                                loading={isSubmitting}
                                loadingText="Submitting..."
                                disabled={isSubmitting}
                            >
                                Submit Enquiry
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Booking;