import React, { useState } from 'react';
import { useAcademy } from '../context/AcademyContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { settings, submitContact } = useAcademy();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Course Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      submitContact(formData);
      setSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'General Course Inquiry',
        message: ''
      });
    } catch {
      setErrorMsg('Failed to send your message. Please reach us directly via phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Connect with Campus</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Contact Life Line Skills Academy
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Visit our clinical simulation campus in Kathmandu, speak with an admissions advisor, or send us an inquiry online.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you have questions about entry eligibility, hostel accommodations for out-of-valley students, or clinical batch schedules, our team is ready to guide you.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Kathmandu Campus Address</p>
                  <p className="text-slate-600 mt-1">{settings.address}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{settings.landmark}</p>
                  <p className="text-xs text-teal-700 font-semibold mt-1">{settings.city}</p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs">
                <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Telephone & Mobile</p>
                  <p className="mt-1">
                    Landline: <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="font-semibold text-blue-900 hover:underline">{settings.phone}</a>
                  </p>
                  <p className="mt-0.5">
                    Admissions Desk: <a href={`tel:${settings.alternatePhone.replace(/[^0-9+]/g, '')}`} className="font-semibold text-blue-900 hover:underline">{settings.alternatePhone}</a>
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs">
                <Mail className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Official Institutional Email</p>
                  <p className="mt-1">
                    <a href={`mailto:${settings.email}`} className="font-semibold text-blue-900 hover:underline">
                      {settings.email}
                    </a>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Secured through Zoho Mail infrastructure
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start gap-4 shadow-xs">
                <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Office & Lab Hours</p>
                  <p className="text-slate-600 mt-1">{settings.openingHours}</p>
                  <p className="text-xs text-slate-400 mt-0.5">Classes running in multiple morning and day shifts</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Action */}
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl shadow-md flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-bold text-sm">Chat on Official WhatsApp</p>
                <p className="text-xs text-emerald-100">Direct response for instant admission inquiries</p>
              </div>
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-emerald-800 font-bold text-xs rounded-xl shadow hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Send an Inquiry</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Submit your query below. Our staff responds to emails and phone inquiries within 24 hours.
                </p>
              </div>

              {success && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-xs text-emerald-800 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                  <div>
                    <p className="font-bold">Message Sent Successfully!</p>
                    <p>Thank you for reaching out. We will contact you shortly.</p>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Thapa"
                      className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98XXXXXXXX"
                      className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                    >
                      <option value="General Course Inquiry">General Course Inquiry</option>
                      <option value="Caregiver Training Batch">Caregiver Training Batch</option>
                      <option value="Clinical Lab Assistant">Clinical Lab Assistant</option>
                      <option value="BLS CPR Workshop">BLS CPR Workshop</option>
                      <option value="Hostel & Accommodation">Hostel & Accommodation</option>
                      <option value="Certificate Verification">Certificate Verification</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Your Message / Query *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what information or batch schedules you need..."
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-teal-300" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Campus Office'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Location & Interactive Map Frame */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Campus Map & Directions</h3>
              <p className="text-xs text-slate-500">
                Bagbazar Educational Hub, easily accessible from Ratna Park, Putalisadak, and Bhrikutimandap.
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-900 hover:text-teal-700"
            >
              Open in Google Maps &rarr;
            </a>
          </div>

          <div className="h-64 sm:h-80 w-full rounded-2xl bg-slate-100 border border-slate-200 relative overflow-hidden flex flex-col items-center justify-center text-center p-6">
            <MapPin className="w-10 h-10 text-teal-600 animate-bounce mb-2" />
            <p className="font-bold text-slate-900 text-sm">Life Line Skills Academy Pvt. Ltd.</p>
            <p className="text-xs text-slate-600 max-w-sm mt-1">
              Bagbazar Marg, Ward 28, Kathmandu (Between Putalisadak Chowk and Ratnapark)
            </p>
            <div className="mt-4 flex gap-3 text-xs">
              <span className="px-3 py-1 bg-white rounded-lg border border-slate-200 text-slate-700">
                Landmark: Near City Center Plaza
              </span>
              <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-800 rounded-lg">
                100m from Bagbazar Bus Stop
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
