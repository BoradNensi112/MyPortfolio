import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificate = () => {
  return (
    <div id="certificate" className="relative flex items-start max-w-5xl mx-auto p-4">
      
      {/* Left Timeline Icon (Sirf badi screens par dikhega) */}
      <div className="hidden md:flex flex-col items-center mr-6 mt-4">
        <div className="p-3 rounded-full bg-slate-900 border border-slate-700 z-10">
          <Award className="h-6 w-6 text-emerald-400" />
        </div>
        {/* Niche jaati hui line ke liye (Optional) */}
        <div className="w-px h-full bg-slate-800 mt-2"></div>
      </div>

      {/* Main Certificate Card */}
      <div className="flex flex-col md:flex-row bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden w-full shadow-lg">
        
        {/* Image Section (Left Side) */}
        <div className="md:w-2/5 p-4 flex items-center justify-center bg-[#111827]">
          <img 
            src="/projects/NAVISYA Cerificate.png" // Yahan apni image ka sahi path dalein
            alt="AI For Bharat Certificate" 
            className="w-full h-auto object-cover rounded shadow-sm"
          />
        </div>

        {/* Content Section (Right Side) */}
        <div className="md:w-3/5 p-6 flex flex-col justify-between text-left">
          <div>
            {/* Header: Date & Verify Button */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2 text-emerald-400 text-sm font-medium">
                <Calendar className="h-4 w-4" />
                <span>Dec 2025 - April 2026</span>
              </div>
              <a 
                href="/projects/NAVISYA Cerificate.png" // Yahan verify link dalein
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-emerald-500/20 transition-colors border border-emerald-500/20"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Verify</span>
              </a>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl font-bold text-white mb-1">
              Internship Certificate
            </h3>
            <p className="text-slate-400 mb-4 font-medium">Navisya</p>

            {/* Description */}
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Successfully completed a 4-month internship at Navisya. Demonstrated strong dedication, professionalism, and a proactive learning approach while actively contributing to various assigned tasks and project deliverables.
            </p>

            {/* Credential ID */}
            <div className="mb-6">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Credential ID</p>
              <p className="text-sm text-slate-300">NAVISYA-INT-001</p>
            </div>
          </div>

          {/* Tech Stack / Tags */}
          <div className="flex flex-wrap gap-2">
            {['ReactJS', 'NodeJS', 'Express', 'Rest API', 'MongoDB'].map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-emerald-500/5 text-emerald-400 text-xs rounded-full border border-emerald-500/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certificate;