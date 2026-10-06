import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAcademy } from '../../context/AcademyContext';
import { Logo } from '../../components/Logo';
import {
  Course,
  Application,
  BlogPost,
  CertificateRecord,
  TeamMember,
  Testimonial,
  GalleryItem,
  ApplicationStatus
} from '../../types';
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Image as ImageIcon,
  MessageSquare,
  Settings,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  Eye,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
  Check,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Phone,
  Mail,
  Clock,
  Save,
  X
} from 'lucide-react';

type AdminTab =
  | 'overview'
  | 'courses'
  | 'applications'
  | 'certificates'
  | 'blog'
  | 'team'
  | 'testimonials'
  | 'gallery'
  | 'settings';

export const AdminDashboard: React.FC = () => {
  const {
    settings,
    allCourses,
    applications,
    allBlogPosts,
    certificates,
    team,
    testimonials,
    gallery,
    contactMessages,
    isAdmin,
    adminLogout,
    saveCourse,
    deleteCourse,
    updateApplicationStatus,
    saveCertificate,
    deleteCertificate,
    saveBlogPost,
    deleteBlogPost,
    saveTeamMember,
    deleteTeamMember,
    saveTestimonial,
    deleteTestimonial,
    saveGalleryItem,
    deleteGalleryItem,
    updateSettings,
    resetAllData
  } = useAcademy();

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  // Application filter state
  const [appSearch, setAppSearch] = useState('');
  const [appStatusFilter, setAppStatusFilter] = useState<string>('All');
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  // Course edit modal state
  const [editingCourse, setEditingCourse] = useState<Partial<Course> | null>(null);

  // Certificate edit modal state
  const [editingCert, setEditingCert] = useState<Partial<CertificateRecord> | null>(null);

  // Blog edit modal state
  const [editingBlog, setEditingBlog] = useState<Partial<BlogPost> | null>(null);

  // Team edit modal state
  const [editingTeam, setEditingTeam] = useState<Partial<TeamMember> | null>(null);

  // Notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
        <h2 className="text-xl font-bold text-slate-900">Admin Authorization Required</h2>
        <p className="text-xs text-slate-600">Please sign in with administrator credentials.</p>
        <Link
          to="/admin/login"
          className="inline-block px-5 py-2.5 bg-blue-900 text-white font-bold text-xs rounded-xl"
        >
          Sign In
        </Link>
      </div>
    );
  }

  // Application filtering
  const filteredApps = applications.filter((app) => {
    const matchesStatus = appStatusFilter === 'All' || app.status === appStatusFilter;
    const matchesSearch =
      app.fullName.toLowerCase().includes(appSearch.toLowerCase()) ||
      app.phone.includes(appSearch) ||
      app.referenceNumber.toLowerCase().includes(appSearch.toLowerCase()) ||
      app.courseName.toLowerCase().includes(appSearch.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const newAppsCount = applications.filter((a) => a.status === 'New').length;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Admin Bar */}
      <header className="bg-slate-900 text-white px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-slate-800 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link to="/" title="Go to website">
            <Logo variant="compact" />
          </Link>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-white flex items-center gap-2">
              <span>Admin Console</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-900 text-teal-300">
                Staff Verified
              </span>
            </h1>
            <p className="text-[11px] text-slate-400">Life Line Skills Academy Pvt. Ltd.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Open Public Site</span>
          </Link>
          <button
            onClick={() => {
              adminLogout();
              navigate('/');
            }}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-red-300 hover:text-white bg-red-950/60 hover:bg-red-900 rounded-lg transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Admin Body */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Navigation Sidebar */}
        <aside className="w-full md:w-64 bg-white border-r border-slate-200/80 p-4 space-y-1 shrink-0">
          {[
            { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
            { id: 'courses', label: `Courses (${allCourses.length})`, icon: GraduationCap },
            {
              id: 'applications',
              label: `Applications (${applications.length})`,
              icon: Users,
              badge: newAppsCount > 0 ? `${newAppsCount} New` : undefined
            },
            { id: 'certificates', label: `Certificates (${certificates.length})`, icon: Award },
            { id: 'blog', label: `Blog & Tips (${allBlogPosts.length})`, icon: BookOpen },
            { id: 'team', label: `Faculty Team (${team.length})`, icon: Users },
            { id: 'testimonials', label: `Testimonials (${testimonials.length})`, icon: MessageSquare },
            { id: 'gallery', label: `Lab Gallery (${gallery.length})`, icon: ImageIcon },
            { id: 'settings', label: 'Website Settings', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as AdminTab)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </div>
                {tab.badge && (
                  <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded font-mono">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Content Panel */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {/* Toast Notification */}
          {toastMessage && (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-2.5 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* 1. OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-8 max-w-6xl">
              <div>
                <h2 className="text-2xl font-black text-slate-900">Dashboard Metrics</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real-time activity and records across Life Line Skills Academy
                </p>
              </div>

              {/* Stat Cards Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Courses</p>
                  <p className="text-3xl font-black text-slate-900 tabular-nums">{allCourses.length}</p>
                  <p className="text-[11px] text-teal-700 font-medium">All clinical programs active</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Applications</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-black text-slate-900 tabular-nums">{applications.length}</p>
                    {newAppsCount > 0 && (
                      <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                        +{newAppsCount} New
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">Received via online portal</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Certificates Issued</p>
                  <p className="text-3xl font-black text-slate-900 tabular-nums">{certificates.length}</p>
                  <p className="text-[11px] text-emerald-700 font-medium">Verifiable in online registry</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Inquiries Received</p>
                  <p className="text-3xl font-black text-slate-900 tabular-nums">{contactMessages.length}</p>
                  <p className="text-[11px] text-slate-400">Via contact page form</p>
                </div>
              </div>

              {/* Recent Applications Quick Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-base">Recent Enrollment Applications</h3>
                  <button
                    onClick={() => setActiveTab('applications')}
                    className="text-xs font-semibold text-blue-900 hover:text-teal-700"
                  >
                    View All &rarr;
                  </button>
                </div>

                {applications.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-3">Reference</th>
                          <th className="py-2.5 px-3">Applicant Name</th>
                          <th className="py-2.5 px-3">Course</th>
                          <th className="py-2.5 px-3">Phone</th>
                          <th className="py-2.5 px-3">Status</th>
                          <th className="py-2.5 px-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {applications.slice(0, 5).map((app) => (
                          <tr key={app.id} className="hover:bg-slate-50">
                            <td className="py-2.5 px-3 font-mono font-bold text-slate-700">{app.referenceNumber}</td>
                            <td className="py-2.5 px-3 font-bold text-slate-900">{app.fullName}</td>
                            <td className="py-2.5 px-3 text-slate-600 truncate max-w-[180px]">{app.courseName}</td>
                            <td className="py-2.5 px-3 font-mono">{app.phone}</td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  app.status === 'New'
                                    ? 'bg-red-100 text-red-800'
                                    : app.status === 'Reviewing'
                                    ? 'bg-amber-100 text-amber-800'
                                    : app.status === 'Accepted'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-slate-100 text-slate-700'
                                }`}
                              >
                                {app.status}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-right">
                              <button
                                onClick={() => setSelectedApp(app)}
                                className="text-blue-900 hover:text-teal-700 font-bold"
                              >
                                Inspect
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 py-4">No applications submitted yet.</p>
                )}
              </div>
            </div>
          )}

          {/* 2. COURSES TAB */}
          {activeTab === 'courses' && (
            <div className="space-y-6 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Course Management</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Add, edit, publish or modify syllabus modules for healthcare programs.
                  </p>
                </div>
                <button
                  onClick={() =>
                    setEditingCourse({
                      title: '',
                      category: 'Nursing & Care',
                      duration: '3 Months (240 Hours)',
                      eligibility: 'SEE / +2 Passed',
                      fee: 'NRs. 35,000',
                      location: 'Kathmandu Simulation Lab',
                      intakeSchedule: 'Monthly Intake',
                      shortDescription: '',
                      description: '',
                      published: true,
                      featured: false,
                      learningOutcomes: ['Clinical vital signs monitoring', 'Infection control protocols'],
                      careerOpportunities: ['Hospital Healthcare Assistant', 'Home Healthcare Specialist'],
                      whoShouldJoin: ['Graduates seeking healthcare competencies'],
                      benefits: ['100% Practical simulation', 'Verifiable certificate'],
                      syllabus: [{ moduleTitle: 'Module 1: Foundations', topics: ['Infection control', 'Vital signs'] }],
                      faqs: [{ question: 'What is the schedule?', answer: 'Morning and day shifts available.' }]
                    })
                  }
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 self-start"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Course</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCourses.map((c) => (
                  <div
                    key={c.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-teal-700 uppercase">{c.category}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            c.published ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {c.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base">{c.title}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2">{c.shortDescription}</p>
                      <div className="text-xs text-slate-700 font-semibold pt-1">
                        {c.duration} · <strong className="text-blue-900">{c.fee}</strong>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        to={`/courses/${c.slug}`}
                        target="_blank"
                        className="text-slate-500 hover:text-slate-900 font-medium"
                      >
                        Preview
                      </Link>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingCourse(c)}
                          className="p-1.5 text-blue-900 hover:bg-blue-50 rounded-lg"
                          title="Edit Course"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete course "${c.title}"?`)) {
                              deleteCourse(c.id);
                              showToast('Course deleted');
                            }
                          }}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete Course"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. APPLICATIONS TAB */}
          {activeTab === 'applications' && (
            <div className="space-y-6 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Student Applications</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Review and update statuses of enrolled prospective students.
                  </p>
                </div>
              </div>

              {/* Filters Bar */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-3 items-center justify-between">
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={appSearch}
                    onChange={(e) => setAppSearch(e.target.value)}
                    placeholder="Search name, phone, or ref code..."
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
                  {['All', 'New', 'Reviewing', 'Contacted', 'Accepted', 'Rejected', 'Completed'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setAppStatusFilter(status)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                        appStatusFilter === status
                          ? 'bg-blue-900 text-white'
                          : 'text-slate-600 bg-slate-50 hover:bg-slate-100'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Applications Table */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                {filteredApps.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-b border-slate-200">
                        <tr>
                          <th className="p-3">Reference</th>
                          <th className="p-3">Full Name</th>
                          <th className="p-3">Selected Course</th>
                          <th className="p-3">Phone & Email</th>
                          <th className="p-3">Education</th>
                          <th className="p-3">Status</th>
                          <th className="p-3 text-right">Inspect</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredApps.map((app) => (
                          <tr key={app.id} className="hover:bg-slate-50">
                            <td className="p-3 font-mono font-bold text-slate-700">{app.referenceNumber}</td>
                            <td className="p-3 font-bold text-slate-900">{app.fullName}</td>
                            <td className="p-3 text-slate-700 truncate max-w-[180px]">{app.courseName}</td>
                            <td className="p-3">
                              <p className="font-mono text-slate-900">{app.phone}</p>
                              {app.email && <p className="text-[11px] text-slate-400">{app.email}</p>}
                            </td>
                            <td className="p-3 text-slate-600">{app.educationLevel}</td>
                            <td className="p-3">
                              <select
                                value={app.status}
                                onChange={(e) => {
                                  updateApplicationStatus(app.id, e.target.value as ApplicationStatus);
                                  showToast(`Status updated to ${e.target.value}`);
                                }}
                                className="text-xs p-1 rounded font-semibold bg-slate-50 border border-slate-200"
                              >
                                <option value="New">New</option>
                                <option value="Reviewing">Reviewing</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Accepted">Accepted</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Completed">Completed</option>
                              </select>
                            </td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => setSelectedApp(app)}
                                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-blue-900 font-bold rounded-lg"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 p-8 text-center">No applications found.</p>
                )}
              </div>
            </div>
          )}

          {/* 4. CERTIFICATES TAB */}
          {activeTab === 'certificates' && (
            <div className="space-y-6 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Certificate Verification Registry</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Issue verifiable credentials and manage student verification records.
                  </p>
                </div>
                <button
                  onClick={() =>
                    setEditingCert({
                      certificateNumber: `LLSA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
                      studentName: '',
                      courseName: allCourses[0]?.title || 'Professional Healthcare Training',
                      issueDate: new Date().toISOString().split('T')[0],
                      completionDate: new Date().toISOString().split('T')[0],
                      grade: 'Distinction',
                      status: 'Verified',
                      verifierNotes: 'Verified completion of theoretical simulation and clinical observation hours.'
                    })
                  }
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 self-start"
                >
                  <Plus className="w-4 h-4" />
                  <span>Issue New Certificate</span>
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-[10px] border-b border-slate-200">
                    <tr>
                      <th className="p-3">Certificate ID</th>
                      <th className="p-3">Student Name</th>
                      <th className="p-3">Course</th>
                      <th className="p-3">Issue Date</th>
                      <th className="p-3">Grade</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {certificates.map((cert) => (
                      <tr key={cert.id} className="hover:bg-slate-50">
                        <td className="p-3 font-mono font-bold text-teal-800">{cert.certificateNumber}</td>
                        <td className="p-3 font-bold text-slate-900">{cert.studentName}</td>
                        <td className="p-3 text-slate-700 truncate max-w-[200px]">{cert.courseName}</td>
                        <td className="p-3 font-mono">{cert.issueDate}</td>
                        <td className="p-3">{cert.grade}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              cert.status === 'Verified'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {cert.status}
                          </span>
                        </td>
                        <td className="p-3 text-right space-x-2">
                          <button
                            onClick={() => setEditingCert(cert)}
                            className="text-blue-900 hover:underline font-bold"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete certificate ${cert.certificateNumber}?`)) {
                                deleteCertificate(cert.id);
                                showToast('Certificate deleted');
                              }
                            }}
                            className="text-red-600 hover:underline font-bold"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 5. BLOG TAB */}
          {activeTab === 'blog' && (
            <div className="space-y-6 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Blog & Health Tips Management</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Write health education articles and clinical guides for prospective students.
                  </p>
                </div>
                <button
                  onClick={() =>
                    setEditingBlog({
                      title: '',
                      category: 'Health Tips',
                      author: 'Life Line Clinical Faculty',
                      authorRole: 'Healthcare Instructor',
                      readTime: '5 min read',
                      excerpt: '',
                      content: '',
                      published: true,
                      tags: ['Clinical Skills', 'Nepal Healthcare']
                    })
                  }
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 self-start"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Article</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allBlogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-teal-700">{post.category}</span>
                        <span className="text-[10px] font-mono text-slate-400">{post.publishedDate}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm line-clamp-2">{post.title}</h3>
                      <p className="text-xs text-slate-500 line-clamp-3">{post.excerpt}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        to={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-slate-500 hover:text-slate-900"
                      >
                        Preview
                      </Link>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingBlog(post)}
                          className="p-1.5 text-blue-900 hover:bg-blue-50 rounded"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete post "${post.title}"?`)) {
                              deleteBlogPost(post.id);
                              showToast('Article deleted');
                            }
                          }}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. TEAM TAB */}
          {activeTab === 'team' && (
            <div className="space-y-6 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Faculty & Mentors</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Manage instructor profiles shown on the website.</p>
                </div>
                <button
                  onClick={() =>
                    setEditingTeam({
                      name: '',
                      position: 'Clinical Instructor',
                      qualification: 'Bachelor of Nursing / MBBS',
                      bio: '',
                      expertise: ['Simulation Training', 'Clinical Care'],
                      department: 'Clinical Skills'
                    })
                  }
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 self-start"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Faculty Member</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{member.name}</h3>
                      <p className="text-xs text-teal-700 font-semibold">{member.position}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{member.qualification}</p>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2">{member.bio}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2 text-xs">
                      <button
                        onClick={() => setEditingTeam(member)}
                        className="p-1.5 text-blue-900 hover:bg-blue-50 rounded"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete faculty "${member.name}"?`)) {
                            deleteTeamMember(member.id);
                            showToast('Faculty deleted');
                          }
                        }}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. TESTIMONIALS TAB */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Student Reviews</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Manage alumni testimonials.</p>
                </div>
                <button
                  onClick={() => {
                    const studentName = prompt('Enter student name:');
                    if (studentName) {
                      const quote = prompt('Enter testimonial quote:');
                      if (quote) {
                        saveTestimonial({
                          name: studentName,
                          course: 'Healthcare Skills Training',
                          quote,
                          rating: 5,
                          year: '2025'
                        });
                        showToast('Review added');
                      }
                    }
                  }}
                  className="px-4 py-2 bg-blue-900 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 self-start"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Review</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((t) => (
                  <div key={t.id} className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900">{t.name}</h3>
                      <button
                        onClick={() => {
                          if (window.confirm('Delete review?')) {
                            deleteTestimonial(t.id);
                            showToast('Review deleted');
                          }
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-teal-700 font-medium">{t.course} · {t.year}</p>
                    <p className="text-xs text-slate-600 italic">"{t.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. GALLERY TAB */}
          {activeTab === 'gallery' && (
            <div className="space-y-6 max-w-6xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Lab Gallery Records</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Manage photo records of facilities and sessions.</p>
                </div>
                <button
                  onClick={() => {
                    const title = prompt('Enter photo/session title:');
                    if (title) {
                      saveGalleryItem({
                        title,
                        category: 'Practical Labs',
                        description: 'Clinical laboratory training activity in Kathmandu campus.'
                      });
                      showToast('Gallery item created');
                    }
                  }}
                  className="px-4 py-2 bg-blue-900 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 self-start"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Gallery Item</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gallery.map((g) => (
                  <div key={g.id} className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-teal-700">{g.category}</span>
                      <button
                        onClick={() => {
                          deleteGalleryItem(g.id);
                          showToast('Item deleted');
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{g.title}</h3>
                    <p className="text-xs text-slate-500">{g.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9. SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="text-2xl font-black text-slate-900">Website & Campus Settings</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Update contact numbers, campus address, Zoho Mail info, and banner notices.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase text-slate-700">Academy Name</label>
                  <input
                    type="text"
                    value={settings.academyName}
                    onChange={(e) => updateSettings({ academyName: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase text-slate-700">Primary Phone</label>
                    <input
                      type="text"
                      value={settings.phone}
                      onChange={(e) => updateSettings({ phone: e.target.value })}
                      className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase text-slate-700">WhatsApp / Mobile</label>
                    <input
                      type="text"
                      value={settings.whatsappNumber}
                      onChange={(e) => updateSettings({ whatsappNumber: e.target.value })}
                      className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase text-slate-700">Campus Email</label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => updateSettings({ email: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  />
                  <p className="text-[11px] text-teal-800 font-medium">{settings.zohoMailStatus}</p>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase text-slate-700">Kathmandu Address</label>
                  <input
                    type="text"
                    value={settings.address}
                    onChange={(e) => updateSettings({ address: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase text-slate-700">Office Opening Hours</label>
                  <input
                    type="text"
                    value={settings.openingHours}
                    onChange={(e) => updateSettings({ openingHours: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                {/* Announcement Notice */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900">Top Notice Bar Active</span>
                    <input
                      type="checkbox"
                      checked={settings.noticeActive}
                      onChange={(e) => updateSettings({ noticeActive: e.target.checked })}
                      className="w-4 h-4 rounded text-teal-600"
                    />
                  </div>
                  <input
                    type="text"
                    value={settings.noticeText}
                    onChange={(e) => updateSettings({ noticeText: e.target.value })}
                    placeholder="Notice announcement message..."
                    className="w-full p-2.5 text-xs bg-white border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (window.confirm('Reset all demo data back to factory defaults?')) {
                        resetAllData();
                        showToast('Data reset to defaults');
                      }
                    }}
                    className="text-xs text-red-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset to Seed Defaults</span>
                  </button>

                  <button
                    onClick={() => showToast('Settings saved successfully')}
                    className="px-5 py-2.5 bg-blue-900 text-white font-bold text-xs rounded-xl shadow"
                  >
                    Save All Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* --- MODAL: APPLICATION DETAIL INSPECTOR --- */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-teal-700 uppercase">
                  {selectedApp.referenceNumber}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">{selectedApp.fullName}</h3>
                <p className="text-xs text-slate-500 font-medium">{selectedApp.courseName}</p>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Phone</p>
                  <p className="font-mono font-bold text-slate-900">{selectedApp.phone}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Email</p>
                  <p className="text-slate-900">{selectedApp.email || 'None provided'}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Address</p>
                  <p className="text-slate-900">{selectedApp.address}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Education</p>
                  <p className="text-slate-900">{selectedApp.educationLevel}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Intake Preference</p>
                  <p className="text-slate-900">{selectedApp.preferredIntake}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Submitted On</p>
                  <p className="font-mono text-slate-500">{new Date(selectedApp.createdAt).toLocaleDateString()}</p>
                </div>
              </div>

              {selectedApp.message && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-[10px] uppercase text-slate-500 mb-1">Student Note</p>
                  <p>{selectedApp.message}</p>
                </div>
              )}

              {/* Status Update */}
              <div className="pt-2 space-y-1.5">
                <label className="block text-[11px] font-bold uppercase text-slate-700">
                  Update Application Status
                </label>
                <select
                  value={selectedApp.status}
                  onChange={(e) => {
                    const nextStatus = e.target.value as ApplicationStatus;
                    updateApplicationStatus(selectedApp.id, nextStatus);
                    setSelectedApp({ ...selectedApp, status: nextStatus });
                    showToast(`Status updated to ${nextStatus}`);
                  }}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                >
                  <option value="New">New</option>
                  <option value="Reviewing">Reviewing</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-2">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-5 py-2 bg-slate-100 text-slate-800 text-xs font-bold rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL: COURSE EDITOR --- */}
      {editingCourse && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingCourse.id ? 'Edit Course' : 'Create New Healthcare Course'}
              </h3>
              <button onClick={() => setEditingCourse(null)} className="text-slate-400 hover:text-slate-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Course Title *</label>
                <input
                  type="text"
                  value={editingCourse.title || ''}
                  onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                  placeholder="e.g. Clinical Phlebotomy Specialist"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Category</label>
                  <select
                    value={editingCourse.category || 'Nursing & Care'}
                    onChange={(e) => setEditingCourse({ ...editingCourse, category: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="Nursing & Care">Nursing & Care</option>
                    <option value="Diagnostic & Pharmacy">Diagnostic & Pharmacy</option>
                    <option value="Emergency & First Aid">Emergency & First Aid</option>
                    <option value="Clinical Skills">Clinical Skills</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Duration</label>
                  <input
                    type="text"
                    value={editingCourse.duration || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, duration: e.target.value })}
                    placeholder="3 Months (240 Hours)"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Tuition Fee</label>
                  <input
                    type="text"
                    value={editingCourse.fee || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, fee: e.target.value })}
                    placeholder="NRs. 35,000"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Intake Schedule</label>
                  <input
                    type="text"
                    value={editingCourse.intakeSchedule || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, intakeSchedule: e.target.value })}
                    placeholder="1st of Every Nepali Month"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Short Description</label>
                <input
                  type="text"
                  value={editingCourse.shortDescription || ''}
                  onChange={(e) => setEditingCourse({ ...editingCourse, shortDescription: e.target.value })}
                  placeholder="1-line summary for cards"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Detailed Description</label>
                <textarea
                  rows={4}
                  value={editingCourse.description || ''}
                  onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 font-bold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingCourse.published ?? true}
                    onChange={(e) => setEditingCourse({ ...editingCourse, published: e.target.checked })}
                    className="w-4 h-4 rounded text-teal-600"
                  />
                  <span>Publish to Public Website</span>
                </label>

                <label className="flex items-center gap-2 font-bold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingCourse.featured ?? false}
                    onChange={(e) => setEditingCourse({ ...editingCourse, featured: e.target.checked })}
                    className="w-4 h-4 rounded text-teal-600"
                  />
                  <span>Feature on Homepage</span>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setEditingCourse(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!editingCourse.title?.trim()) {
                    alert('Please enter a course title.');
                    return;
                  }
                  saveCourse(editingCourse as any);
                  setEditingCourse(null);
                  showToast('Course saved successfully');
                }}
                className="px-5 py-2 bg-blue-900 text-white text-xs font-bold rounded-xl shadow"
              >
                Save Course
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL: CERTIFICATE ISSUER --- */}
      {editingCert && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingCert.id ? 'Edit Certificate Record' : 'Issue Verifiable Certificate'}
              </h3>
              <button onClick={() => setEditingCert(null)} className="text-slate-400 hover:text-slate-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Certificate Number *</label>
                <input
                  type="text"
                  value={editingCert.certificateNumber || ''}
                  onChange={(e) => setEditingCert({ ...editingCert, certificateNumber: e.target.value })}
                  placeholder="e.g. LLSA-2025-0142"
                  className="w-full p-2.5 font-mono uppercase bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Student Full Name *</label>
                <input
                  type="text"
                  value={editingCert.studentName || ''}
                  onChange={(e) => setEditingCert({ ...editingCert, studentName: e.target.value })}
                  placeholder="e.g. Sunita Tamang"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Course Name *</label>
                <input
                  type="text"
                  value={editingCert.courseName || ''}
                  onChange={(e) => setEditingCert({ ...editingCert, courseName: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Issue Date</label>
                  <input
                    type="date"
                    value={editingCert.issueDate || ''}
                    onChange={(e) => setEditingCert({ ...editingCert, issueDate: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Grade / Honors</label>
                  <input
                    type="text"
                    value={editingCert.grade || ''}
                    onChange={(e) => setEditingCert({ ...editingCert, grade: e.target.value })}
                    placeholder="Distinction"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Verification Status</label>
                <select
                  value={editingCert.status || 'Verified'}
                  onChange={(e) => setEditingCert({ ...editingCert, status: e.target.value as any })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                >
                  <option value="Verified">Verified (Active)</option>
                  <option value="Revoked">Revoked</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setEditingCert(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!editingCert.certificateNumber || !editingCert.studentName) {
                    alert('Please enter certificate number and student name.');
                    return;
                  }
                  saveCertificate(editingCert as any);
                  setEditingCert(null);
                  showToast('Certificate saved to registry');
                }}
                className="px-5 py-2 bg-blue-900 text-white text-xs font-bold rounded-xl shadow"
              >
                Save Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL: BLOG POST EDITOR --- */}
      {editingBlog && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-4 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingBlog.id ? 'Edit Article' : 'Write Healthcare Article'}
              </h3>
              <button onClick={() => setEditingBlog(null)} className="text-slate-400 hover:text-slate-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Article Title *</label>
                <input
                  type="text"
                  value={editingBlog.title || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                  placeholder="e.g. Essential Vital Signs for Caregivers"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Category</label>
                  <select
                    value={editingBlog.category || 'Health Tips'}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="Health Tips">Health Tips</option>
                    <option value="Career Guidance">Career Guidance</option>
                    <option value="Clinical Skills">Clinical Skills</option>
                    <option value="Healthcare Education">Healthcare Education</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Author Name</label>
                  <input
                    type="text"
                    value={editingBlog.author || ''}
                    onChange={(e) => setEditingBlog({ ...editingBlog, author: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Short Excerpt</label>
                <input
                  type="text"
                  value={editingBlog.excerpt || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Full Content</label>
                <textarea
                  rows={6}
                  value={editingBlog.content || ''}
                  onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-[11px]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setEditingBlog(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!editingBlog.title?.trim()) {
                    alert('Please provide an article title.');
                    return;
                  }
                  saveBlogPost(editingBlog as any);
                  setEditingBlog(null);
                  showToast('Article saved');
                }}
                className="px-5 py-2 bg-blue-900 text-white text-xs font-bold rounded-xl shadow"
              >
                Save Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL: TEAM EDITOR --- */}
      {editingTeam && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingTeam.id ? 'Edit Faculty' : 'Add Faculty Member'}
              </h3>
              <button onClick={() => setEditingTeam(null)} className="text-slate-400 hover:text-slate-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Faculty Name *</label>
                <input
                  type="text"
                  value={editingTeam.name || ''}
                  onChange={(e) => setEditingTeam({ ...editingTeam, name: e.target.value })}
                  placeholder="e.g. Dr. Sunil K. Sharma"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Position / Title</label>
                <input
                  type="text"
                  value={editingTeam.position || ''}
                  onChange={(e) => setEditingTeam({ ...editingTeam, position: e.target.value })}
                  placeholder="e.g. Lead Clinical Instructor"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Qualifications</label>
                <input
                  type="text"
                  value={editingTeam.qualification || ''}
                  onChange={(e) => setEditingTeam({ ...editingTeam, qualification: e.target.value })}
                  placeholder="e.g. Bachelor of Nursing (BN)"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Short Bio</label>
                <textarea
                  rows={3}
                  value={editingTeam.bio || ''}
                  onChange={(e) => setEditingTeam({ ...editingTeam, bio: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setEditingTeam(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!editingTeam.name) {
                    alert('Please enter faculty name.');
                    return;
                  }
                  saveTeamMember(editingTeam as any);
                  setEditingTeam(null);
                  showToast('Faculty member saved');
                }}
                className="px-5 py-2 bg-blue-900 text-white text-xs font-bold rounded-xl shadow"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
