"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Menu, X, ShoppingBag, Coffee, 
  Droplets, Monitor, ShieldCheck, Truck, Package, 
  CheckCircle, MapPin, Mail, Phone, ArrowRight, Wheat
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitted">("idle");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitted");
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-primary)]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-playfair text-2xl font-bold text-[var(--color-primary)]">
                UK<span className="text-[var(--color-accent)]">Goods</span>Abuja
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors">Contact</a>
            </nav>
            <div className="hidden md:flex">
              <a href="#contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-6 py-2.5 rounded-md font-medium transition-all duration-200 hover:scale-105 hover:shadow-md">
                Become a Stockist
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[var(--color-primary)] p-2">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[var(--color-background)] border-b border-[var(--color-primary)]/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] font-medium">Home</a>
              <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] font-medium">Products</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] font-medium">About Us</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] font-medium">Contact</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 mt-4 text-center bg-[var(--color-primary)] text-white rounded-md font-medium">Become a Stockist</a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative bg-[var(--color-primary)] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/warehouse/1920/1080')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl"
            >
              Premium UK Goods.<br className="hidden md:block" /> Delivered Across Nigeria.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light"
            >
              Supplying supermarkets and retail outlets in Abuja with quality imported goods.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a href="#products" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-3.5 rounded-md font-medium text-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-lg flex items-center justify-center">
                Browse Products
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3.5 rounded-md font-medium text-lg transition-all duration-200 hover:scale-[1.03] flex items-center justify-center">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:justify-between items-center text-sm md:text-base font-medium text-[var(--color-primary)]"
            >
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-[var(--color-accent)]" /> UK-Sourced Goods</div>
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2"><MapPin size={18} className="text-[var(--color-accent)]" /> Serving Abuja Supermarkets</div>
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2"><Package size={18} className="text-[var(--color-accent)]" /> Consumables & Electronics</div>
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2"><Truck size={18} className="text-[var(--color-accent)]" /> Wholesale Pricing Available</div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 md:py-28 bg-[var(--color-background)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">What We Supply</h2>
              <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { icon: Droplets, title: "Cooking Oils & Fats", desc: "Premium vegetable, sunflower, and olive oils." },
                { icon: Wheat, title: "Flour & Baking", desc: "High-quality plain, self-raising, and bread flours." },
                { icon: ShoppingBag, title: "Canned & Packaged Foods", desc: "Baked beans, tomatoes, and ready meals." },
                { icon: Coffee, title: "Beverages & Drinks", desc: "Teas, coffees, juices, and soft drinks." },
                { icon: ShieldCheck, title: "Cleaning & Household", desc: "Antibacterial sprays, detergents, and more." },
                { icon: Monitor, title: "Electronics & Appliances", desc: "Reliable kitchen and home appliances." },
              ].map((cat, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-[var(--color-background)] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 text-[var(--color-primary)]">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[var(--color-primary)] mb-2">{cat.title}</h3>
                  <p className="text-gray-600 mb-6">{cat.desc}</p>
                  <a href="#products" className="text-[var(--color-accent)] font-medium flex items-center gap-2 group-hover:text-[var(--color-accent-hover)] transition-colors">
                    View Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">Featured Products</h2>
              <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { name: "Crispy Crown Vegetable Oil (5L)", desc: "Premium quality cooking oil.", icon: Droplets, color: "bg-amber-100 text-amber-600" },
                { name: "Homepride Plain Flour (1.5kg)", desc: "Perfect for everyday baking.", icon: Wheat, color: "bg-orange-100 text-orange-600" },
                { name: "Kenwood Food Processor", desc: "Durable UK kitchen appliance.", icon: Monitor, color: "bg-slate-100 text-slate-600" },
                { name: "Dettol Antibacterial Spray", desc: "Kills 99.9% of bacteria.", icon: ShieldCheck, color: "bg-emerald-100 text-emerald-600" },
                { name: "Heinz Baked Beanz (415g)", desc: "Classic UK favorite.", icon: ShoppingBag, color: "bg-red-100 text-red-600" },
                { name: "Nescafe Gold Blend (200g)", desc: "Rich and smooth instant coffee.", icon: Coffee, color: "bg-yellow-100 text-yellow-700" },
                { name: "Ariel Washing Powder (2kg)", desc: "Tough on stains, gentle on clothes.", icon: Package, color: "bg-blue-100 text-blue-600" },
                { name: "Tilda Pure Basmati Rice (5kg)", desc: "Premium aromatic rice.", icon: Package, color: "bg-indigo-100 text-indigo-600" },
              ].map((prod, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="bg-[var(--color-background)] rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className={`h-48 w-full ${prod.color} flex items-center justify-center`}>
                    <prod.icon size={64} className="opacity-50" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-playfair text-lg font-bold text-[var(--color-primary)] mb-2 line-clamp-2">{prod.name}</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">{prod.desc}</p>
                    <a href="#contact" className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white text-center py-2.5 rounded-md font-medium text-sm transition-all duration-200 hover:scale-[1.02]">
                      Request This Product
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-[var(--color-primary)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Why Partner With Us</h2>
              <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {[
                { title: "Direct UK Sourcing", desc: "We import directly from trusted UK manufacturers and wholesalers." },
                { title: "Wholesale Pricing", desc: "Competitive margins designed to help your retail business thrive." },
                { title: "Reliable Delivery to Abuja", desc: "Consistent supply chain ensuring your shelves are never empty." },
                { title: "Flexible Order Quantities", desc: "Catering to both large supermarkets and growing retail stores." },
                { title: "Trusted by Supermarkets", desc: "Already supplying top retail outlets across the capital." },
                { title: "Wide Product Range", desc: "From daily consumables to premium electronics in one place." },
              ].map((feature, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-[var(--color-accent)]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 bg-[var(--color-background)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="lg:w-1/2"
              >
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">About Our Business</h2>
                <div className="w-16 h-1 bg-[var(--color-accent)] mb-8 rounded-full"></div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We are a dedicated B2B importer and wholesale distributor specializing in premium UK goods. Based in Abuja, Nigeria, we bridge the gap between high-quality British manufacturing and the growing Nigerian retail market.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-10">
                  With a robust supply chain and a commitment to reliability, we currently partner with leading supermarkets to ensure consistent availability of essential consumables, household products, and electronics. As we expand our operations, we are looking for new retail partners who value quality, competitive pricing, and dependable service.
                </p>
                <a href="#contact" className="inline-block bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-8 py-3.5 rounded-md font-medium transition-all duration-300">
                  Enquire About Partnership
                </a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2 w-full"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-[var(--color-primary)]/20 mix-blend-overlay z-10"></div>
                  <Image 
                    src="https://picsum.photos/seed/business/800/600" 
                    alt="Warehouse distribution" 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">Get in Touch</h2>
              <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600">Interested in stocking our products? Fill out the form below and our wholesale team will get back to you with a quote.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-[var(--color-background)] rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
            >
              {formStatus === "submitted" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[var(--color-primary)] mb-2">Enquiry Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for your interest. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input type="text" id="fullName" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                      <input type="text" id="businessName" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="Supermarket Ltd" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="+234 ..." />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Primary Product Interest</label>
                    <select id="interest" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all bg-white">
                      <option value="">Select a category...</option>
                      <option value="oils">Cooking Oils & Fats</option>
                      <option value="flour">Flour & Baking</option>
                      <option value="canned">Canned & Packaged Foods</option>
                      <option value="beverages">Beverages & Drinks</option>
                      <option value="cleaning">Cleaning & Household</option>
                      <option value="electronics">Electronics & Appliances</option>
                      <option value="multiple">Multiple Categories</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message / Enquiry Details</label>
                    <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white py-4 rounded-md font-medium text-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-md">
                    Send Enquiry
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-medium">+234 (0) 800 123 4567</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-medium">wholesale@ukgoodsabuja.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-primary)] text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <a href="#" className="font-playfair text-2xl font-bold text-white mb-4 block">
                UK<span className="text-[var(--color-accent)]">Goods</span>Abuja
              </a>
              <p className="text-gray-400 text-sm max-w-xs">
                Premium UK goods imported and distributed to supermarkets and retail outlets across Abuja, Nigeria.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-[var(--color-accent)] transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-[var(--color-accent)] transition-colors">Products</a></li>
                <li><a href="#about" className="hover:text-[var(--color-accent)] transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-lg font-bold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} UK Goods Abuja. All rights reserved.</p>
            <p className="mt-2 md:mt-0">B2B Wholesale Distribution</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
