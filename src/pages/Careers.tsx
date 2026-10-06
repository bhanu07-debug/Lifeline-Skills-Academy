import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Building2,
  HeartPulse,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Award
} from 'lucide-react';

export const Careers: React.FC = () => {
  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Healthcare Employment Pathways</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Career Opportunities in Healthcare
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Discover the diverse clinical support, patient care, and diagnostic roles open to certified graduates across Nepal's healthcare ecosystem.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Healthcare Sectors in Nepal */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Healthcare Employment Sectors in Nepal
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Where Life Line Skills Academy graduates apply their clinical competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Private Hospitals & Polyclinics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bedside patient attendants, outpatient triage assistants, emergency ward aides, and phlebotomists in urban medical centers.
              </p>
              <div className="pt-2 text-[11px] text-teal-700 font-semibold">
                High demand for certified vital monitoring & sterile bed hygiene
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Elderly Care & Home Nursing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated geriatric support, post-stroke rehabilitation assistance, palliative care, and private in-home health monitoring.
              </p>
              <div className="pt-2 text-[11px] text-teal-700 font-semibold">
                Rapidly growing sector with dignified compensation
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Diagnostic Pathology & Dental</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clinical lab phlebotomy collection centers, stool/urine bench aides, dental chairside assistants, and autoclave operators.
              </p>
              <div className="pt-2 text-[11px] text-teal-700 font-semibold">
                Structured clinical working hours and specialized instrumentation
              </div>
            </div>
          </div>
        </section>

        {/* Visual Progression Pathway */}
        <section className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Healthcare Skills Progression Pathway
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
              How focused skills training provides immediate employability and a foundation for lifelong growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold text-teal-700">Stage 01</span>
              <h4 className="font-bold text-sm text-slate-900">Simulation Training</h4>
              <p className="text-xs text-slate-600">
                120 to 240 hours of intensive mannequin practice in vital signs, phlebotomy, and emergency response.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold text-teal-700">Stage 02</span>
              <h4 className="font-bold text-sm text-slate-900">Hospital Practicum</h4>
              <p className="text-xs text-slate-600">
                Supervised clinical ward observation under senior nurses and laboratory technologists.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold text-teal-700">Stage 03</span>
              <h4 className="font-bold text-sm text-slate-900">Certified Employment</h4>
              <p className="text-xs text-slate-600">
                Placement in private clinics, hospitals, care homes, or home healthcare support across Nepal.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold text-teal-700">Stage 04</span>
              <h4 className="font-bold text-sm text-slate-900">Advanced Specialization</h4>
              <p className="text-xs text-slate-600">
                Advancement into supervisory roles, international language exams, or further diploma/bachelor education.
              </p>
            </div>
          </div>
        </section>

        {/* Realistic Expectations Notice */}
        <section className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 flex items-start gap-4 text-xs text-amber-900">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-sm">Institutional Transparency Commitment</p>
            <p className="text-slate-700 leading-relaxed">
              Life Line Skills Academy does not offer guarantees of instant employment, unrealistic starting salaries, or overseas visa sponsorships. We guarantee high-quality, disciplined training, certified logbook hours, and genuine faculty mentorship so you enter the workforce with confidence.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Ready to Discuss Your Path?</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Our student academic counselor provides 1-on-1 guidance to help you select the course best matched to your education background.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/apply"
              className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors"
            >
              Start Application
            </Link>
            <Link
              to="/courses"
              className="px-6 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
            >
              Browse All Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
