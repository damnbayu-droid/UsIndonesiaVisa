import React from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 text-white uppercase tracking-tight">US Indonesia Visa</h2>
            <p className="text-slate-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Professional United States to Indonesia visa services with 16+ years experience. Fast, reliable, and trusted by thousands from the US and worldwide.
              <br />
              <a href="/sitemap" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-black uppercase tracking-widest mt-2 inline-block">
                (sitemap)
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 md:mb-6 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="https://indonesianvisas.com/apply" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Apply Now</a></li>
              <li><a href="https://indonesianvisas.com/extend" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Extend Visa</a></li>
              <li><a href="https://indonesianvisas.com/services" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="https://indonesianvisas.com/faq" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 md:mb-6 text-white uppercase tracking-wider">Policies</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="https://indonesianvisas.com/privacy" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://indonesianvisas.com/terms" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="https://indonesianvisas.com/refund" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="https://indonesianvisas.com/disclaimer" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-700 pt-6 md:pt-8 mb-6 md:mb-8">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.bgClass} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm hover:scale-110 transition-transform shadow-lg`}
                aria-label={`Follow us on ${social.name}`}
              >
                {social.name.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-600 pt-6 pb-4 text-center">
          <p className="text-slate-300 text-sm md:text-base mb-4 font-bold uppercase tracking-widest leading-none">© 2026 US Indonesia Visa™</p>
          <p className="text-slate-400 text-xs md:text-sm mb-4">Operated by PT Indonesian Visas Agency (Indonesia).</p>
          <p className="text-slate-500 text-xs md:text-sm mb-6 uppercase tracking-tighter">All Rights Reserved.</p>
          <div className="mb-4">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm">
              <a href="https://bali.enterprises" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">bali.enterprises</a>
              <span className="text-slate-700">•</span>
              <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">indonesianvisas.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
