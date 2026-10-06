import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useAcademy } from '../context/AcademyContext';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  Copy,
  Clock,
  Phone,
  ShieldCheck,
  Building2,
  FileCheck2
} from 'lucide-react';

export const Apply: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get('course') || '';
  const { courses, submitApplication, settings } = useAcademy();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    gender: 'Female' as 'Female' | 'Male' | 'Other' | 'Prefer not to say',
    courseId: preselectedCourse,
    educationLevel: 'SEE / 10th Passed',
    preferredIntake: 'Immediate Next Intake (1st of Nepali Month)',
    message: '',
    documentNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApp, setSubmittedApp] = useState<{
    referenceNumber: string;
    courseName: string;
    fullName: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync course selection if query param changes
  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({ ...prev, courseId: preselectedCourse }));
    } else if (courses.length > 0 && !formData.courseId) {
      setFormData((prev) => ({ ...prev, courseId: courses[0].id }));
    }
  }, [preselectedCourse, courses]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validations
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full legal name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid contact phone number in Nepal.');
      return;
    }
    if (!formData.address.trim()) {
      setErrorMsg('Please enter your current permanent or residential address.');
      return;
    }
    if (!formData.courseId) {
      setErrorMsg('Please select a healthcare training course.');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedCourseObj = courses.find((c) => c.id === formData.courseId);
      const courseName = selectedCourseObj ? selectedCourseObj.title : 'Healthcare Skills Training';

      const created = submitApplication({
        ...formData,
        courseName
      });

      // Confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }

      setSubmittedApp({
        referenceNumber: created.referenceNumber,
        courseName,
        fullName: created.fullName
      });
    } catch (err) {
      setErrorMsg('Unable to submit your application right now. Please try again or call our office.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRefNumber = () => {
    if (submittedApp) {
      navigator.clipboard.writeText(submittedApp.referenceNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Online Enrollment Application</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Apply for Healthcare Skills Training
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Reserve your clinical simulation seat for the upcoming cohort. Our admissions desk will review your details and confirm batch timing.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {submittedApp ? (
          /* Confirmation Success Screen */
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Application Submitted Successfully!
              </h2>
              <p className="text-slate-600 text-sm max-w-lg mx-auto">
                Thank you, <strong>{submittedApp.fullName}</strong>. Your enrollment request for <strong>{submittedApp.courseName}</strong> has been registered with Life Line Skills Academy.
              </p>
            </div>

            {/* Reference Code Box */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl max-w-md mx-auto space-y-2">
              <p className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
                Official Application Reference Number
              </p>
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-xl sm:text-2xl font-black text-blue-900">
                  {submittedApp.referenceNumber}
                </span>
                <button
                  onClick={copyRefNumber}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
                  title="Copy Reference Number"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              {copied && <p className="text-xs text-emerald-600 font-semibold">Copied to clipboard!</p>}
              <p className="text-[11px] text-slate-400">
                Please save this reference number for orientation and campus inquiry.
              </p>
            </div>

            {/* Next Steps */}
            <div className="text-left bg-blue-50/70 border border-blue-100 rounded-2xl p-6 space-y-3 text-xs text-blue-950">
              <p className="font-bold text-sm text-blue-900 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-blue-800" />
                <span>Next Steps for Enrollment Confirmation</span>
              </p>
              <ul className="space-y-1.5 text-slate-700">
                <li>• Our academic counselor will call your provided number within 24 business hours.</li>
                <li>• Bring photocopies of your citizenship card and SEE/+2 marksheets for orientation.</li>
                <li>• Campus Location: {settings.address}, {settings.city}.</li>
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setSubmittedApp(null);
                  setFormData((prev) => ({
                    ...prev,
                    fullName: '',
                    phone: '',
                    email: '',
                    message: ''
                  }));
                }}
                className="px-6 py-2.5 bg-blue-900 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors"
              >
                Submit Another Application
              </button>
              <Link
                to="/courses"
                className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                Return to Course Catalog
              </Link>
            </div>
          </div>
        ) : (
          /* Application Form */
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Student Enrollment & Intake Registration
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Please provide accurate information. Admission is confirmed on a first-come, first-verified basis per batch.
              </p>
            </div>

            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Program Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Select Training Course *
                </label>
                <select
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all font-medium text-slate-800"
                  required
                >
                  <option value="" disabled>-- Select Course --</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.duration} - {c.fee})
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g., Sunita Tamang"
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Mobile / Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g., 98XXXXXXXX"
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., applicant@example.com"
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Permanent / Current Address in Nepal *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g., Bagbazar-28, Kathmandu"
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                    required
                  />
                </div>
              </div>

              {/* DOB, Gender & Education */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Date of Birth (AD or BS)
                  </label>
                  <input
                    type="text"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    placeholder="YYYY-MM-DD"
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Highest Education
                  </label>
                  <select
                    value={formData.educationLevel}
                    onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  >
                    <option value="SEE / 10th Passed">SEE / 10th Passed</option>
                    <option value="+2 Completed (Management/Humanities)">+2 Completed (Management/Humanities)</option>
                    <option value="+2 Completed (Science)">+2 Completed (Science)</option>
                    <option value="Diploma in General Medicine (HA)">Diploma in General Medicine (HA)</option>
                    <option value="Staff Nurse (PCL Nursing)">Staff Nurse (PCL Nursing)</option>
                    <option value="Bachelor Degree or Higher">Bachelor Degree or Higher</option>
                  </select>
                </div>
              </div>

              {/* Intake & Documents note */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Preferred Batch Intake
                  </label>
                  <select
                    value={formData.preferredIntake}
                    onChange={(e) => setFormData({ ...formData, preferredIntake: e.target.value })}
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  >
                    <option value="Immediate Next Intake (1st of Nepali Month)">Immediate Next Intake (1st of Nepali Month)</option>
                    <option value="Mid-Month Intake (15th of Nepali Month)">Mid-Month Intake (15th of Nepali Month)</option>
                    <option value="Weekend Intensive Cohort (Sat-Sun)">Weekend Intensive Cohort (Sat-Sun)</option>
                    <option value="Morning Shift (7:00 AM - 10:00 AM)">Morning Shift (7:00 AM - 10:00 AM)</option>
                    <option value="Afternoon Shift (1:00 PM - 4:00 PM)">Afternoon Shift (1:00 PM - 4:00 PM)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Documents Status / Notes
                  </label>
                  <input
                    type="text"
                    value={formData.documentNotes}
                    onChange={(e) => setFormData({ ...formData, documentNotes: e.target.value })}
                    placeholder="e.g., Citizenship and +2 transcript available"
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Message / Questions for Academic Counselor
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention any queries regarding hostel accommodation, fee installments, or clinical shift preferences..."
                  className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-900 hover:bg-blue-800 text-white font-black text-sm rounded-xl shadow-lg transition-all hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5 text-teal-300" />
                  <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application & Generate Reference ID'}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                Your application is encrypted and stored safely. We do not sell or share student contact details.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
