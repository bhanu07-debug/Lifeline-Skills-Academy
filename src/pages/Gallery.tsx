import React, { useState } from 'react';
import { useAcademy } from '../context/AcademyContext';
import { GalleryItem } from '../types';
import {
  Sparkles,
  X,
  Calendar,
  Layers,
  Activity,
  Maximize2
} from 'lucide-react';

export const Gallery: React.FC = () => {
  const { gallery } = useAcademy();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Practical Labs',
    'Clinical Training',
    'Facilities',
    'Workshops',
    'Certification'
  ];

  const filteredItems = selectedCategory === 'All'
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Campus & Laboratories</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Simulation Lab & Training Gallery
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Take a visual tour of our hands-on clinical training suites, phlebotomy benches, emergency life support drills, and student graduation milestones in Kathmandu.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-1.5 p-1 bg-white rounded-2xl border border-slate-200 max-w-2xl mx-auto overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
            >
              {/* Visual Simulation Frame */}
              <div className="relative h-56 bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950 p-6 flex flex-col justify-between text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-teal-300 uppercase tracking-wider text-[11px]">
                    {item.category}
                  </span>
                  <span className="p-1 rounded bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5 text-slate-200" />
                  </span>
                </div>

                <div className="relative z-10 space-y-1">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-teal-300">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Caption & Date */}
              <div className="p-5 space-y-2">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.description || 'Clinical simulation training session at Kathmandu Campus.'}
                </p>
                {item.date && (
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium pt-2 border-t border-slate-100">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Item Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-2xl max-w-2xl w-full border border-slate-700 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-6 relative">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 rounded-xl bg-gradient-to-br from-blue-950 to-teal-900 flex flex-col items-center justify-center p-6 text-center border border-slate-700">
                <Activity className="w-12 h-12 text-teal-400 mb-3 animate-pulse" />
                <span className="text-xs font-mono text-teal-300 uppercase tracking-widest">
                  {activeModalItem.category}
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  {activeModalItem.title}
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  Life Line Clinical Simulation Lab, Bagbazar, Kathmandu
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalItem.description}
                </p>
                {activeModalItem.date && (
                  <p className="text-xs text-slate-400">
                    Documented: {activeModalItem.date}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
