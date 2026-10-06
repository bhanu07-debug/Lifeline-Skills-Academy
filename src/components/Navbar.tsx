import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useAcademy } from '../context/AcademyContext';
import {
  Menu,
  X,
  ShieldCheck,
  Phone,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [noticeDismissed, setNoticeDismissed] = useState(false);
  const { settings, isAdmin } = useAcademy();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Careers', path: '/careers' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top Notification / Notice Bar */}
      {settings.noticeActive && !noticeDismissed && settings.noticeText && (
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800 text-white text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 truncate">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-400 shrink-0 animate-ping" />
              <span className="font-semibold text-teal-200 tracking-wide uppercase text-[10px]">
                Notice
              </span>
              <span className="text-slate-100 truncate">
                {settings.noticeText}
              </span>
            </div>
            <div className="flex items-center gap-4 shrink-0 text-slate-200 text-[11px]">
              <a
                href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                className="hidden md:flex items-center gap-1 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-teal-300" />
                <span>{settings.phone}</span>
              </a>
              <button
                onClick={() => setNoticeDismissed(true)}
                className="text-slate-300 hover:text-white p-0.5 rounded transition-colors"
                aria-label="Dismiss notice"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar: 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center hover:opacity-95 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo />
          </Link>

          {/* Zone 2: Navigation Links (Clean text links with hover styling) */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors py-1 ${
                  isActive(link.path)
                    ? 'text-blue-900 font-semibold border-b-2 border-teal-600'
                    : 'hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/verify-certificate"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-100/80 rounded-lg transition-colors border border-slate-200/60"
              title="Verify Student Certificate"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Verify Certificate</span>
            </Link>

            <Link
              to="/apply"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              <GraduationCap className="w-4 h-4 text-teal-300" />
              <span>Apply Now</span>
            </Link>

            {isAdmin && (
              <Link
                to="/admin/dashboard"
                className="px-2.5 py-1.5 text-[11px] font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-md transition-colors"
              >
                Admin
              </Link>
            )}
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <Link
              to="/apply"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-900 rounded-md"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-900 font-semibold border-l-4 border-teal-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Link
                to="/verify-certificate"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 bg-slate-50 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Verify Student Certificate</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                to="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-900 rounded-lg shadow-sm"
              >
                <GraduationCap className="w-4 h-4 text-teal-300" />
                <span>Submit Enrollment Application</span>
              </Link>

              {isAdmin ? (
                <Link
                  to="/admin/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-2 text-xs font-semibold text-amber-900 bg-amber-50 rounded-lg"
                >
                  Admin Control Panel
                </Link>
              ) : (
                <Link
                  to="/admin/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-1.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  Staff / Admin Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
