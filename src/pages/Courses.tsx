import React, { useState, useMemo } from 'react';
import { useAcademy } from '../context/AcademyContext';
import { CourseCard } from '../components/CourseCard';
import { useMetaTags } from '../hooks/useMetaTags';
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';

export const Courses: React.FC = () => {
  const { courses } = useAcademy();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useMetaTags({
    title: 'Healthcare Courses & Clinical Skills Training',
    description: 'Explore certified healthcare courses in Nepal: Elderly Caregiver, Clinical Lab Assistant, Emergency First Aid BLS CPR, and Dental Assistant.',
    canonicalPath: '/courses',
    keywords: ['healthcare courses in Nepal', 'caregiver training Kathmandu', 'BLS CPR course Nepal', 'lab technician skills']
  });

  const categories = [
    'All',
    'Nursing & Care',
    'Diagnostic & Pharmacy',
    'Emergency & First Aid',
    'Clinical Skills'
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.eligibility.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [courses, selectedCategory, searchQuery]);

  return (
    <div className="space-y-12 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Academic Programs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Healthcare Skills & Clinical Courses
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Gain job-ready competencies through simulation lab practice, hospital observation, and clinical mentoring. All courses include online verifiable certification.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search and Filters Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, eligibility, or skills..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
            />
          </div>

          {/* Category Filter Pills (Button elements per constitution) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>
            Showing <strong className="text-slate-900">{filteredCourses.length}</strong> available course
            {filteredCourses.length === 1 ? '' : 's'}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-teal-700 hover:underline font-semibold"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No courses match your search</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search keywords or select "All" from the category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-blue-900 text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
