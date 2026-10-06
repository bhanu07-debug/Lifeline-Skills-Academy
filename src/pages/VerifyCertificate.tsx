import React, { useState } from 'react';
import { useAcademy } from '../context/AcademyContext';
import { useMetaTags } from '../hooks/useMetaTags';
import { CertificateRecord } from '../types';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  Award,
  Calendar,
  Building,
  FileCheck,
  Phone,
  Mail,
  Printer
} from 'lucide-react';

export const VerifyCertificate: React.FC = () => {
  const { verifyCertificate, settings } = useAcademy();
  const [certInput, setCertInput] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResult, setSearchResult] = useState<CertificateRecord | undefined>(undefined);

  useMetaTags({
    title: 'Verify Student Certificate | Official Credential Authentication',
    description: 'Verify certificates issued by Life Line Skills Academy Pvt. Ltd. Validate student completion records, issue dates, and clinical training grades online.',
    canonicalPath: '/verify-certificate',
    keywords: ['verify certificate Nepal', 'Life Line Skills Academy certificate check', 'healthcare credential verification']
  });

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!certInput.trim()) return;

    setHasSearched(true);
    const result = verifyCertificate(certInput.trim());
    setSearchResult(result);
  };

  const handleQuickDemo = (sampleId: string) => {
    setCertInput(sampleId);
    setHasSearched(true);
    const res = verifyCertificate(sampleId);
    setSearchResult(res);
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Official Credential Authentication</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Certificate Verification Portal
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Verify the authenticity of completion certificates issued by Life Line Skills Academy Pvt. Ltd. Employers, hospitals, and educational institutions can validate credentials in real time.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Search Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8 space-y-4">
          <form onSubmit={handleSearch} className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Enter Certificate Number or Verification ID
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={certInput}
                  onChange={(e) => {
                    setCertInput(e.target.value);
                    if (hasSearched) setHasSearched(false);
                  }}
                  placeholder="e.g. LLSA-2025-0891"
                  className="w-full pl-11 pr-4 py-3 text-sm font-mono uppercase bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <ShieldCheck className="w-4 h-4 text-teal-300" />
                <span>Verify Credential</span>
              </button>
            </div>
          </form>

          {/* Quick Demo Fill Samples */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Quick Test Samples:</span>
            {['LLSA-2025-0891', 'LLSA-2024-0412', 'LLSA-2025-1034'].map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => handleQuickDemo(id)}
                className="px-2.5 py-1 font-mono text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md transition-colors"
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS SECTION */}
        {hasSearched && (
          <div>
            {searchResult ? (
              /* Verified Credential Card */
              <div className="bg-white rounded-3xl border-2 border-teal-500/80 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-teal-900 text-white p-6 sm:p-8 flex items-center justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-400/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Officially Verified Record</span>
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black mt-2">
                      Life Line Skills Academy Credential Registry
                    </h2>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">
                      Registry ID: {searchResult.certificateNumber}
                    </p>
                  </div>

                  <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-teal-300">
                    <Award className="w-8 h-8" />
                  </div>
                </div>

                {/* Details Grid */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-100">
                    <div>
                      <p className="text-[11px] uppercase font-bold text-slate-600">Student Name</p>
                      <p className="text-lg font-bold text-slate-900 mt-0.5">
                        {searchResult.studentName}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase font-bold text-slate-600">Course / Program Title</p>
                      <p className="text-base font-bold text-teal-800 mt-0.5">
                        {searchResult.courseName}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase font-bold text-slate-600">Issue Date</p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">
                        {searchResult.issueDate}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase font-bold text-slate-600">Evaluation Grade / Status</p>
                      <p className="text-sm font-semibold text-emerald-800 mt-0.5">
                        {searchResult.grade || 'Successfully Completed'}
                      </p>
                    </div>
                  </div>

                  {searchResult.verifierNotes && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                      <p className="font-bold text-slate-900">Verification Remarks:</p>
                      <p className="leading-relaxed">{searchResult.verifierNotes}</p>
                    </div>
                  )}

                  {/* Institutional Seal / Registry Footnote */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Tamper-resistant database match · Life Line Skills Academy Pvt. Ltd.</span>
                    </div>

                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Verification Slip</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Not Found Card */
              <div className="bg-white rounded-3xl border border-red-200 shadow-md p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-150">
                <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Certificate Record Not Found</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  No certificate record matches <strong>"{certInput}"</strong>. Please verify the code on your physical certificate (case-insensitive) and try again.
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1">
                  <p>If you believe this is an error, please contact our academic registry:</p>
                  <p className="font-semibold text-blue-900">
                    Phone: {settings.phone} · Email: {settings.email}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
