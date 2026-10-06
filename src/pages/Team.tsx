import React from 'react';
import { useAcademy } from '../context/AcademyContext';
import { Award, BookOpen, Stethoscope, Mail, Phone } from 'lucide-react';

export const Team: React.FC = () => {
  const { team, settings } = useAcademy();

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Academic Faculty & Instructors</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Faculty & Instructors
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Meet the experienced medical doctors, clinical nursing instructors, and laboratory technologists who lead simulation training at Life Line Skills Academy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Faculty Portrait Emblem */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-900 via-blue-800 to-teal-700 text-white font-black text-2xl flex items-center justify-center shadow-md">
                  {member.name.split(' ')[0][0]}
                  {member.name.split(' ').slice(-1)[0][0]}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base">{member.name}</h3>
                  <p className="text-xs text-teal-700 font-bold">{member.position}</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">{member.qualification}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2">
                  Specialized Domains
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Recruitment Callout */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center space-y-3">
          <h3 className="text-lg font-bold text-slate-900">
            Interested in Joining Our Clinical Training Faculty?
          </h3>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            We regularly invite licensed clinical nurses, laboratory technologists, and emergency trainers for visiting simulation sessions and OSCE assessments.
          </p>
          <a
            href={`mailto:${settings.email}?subject=Clinical%20Faculty%20Inquiry`}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 hover:text-teal-700"
          >
            <span>Send CV & Credentials to: {settings.email}</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
