"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast, Toaster } from "sonner";

gsap.registerPlugin(ScrollTrigger);

// വാലിഡേഷൻ നിയമങ്ങൾ (Zod Schema) - മാറ്റമില്ല
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Valid phone number required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactFormSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // UPDATED: Formspree Integration Logic
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // const response = await fetch("https://formspree.io/f/xlgwjopp", {
      const response = await fetch("https://formspree.io/f/xqedqkpv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset(); // ഫോം ക്ലിയർ ചെയ്യാൻ
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(
    () => {
      gsap.from(".form-reveal", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      });

      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-40 bg-[#F5F4F2] px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <Toaster position="top-right" richColors />

      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[22vw] font-serif font-black text-black/[0.02] whitespace-nowrap select-none pointer-events-none uppercase italic">
        Connect
      </div>

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        <div className="lg:col-span-5 relative group">
          <div
            ref={imageRef}
            className="relative w-full aspect-[4/5] overflow-hidden rounded-tr-[120px] rounded-bl-[120px] shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070"
              alt="Engineering"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          <div className="form-reveal absolute -bottom-10 -left-10 md:-left-16 bg-[#C69A59] text-white p-10 rounded-full w-44 h-44 flex flex-col justify-center items-center text-center shadow-2xl border-[10px] border-[#F5F4F2]">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black leading-tight text-white">
              Expert <br /> Guidance
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="form-reveal mb-12">
            <span className="text-[#C69A59] font-bold text-[10px] tracking-[0.6em] uppercase block mb-4">
              Get A Quote
            </span>
            <h2 className="text-5xl md:text-7xl font-sans text-[#161616] leading-[1.1] tracking-tighter">
              Let's Start a <br />{" "}
              <span className="italic font-light text-[#C69A59]">
                New Project
              </span>
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8"
          >
            <div className="form-reveal flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">
                Full Name
              </label>
              <input
                {...register("name")}
                placeholder="Your Name"
                className={`bg-white/50 border ${errors.name ? "border-red-400" : "border-black/5"} rounded-2xl py-4 px-6 focus:bg-white focus:border-[#C69A59] outline-none transition-all text-sm font-light shadow-sm`}
              />
              {errors.name && (
                <span className="text-[10px] text-red-500 ml-2">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form-reveal flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">
                Email Address
              </label>
              <input
                {...register("email")}
                placeholder="example@mail.com"
                className={`bg-white/50 border ${errors.email ? "border-red-400" : "border-black/5"} rounded-2xl py-4 px-6 focus:bg-white focus:border-[#C69A59] outline-none transition-all text-sm font-light shadow-sm`}
              />
              {errors.email && (
                <span className="text-[10px] text-red-500 ml-2">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-reveal flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">
                Phone Number
              </label>
              <input
                {...register("phone")}
                placeholder="+968 0000 0000"
                className={`bg-white/50 border ${errors.phone ? "border-red-400" : "border-black/5"} rounded-2xl py-4 px-6 focus:bg-white focus:border-[#C69A59] outline-none transition-all text-sm font-light shadow-sm`}
              />
              {errors.phone && (
                <span className="text-[10px] text-red-500 ml-2">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="form-reveal flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">
                Service Type
              </label>
              <select
                {...register("service")}
                className={`bg-white/50 border ${errors.service ? "border-red-400" : "border-black/5"} rounded-2xl py-4 px-6 focus:bg-white focus:border-[#C69A59] outline-none transition-all text-sm font-light shadow-sm appearance-none cursor-pointer`}
              >
                <option value="">Select Service</option>
                <option value="MEP Design">MEP Design & Build</option>
                <option value="HVAC">HVAC Installations</option>
                <option value="Fire Safety">Fire & Safety</option>
                <option value="ELV">ELV Systems</option>
              </select>
              {errors.service && (
                <span className="text-[10px] text-red-500 ml-2">
                  {errors.service.message}
                </span>
              )}
            </div>

            <div className="form-reveal md:col-span-2 flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Project details..."
                className={`bg-white/50 border ${errors.message ? "border-red-400" : "border-black/5"} rounded-3xl py-5 px-6 focus:bg-white focus:border-[#C69A59] outline-none transition-all text-sm font-light resize-none shadow-sm`}
              />
              {errors.message && (
                <span className="text-[10px] text-red-500 ml-2">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="form-reveal md:col-span-2 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-10 bg-[#161616] text-white pl-10 pr-2 py-2 rounded-full hover:bg-[#C69A59] transition-all duration-500 group shadow-2xl disabled:opacity-50"
              >
                <span className="uppercase tracking-[0.4em] text-[10px] font-black">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#C69A59] group-hover:bg-white flex items-center justify-center text-white group-hover:text-black transition-all">
                  <span className="text-2xl">→</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
