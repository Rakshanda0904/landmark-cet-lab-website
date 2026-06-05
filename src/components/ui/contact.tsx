"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MailIcon, PhoneIcon, MapPinIcon, Loader2 } from 'lucide-react';

import { ContactCard } from "./contact-card";
import { Input } from './input';
import { Button } from './button';
import { Label } from './label';
import { Textarea } from './textarea';
import { Macbook } from "./animated-3d-mac-book-air";

// 1. Define the validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
    // 2. Initialize the form
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    // 3. Handle submission
    const onSubmit = async (data: ContactFormValues) => {
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Form Data:", data);
            alert("Message sent successfully!");
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main id="contact" className="relative flex flex-col size-full min-h-screen w-full items-center justify-center py-24 px-4 lg:px-8">
            {/* Contact Us Section Header */}
            <div className="flex flex-col mb-16 w-full z-10 max-w-7xl mx-auto">
                <div className="flex items-center gap-3 text-xl mb-4">
                    <span className="text-blue-500 animate-pulse text-xs">●</span>
                    <span className="text-xs tracking-[0.2em] font-medium text-white/50 uppercase">
                        CONTACT US
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-blue-200 leading-tight">
                    Engineering Trust, Restless Support
                </h1>
            </div>

            <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Contact Card on the Left */}
                <div className="lg:col-span-8 w-full">
                    <ContactCard
                        title="Get in touch"
                        description="If you have any questions regarding our Services or need help, please fill out the form here."
                        contactInfo={[
                            { icon: MailIcon, label: 'Email', value: 'landmarkcet@gmail.com', className: 'flex-1 min-w-[240px]' },
                            { icon: PhoneIcon, label: 'Phone', value: '+91 89836 71762', className: 'flex-1 min-w-[240px]' },
                            {
                                icon: MapPinIcon,
                                label: 'Address',
                                value: 'Unit No. 5, Sethia Industrial Park, Vasai(E) India',
                                className: 'w-full'
                            }
                        ]}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
                            {/* Name Field */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    {...register("name")}
                                    className={errors.name ? "border-red-500" : ""}
                                />
                                {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                    className={errors.email ? "border-red-500" : ""}
                                />
                                {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                            </div>

                            {/* Phone Field */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    {...register("phone")}
                                    className={errors.phone ? "border-red-500" : ""}
                                />
                                {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    {...register("message")}
                                    className={errors.message ? "border-red-500" : ""}
                                />
                                {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                            </div>

                            <Button
                                className="w-full"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </form>
                    </ContactCard>
                </div>

                {/* MacBook Air 3D Animation on the Right */}
                <div className="lg:col-span-4 w-full flex flex-col items-center justify-center relative min-h-[300px] lg:min-h-[400px]">
                    {/* Background ambient light */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                    
                    <div className="relative w-[300px] h-[220px] flex items-center justify-center scale-125 sm:scale-[1.5] lg:scale-[1.8] xl:scale-[2] transition-transform duration-500">
                        <Macbook />
                    </div>
                </div>
            </div>
        </main>
    );
}

