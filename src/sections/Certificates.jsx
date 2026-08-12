import { useState } from 'react';
import { certificates } from '../data/certificates';
import FadeIn from '../components/FadeIn';

export function Certificates() {
   const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "education", "certification"];

  const filteredCerts = activeFilter === "all"
    ? certificates
    : certificates.filter(cert => cert.type === activeFilter);

  return (
    <section id="certificates" className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          My <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Credentials</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          My educational background and professional certifications
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize
                ${activeFilter === filter
                  ? 'bg-linear-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }
              `}
            >
              {filter === "all" ? "All" : filter}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No certificates found in this category.
          </p>
        )}
        </FadeIn>
      </div>
    </section>
  );
}

// Certificate Card Component
function CertificateCard({ cert }) {
  const [setIsHovered] = useState(false);

  return (
    <FadeIn>
    <div 
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={cert.image} 
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Type Badge */}
        <span className={`
          absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold uppercase
          ${cert.type === 'education' 
            ? 'bg-blue-500/90 text-white' 
            : 'bg-purple-500/90 text-white'
          }
        `}>
          {cert.type}
        </span>
        {/* Hover overlay with credential ID */}
        <div className={`
          absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          flex items-end justify-center pb-4
        `}>
          <p className="text-white text-xs font-mono bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            ID: {cert.credentialId}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          {cert.institution}
        </p>
        <p className="text-xs text-purple-600 dark:text-purple-400 mb-2">
          {cert.date}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {cert.description}
        </p>
      </div>
    </div>
    </FadeIn>
  );
}

export default Certificates
