import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useAcademy } from '../context/AcademyContext';
import { useMetaTags } from '../hooks/useMetaTags';
import {
  Clock,
  GraduationCap,
  MapPin,
  Calendar,
  DollarSign,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award,
  HelpCircle,
  Briefcase,
  Users
} from 'lucide-react';

export const CourseDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { courses, allCourses } = useAcademy();
  const [openModuleIndex, setOpenModuleIndex] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Find course by slug or id
  const course = allCourses.find((c) => c.slug === slug || c.id === slug);

  // Dynamic meta tags configuration based on loaded course data
  useMetaTags({
    title: course ? `${course.title} Course` : 'Course Details',
    description: course
      ? `${course.shortDescription} Duration: ${course.duration}. Eligibility: ${course.eligibility}. Enroll at Life Line Skills Academy in Kathmandu.`
      : 'Explore clinical healthcare training courses at Life Line Skills Academy Nepal.',
    canonicalPath: course ? `/courses/${course.slug}` : '/courses',
    keywords: course
      ? [
          course.title,
          course.category,
          'healthcare courses in Nepal',
          'clinical skills academy Nepal',
          'vocational healthcare training',
          'Kathmandu healthcare education'
        ]
      : ['healthcare training Nepal'],
    schemaData: course
      ? {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: course.title,
          description: course.shortDescription,
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Life Line Skills Academy Pvt. Ltd.',
            sameAs: 'https://lifelineskillsacademy.com.np',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kathmandu',
              addressCountry: 'NP'
            }
          },
          coursePrerequisites: course.eligibility,
          educationalCredentialAwarded: 'Verified Skills Completion Certificate',
          timeRequired: course.duration,
          offers: {
            '@type': 'Offer',
            category: 'Tuition Fee',
            priceCurrency: 'NPR',
            price: course.fee.replace(/[^0-9]/g, '') || '0'
          }
        }
      : undefined
  });

  if (!course) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-3xl font-black text-slate-900">Course Not Found</h1>
        <p className="text-sm text-slate-600">
          The requested healthcare training program could not be located in our catalog.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-900 text-white rounded-xl text-xs font-bold"
        >
          &larr; View All Available Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-16 pb-24">
      {/* 1. COURSE HEADER BANNER */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            {/* Category and Status */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <Link to="/courses" className="text-slate-400 hover:text-white">
                Courses
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-teal-300 uppercase tracking-wider">{course.category}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300 font-mono text-[11px]">{course.intakeSchedule}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {course.shortDescription}
            </p>

            {/* Quick Action bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={`/apply?course=${encodeURIComponent(course.id)}`}
                className="px-7 py-3.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for This Course</span>
              </Link>

              <a
                href="#syllabus"
                className="px-5 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                View Syllabus
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Program Overview</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {course.description}
              </p>
            </section>

            {/* Syllabus / Curriculum Accordion */}
            <section id="syllabus" className="space-y-4 pt-4 scroll-mt-24">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Curriculum & Modules</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Structured hands-on laboratory modules with competency assessments.
                  </p>
                </div>
                <span className="text-xs font-mono text-teal-700 font-semibold bg-teal-50 px-2.5 py-1 rounded-md">
                  {course.syllabus.length} Modules
                </span>
              </div>

              <div className="space-y-3">
                {course.syllabus.map((mod, idx) => {
                  const isOpen = openModuleIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs transition-all"
                    >
                      <button
                        onClick={() => setOpenModuleIndex(isOpen ? -1 : idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <div>
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                              {mod.moduleTitle}
                            </h3>
                            {mod.hours && (
                              <p className="text-xs text-slate-400 font-mono mt-0.5">
                                {mod.hours}
                              </p>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 transition-transform ${
                            isOpen ? 'rotate-180 text-teal-600' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 bg-slate-50/50">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Key Practical & Theoretical Topics
                          </p>
                          <ul className="space-y-2">
                            {mod.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Learning Outcomes */}
            <section className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold text-slate-900">What You Will Master</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Opportunities */}
            <section className="space-y-4 pt-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-900" />
                <h2 className="text-2xl font-bold text-slate-900">Career Pathways</h2>
              </div>
              <p className="text-xs text-slate-500">
                Graduates can apply for support and assistant roles across diverse healthcare sectors:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.careerOpportunities.map((career, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                  >
                    <Award className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">{career}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Who Should Join & Benefits */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-900" />
                  <span>Who Should Join</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {course.whoShouldJoin.map((w, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Course Benefits</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {course.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Frequently Asked Questions */}
            {course.faqs && course.faqs.length > 0 && (
              <section className="space-y-4 pt-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-900" />
                  <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-2">
                  {course.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-slate-200 rounded-xl bg-white overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-900"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Sidebar Info Box (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 space-y-6">
                <div>
                  <p className="text-xs uppercase font-bold text-slate-600 tracking-wider">Tuition Fee</p>
                  <p className="text-3xl font-black text-slate-900 mt-1">{course.fee}</p>
                  <p className="text-[11px] text-teal-800 mt-0.5">Flexible installment plans available</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-600">Course Duration</p>
                      <p className="font-semibold text-slate-900">{course.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-600">Eligibility</p>
                      <p className="font-semibold text-slate-900">{course.eligibility}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-600">Intake Schedule</p>
                      <p className="font-semibold text-slate-900">{course.intakeSchedule}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-600">Training Location</p>
                      <p className="font-semibold text-slate-900">{course.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <Link
                    to={`/apply?course=${encodeURIComponent(course.id)}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors"
                  >
                    <span>Apply for Enrollment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 transition-colors"
                  >
                    Inquire via Campus Office
                  </Link>
                </div>
              </div>

              {/* Credential Authenticity Callout */}
              <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200/80 text-xs text-teal-900 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Verifiable Completion Certificate</p>
                  <p className="text-[11px] text-teal-800 mt-0.5">
                    Graduates receive a secure certificate registered in our online portal with permanent Verification ID.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
