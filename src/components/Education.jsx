import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  // Yahan par aap apni 10th, 12th aur Graduation ki details edit kar sakti hain
  const educationDetails = [
    {
      id: 1,
      year: "2023 - 2026",
      degree: "Bachelor of Computer Application(GANDHINAGAR)",
      field: "BCA",
      institution: "NavGujarat BCA College",
      score: "CGPA - 9.18 / 10"
    },
    {
      id: 2,
      year: "2022 - 2023",
      degree: "12th Standard (HSC)",
      field: "Commerce (ENG) Stream", // Ya Commerce/Arts jo bhi apka tha
      institution: "ShreeMati Shantaben Haribhai Gajera PATEL SANKUL(AMRELI)",
      score: "Percentage - 71.14%" // Apne marks daal dein
    },
    {
      id: 3,
      year: "2020 - 2021",
      degree: "10th Standard (SSC)",
      field: "General(GUJ)",
      institution: "ShreeMati Shantaben Haribhai Gajera PATEL SANKUL(AMRELI)",
      score: "Percentage - 89%" // Apne marks daal dein
    }
  ];

  return (
    <div id='education' className="max-w-4xl mx-auto p-4 md:p-8 mt-10">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#4da6ff] mb-16">
        Education
      </h2>

      {/* Timeline Container */}
      <div className="relative border-l border-slate-700/50 ml-4 md:ml-8">
        
        {educationDetails.map((edu) => (
          <div key={edu.id} className="mb-12 ml-8 md:ml-12 relative group">
            
            {/* Timeline Icon */}
            <span className="absolute -left-[3.25rem] md:-left-[4.25rem] flex items-center justify-center w-12 h-12 rounded-full bg-[#0d1627] border border-slate-700 group-hover:border-[#4da6ff] transition-colors z-10 shadow-[0_0_15px_rgba(77,166,255,0.1)]">
              <GraduationCap className="w-6 h-6 text-[#4da6ff]" />
            </span>

            {/* Education Card */}
            <div className="bg-[#080c16]/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-600 transition-all duration-300">
              <div className="flex flex-col gap-1">
                {/* Year */}
                <span className="text-[#4da6ff] text-sm md:text-base font-semibold tracking-wider mb-2">
                  {edu.year}
                </span>
                
                {/* Degree */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                
                {/* Field of Study */}
                <p className="text-slate-400 text-sm md:text-base mb-4">
                  {edu.field}
                </p>
                
                {/* Institution Name */}
                <p className="text-slate-200 font-medium text-base md:text-lg mb-2">
                  {edu.institution}
                </p>
                
                {/* Score */}
                <p className="text-slate-500 text-sm md:text-base font-medium">
                  {edu.score}
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Education;