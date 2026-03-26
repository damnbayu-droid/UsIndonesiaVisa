import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe, MapPin, Link as LinkIcon, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sitemap | US Indonesia Visa Official Portal",
  description: "Complete sitemap of US Indonesia Visa official services. Find visa entry guides for Bali, Jakarta, Lombok, and more for United States citizens.",
  alternates: {
    canonical: "https://usindonesiavisa.online/sitemap",
  },
};

export default function SitemapPage() {
  const mainLinks = [
    { title: "Home", href: "/" },
    { title: "Apply Now", href: "https://indonesianvisas.com/apply" },
    { title: "Extend Visa", href: "https://indonesianvisas.com/extend" },
    { title: "Services", href: "https://indonesianvisas.com/services" },
    { title: "FAQ", href: "https://indonesianvisas.com/faq" },
    { title: "About Us", href: "https://indonesianvisas.com/about" },
  ];

  const destinationCluster = [
    { title: "Visa Indonesia", href: "/visa-indonesia" },
    { title: "Visa Bali", href: "/visa-bali" },
    { title: "Visa Jakarta", href: "/visa-jakarta" },
    { title: "Visa Lombok", href: "/visa-lombok" },
    { title: "Visa Surabaya", href: "/visa-surabaya" },
    { title: "Visa Jogja", href: "/visa-jogja" },
  ];

  const policyLinks = [
    { title: "Privacy Policy", href: "https://indonesianvisas.com/privacy" },
    { title: "Terms of Service", href: "https://indonesianvisas.com/terms" },
    { title: "Refund Policy", href: "https://indonesianvisas.com/refund" },
    { title: "Disclaimer", href: "https://indonesianvisas.com/disclaimer" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Sitemap</h1>
            <p className="text-lg text-slate-600">Complete guide to our visa services and destination portals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Main Links */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-blue-900" />
                <h2 className="text-xl font-black text-slate-800 uppercase">Main Services</h2>
              </div>
              <ul className="space-y-4">
                {mainLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-lg text-slate-600 hover:text-blue-900 transition-colors flex items-center gap-2 group font-bold">
                      <LinkIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destination Cluster - NEW */}
            <div className="bg-blue-50/50 p-8 rounded-3xl border-2 border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-900" />
                <h2 className="text-xl font-black text-slate-800 uppercase">New Cluster: Destinations</h2>
              </div>
              <ul className="space-y-4">
                {destinationCluster.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-lg text-blue-900 hover:text-amber-600 transition-colors flex items-center gap-2 group font-black">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-900" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-slate-400" />
                <h2 className="text-xl font-black text-slate-800 uppercase">Policies</h2>
              </div>
              <ul className="space-y-4">
                {policyLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-lg text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-2 group">
                      <LinkIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* External Redirect CTA */}
          <div className="mt-20 p-10 bg-slate-900 rounded-3xl text-center text-white shadow-2xl">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-widest">Official Indonesian Visas Portal</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Ready to start your application? Redirect to our main processing portal for fast, secure, and professional visa issuance.
            </p>
            <a
              href="https://indonesianvisas.com"
              className="bg-white text-slate-900 px-10 py-4 rounded-full font-black text-xl hover:bg-amber-400 transition-all uppercase tracking-widest inline-block"
            >
              Go to indonesianvisas.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
