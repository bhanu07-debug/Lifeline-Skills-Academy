import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  WebsiteSettings,
  Course,
  BlogPost,
  TeamMember,
  Testimonial,
  GalleryItem,
  CertificateRecord,
  Application,
  ContactMessage,
  ApplicationStatus
} from '../types';
import { FirebaseService } from '../firebase/firebaseService';

interface AcademyContextType {
  settings: WebsiteSettings;
  courses: Course[];
  allCourses: Course[]; // including unpublished for admin
  blogPosts: BlogPost[];
  allBlogPosts: BlogPost[];
  team: TeamMember[];
  testimonials: Testimonial[];
  gallery: GalleryItem[];
  certificates: CertificateRecord[];
  applications: Application[];
  contactMessages: ContactMessage[];
  isAdmin: boolean;
  refreshData: () => void;
  updateSettings: (newSettings: Partial<WebsiteSettings>) => void;
  saveCourse: (course: Partial<Course> & { title: string }) => Course;
  deleteCourse: (id: string) => boolean;
  submitApplication: (appData: Omit<Application, 'id' | 'referenceNumber' | 'status' | 'createdAt'>) => Application;
  updateApplicationStatus: (id: string, status: ApplicationStatus, notes?: string) => void;
  saveBlogPost: (post: Partial<BlogPost> & { title: string }) => BlogPost;
  deleteBlogPost: (id: string) => boolean;
  saveTeamMember: (m: Partial<TeamMember> & { name: string; position: string }) => TeamMember;
  deleteTeamMember: (id: string) => boolean;
  saveTestimonial: (t: Partial<Testimonial> & { name: string; quote: string }) => Testimonial;
  deleteTestimonial: (id: string) => boolean;
  saveGalleryItem: (g: Partial<GalleryItem> & { title: string }) => GalleryItem;
  deleteGalleryItem: (id: string) => boolean;
  saveCertificate: (c: Partial<CertificateRecord> & { certificateNumber: string; studentName: string; courseName: string }) => CertificateRecord;
  deleteCertificate: (id: string) => boolean;
  verifyCertificate: (certNumber: string) => CertificateRecord | undefined;
  submitContact: (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => ContactMessage;
  markContactRead: (id: string) => void;
  adminLogin: (pwd: string) => boolean;
  adminLogout: () => void;
  resetAllData: () => void;
}

const AcademyContext = createContext<AcademyContextType | null>(null);

export const AcademyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<WebsiteSettings>(() => FirebaseService.getSettings());
  const [courses, setCourses] = useState<Course[]>(() => FirebaseService.getCourses(false));
  const [allCourses, setAllCourses] = useState<Course[]>(() => FirebaseService.getCourses(true));
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => FirebaseService.getBlogPosts(false));
  const [allBlogPosts, setAllBlogPosts] = useState<BlogPost[]>(() => FirebaseService.getBlogPosts(true));
  const [team, setTeam] = useState<TeamMember[]>(() => FirebaseService.getTeam());
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => FirebaseService.getTestimonials(false));
  const [gallery, setGallery] = useState<GalleryItem[]>(() => FirebaseService.getGallery());
  const [certificates, setCertificates] = useState<CertificateRecord[]>(() => FirebaseService.getCertificates());
  const [applications, setApplications] = useState<Application[]>(() => FirebaseService.getApplications());
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => FirebaseService.getContactMessages());
  const [isAdmin, setIsAdmin] = useState<boolean>(() => FirebaseService.isAdminAuthenticated());

  const loadData = () => {
    setSettings(FirebaseService.getSettings());
    setCourses(FirebaseService.getCourses(false));
    setAllCourses(FirebaseService.getCourses(true));
    setBlogPosts(FirebaseService.getBlogPosts(false));
    setAllBlogPosts(FirebaseService.getBlogPosts(true));
    setTeam(FirebaseService.getTeam());
    setTestimonials(FirebaseService.getTestimonials(false));
    setGallery(FirebaseService.getGallery());
    setCertificates(FirebaseService.getCertificates());
    setApplications(FirebaseService.getApplications());
    setContactMessages(FirebaseService.getContactMessages());
    setIsAdmin(FirebaseService.isAdminAuthenticated());
  };

  useEffect(() => {
    const handleDataChange = () => loadData();
    const handleAuthChange = () => setIsAdmin(FirebaseService.isAdminAuthenticated());

    window.addEventListener('llsa_data_changed', handleDataChange);
    window.addEventListener('llsa_auth_changed', handleAuthChange);
    window.addEventListener('storage', handleDataChange);

    return () => {
      window.removeEventListener('llsa_data_changed', handleDataChange);
      window.removeEventListener('llsa_auth_changed', handleAuthChange);
      window.removeEventListener('storage', handleDataChange);
    };
  }, []);

  const value: AcademyContextType = {
    settings,
    courses,
    allCourses,
    blogPosts,
    allBlogPosts,
    team,
    testimonials,
    gallery,
    certificates,
    applications,
    contactMessages,
    isAdmin,
    refreshData: loadData,
    updateSettings: (newSettings) => {
      FirebaseService.updateSettings(newSettings);
      loadData();
    },
    saveCourse: (course) => {
      const res = FirebaseService.saveCourse(course);
      loadData();
      return res;
    },
    deleteCourse: (id) => {
      const res = FirebaseService.deleteCourse(id);
      loadData();
      return res;
    },
    submitApplication: (appData) => {
      const res = FirebaseService.submitApplication(appData);
      loadData();
      return res;
    },
    updateApplicationStatus: (id, status, notes) => {
      FirebaseService.updateApplicationStatus(id, status, notes);
      loadData();
    },
    saveBlogPost: (post) => {
      const res = FirebaseService.saveBlogPost(post);
      loadData();
      return res;
    },
    deleteBlogPost: (id) => {
      const res = FirebaseService.deleteBlogPost(id);
      loadData();
      return res;
    },
    saveTeamMember: (m) => {
      const res = FirebaseService.saveTeamMember(m);
      loadData();
      return res;
    },
    deleteTeamMember: (id) => {
      const res = FirebaseService.deleteTeamMember(id);
      loadData();
      return res;
    },
    saveTestimonial: (t) => {
      const res = FirebaseService.saveTestimonial(t);
      loadData();
      return res;
    },
    deleteTestimonial: (id) => {
      const res = FirebaseService.deleteTestimonial(id);
      loadData();
      return res;
    },
    saveGalleryItem: (g) => {
      const res = FirebaseService.saveGalleryItem(g);
      loadData();
      return res;
    },
    deleteGalleryItem: (id) => {
      const res = FirebaseService.deleteGalleryItem(id);
      loadData();
      return res;
    },
    saveCertificate: (c) => {
      const res = FirebaseService.saveCertificate(c);
      loadData();
      return res;
    },
    deleteCertificate: (id) => {
      const res = FirebaseService.deleteCertificate(id);
      loadData();
      return res;
    },
    verifyCertificate: (certNumber) => {
      return FirebaseService.verifyCertificate(certNumber);
    },
    submitContact: (msg) => {
      const res = FirebaseService.submitContactMessage(msg);
      loadData();
      return res;
    },
    markContactRead: (id) => {
      FirebaseService.markContactRead(id);
      loadData();
    },
    adminLogin: (pwd) => {
      const res = FirebaseService.adminLogin(pwd);
      setIsAdmin(res);
      return res;
    },
    adminLogout: () => {
      FirebaseService.adminLogout();
      setIsAdmin(false);
    },
    resetAllData: () => {
      FirebaseService.resetAllData();
      loadData();
    }
  };

  return <AcademyContext.Provider value={value}>{children}</AcademyContext.Provider>;
};

export const useAcademy = () => {
  const context = useContext(AcademyContext);
  if (!context) {
    throw new Error('useAcademy must be used within an AcademyProvider');
  }
  return context;
};
