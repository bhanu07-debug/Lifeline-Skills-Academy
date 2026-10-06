import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import {
  Clock,
  GraduationCap,
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Activity,
  Syringe,
  Sparkles
} from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // Medical theme icons and background accents based on category
  const getThemeDetails = (cat: Course['category']) => {
    switch (cat) {
      case 'Nursing & Care':
        return {
          icon: HeartPulse,
          gradient: 'from-teal-900 to-blue-950',
          accent: 'text-teal-400',
          bgLight: 'bg-teal-50/60'
        };
      case 'Diagnostic & Pharmacy':
        return {
          icon: Syringe,
          gradient: 'from-blue-950 to-indigo-950',
          accent: 'text-cyan-400',
          bgLight: 'bg-blue-50/60'
        };
      case 'Emergency & First Aid':
        return {
          icon: Activity,
          gradient: 'from-slate-900 via-blue-950 to-teal-950',
          accent: 'text-emerald-400',
          bgLight: 'bg-emerald-50/60'
        };
      default:
        return {
          icon: Stethoscope,
          gradient: 'from-blue-900 to-slate-900',
          accent: 'text-teal-300',
          bgLight: 'bg-slate-50'
        };
    }
  };

  const theme = getThemeDetails(course.category);
  const IconComponent = theme.icon;

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden group">
      {/* Visual Header / Banner with Medical Graphic */}
      <div className={`relative h-44 bg-gradient-to-br ${theme.gradient} p-5 flex flex-col justify-between overflow-hidden text-white`}>
        {/* Subtle decorative geometric grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Category Header */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wider uppercase text-teal-300">
            {course.category}
          </span>
          {course.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Featured
            </span>
          )}
        </div>

        {/* Center Clinical Emblem & Icon */}
        <div className="relative z-10 flex items-center gap-3 mt-auto">
          <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
            <IconComponent className={`w-6 h-6 ${theme.accent}`} />
          </div>
          <div>
            <p className="text-xs text-slate-300 font-mono">Hands-on Practicum</p>
            <p className="text-xs font-bold text-white tracking-wide">
              {course.intakeSchedule}
            </p>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row: Zero-Pill discipline (clean unboxed text with ·) */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.duration}</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="truncate">{course.eligibility}</span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 leading-snug">
            {course.title}
          </h3>

          <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {course.shortDescription}
          </p>
        </div>

        {/* Fee & Action Block */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase font-bold text-slate-600 tracking-wider">Tuition Fee</p>
            <p className="text-sm font-bold text-slate-900">{course.fee}</p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/courses/${course.slug}`}
              className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
            >
              Details
            </Link>
            <Link
              to={`/apply?course=${encodeURIComponent(course.id)}`}
              className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-all whitespace-nowrap"
            >
              <span>Enroll</span>
              <ArrowRight className="w-3 h-3 text-teal-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
