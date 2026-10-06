import React from 'react';
import { Link } from 'react-router-dom';
import { useAcademy } from '../context/AcademyContext';
import { Star, Quote, GraduationCap, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { testimonials } = useAcademy();

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Alumni Experiences</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Student Stories & Testimonials
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Real feedback from graduates who enhanced their clinical competencies, passed licensing assessments, and stepped into healthcare roles across Nepal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{item.year}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900 text-teal-300 font-bold text-xs flex items-center justify-center shrink-0">
                  {item.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-teal-700 font-medium truncate max-w-[200px]">{item.course}</p>
                  {item.currentWorkplace && (
                    <p className="text-[11px] text-slate-500 mt-0.5 truncate">{item.currentWorkplace}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center space-y-3">
          <GraduationCap className="w-8 h-8 text-blue-900 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">Are you a Life Line Skills Academy Alumnus?</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Stay connected with our alumni network, request credential re-verification, or register for lifetime refresher workshops.
          </p>
          <div className="pt-2">
            <Link
              to="/verify-certificate"
              className="text-xs font-bold text-blue-900 hover:text-teal-700 inline-flex items-center gap-1"
            >
              <span>Access Certificate Registry</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
