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
        <main className="relative flex size-full min-h-screen w-full items-center justify-center p-4">
            <div className="mx-auto max-w-5xl w-full">
                <ContactCard
                    title="Get in touch"
                    description="If you have any questions regarding our Services or need help, please fill out the form here."
                    contactInfo={[
                        { icon: MailIcon, label: 'Email', value: 'landmarkcet@gmail.com' },
                        { icon: PhoneIcon, label: 'Phone', value: '+91 89836 71762' },
                        {
                            icon: MapPinIcon,
                            label: 'Address',
                            value: 'Unit No. 5, Sethia Industrial Park, Vasai(E) India',
                            className: 'col-span-2'
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
        </main>
    );
}
