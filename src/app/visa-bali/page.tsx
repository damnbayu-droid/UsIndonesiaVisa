import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VisaCard from '@/components/VisaCard';
import { ArrowRight, Plane, Globe, MapPin } from 'lucide-react';
import { VISA_SERVICES } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Visa Bali | Official Bali Entry Services for US Citizens",
  description: "Official Bali visa services for United States citizens. Fast-track E-VOA and Tourist visas for your Bali holiday. 16+ years of expertise in Bali immigration.",
  alternates: {
    canonical: "https://usindonesiavisa.online/visa-bali",
  },
};

export default function VisaBaliPage() {
  const popularVisas = VISA_SERVICES.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-900 text-sm font-black mb-8 uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            <span>Bali Destination</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-800 tracking-tight">
            Visa <span className="text-orange-600">Bali</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10">
            Exclusive visa services for United States citizens planning their escape to the Island of the Gods. Whether for a spiritual retreat or a beach holiday, we provide the perfect entry solutions.
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Top Visas for Bali</h2>
            <p className="text-lg text-slate-600">Recommended visa types for US citizens visiting Bali.</p>
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
                <Plane className="w-10 h-10 text-orange-600" />
                <h2 className="text-3xl font-black text-slate-800 uppercase">Land in Paradise</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Bali Ngurah Rai International Airport (DPS) is your gateway to paradise. Our specialized Bali visa services cater to tourists and business travelers alike, ensuring your arrival is as beautiful as the island itself.
              </p>
              <ul className="space-y-4">
                {[
                  "Fastest E-VOA Processing",
                  "Expert Bali Support Team",
                  "Airport Pickup Guidance",
                  "Visa Extension Assistance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-slate-50 p-8 rounded-3xl border-2 border-slate-200">
              <h3 className="text-2xl font-black text-slate-800 mb-6 uppercase">Ready for Bali?</h3>
              <p className="text-slate-600 mb-8">Get your Bali visa approved quickly and securely. Trusted by thousands of US travelers every year.</p>
              <a
                href="https://indonesianvisas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800 text-white py-4 rounded-xl font-black text-center block hover:bg-orange-600 transition-colors uppercase tracking-widest"
              >
                Start Bali Visa Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
