import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAcademy } from '../context/AcademyContext';
import { CourseCard } from '../components/CourseCard';
import { useMetaTags } from '../hooks/useMetaTags';
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  PhoneCall,
  Activity,
  HeartPulse,
  Sparkles,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

export const Home: React.FC = () => {
  const { courses, testimonials, blogPosts, settings } = useAcademy();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useMetaTags({
    title: 'Life Line Skills Academy | Healthcare Education & Skills Training Nepal',
    description: 'Life Line Skills Academy Pvt. Ltd. provides hands-on healthcare training in Kathmandu, Nepal. Professional Caregiver, Medical Lab, BLS CPR, and Clinical OSCE courses.',
    canonicalPath: '/',
    keywords: [
      'healthcare training in Nepal',
      'healthcare courses in Nepal',
      'healthcare skills academy Nepal',
      'healthcare training institute Nepal',
      'vocational healthcare training Kathmandu'
    ],
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Life Line Skills Academy Pvt. Ltd.',
      url: 'https://lifelineskillsacademy.com.np',
      telephone: settings.phone,
      email: settings.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: settings.address,
        addressLocality: 'Kathmandu',
        addressCountry: 'NP'
      }
    }
  });

  const categories = ['All', 'Nursing & Care', 'Diagnostic & Pharmacy', 'Emergency & First Aid', 'Clinical Skills'];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter((c) => c.category === selectedCategory);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Ambient color halos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Institutional Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>Premier Healthcare & Clinical Skills Academy in Nepal</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] text-balance">
                Empowering Healthcare Careers Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-200">
                  Practical Skills & Clinical Training
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Life Line Skills Academy provides hands-on simulation training in patient caregiving, diagnostic laboratory procedures, and emergency life support. Learn from experienced clinicians in Kathmandu.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/apply"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-xl shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-0.5"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Enroll in Next Intake</span>
                </Link>

                <Link
                  to="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl backdrop-blur-sm transition-all"
                >
                  <span>Explore All Courses</span>
                  <ArrowRight className="w-4 h-4 text-teal-300" />
                </Link>
              </div>

              {/* Trust Indicators (Quiet metadata) */}
              <div className="pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
                <div>
                  <p className="text-2xl font-black text-white tabular-nums">100%</p>
                  <p className="text-xs text-slate-400 mt-0.5">Practical Simulation</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white tabular-nums">240+ Hrs</p>
                  <p className="text-xs text-slate-400 mt-0.5">Clinical Rigor</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-2xl font-black text-white">Kathmandu</p>
                  <p className="text-xs text-slate-400 mt-0.5">Equipped Lab Facility</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background decorative glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500 to-blue-600 opacity-30 blur-xl" />
                
                <div className="relative bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                  {/* Top card bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Training Philosophy
                        </p>
                        <p className="text-sm font-bold text-white">
                          Competency-Based Education
                        </p>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-teal-900/50 text-teal-300 font-mono border border-teal-700/50">
                      Standardized
                    </span>
                  </div>

                  {/* Highlights list */}
                  <div className="py-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-white">Anatomical Training Mannequins</p>
                        <p className="text-xs text-slate-400">Practice catheterization, phlebotomy, and vital monitoring risk-free.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-white">Hospital Clinical Observation</p>
                        <p className="text-xs text-slate-400">Supervised ward exposure to real bedside clinical workflows.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-white">Verifiable Academy Credentials</p>
                        <p className="text-xs text-slate-400">Every graduate receives a tamper-resistant online verifiable certificate.</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Verification Callout */}
                  <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Need to check a certificate?</span>
                    <Link
                      to="/verify-certificate"
                      className="text-teal-300 hover:text-teal-200 font-semibold inline-flex items-center gap-1"
                    >
                      <span>Verification Portal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>About Life Line Skills Academy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight text-balance">
              Building a Prepared Healthcare Workforce in Nepal
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Founded to bridge the critical gap between academic theory and clinical bedside execution, Life Line Skills Academy Pvt. Ltd. equips aspiring healthcare professionals, caregivers, and diagnostics assistants with genuine, repeatable skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center mb-3">
                  <Award className="w-4 h-4 text-teal-300" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Our Mission</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  To provide accessible, high-standard healthcare vocational education that transforms lives and enhances patient care quality across Nepal.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center mb-3">
                  <HeartPulse className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Our Vision</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  To become Nepal's most trusted center of excellence for clinical simulation, emergency response, and patient care training.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-bold text-blue-900 hover:text-teal-700 text-sm group"
              >
                <span>Read Full Institutional Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 p-8 sm:p-10 rounded-3xl text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Why Life Line Exists
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  In hospitals and home settings, patients require gentle, precise, and protocol-driven care. Too often, beginners struggle without realistic simulation practice.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Realistic mannequins calibrated for CPR and venipuncture</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Mentorship by active medical doctors and clinical nurses</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Ethical, grounded career orientation with zero false claims</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Visit Our Kathmandu Campus</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED COURSES SECTION */}
      <section className="bg-slate-100/70 py-16 sm:py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                <span>Academic Catalog</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Clinical Training Programs
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Structured courses designed for employment readiness, practical competence, and clinical safety.
              </p>
            </div>

            {/* Filter Tabs (Interactive buttons allowed by constitution) */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-blue-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-blue-900 hover:text-white bg-white hover:bg-blue-900 border border-blue-900 rounded-xl transition-all shadow-sm"
            >
              <span>View All Training Programs & Syllabus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (8 PILLARS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-600" />
            <span>Institutional Strengths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Train at Life Line Skills Academy?
          </h2>
          <p className="text-slate-600 text-sm">
            We prioritize verifiable clinical competencies, experienced faculty mentorship, and modern laboratory equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Hands-on Simulation Labs',
              desc: 'Dedicated patient beds, CPR mannequins, and phlebotomy arms for deliberate practice.',
              icon: Activity
            },
            {
              title: 'Clinical Faculty',
              desc: 'Learn directly from licensed medical officers (MBBS/MD) and registered nursing mentors.',
              icon: Users
            },
            {
              title: 'Hospital Observation',
              desc: 'Supervised clinical ward practicum to understand hospital routines and documentation.',
              icon: HeartPulse
            },
            {
              title: 'Verifiable Credentials',
              desc: 'Instant online certificate verification portal for employers and institutions.',
              icon: ShieldCheck
            },
            {
              title: 'Small Cohort Batches',
              desc: 'Capped class sizes to guarantee individual microscope and mannequin station time.',
              icon: BookOpen
            },
            {
              title: 'Grounded Career Guidance',
              desc: 'Honest resume preparation, interview simulation, and realistic market pathways.',
              icon: Award
            },
            {
              title: 'Central Kathmandu Hub',
              desc: 'Convenient campus location in Bagbazar with easy transport connectivity.',
              icon: Sparkles
            },
            {
              title: 'Flexible Timing Batches',
              desc: 'Morning, afternoon, and intensive weekend slots for working candidates.',
              icon: CheckCircle2
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-teal-300 transition-colors flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. STUDENT EXPERIENCES & TESTIMONIALS */}
      <section className="bg-slate-900 text-white py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div>
              <p className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
                Student Experiences
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Alumni Stories & Feedback
              </h2>
            </div>
            <Link
              to="/testimonials"
              className="text-xs text-teal-300 hover:text-white font-semibold flex items-center gap-1"
            >
              <span>View All Student Feedback</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-700/80">
                  <p className="font-bold text-sm text-white">{t.name}</p>
                  <p className="text-[11px] text-teal-300 truncate">{t.course}</p>
                  {t.currentWorkplace && (
                    <p className="text-[10px] text-slate-400 mt-0.5 truncate">
                      {t.currentWorkplace}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RECENT HEALTH TIPS & ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Articles & Clinical Guides</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Health Tips & Healthcare Insights
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-sm font-semibold text-blue-900 hover:text-teal-700 hidden sm:flex items-center gap-1"
          >
            <span>View All Articles</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Zero-Pill metadata: Clean unboxed text with · */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-teal-700 font-semibold">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 hover:text-blue-900 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-slate-800">{post.author}</p>
                  <p className="text-slate-500 text-[11px]">{post.publishedDate}</p>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-bold text-blue-900 hover:text-teal-700 flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. ENROLLMENT CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-teal-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center sm:text-left relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-300">
              Admissions Open · Nepal Campus
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Ready to Begin Your Healthcare Skills Journey?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Submit your enrollment application online today. Our academic counselors will contact you with batch schedules, fee installment options, and orientation dates.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/apply"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-extrabold text-sm shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Apply Online Now
              </Link>
              <a
                href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-colors text-center"
              >
                Speak with Counselor: {settings.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
