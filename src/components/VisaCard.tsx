import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ICON_MAP } from '@/lib/constants';

interface VisaCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
}

export default function VisaCard({ title, description, link, icon }: VisaCardProps) {
  const IconComponent = ICON_MAP[icon as keyof typeof ICON_MAP];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
      <div className="text-slate-800 mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        {IconComponent && <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-blue-900" aria-hidden="true" />}
      </div>
      <h3 className="text-xl md:text-2xl font-black mb-4 text-slate-800 tracking-tight group-hover:text-blue-900 transition-colors">{title}</h3>
      <p className="text-base text-slate-600 mb-8 leading-relaxed line-clamp-3">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 text-sm md:text-base font-black text-blue-900 hover:text-amber-500 transition-all uppercase tracking-widest"
        aria-label={`Learn more about ${title} services`}
      >
        Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
      </a>
    </div>
  );
}
