import React from 'react';
import { motion } from "framer-motion";

const services = [
    { title: "Frontend Development", desc: "Crafting modern, responsive, and high-performance interfaces using Next.js & Angular.", size: "md:col-span-2 md:row-span-1" },
    { title: "SQA & Testing", desc: "Ensuring bug-free software through rigorous manual and automated testing.", size: "md:col-span-1 md:row-span-1" },
    { title: "Shopify & Custom Themes", desc: "Expert Shopify store setup and custom Liquid theme development.", size: "md:col-span-1 md:row-span-2" },
    { title: "AI Automation & Agents", desc: "Automating workflows and building autonomous AI agents for businesses.", size: "md:col-span-2 md:row-span-1" },
    { title: "No-Code Websites", desc: "Scalable websites using Framer, Webflow, and modern no-code tools.", size: "md:col-span-1 md:row-span-1" },
    { title: "Backend Development", desc: "Scalable server-side logic and robust database architectures.", size: "md:col-span-1 md:row-span-1" },
    { title: "WordPress Ecosystem", desc: "Unique themes and specialized plugins tailored for your needs.", size: "md:col-span-2 md:row-span-1" },
    { title: "E-commerce Solutions", desc: "Full-stack platforms with secure payments and inventory management.", size: "md:col-span-1 md:row-span-1" },
    { title: "CV & Consultation", desc: "ATS-friendly resumes and professional life/career growth guidance.", size: "md:col-span-4 md:row-span-1" }, // Changed to col-span-4 for better balance
];

export const Services = () => {
    return (
        <section id="services" className="text-white px-6 py-12 md:p-8 max-w-[1200px] mx-auto mt-12 md:mt-24">

            {/* Heading Section - Fixed for Mobile */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center md:text-left"
            >
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic opacity-40">SERVICES</h2>
                <h3 className="text-2xl md:text-4xl font-bold -mt-6 md:-mt-8 ml-0 md:ml-2">
                    Focusing on <span className="text-emerald-300">Quality & Innovation</span>
                </h3>
            </motion.div>

            {/* Bento Grid - Mobile: 1 Column, Desktop: 4 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={`${service.size} border border-white/10 rounded-3xl p-6 bg-white/5 backdrop-blur-sm hover:border-emerald-300/30 transition-all duration-300 group relative flex flex-col justify-between overflow-hidden min-h-[200px] md:min-h-0`}
                    >
                        {/* Decoration - Hidden on mobile to keep it clean */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-300/5 rounded-full blur-3xl group-hover:bg-emerald-300/10 transition-colors"></div>

                        <div className="relative z-10">
                            <div className="text-emerald-300 text-[10px] font-mono mb-4 border border-emerald-300/20 w-fit px-2 py-1 rounded-md">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>

                        <div className="mt-6 md:mt-4 flex justify-end relative z-10">
                            <div className="text-white/20 group-hover:text-emerald-300 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pricing / CTA Section - Full Responsive */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-8 p-8 md:p-12 border border-white/10 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-emerald-300/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
            >
                <div className="max-w-xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to start a project?</h3>
                    <p className="text-white/50 text-sm md:text-base px-2 md:px-0">
                        Pricing is flexible and depends on the scope of work. Let's talk about
                        your vision and decide on a fair budget together.
                    </p>
                </div>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:shahzarahmad@example.com"
                    className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 font-bold text-black transition-all duration-200 bg-emerald-300 rounded-full hover:bg-emerald-400 shadow-[0_10px_20px_rgba(110,231,183,0.2)]"
                >
                    Email for Custom Quote
                </motion.a>
            </motion.div>
        </section>
    );
};