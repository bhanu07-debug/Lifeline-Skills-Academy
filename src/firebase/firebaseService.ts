import {
  Course,
  Application,
  BlogPost,
  TeamMember,
  Testimonial,
  GalleryItem,
  CertificateRecord,
  WebsiteSettings,
  ContactMessage,
  ApplicationStatus
} from '../types';
import {
  initialSettings,
  initialCourses,
  initialBlogPosts,
  initialTeam,
  initialTestimonials,
  initialGallery,
  initialCertificates,
  initialApplications
} from '../data/initialData';

// Storage keys
const STORAGE_KEYS = {
  SETTINGS: 'llsa_settings_v1',
  COURSES: 'llsa_courses_v1',
  APPLICATIONS: 'llsa_applications_v1',
  BLOG: 'llsa_blog_v1',
  TEAM: 'llsa_team_v1',
  TESTIMONIALS: 'llsa_testimonials_v1',
  GALLERY: 'llsa_gallery_v1',
  CERTIFICATES: 'llsa_certificates_v1',
  CONTACTS: 'llsa_contacts_v1',
  ADMIN_AUTH: 'llsa_admin_session_v1',
};

// Helper for local storage retrieval with default fallback
function getLocalData<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Error reading ${key} from storage:`, error);
    return defaultValue;
  }
}

function setLocalData<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    // Dispatch custom event so reactive hooks can update across components
    window.dispatchEvent(new Event('llsa_data_changed'));
  } catch (error) {
    console.error(`Error writing ${key} to storage:`, error);
  }
}

export const FirebaseService = {
  // --- SETTINGS ---
  getSettings(): WebsiteSettings {
    return getLocalData<WebsiteSettings>(STORAGE_KEYS.SETTINGS, initialSettings);
  },

  updateSettings(newSettings: Partial<WebsiteSettings>): WebsiteSettings {
    const current = this.getSettings();
    const updated = { ...current, ...newSettings };
    setLocalData(STORAGE_KEYS.SETTINGS, updated);
    return updated;
  },

  // --- COURSES ---
  getCourses(includeUnpublished = false): Course[] {
    const all = getLocalData<Course[]>(STORAGE_KEYS.COURSES, initialCourses);
    if (includeUnpublished) return all;
    return all.filter(c => c.published);
  },

  getCourseBySlug(slug: string): Course | undefined {
    const all = getLocalData<Course[]>(STORAGE_KEYS.COURSES, initialCourses);
    return all.find(c => c.slug === slug || c.id === slug);
  },

  saveCourse(courseData: Partial<Course> & { title: string }): Course {
    const all = getLocalData<Course[]>(STORAGE_KEYS.COURSES, initialCourses);
    const slug = courseData.slug || courseData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    if (courseData.id) {
      const index = all.findIndex(c => c.id === courseData.id);
      if (index !== -1) {
        all[index] = { ...all[index], ...courseData, slug } as Course;
        setLocalData(STORAGE_KEYS.COURSES, all);
        return all[index];
      }
    }

    const newCourse: Course = {
      id: `course-${Date.now()}`,
      title: courseData.title,
      slug,
      shortDescription: courseData.shortDescription || '',
      description: courseData.description || '',
      category: courseData.category || 'Nursing & Care',
      duration: courseData.duration || '3 Months',
      eligibility: courseData.eligibility || 'SEE / +2 Passed',
      fee: courseData.fee || 'NRs. 30,000',
      location: courseData.location || 'Life Line Simulation Lab, Kathmandu',
      intakeSchedule: courseData.intakeSchedule || 'Monthly',
      themeColor: courseData.themeColor || 'blue',
      published: courseData.published ?? true,
      featured: courseData.featured ?? false,
      learningOutcomes: courseData.learningOutcomes || [],
      careerOpportunities: courseData.careerOpportunities || [],
      whoShouldJoin: courseData.whoShouldJoin || [],
      benefits: courseData.benefits || [],
      syllabus: courseData.syllabus || [],
      faqs: courseData.faqs || []
    };

    all.push(newCourse);
    setLocalData(STORAGE_KEYS.COURSES, all);
    return newCourse;
  },

  deleteCourse(courseId: string): boolean {
    const all = getLocalData<Course[]>(STORAGE_KEYS.COURSES, initialCourses);
    const filtered = all.filter(c => c.id !== courseId);
    setLocalData(STORAGE_KEYS.COURSES, filtered);
    return true;
  },

  // --- APPLICATIONS ---
  getApplications(): Application[] {
    return getLocalData<Application[]>(STORAGE_KEYS.APPLICATIONS, initialApplications);
  },

  submitApplication(formData: Omit<Application, 'id' | 'referenceNumber' | 'status' | 'createdAt'>): Application {
    const all = getLocalData<Application[]>(STORAGE_KEYS.APPLICATIONS, initialApplications);
    
    // Generate institutional reference number: LLSA-YYYY-XXXX
    const currentYear = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `LLSA-APP-${currentYear}-${randomSuffix}`;

    const newApp: Application = {
      ...formData,
      id: `app-${Date.now()}`,
      referenceNumber,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    all.unshift(newApp);
    setLocalData(STORAGE_KEYS.APPLICATIONS, all);
    return newApp;
  },

  updateApplicationStatus(id: string, status: ApplicationStatus, adminNotes?: string): Application | undefined {
    const all = getLocalData<Application[]>(STORAGE_KEYS.APPLICATIONS, initialApplications);
    const index = all.findIndex(a => a.id === id);
    if (index === -1) return undefined;

    all[index].status = status;
    if (adminNotes !== undefined) {
      all[index].adminNotes = adminNotes;
    }
    setLocalData(STORAGE_KEYS.APPLICATIONS, all);
    return all[index];
  },

  // --- BLOG POSTS ---
  getBlogPosts(includeUnpublished = false): BlogPost[] {
    const all = getLocalData<BlogPost[]>(STORAGE_KEYS.BLOG, initialBlogPosts);
    if (includeUnpublished) return all;
    return all.filter(b => b.published);
  },

  getBlogPostBySlug(slug: string): BlogPost | undefined {
    const all = getLocalData<BlogPost[]>(STORAGE_KEYS.BLOG, initialBlogPosts);
    return all.find(b => b.slug === slug || b.id === slug);
  },

  saveBlogPost(postData: Partial<BlogPost> & { title: string }): BlogPost {
    const all = getLocalData<BlogPost[]>(STORAGE_KEYS.BLOG, initialBlogPosts);
    const slug = postData.slug || postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    if (postData.id) {
      const idx = all.findIndex(b => b.id === postData.id);
      if (idx !== -1) {
        all[idx] = { ...all[idx], ...postData, slug } as BlogPost;
        setLocalData(STORAGE_KEYS.BLOG, all);
        return all[idx];
      }
    }

    const newPost: BlogPost = {
      id: `blog-${Date.now()}`,
      title: postData.title,
      slug,
      excerpt: postData.excerpt || '',
      content: postData.content || '',
      category: postData.category || 'Health Tips',
      author: postData.author || 'Life Line Academic Faculty',
      authorRole: postData.authorRole || 'Healthcare Instructor',
      publishedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: postData.readTime || '4 min read',
      published: postData.published ?? true,
      tags: postData.tags || ['Healthcare', 'Nepal']
    };

    all.unshift(newPost);
    setLocalData(STORAGE_KEYS.BLOG, all);
    return newPost;
  },

  deleteBlogPost(postId: string): boolean {
    const all = getLocalData<BlogPost[]>(STORAGE_KEYS.BLOG, initialBlogPosts);
    const filtered = all.filter(b => b.id !== postId);
    setLocalData(STORAGE_KEYS.BLOG, filtered);
    return true;
  },

  // --- TEAM ---
  getTeam(): TeamMember[] {
    return getLocalData<TeamMember[]>(STORAGE_KEYS.TEAM, initialTeam);
  },

  saveTeamMember(member: Partial<TeamMember> & { name: string; position: string }): TeamMember {
    const all = getLocalData<TeamMember[]>(STORAGE_KEYS.TEAM, initialTeam);
    if (member.id) {
      const idx = all.findIndex(t => t.id === member.id);
      if (idx !== -1) {
        all[idx] = { ...all[idx], ...member } as TeamMember;
        setLocalData(STORAGE_KEYS.TEAM, all);
        return all[idx];
      }
    }

    const newMember: TeamMember = {
      id: `team-${Date.now()}`,
      name: member.name,
      position: member.position,
      qualification: member.qualification || '',
      bio: member.bio || '',
      expertise: member.expertise || [],
      department: member.department || 'Clinical Training',
      order: all.length + 1
    };

    all.push(newMember);
    setLocalData(STORAGE_KEYS.TEAM, all);
    return newMember;
  },

  deleteTeamMember(id: string): boolean {
    const all = getLocalData<TeamMember[]>(STORAGE_KEYS.TEAM, initialTeam);
    const filtered = all.filter(t => t.id !== id);
    setLocalData(STORAGE_KEYS.TEAM, filtered);
    return true;
  },

  // --- TESTIMONIALS ---
  getTestimonials(includeUnpublished = false): Testimonial[] {
    const all = getLocalData<Testimonial[]>(STORAGE_KEYS.TESTIMONIALS, initialTestimonials);
    if (includeUnpublished) return all;
    return all.filter(t => t.published);
  },

  saveTestimonial(test: Partial<Testimonial> & { name: string; quote: string }): Testimonial {
    const all = getLocalData<Testimonial[]>(STORAGE_KEYS.TESTIMONIALS, initialTestimonials);
    if (test.id) {
      const idx = all.findIndex(t => t.id === test.id);
      if (idx !== -1) {
        all[idx] = { ...all[idx], ...test } as Testimonial;
        setLocalData(STORAGE_KEYS.TESTIMONIALS, all);
        return all[idx];
      }
    }

    const newTest: Testimonial = {
      id: `test-${Date.now()}`,
      name: test.name,
      course: test.course || 'Healthcare Skills Training',
      year: test.year || '2025',
      quote: test.quote,
      rating: test.rating || 5,
      currentWorkplace: test.currentWorkplace || '',
      published: test.published ?? true
    };

    all.unshift(newTest);
    setLocalData(STORAGE_KEYS.TESTIMONIALS, all);
    return newTest;
  },

  deleteTestimonial(id: string): boolean {
    const all = getLocalData<Testimonial[]>(STORAGE_KEYS.TESTIMONIALS, initialTestimonials);
    setLocalData(STORAGE_KEYS.TESTIMONIALS, all.filter(t => t.id !== id));
    return true;
  },

  // --- GALLERY ---
  getGallery(): GalleryItem[] {
    return getLocalData<GalleryItem[]>(STORAGE_KEYS.GALLERY, initialGallery);
  },

  saveGalleryItem(item: Partial<GalleryItem> & { title: string }): GalleryItem {
    const all = getLocalData<GalleryItem[]>(STORAGE_KEYS.GALLERY, initialGallery);
    const newItem: GalleryItem = {
      id: `gal-${Date.now()}`,
      title: item.title,
      category: item.category || 'Practical Labs',
      description: item.description || '',
      date: item.date || new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };
    all.unshift(newItem);
    setLocalData(STORAGE_KEYS.GALLERY, all);
    return newItem;
  },

  deleteGalleryItem(id: string): boolean {
    const all = getLocalData<GalleryItem[]>(STORAGE_KEYS.GALLERY, initialGallery);
    setLocalData(STORAGE_KEYS.GALLERY, all.filter(g => g.id !== id));
    return true;
  },

  // --- CERTIFICATE VERIFICATION ---
  getCertificates(): CertificateRecord[] {
    return getLocalData<CertificateRecord[]>(STORAGE_KEYS.CERTIFICATES, initialCertificates);
  },

  verifyCertificate(certNumber: string): CertificateRecord | undefined {
    const cleanNumber = certNumber.trim().toUpperCase();
    const all = this.getCertificates();
    return all.find(c => c.certificateNumber.toUpperCase() === cleanNumber);
  },

  saveCertificate(cert: Partial<CertificateRecord> & { certificateNumber: string; studentName: string; courseName: string }): CertificateRecord {
    const all = this.getCertificates();
    const cleanNumber = cert.certificateNumber.trim().toUpperCase();

    if (cert.id) {
      const idx = all.findIndex(c => c.id === cert.id);
      if (idx !== -1) {
        all[idx] = { ...all[idx], ...cert, certificateNumber: cleanNumber } as CertificateRecord;
        setLocalData(STORAGE_KEYS.CERTIFICATES, all);
        return all[idx];
      }
    }

    const newCert: CertificateRecord = {
      id: `cert-${Date.now()}`,
      certificateNumber: cleanNumber,
      studentName: cert.studentName,
      courseName: cert.courseName,
      issueDate: cert.issueDate || new Date().toISOString().split('T')[0],
      completionDate: cert.completionDate || new Date().toISOString().split('T')[0],
      grade: cert.grade || 'Passed',
      status: cert.status || 'Verified',
      verifierNotes: cert.verifierNotes || 'Officially verified and registered in the Life Line Skills Academy credential registry.'
    };

    all.unshift(newCert);
    setLocalData(STORAGE_KEYS.CERTIFICATES, all);
    return newCert;
  },

  deleteCertificate(id: string): boolean {
    const all = this.getCertificates();
    setLocalData(STORAGE_KEYS.CERTIFICATES, all.filter(c => c.id !== id));
    return true;
  },

  // --- CONTACT MESSAGES ---
  getContactMessages(): ContactMessage[] {
    return getLocalData<ContactMessage[]>(STORAGE_KEYS.CONTACTS, []);
  },

  submitContactMessage(msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): ContactMessage {
    const all = this.getContactMessages();
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'Unread'
    };
    all.unshift(newMsg);
    setLocalData(STORAGE_KEYS.CONTACTS, all);
    return newMsg;
  },

  markContactRead(id: string): void {
    const all = this.getContactMessages();
    const found = all.find(m => m.id === id);
    if (found) {
      found.status = 'Read';
      setLocalData(STORAGE_KEYS.CONTACTS, all);
    }
  },

  // --- ADMIN AUTH & SESSION ---
  isAdminAuthenticated(): boolean {
    try {
      return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
    } catch {
      return false;
    }
  },

  adminLogin(password: string): boolean {
    // Admin password (default: admin123 or lifeline2025)
    if (password === 'lifeline2025' || password === 'admin123' || password === 'admin') {
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      window.dispatchEvent(new Event('llsa_auth_changed'));
      return true;
    }
    return false;
  },

  adminLogout(): void {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    window.dispatchEvent(new Event('llsa_auth_changed'));
  },

  // Reset to factory defaults for easy testing
  resetAllData(): void {
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(STORAGE_KEYS.COURSES);
    localStorage.removeItem(STORAGE_KEYS.APPLICATIONS);
    localStorage.removeItem(STORAGE_KEYS.BLOG);
    localStorage.removeItem(STORAGE_KEYS.TEAM);
    localStorage.removeItem(STORAGE_KEYS.TESTIMONIALS);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.CERTIFICATES);
    localStorage.removeItem(STORAGE_KEYS.CONTACTS);
    window.dispatchEvent(new Event('llsa_data_changed'));
  }
};
