import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
          <Shield className="w-4 h-4" />
          <span>Institutional Policies</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900">Privacy Policy</h1>
        <p className="text-xs text-slate-500">Last updated: January 2025 · Life Line Skills Academy Pvt. Ltd.</p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            When students and applicants interact with Life Line Skills Academy through our website, we may collect personal identification information including full name, telephone number, email address, physical residence, date of birth, and prior educational qualifications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. How We Use Collected Data</h2>
          <p>
            The collected information is solely used for processing course applications, assigning batch schedules, issuing verifiable digital certificates, and communicating orientation updates. We do not sell, rent, or lease applicant records to third-party commercial marketing entities.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. Certificate Verification Registry</h2>
          <p>
            To facilitate institutional verification, certificate numbers, graduate names, program titles, and completion dates are made publicly searchable via our online credential portal strictly for educational and employment authentication purposes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">4. Contact & Inquiries</h2>
          <p>
            If you have any questions regarding your personal records or wish to update your contact information, please contact our administrative desk at info@lifelineskillsacademy.com.np.
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
