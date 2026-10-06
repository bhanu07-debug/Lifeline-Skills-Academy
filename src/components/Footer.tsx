import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useAcademy } from '../context/AcademyContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings, courses } = useAcademy();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Overview (Col-span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mt-3">
              Life Line Skills Academy Pvt. Ltd. is a dedicated healthcare education and clinical skills training institute in Kathmandu, Nepal. We empower prospective caregivers, clinical assistants, and emergency responders through hands-on simulation training.
            </p>
            <div className="space-y-1.5 pt-1 text-xs text-slate-400">
              <p className="font-mono text-slate-300">{settings.registrationNumber}</p>
              <div className="flex items-center gap-2 text-teal-400 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Standardized Clinical Simulation Curriculum</span>
              </div>
            </div>
          </div>

          {/* Column 2: Academic Programs */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">
              Training Courses
            </h3>
            <ul className="space-y-2 text-sm">
              {courses.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="hover:text-teal-400 transition-colors flex items-center gap-1 group truncate"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-teal-400 shrink-0" />
                    <span className="truncate">{course.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/courses"
                  className="text-teal-400 hover:text-teal-300 text-xs font-semibold inline-flex items-center gap-1 mt-1"
                >
                  View All Programs &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Links */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                  About the Academy
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-teal-400 transition-colors">
                  Career Pathways
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-teal-400 transition-colors">
                  Opportunities & Sectors
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-teal-400 transition-colors">
                  Simulation Lab & Facilities
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-teal-400 transition-colors">
                  Health Tips & Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/verify-certificate"
                  className="text-teal-400 hover:text-teal-300 font-medium flex items-center gap-1"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Certificate Registry</span>
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-teal-400 hover:text-teal-300 font-medium">
                  Enrollment Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">
              Academy Campus
            </h3>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{settings.address}, {settings.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {settings.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-white truncate">
                  {settings.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-tight">{settings.openingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1 text-center md:text-left">
            <span>&copy; {currentYear} Life Line Skills Academy Pvt. Ltd. All Rights Reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">·</span>
            <Link to="/terms" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">·</span>
            <Link to="/verify-certificate" className="hover:text-slate-200 transition-colors">
              Credential Verification
            </Link>
            <span className="text-slate-700">·</span>
            <Link to="/admin/login" className="hover:text-slate-200 text-slate-500 transition-colors">
              Staff Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
