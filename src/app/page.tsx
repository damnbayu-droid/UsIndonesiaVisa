import Image from 'next/image';
import Navbar from '@/components/Navbar';
import {
  Globe,
  RefreshCw,
  MessageCircle,
  CheckCircle2,
  Send,
  FileText,
  CreditCard,
  Star,
  Navigation,
  Briefcase,
  User,
  Clock,
  HeadphonesIcon as Headphones,
  ArrowRight,
  MapPin,
  Mail,
  Plane,
  Heart,
} from 'lucide-react';

// Static data moved outside component to prevent recreation on every render
const VISA_SERVICES = [
  {
    title: "B1 VOA / Extension",
    description: "30-day visa on arrival with extension options. Perfect for short visits and tourism.",
    link: "https://indonesianvisas.com/services/B1",
    icon: "Navigation",
  },
  {
    title: "C1 Visit Visa",
    description: "Single entry visit visa for tourism purposes. Valid for 60 days with flexible dates.",
    link: "https://indonesianvisas.com/services/C1",
    icon: "Globe",
  },
  {
    title: "C2 Business Visa",
    description: "Business visa for meetings and conferences. Includes multiple entry options.",
    link: "https://indonesianvisas.com/services/C2",
    icon: "Briefcase",
  },
  {
    title: "C12 Pre-Investment Visa",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/C12",
    icon: "Star",
  },
  {
    title: "D1 Tourist Visa",
    description: "60-day tourist visa (B211A) with extensions up to 180 days total stay.",
    link: "https://indonesianvisas.com/services/D1",
    icon: "User",
  },
  {
    title: "D2 Business Visa",
    description: "Multiple entry business visa for professionals. Valid up to 12 months.",
    link: "https://indonesianvisas.com/services/D2",
    icon: "FileText",
  },
  {
    title: "D12 Pre Investment",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/D12",
    icon: "Star",
  },
  {
    title: "E33G Digital Nomad",
    description: "5-year digital nomad visa for remote workers. Live and work in Indonesia long-term.",
    link: "https://indonesianvisas.com/services/E33G",
    icon: "Globe",
  },
  {
    title: "E28A Investment Kitas",
    description: "Investment-based residence permit. Long-term stay for investors.",
    link: "https://indonesianvisas.com/services/E28A",
    icon: "CreditCard",
  },
  {
    title: "Custom Visa",
    description: "Tailored visa solutions for unique cases. We handle special requirements.",
    link: "https://indonesianvisas.com/services",
    icon: "FileText",
  },
] as const;

const BENEFITS = [
  {
    title: "Fast Processing",
    description: "Express service available with same-day processing options for urgent applications",
    icon: "Clock",
  },
  {
    title: "99% Success Rate",
    description: "Proven track record with 10,000+ visas processed successfully worldwide",
    icon: "CheckCircle2",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock WhatsApp support for your peace of mind anytime, anywhere",
    icon: "Headphones",
  },
  {
    title: "97 Countries",
    description: "We serve applicants from 97 countries worldwide with local expertise",
    icon: "Globe",
  },
] as const;

