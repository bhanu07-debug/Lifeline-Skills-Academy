import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AcademyProvider } from './context/AcademyContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Public Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { Careers } from './pages/Careers';
import { Destinations } from './pages/Destinations';
import { Team } from './pages/Team';
import { Gallery } from './pages/Gallery';
import { Testimonials } from './pages/Testimonials';
import { Blog } from './pages/Blog';
import { BlogDetails } from './pages/BlogDetails';
import { Apply } from './pages/Apply';
import { VerifyCertificate } from './pages/VerifyCertificate';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

// Admin Pages
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';

// Automatically scroll to top upon route transition
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Wrapper that selectively hides public Navbar/Footer on admin paths
function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isAdminPath = pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-teal-500 selection:text-white">
      {!isAdminPath && <Navbar />}
      <div className="flex-1">{children}</div>
      {!isAdminPath && <Footer />}
      {!isAdminPath && <FloatingWhatsApp />}
    </div>
  );
}

export default function App() {
  return (
    <AcademyProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/verify-certificate" element={<VerifyCertificate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AcademyProvider>
  );
}
