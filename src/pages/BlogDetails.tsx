import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAcademy } from '../context/AcademyContext';
import { useMetaTags } from '../hooks/useMetaTags';
import { ArrowLeft, Clock, Calendar, User, Share2, GraduationCap } from 'lucide-react';

export const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { allBlogPosts, courses } = useAcademy();

  const post = allBlogPosts.find((p) => p.slug === slug || p.id === slug);

  // Dynamic meta tags configuration based on loaded blog article data
  useMetaTags({
    title: post ? post.title : 'Health Tips & Articles',
    description: post ? post.excerpt : 'Clinical insights and health tips from Life Line Skills Academy faculty.',
    canonicalPath: post ? `/blog/${post.slug}` : '/blog',
    type: 'article',
    author: post?.author,
    publishedTime: post?.publishedDate,
    keywords: post?.tags || ['health tips Nepal', 'clinical education', 'caregiver tips'],
    schemaData: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          articleSection: post.category,
          datePublished: post.publishedDate,
          author: {
            '@type': 'Person',
            name: post.author,
            jobTitle: post.authorRole
          },
          publisher: {
            '@type': 'Organization',
            name: 'Life Line Skills Academy Pvt. Ltd.',
            url: 'https://lifelineskillsacademy.com.np'
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://lifelineskillsacademy.com.np/blog/${post.slug}`
          }
        }
      : undefined
  });

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Article Not Found</h1>
        <p className="text-sm text-slate-600">The healthcare article you are looking for is no longer available.</p>
        <Link to="/blog" className="inline-block px-5 py-2.5 bg-blue-900 text-white rounded-xl text-xs font-bold">
          &larr; Back to Health Tips
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-12 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-950 to-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Health Tips & Articles</span>
          </Link>

          {/* Metadata (Unboxed per constitution) */}
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <span className="text-teal-300 uppercase tracking-wider font-bold">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{post.publishedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center text-sm border border-teal-500/30">
              {post.author[0]}
            </div>
            <div>
              <p className="text-sm font-bold text-white">{post.author}</p>
              <p className="text-xs text-slate-400">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Lead Excerpt */}
        <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed p-6 bg-slate-50 border-l-4 border-teal-600 rounded-r-2xl">
          {post.excerpt}
        </p>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4 whitespace-pre-line">
          {post.content}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-6 border-t border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Related Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Programs Callout */}
        <div className="p-8 bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl text-white space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-teal-300 font-bold text-xs uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Practice These Skills Live in Kathmandu</span>
          </div>
          <h3 className="text-2xl font-bold">
            Interested in Hands-On Healthcare Training?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
            Join our next cohort of clinical caregivers, laboratory assistants, and emergency first aid responders. Complete with verifiable certification.
          </p>
          <div className="pt-2 flex gap-4">
            <Link
              to="/apply"
              className="px-6 py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs rounded-xl shadow transition-colors"
            >
              Enroll Now
            </Link>
            <Link
              to="/courses"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs rounded-xl transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
