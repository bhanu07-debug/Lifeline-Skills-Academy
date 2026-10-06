import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAcademy } from '../../context/AcademyContext';
import { Logo } from '../../components/Logo';
import { Lock, ShieldCheck, AlertCircle, ArrowRight, KeyRound } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('admin@lifelineskillsacademy.com.np');
  const [error, setError] = useState('');
  const { adminLogin, isAdmin } = useAcademy();
  const navigate = useNavigate();

  // If already authenticated, redirect
  React.useEffect(() => {
    if (isAdmin) {
      navigate('/admin/dashboard');
    }
  }, [isAdmin, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = adminLogin(password);
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid administrative password. (Demo Password: admin123 or lifeline2025)');
    }
  };

  const handleDemoFill = () => {
    setEmail('admin@lifelineskillsacademy.com.np');
    setPassword('lifeline2025');
    setError('');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-slate-100">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-block">
            <Logo variant="compact" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900">Staff & Admin Portal</h1>
            <p className="text-xs text-slate-500 mt-1">
              Life Line Skills Academy Content & Application Management
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2.5 text-xs text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Administrative Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Admin Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4 text-teal-300" />
            <span>Sign In to Admin Dashboard</span>
          </button>
        </form>

        {/* Quick Demo Credentials for ease of evaluation */}
        <div className="pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-xl space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-600">
            <span className="font-semibold text-slate-800">Demo Testing Password:</span>
            <button
              onClick={handleDemoFill}
              type="button"
              className="text-teal-700 hover:underline font-bold text-[11px]"
            >
              Click to Auto-Fill
            </button>
          </div>
          <p className="font-mono text-slate-500 text-[11px]">
            Password: <strong className="text-slate-800">lifeline2025</strong> or <strong className="text-slate-800">admin123</strong>
          </p>
        </div>

        <div className="text-center">
          <Link to="/" className="text-xs text-slate-500 hover:text-blue-900 font-medium">
            &larr; Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
};
