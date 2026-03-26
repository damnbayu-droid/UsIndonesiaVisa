import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VisaCard from '@/components/VisaCard';
import { ArrowRight, Plane, Globe, MapPin } from 'lucide-react';
import { VISA_SERVICES } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visa Indonesia | Official Entry Services for US Citizens",
  description: "Official Indonesia visa services for United States citizens. Fast-track E-VOA, Business, and Tourist visas. 16+ years of expertise in Indonesian immigration.",
  alternates: {
    canonical: "https://usindonesiavisa.online/visa-indonesia",
  },
};

export default function VisaIndonesiaPage() {
  const popularVisas = VISA_SERVICES.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-900 text-sm font-black mb-8 uppercase tracking-widest">
            <Globe className="w-4 h-4" />
            <span>National Gateway</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-800 tracking-tight">
            Visa <span className="text-blue-900">Indonesia</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10">
            Comprehensive visa solutions for United States citizens traveling to any destination across the Indonesian archipelago. Professional support for tourism, business, and long-term stays.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://indonesianvisas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 shadow-xl inline-flex items-center gap-4 uppercase tracking-widest"
            >
              Indonesian Visas <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Popular Visas */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Most Popular Visas</h2>
            <p className="text-lg text-slate-600">The most requested visa types for US citizens visiting Indonesia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularVisas.map((visa, index) => (
              <VisaCard key={index} {...visa} />
            ))}
          </div>
        </div>
      </section>

      {/* Destination Info */}
      <section className="py-20 px-4 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Plane className="w-10 h-10 text-blue-900" />
                <h2 className="text-3xl font-black text-slate-800 uppercase">Seamless Travel</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Whether you're landing in Jakarta, Bali, or any other international gateway, our visa services ensure a smooth entry into the Republic of Indonesia. We handle all the paperwork so you can focus on your journey.
              </p>
              <ul className="space-y-4">
                {[
                  "Official Government Approval",
                  "24/7 Professional Support",
                  "Fast Processing Times",
                  "Secure Online Application"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-blue-900" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-slate-50 p-8 rounded-3xl border-2 border-slate-200">
              <h3 className="text-2xl font-black text-slate-800 mb-6 uppercase">Need Assistance?</h3>
              <p className="text-slate-600 mb-8">Our team is available round-the-clock to help you with your Indonesian visa application from the United States.</p>
              <a
                href="https://indonesianvisas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800 text-white py-4 rounded-xl font-black text-center block hover:bg-blue-900 transition-colors uppercase tracking-widest"
              >
                Contact Support Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
