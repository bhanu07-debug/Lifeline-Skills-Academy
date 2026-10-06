import React, { useState } from 'react';
import { useAcademy } from '../context/AcademyContext';
import { MessageCircle, Phone, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { settings } = useAcademy();
  const [isOpen, setIsOpen] = useState(false);

  const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(
    'Hello Life Line Skills Academy, I would like to inquire regarding training courses and upcoming intakes.'
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedText}`;

  return (
    <div className="fixed bottom-6 right-5 z-40">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800 text-white p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-bold text-sm">Admissions Counselor</p>
                <p className="text-[11px] text-teal-200">Life Line Skills Academy</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-100 mt-2">
              Namaste! How can we assist you with our healthcare courses today?
            </p>
          </div>

          <div className="p-3.5 space-y-2 bg-slate-50">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-800" />
              <span>Direct Phone Call ({settings.phone})</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Contact Admissions via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Quick Inquiry
        </span>
      </button>
    </div>
  );
};
