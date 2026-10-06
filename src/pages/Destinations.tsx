import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe2,
  Building,
  CheckCircle2,
  AlertTriangle,
  FileText,
  MapPin,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const Destinations: React.FC = () => {
  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Opportunities & Sectors</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Destinations & Practice Sectors
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Understanding realistic clinical work environments in Nepal and standard qualification prerequisites for international healthcare pathways.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Compliance & Ethical Guidance Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl text-xs text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Important Institutional Advisory on Foreign Employment</span>
          </div>
          <p className="leading-relaxed">
            Life Line Skills Academy Pvt. Ltd. is an <strong>educational and skills training institute</strong>, not a manpower agency or overseas recruitment firm. We do not provide, arrange, or guarantee foreign visas, overseas job placements, or immigration sponsorships. Our responsibility is strictly providing legitimate clinical simulation instruction, verified transcripts, and logbook hours.
          </p>
        </div>

        {/* SECTION 1: Opportunities Within Nepal */}
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Domestic Healthcare Sector</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Practice Opportunities Within Nepal
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Expanding urban centers and specialized healthcare institutions across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Hospitals & Nursing Homes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kathmandu Valley, Pokhara, Chitwan, and major provincial hubs operate active 24/7 inpatient wards requiring trained bedside attendants and phlebotomists.
              </p>
              <ul className="text-[11px] text-slate-500 space-y-1 pt-1">
                <li>• General Bedside Patient Assistance</li>
                <li>• Emergency Triage Support</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Polyclinics & Diagnostic Centers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-volume diagnostic centers need skilled phlebotomists capable of swift, sterile blood specimen collection without causing hematomas.
              </p>
              <ul className="text-[11px] text-slate-500 space-y-1 pt-1">
                <li>• Phlebotomy Collection Staff</li>
                <li>• Laboratory Sample Sorting</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Elderly Care & Hospices</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                As family dynamics evolve in Nepal, registered geriatric care homes in Lalitpur, Bhaktapur, and Kathmandu increasingly seek structured caregivers.
              </p>
              <ul className="text-[11px] text-slate-500 space-y-1 pt-1">
                <li>• Activities of Daily Living (ADL)</li>
                <li>• Medication & Mobility Support</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Dental & Specialized Clinics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern private dental practices employ chairside assistants for autoclave sterilization, four-handed instrument handover, and dental material prep.
              </p>
              <ul className="text-[11px] text-slate-500 space-y-1 pt-1">
                <li>• Autoclave & Sterilization Tech</li>
                <li>• Chairside Dental Handover</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2: International Opportunities & Real Prerequisites */}
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Global Pathway Awareness</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              International Healthcare Requirements & Awareness
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              General informational overview on how destination countries regulate healthcare and caregiving credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 text-base">Japan (SSW Caregiver)</h3>
                <span className="text-[10px] font-mono text-slate-500">Specified Skilled Worker</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Japan requires candidates to pass the official Nursing Care Skills Evaluation Test and Nursing Care Japanese Language Evaluation, alongside JLPT N4 or JFT-Basic.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 text-[11px] text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">Mandatory Prerequisites:</p>
                <p>• Language: JLPT N4 or JFT-Basic</p>
                <p>• Prometric Skills Evaluation Test</p>
                <p>• Practical Bedside Simulation Competence</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 text-base">United Kingdom & Europe</h3>
                <span className="text-[10px] font-mono text-slate-500">Care Worker Directives</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                International applicants require verified caregiving transcripts, clear criminal background certificates (Police Report), and certified English proficiency (IELTS/OET).
              </p>
              <div className="p-3 rounded-xl bg-slate-50 text-[11px] text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">Mandatory Prerequisites:</p>
                <p>• Verified Logbook Hours & Reference</p>
                <p>• English Language Proficiency (IELTS)</p>
                <p>• Clean Criminal Background Checks</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 text-base">Gulf / Middle East</h3>
                <span className="text-[10px] font-mono text-slate-500">Hospital Support</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Private clinics and specialized home care entities require authenticated vocational transcripts, medical fitness clearance (GAMCA), and basic conversational English.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 text-[11px] text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">Mandatory Prerequisites:</p>
                <p>• Notarized Completion Certificate</p>
                <p>• Practical Skill Video / Assessment</p>
                <p>• GAMCA Medical Fitness Screening</p>
              </div>
            </div>
          </div>
        </section>

        {/* Verifiable Credentials Callout */}
        <section className="bg-gradient-to-r from-blue-900 to-teal-800 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-300" />
              <h3 className="text-xl font-bold">Verifiable Skills Documentation</h3>
            </div>
            <p className="text-slate-200 text-xs sm:text-sm max-w-xl">
              Employers or evaluation bodies can verify your Life Line Skills Academy training credentials instantly using your unique Certificate Verification ID.
            </p>
          </div>
          <Link
            to="/verify-certificate"
            className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs rounded-xl shadow whitespace-nowrap transition-colors"
          >
            Check Credential Portal
          </Link>
        </section>
      </div>
    </div>
  );
};