const SOCIAL_LINKS = [
  { name: "Telegram", url: "https://t.me/IndonesianVisas", bgClass: "bg-slate-800" },
  { name: "Instagram", url: "https://instagram.com/balihelp.id", bgClass: "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" },
  { name: "TikTok", url: "https://www.tiktok.com/@balihelp.id", bgClass: "bg-black" },
  { name: "Facebook", url: "https://facebook.com/BaliHelp", bgClass: "bg-blue-600" },
  { name: "Twitter", url: "https://twitter.com/IndonesianVisas", bgClass: "bg-sky-500" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/bayu-damopolii-887ab883/", bgClass: "bg-blue-700" },
  { name: "YouTube", url: "https://youtube.com/@balihelp", bgClass: "bg-red-600" },
] as const;


// Icon mapping for efficient rendering
const ICON_MAP = {
  Navigation,
  Globe,
  Briefcase,
  Star,
  User,
  FileText,
  CreditCard,
  Clock,
  CheckCircle2,
  Headphones,
} as const;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "United States Indonesia Visa Services",
    "description": "Professional visa services for travel from the United States to Indonesia. Express processing for Tourism, Business, and Investment visas.",
    "provider": {
      "@type": "Organization",
      "name": "US Indonesia Visa Agency",
      "url": "https://usindonesiavisa.online",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Tibungsari No.11C",
        "addressLocality": "Bali",
        "addressCountry": "ID"
      }
    },
    "serviceType": ["Tourist Visa", "Business Visa", "Visa Extension"],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight text-slate-800">
              United States Indonesia Visa
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed">
              Gateway to Indonesian Visas
            </p>
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed text-slate-700">
              Fast, reliable, and professional visa services for your Indonesian adventure from United States. We serve 97 countries with expert support and dedicated customer service available 24/7.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
              <div className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200">
                <div className="text-3xl md:text-4xl font-black mb-2 text-blue-900">16+</div>
                <div className="text-xs md:text-sm font-bold text-slate-600">Years Experience</div>
              </div>
              <div className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200">
                <div className="text-3xl md:text-4xl font-black mb-2 text-blue-900">10,000+</div>
                <div className="text-xs md:text-sm font-bold text-slate-600">Visas Processed</div>
              </div>
              <div className="p-5 md:p-6 rounded-2xl bg-white border-2 border-slate-200">
                <div className="text-3xl md:text-4xl font-black mb-2 text-blue-900">99%</div>
                <div className="text-xs md:text-sm font-bold text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Select Your Country CTA */}
          <div className="text-center">
            <a
              href="https://indonesianvisas.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-10 py-6 rounded-full font-black text-xl md:text-2xl hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-4"
              aria-label="Select your country and start your visa application"
            >
              Select Your Country Now <ArrowRight className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 md:py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Send className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-slate-800" aria-hidden="true" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">Apply for a Visa</h3>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                Get your Indonesian visa quickly and hassle-free. Professional support from start to finish. Start your application today and receive approval within 24-48 hours.
              </p>
              <a
                href="https://indonesianvisas.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
                aria-label="Apply for a new Indonesian visa"
              >
                Apply Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <RefreshCw className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 text-slate-800" aria-hidden="true" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-800">Extend Your Visa</h3>
              <p className="text-base md:text-lg mb-5 md:mb-6 text-slate-600">
                Need more time in Indonesia? Extend your visa without leaving country. Simple process with guaranteed approval. Stay up to 180 days.
              </p>
              <a
                href="https://indonesianvisas.com/extend"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-800 border-2 border-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:border-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
                aria-label="Extend your current Indonesian visa"
              >
                Extend Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Services */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Our Visa Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Choose right visa type for your needs - from tourist to business and investment visas. Expert guidance for every visa category.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            {VISA_SERVICES.map((service, index) => {
              const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP];
              return (
                <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-slate-800 mb-4">{IconComponent && <IconComponent className="w-16 h-16" aria-hidden="true" />}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 mb-6">{service.description}</p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-800 hover:text-blue-900 transition-colors"
                    aria-label={`Learn more about ${service.title} services`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <a
              href="https://indonesianvisas.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Visa Types <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Indonesia & United States Section - NEW */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Indonesia & United States</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Bridging two great nations with seamless visa services and cultural connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Indonesia Info */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <Plane className="w-12 h-12 text-blue-900" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">About Indonesia</h3>
              </div>
              <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                Indonesia is world's largest archipelago nation, comprising over 17,000 islands with diverse cultures, stunning landscapes, and rich heritage. From the temples of Bali to the rainforests of Sumatra, Indonesia offers endless adventures.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                With a tropical climate year-round, vibrant cities, and world-class beaches, Indonesia has become one of the most popular destinations for travelers from the United States seeking adventure, relaxation, and cultural experiences.
              </p>
            </div>

            {/* United States Info */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-12 h-12 text-blue-900" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">About United States</h3>
              </div>
              <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                The United States of America, spanning 50 states across North America, is a global leader with diverse cultures and landscapes. American travelers have long been drawn to Indonesia's natural beauty and cultural richness.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                With strong diplomatic ties and increasing tourism between our nations, US citizens can easily obtain Indonesian visas to experience everything from Bali's spiritual retreats to Komodo's unique wildlife, making it an ideal destination for American travelers.
              </p>
            </div>
          </div>

          {/* Connection Stats */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Heart className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
              <h3 className="text-2xl md:text-3xl font-bold">Strong Connection Between Nations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-black mb-2">400,000+</div>
                <div className="text-sm md:text-base font-semibold">US Visitors to Indonesia Annually</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-black mb-2">18-20 Hours</div>
                <div className="text-sm md:text-base font-semibold">Average Flight Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-black mb-2">Direct Flights</div>
                <div className="text-sm md:text-base font-semibold">LA, NYC, SF to Bali & Jakarta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* US-Indonesia Relations & Strategic Partnership - SEO Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">US Indonesia Strategic Partnership & Tourism Relations</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">
              Strengthening bilateral ties between United States and Indonesia through strategic cooperation in tourism, trade, and cultural exchange
            </p>
          </div>

          {/* Diplomatic Relations Overview */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-2xl md:rounded-3xl border-2 border-blue-100 mb-12">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <Globe className="w-10 h-10 md:w-12 md:h-12 text-blue-900" aria-hidden="true" />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">Historical Diplomatic Relations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                  The United States and Indonesia share a long-standing diplomatic relationship established in 1949, following Indonesia's independence. Both nations have maintained strong bilateral ties spanning over 75 years of cooperation in various sectors.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  This enduring partnership has evolved from traditional diplomatic exchanges to comprehensive strategic cooperation encompassing trade, investment, education, climate action, and tourism development.
                </p>
              </div>
              <div>
                <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                  The US diplomatic presence in Indonesia includes an Embassy in Jakarta and consular offices across major cities, while Indonesia maintains its Embassy in Washington DC, facilitating seamless communication and cooperation between both nations.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Regular high-level visits and strategic dialogues have strengthened bilateral relations, with both countries committed to enhancing mutual benefits through structured cooperation frameworks including the US-Indonesia Comprehensive Strategic Partnership.
                </p>
              </div>
            </div>
          </div>

          {/* Tourism Cooperation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-blue-300 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Plane className="w-10 h-10 md:w-12 md:h-12 text-blue-900" aria-hidden="true" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Tourism Cooperation</h3>
              </div>
              <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                Tourism serves as a cornerstone of US-Indonesia relations, with the United States consistently ranking among the top source markets for Indonesian tourism. Bali remains the most popular destination for American travelers, followed by Jakarta, Yogyakarta, and Lombok.
              </p>
              <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                The Indonesian Ministry of Tourism and Creative Economy actively promotes Indonesia as a preferred destination for US travelers through strategic marketing campaigns, participation in travel exhibitions like IPW (International Pow Wow) in Las Vegas, and partnerships with US-based travel operators.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                American travelers appreciate Indonesia's diverse attractions ranging from cultural heritage sites like Borobudur and Prambanan temples to natural wonders including Komodo National Park, Raja Ampat's marine biodiversity, and Bali's spiritual retreats.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-blue-300 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Star className="w-10 h-10 md:w-12 md:h-12 text-blue-900" aria-hidden="true" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Visa Facilitation</h3>
              </div>
              <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                Indonesia has significantly simplified visa procedures for US citizens through Visa on Arrival (VOA) facilities and electronic visa systems, making travel more accessible. American passport holders can obtain visas upon arrival at major Indonesian airports or apply online before departure.
              </p>
              <p className="text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
                This visa facilitation policy reflects Indonesia's commitment to boosting tourism from the US and other strategic markets. The streamlined process enables American tourists to plan their trips with greater convenience and flexibility.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                US Indonesia Visa provides professional assistance for American citizens navigating visa requirements, ensuring compliance with Indonesian immigration regulations and offering expert guidance for various visa types including tourist, business, and investment visas.
              </p>
            </div>
          </div>

          {/* Strategic Partnership Areas */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-2xl md:rounded-3xl border-2 border-slate-200 mb-12">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-blue-900" aria-hidden="true" />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">US Indonesia Strategic Partnership</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Trade & Investment */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-slate-100">
                <h4 className="text-lg md:text-xl font-bold mb-4 text-slate-800 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">1</span>
                  Trade & Investment
                </h4>
                <p className="text-base md:text-lg text-slate-600 mb-3 leading-relaxed">
                  The US is one of Indonesia's largest trading partners, with significant American investments in infrastructure, energy, mining, and technology. Bilateral trade continues to grow, with Indonesia exporting commodities, textiles, and manufactured goods to the US.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Both countries are committed to expanding trade relations through the US-Indonesia Trade and Investment Framework, which creates new opportunities for businesses and strengthens economic ties. The US remains a major source of foreign direct investment for Indonesia.
                </p>
              </div>

              {/* Education & Culture */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-slate-100">
                <h4 className="text-lg md:text-xl font-bold mb-4 text-slate-800 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">2</span>
                  Education & Culture
                </h4>
                <p className="text-base md:text-lg text-slate-600 mb-3 leading-relaxed">
                  Educational cooperation between US and Indonesia includes scholarship programs like Fulbright, university partnerships, and student exchanges. American universities collaborate with Indonesian institutions on research projects in marine science, renewable energy, and tropical medicine.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Cultural exchanges flourish through art exhibitions, music festivals, and literary events. The annual Indonesian Cultural Festival in Washington DC showcases Indonesian culture, cuisine, and crafts to American audiences.
                </p>
              </div>

              {/* Climate & Sustainability */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-slate-100">
                <h4 className="text-lg md:text-xl font-bold mb-4 text-slate-800 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">3</span>
                  Climate & Sustainability
                </h4>
                <p className="text-base md:text-lg text-slate-600 mb-3 leading-relaxed">
                  Both nations are committed to climate action and sustainable development. The US supports Indonesia's efforts in forest conservation, renewable energy transition, and marine ecosystem protection through bilateral agreements and technical assistance.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Joint initiatives focus on reducing carbon emissions, protecting biodiversity, and promoting sustainable tourism practices that benefit local communities while preserving Indonesia's natural heritage for future generations.
                </p>
              </div>

              {/* Innovation & Technology */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-slate-100">
                <h4 className="text-lg md:text-xl font-bold mb-4 text-slate-800 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">4</span>
                  Innovation & Technology
                </h4>
                <p className="text-base md:text-lg text-slate-600 mb-3 leading-relaxed">
                  Digital cooperation between the US and Indonesia focuses on fintech, e-commerce, and smart city development. American technology companies collaborate with Indonesian startups to drive digital transformation across the archipelago.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  The partnership supports Indonesia's vision of becoming Southeast Asia's digital economy hub, with expertise sharing in artificial intelligence, cybersecurity, and digital infrastructure development. The US-Indonesia Digital Economy Working Group facilitates this cooperation.
                </p>
              </div>
            </div>
          </div>

          {/* Partnership Stats */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Partnership Impact</h3>
              <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto">
                Measurable achievements through US-Indonesia strategic cooperation across multiple sectors
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-black mb-2">$35B+</div>
                <div className="text-xs md:text-sm font-semibold">Annual Trade Volume</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-black mb-2">$3.5B+</div>
                <div className="text-xs md:text-sm font-semibold">US Investment in Indonesia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-black mb-2">8,000+</div>
                <div className="text-xs md:text-sm font-semibold">Indonesian Students in US</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-black mb-2">75+ Years</div>
                <div className="text-xs md:text-sm font-semibold">Diplomatic Relations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo AI US-Indonesia Relationship Section */}
      <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto">
                <Image
                  src="/images/us_indonesia_relationship.png"
                  alt="US-Indonesia Strategic Relationship Mural representing cooperation"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-900 text-sm font-bold mb-6">
                <Globe className="w-4 h-4" />
                <span>Strategic Partnership</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-slate-800">
                A Visionary Bond Between <span className="text-blue-900">Nations</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  The strategic partnership between the United States and Indonesia is built on a foundation of shared values, mutual respect, and a deep commitment to global progress. As two of the world’s largest democracies, our nations collaborate across critical sectors including sustainable tourism, digital innovation, and cultural exchange.
                </p>
                <p>
                  This relationship fosters a vibrant bridge for American travelers to experience the breathtaking beauty of Indonesia, while strengthening the economic and diplomatic ties that unite us. At US Indonesia Visa, we are proud to facilitate this connection, ensuring that every journey from the United States to the archipelago is seamless, professional, and inspired by the spirit of partnership.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-slate-800">16+ Years Partnership</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-slate-800">99% Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 text-slate-800">Why Choose US Indonesia Visa?</h2>
            <p className="text-lg md:text-xl text-slate-600">Your trusted partner for seamless Indonesian visa processing from United States</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {BENEFITS.map((benefit, index) => {
              const IconComponent = ICON_MAP[benefit.icon as keyof typeof ICON_MAP];
              return (
                <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-slate-800 mb-4">{IconComponent && <IconComponent className="w-20 h-20" aria-hidden="true" />}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ & About */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 md:w-24 h-20 md:h-24 mx-auto mb-4 md:mb-6 text-slate-800">
                <Globe className="w-full h-full" aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Frequently Asked Questions</h3>
              <p className="text-base md:text-lg mb-6 text-slate-600">
                Find answers to common visa questions and requirements. Learn about processing times, required documents, and more.
              </p>
              <a
                href="https://indonesianvisas.com/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                View FAQ <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 md:w-24 h-20 md:h-24 mx-auto mb-4 md:mb-6 text-slate-800">
                <Send className="w-full h-full" aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">About Us</h3>
              <p className="text-base md:text-lg mb-6 text-slate-600">
                Learn more about our team, mission, and commitment to providing exceptional visa services for Indonesia from the US.
              </p>
              <a
                href="https://indonesianvisas.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-amber-400 hover:text-slate-800 transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center text-slate-800">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <a
                href="https://wa.me/61423854701"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-blue-900 hover:shadow-md transition-all duration-300"
              >
                <MessageCircle className="w-10 h-10 mb-4 text-slate-800" aria-hidden="true" />
                <h3 className="text-lg font-bold mb-2 text-slate-800">WhatsApp</h3>
                <p className="text-sm text-slate-600">+61 423 854 701</p>
              </a>
              <a
                href="mailto:support@visas.agency"
                className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-blue-900 hover:shadow-md transition-all duration-300"
              >
                <Mail className="w-10 h-10 mb-4 text-slate-800" aria-hidden="true" />
                <h3 className="text-lg font-bold mb-2 text-slate-800">Email</h3>
                <p className="text-sm text-slate-600">support@visas.agency</p>
              </a>
            </div>
            <div className="mt-6 bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
              <MapPin className="w-10 h-10 mb-4 text-slate-800" aria-hidden="true" />
              <h3 className="text-lg font-bold mb-2 text-slate-800">Office</h3>
              <p className="text-sm text-slate-600">Jl. Tibungsari No.11C, Bali Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 text-white">US Indonesia Visa</h2>
              <p className="text-slate-300 text-base md:text-lg mb-4 md:mb-6">
                Professional United States to Indonesia visa services with 16+ years experience. Fast, reliable, and trusted by thousands from the US and worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 md:mb-6 text-white">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="https://indonesianvisas.com/apply" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Apply Now</a></li>
                <li><a href="https://indonesianvisas.com/extend" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Extend Visa</a></li>
                <li><a href="https://indonesianvisas.com/services" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="https://indonesianvisas.com/faq" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 md:mb-6 text-white">Policies</h3>
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
                  className={`${social.bgClass} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm hover:scale-110 transition-transform`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-600 pt-6 pb-4 text-center">
            <p className="text-slate-300 text-sm md:text-base mb-4 font-semibold">© 2026 US Indonesia Visa™</p>
            <p className="text-slate-300 text-xs md:text-sm mb-4">Operated by PT Indonesian Visas Agency (Indonesia).</p>
            <p className="text-slate-300 text-xs md:text-sm mb-4">All Rights Reserved.</p>
            <div className="mb-4">
              <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-xs md:text-sm">
                <a href="https://bali.enterprises" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">bali.enterprises</a>
                <span className="text-slate-500">•</span>
                <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">indonesianvisas.com</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
