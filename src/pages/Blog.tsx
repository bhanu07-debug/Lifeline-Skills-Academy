import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAcademy } from '../context/AcademyContext';
import { Clock, ArrowRight, BookOpen, Search } from 'lucide-react';

export const Blog: React.FC = () => {
  const { blogPosts } = useAcademy();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Health Tips',
    'Career Guidance',
    'Clinical Skills',
    'Healthcare Education'
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Health Insights & Academy Updates</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Health Tips & Healthcare Articles
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Clinical insights, vital signs tutorials, phlebotomy best practices, and career advice written by our medical faculty.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search and Categories Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title or keyword..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="space-y-3">
                {/* Zero-Pill metadata: unboxed text with · */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-teal-700 font-bold">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-slate-800">{post.author}</p>
                  <p className="text-[11px] text-slate-400">{post.publishedDate}</p>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="font-bold text-blue-900 group-hover:text-teal-700 flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
