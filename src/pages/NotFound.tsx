import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowRight, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-28 text-center space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-900 border border-blue-100 flex items-center justify-center mx-auto shadow-sm">
        <Stethoscope className="w-10 h-10 text-teal-600" />
      </div>

      <div className="space-y-2">
        <span className="font-mono text-sm text-teal-700 font-bold uppercase tracking-wider">
          Error 404 · Page Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          The Requested Page Was Not Found
        </h1>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          The link you followed may be broken or the course page might have been updated.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
        >
          <span>Explore All Courses</span>
          <ArrowRight className="w-4 h-4 text-teal-600" />
        </Link>
      </div>
    </div>
  );
};
