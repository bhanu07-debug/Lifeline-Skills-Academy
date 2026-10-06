import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900">Terms & Conditions</h1>
        <p className="text-xs text-slate-500">Effective Date: January 2025 · Kathmandu, Nepal</p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Nature of Academy Services</h2>
          <p>
            Life Line Skills Academy Pvt. Ltd. operates as a registered vocational and healthcare clinical skills training institution under the Laws of Nepal. We provide practical simulations, clinical lectures, and competency-based training.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. No Guarantee of Employment or Visas</h2>
          <p>
            Enrolling in or graduating from any course at Life Line Skills Academy does not constitute an offer, warranty, or guarantee of domestic or international employment, foreign work permits, or immigration visas. The academy disclaims any liability for third-party recruitment agencies or immigration processing.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. Certificate Issuance & Revocation</h2>
          <p>
            Certificates are issued only to students who fulfill mandatory attendance requirements, pass practical OSCE stations, and adhere to laboratory safety protocols. The academy reserves the right to revoke or void any certificate found to have been obtained through fraud, impersonation, or academic misconduct.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">4. Laboratory Safety & Conduct</h2>
          <p>
            Trainees must adhere to all infection control guidelines, universal precautions, and protective equipment (PPE) requirements when handling simulation equipment and medical instruments.
          </p>
        </section>
      </div>

      <div className="pt-6 border-t border-slate-200">
        <Link to="/" className="text-xs font-bold text-blue-900 hover:text-teal-700">
          &larr; Return to Homepage
        </Link>
      </div>
    </div>
  );
};
