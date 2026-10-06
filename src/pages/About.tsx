import React from 'react';
import { Link } from 'react-router-dom';
import { useAcademy } from '../context/AcademyContext';
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  ArrowRight,
  HeartPulse,
  Activity,
  Stethoscope
} from 'lucide-react';

export const About: React.FC = () => {
  const { team, settings } = useAcademy();

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Institutional Profile</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            About Life Line Skills Academy
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Established in Kathmandu, Nepal, Life Line Skills Academy Pvt. Ltd. delivers rigorous, hands-on clinical and healthcare vocational training designed to produce competent, empathetic caregivers and clinical technicians.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Core Institutional Narrative */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Founding Purpose</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-snug">
              Bridging the Gap Between Medical Theory and Bedside Practice
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Healthcare delivery cannot be learned through textbooks alone. When a patient needs assistance out of bed, an accurate blood pressure reading during an emergency, or an urgent venous blood draw, muscle memory and clinical composure make the difference.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Life Line Skills Academy was established to give Nepali students and healthcare aspirants a dedicated, pressure-free simulation environment where mistakes can be corrected safely on calibrated mannequins before stepping into real hospital wards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Activity className="w-4 h-4 text-teal-600" />
                  <span>Deliberate Practice</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Repetitive clinical drills under direct faculty supervision until standards are achieved.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <HeartPulse className="w-4 h-4 text-blue-800" />
                  <span>Ethical Patient Care</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Patient privacy, dignifying bedside hygiene, and clear interpersonal communication.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-teal-300">
              Institutional Commitments
            </h3>
            <ul className="space-y-4 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>No False Promises:</strong> We believe in honest vocational training. We do not manufacture false foreign job guarantees or visa assurances.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>Verifiable Credentials:</strong> Every transcript and certificate issued is backed by logged hours and searchable in our online database.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>Continuous Support:</strong> Alumni enjoy lifetime refresher access to practical simulation labs upon advance request.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-[11px] text-slate-400">
                Registered under the Company Registrar Office, Government of Nepal:
              </p>
              <p className="font-mono text-xs text-slate-200 mt-1">
                {settings.registrationNumber}
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, and Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To democratize clinical education in Nepal by providing accessible, high-yield simulation training that elevates patient care standards in hospitals, clinics, and communities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To build a nationally recognized center of clinical simulation excellence, known for graduating technically competent, compassionate, and disciplined healthcare personnel.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Institutional Values</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clinical rigor, empathy for the vulnerable, institutional integrity, transparency, and relentless focus on practical competency.
            </p>
          </div>
        </section>

        {/* Faculty / Team Leadership */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Our Mentors</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Experienced Clinical Instructors & Advisors
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Our faculty comprises registered clinicians, nursing supervisors, and lab technologists with extensive hospital experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-900 to-teal-700 text-white font-black text-xl flex items-center justify-center shadow-sm">
                    {member.name.split(' ')[0][0]}
                    {member.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{member.name}</h3>
                    <p className="text-xs text-teal-700 font-semibold">{member.position}</p>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">{member.qualification}</p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Areas of Expertise
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Have Questions About Admissions or Lab Visits?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            We welcome prospective students and parents to visit our simulation labs in Bagbazar, Kathmandu to observe ongoing classes.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors"
            >
              Contact Campus Office
            </Link>
            <Link
              to="/courses"
              className="px-6 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
