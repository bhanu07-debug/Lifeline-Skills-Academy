export interface CourseModule {
  moduleTitle: string;
  hours?: string;
  topics: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: 'Nursing & Care' | 'Clinical Skills' | 'Emergency & First Aid' | 'Diagnostic & Pharmacy';
  duration: string;
  eligibility: string;
  fee: string;
  location: string;
  intakeSchedule: string;
  syllabus: CourseModule[];
  learningOutcomes: string[];
  careerOpportunities: string[];
  whoShouldJoin: string[];
  benefits: string[];
  faqs: CourseFAQ[];
  published: boolean;
  featured: boolean;
  themeColor: 'blue' | 'teal' | 'emerald' | 'cyan';
}

export type ApplicationStatus = 'New' | 'Reviewing' | 'Contacted' | 'Accepted' | 'Rejected' | 'Completed';

export interface Application {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  gender: 'Female' | 'Male' | 'Other' | 'Prefer not to say';
  courseId: string;
  courseName: string;
  educationLevel: string;
  preferredIntake: string;
  message?: string;
  documentNotes?: string;
  status: ApplicationStatus;
  createdAt: string;
  adminNotes?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Health Tips' | 'Career Guidance' | 'Healthcare Education' | 'Academy News' | 'Clinical Skills';
  author: string;
  authorRole: string;
  publishedDate: string;
  readTime: string;
  published: boolean;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  qualification: string;
  bio: string;
  expertise: string[];
  department: string;
  order: number;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  year: string;
  quote: string;
  rating: number;
  currentWorkplace?: string;
  published: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Practical Labs' | 'Clinical Training' | 'Facilities' | 'Workshops' | 'Certification';
  description?: string;
  date?: string;
}

export interface CertificateRecord {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  completionDate: string;
  grade?: string;
  status: 'Verified' | 'Revoked';
  verifierNotes?: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Unread' | 'Read' | 'Replied';
}

export interface WebsiteSettings {
  academyName: string;
  tagline: string;
  registrationNumber: string;
  phone: string;
  alternatePhone: string;
  email: string;
  zohoMailStatus: string;
  address: string;
  landmark: string;
  city: string;
  openingHours: string;
  whatsappNumber: string;
  facebookUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
  noticeActive: boolean;
  noticeText: string;
}
