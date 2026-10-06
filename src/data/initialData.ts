import { Course, BlogPost, TeamMember, Testimonial, GalleryItem, CertificateRecord, WebsiteSettings, Application } from '../types';

export const initialSettings: WebsiteSettings = {
  academyName: 'Life Line Skills Academy Pvt. Ltd.',
  tagline: 'Healthcare Education & Clinical Skills Training in Nepal',
  registrationNumber: 'Reg. No: 289140/079/080 (Company Registrar Office, Nepal)',
  phone: '+977-1-4245890',
  alternatePhone: '+977-9851234567',
  email: 'info@lifelineskillsacademy.com.np',
  zohoMailStatus: 'Zoho Mail Active (Do not alter existing Zoho MX/SPF/DKIM DNS)',
  address: 'Bagbazar Marg, Ward No. 28, Kathmandu, Nepal',
  landmark: 'Near City Center Plaza & Pradarshani Marg Junction',
  city: 'Kathmandu, Bagmati Province, Nepal',
  openingHours: 'Sun – Fri: 7:00 AM – 6:00 PM | Sat: 8:00 AM – 2:00 PM',
  whatsappNumber: '+9779851234567',
  facebookUrl: 'https://facebook.com',
  instagramUrl: 'https://instagram.com',
  youtubeUrl: 'https://youtube.com',
  tiktokUrl: 'https://tiktok.com',
  noticeActive: true,
  noticeText: 'Admissions Open for Summer 2025 Batches: Caregiver, Lab Assistant, and Emergency BLS. Limited clinical seats per cohort.'
};

export const initialCourses: Course[] = [
  {
    id: 'course-caregiver',
    title: 'Professional Elderly & Patient Caregiver Training',
    slug: 'professional-elderly-patient-caregiver',
    shortDescription: 'Comprehensive practical training covering vital signs, geriatric care, bed patient management, and assisted daily living.',
    description: 'The Professional Elderly & Patient Caregiver program at Life Line Skills Academy prepares dedicated individuals for clinical bedside support and home healthcare. With hands-on simulation mannequins, trainees master patient transfer, hygiene, therapeutic communication, vital monitoring, and medication administration assistance according to modern healthcare safety protocols.',
    category: 'Nursing & Care',
    duration: '3 Months (240 Hours) + 1 Month Hospital Practicum',
    eligibility: 'Minimum SEE (Secondary Education Examination) or +2 passed (Any stream)',
    fee: 'NRs. 38,000 (Flexible 2-stage installment)',
    location: 'Life Line Simulation Lab, Kathmandu',
    intakeSchedule: '1st and 15th of Every Nepali Month',
    themeColor: 'teal',
    published: true,
    featured: true,
    learningOutcomes: [
      'Accurate measurement of vital signs (BP, Pulse, Temperature, SpO2, Blood Glucose)',
      'Aseptic bedmaking, bed-bath, pressure sore prevention and repositioning techniques',
      'Assisting patients with mobility, wheelchair transfers, and ambulation devices',
      'Feeding tube care, dietary support, and hydration monitoring',
      'Basic first aid response and emergency CPR protocols for adults and elderly'
    ],
    careerOpportunities: [
      'Hospital Bedside Patient Attendant',
      'Rehabilitation & Geriatric Care Assistant',
      'Private Home Healthcare Specialist in Nepal',
      'Foundational preparation for global care pathways (subject to destination country visa & language regulations)'
    ],
    whoShouldJoin: [
      'Individuals passionate about healthcare and humanitarian support',
      'High school (+2) graduates seeking immediate employable healthcare skills',
      'Caregivers seeking formal structured training and practical simulation hours'
    ],
    benefits: [
      '100% Practical laboratory sessions with clinical mannequins',
      'Supervised clinical hospital observation placement',
      'Verifiable Academy Completion Certificate & Skills Transcript',
      'Resume guidance and healthcare interview preparation'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Foundations of Healthcare & Medical Ethics',
        hours: '40 Hours',
        topics: [
          'Introduction to patient care, rights, and privacy',
          'Infection control and Universal Precautions (PPE usage)',
          'Medical terminology, vital signs and normal baseline metrics',
          'Documentation, handover communication and reporting'
        ]
      },
      {
        moduleTitle: 'Module 2: Bedside Clinical Care & Activities of Daily Living',
        hours: '70 Hours',
        topics: [
          'Assisted bathing, oral care, perineal hygiene, and grooming',
          'Repositioning, log-rolling, and decubitus ulcer (bed sores) prevention',
          'Safe patient transfer: bed to wheelchair, stretcher, and walker',
          'Nutrition delivery, dysphagia precautions, and catheter bag maintenance'
        ]
      },
      {
        moduleTitle: 'Module 3: Geriatric, Dementia & Specialized Care',
        hours: '60 Hours',
        topics: [
          'Age-related physiological changes and chronic illness management',
          'Support for Alzheimer, Parkinson, and dementia patients',
          'Assisting with oral and topical medication schedules',
          'Palliative comfort care and psychological support'
        ]
      },
      {
        moduleTitle: 'Module 4: Emergency Response & Hospital Practicum',
        hours: '70 Hours',
        topics: [
          'CPR (Cardiopulmonary Resuscitation) and choking intervention',
          'Fall prevention and post-fall clinical protocol',
          'Supervised hospital ward observation and bedside assistance'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need prior science background to join this course?',
        answer: 'No. The program is structured from foundational principles, making it accessible to graduates from humanities, management, education, or science streams.'
      },
      {
        question: 'Is practical hospital exposure included in the fee?',
        answer: 'Yes, hospital observation and practical simulation sessions in our Kathmandu laboratory are fully included in the curriculum.'
      },
      {
        question: 'Does the academy provide verifiable certificates?',
        answer: 'Yes, each successful student receives a tamper-resistant certificate with a unique Verification ID registered in our online portal.'
      }
    ]
  },
  {
    id: 'course-lab-assistant',
    title: 'Clinical Medical Laboratory Assistant (Skills & Refresher)',
    slug: 'clinical-medical-laboratory-assistant',
    shortDescription: 'Hands-on laboratory training in phlebotomy, specimen handling, microscopy, hematology, and biomedical safety.',
    description: 'Designed for aspiring diagnostic laboratory assistants and graduates seeking real clinical bench experience. Trainees learn standardized blood collection techniques, centrifuge operation, routine urine/stool analysis, basic hematological smears, and stringent quality control protocols under experienced medical technologists.',
    category: 'Diagnostic & Pharmacy',
    duration: '3.5 Months (280 Hours)',
    eligibility: '+2 Science or SEE with Science or Lab Technology students',
    fee: 'NRs. 42,000',
    location: 'Life Line Clinical Diagnostic Lab, Kathmandu',
    intakeSchedule: 'First Sunday of Every Month',
    themeColor: 'blue',
    published: true,
    featured: true,
    learningOutcomes: [
      'Mastery in venous blood draw (phlebotomy) using vacutainer and syringe systems',
      'Standardized handling, labeling, and centrifugation of blood and fluid specimens',
      'Performance of routine urinalysis (chemical dipstick & microscopic examination)',
      'Basic complete blood count smear preparation and Romanowsky staining',
      'Biomedical waste management according to Nepal healthcare environmental guidelines'
    ],
    careerOpportunities: [
      'Diagnostic Polyclinic Lab Assistant',
      'Hospital Phlebotomist & Specimen Intake Coordinator',
      'Blood Bank Assistant Technical Staff',
      'Research & Pathology Specimen Handler'
    ],
    whoShouldJoin: [
      'Students looking to build careers in clinical diagnostics',
      'Lab graduates wanting enhanced practical phlebotomy confidence',
      'Healthcare workers looking to refresh standardized clinical bench protocols'
    ],
    benefits: [
      'Individual microscope stations and phlebotomy practice arms',
      'Hands-on experience with automated analyzer interfaces',
      'Strict biohazard safety and autoclave training',
      'Direct interaction with certified lab technologists'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Phlebotomy & Specimen Management',
        hours: '70 Hours',
        topics: [
          'Vein anatomy, patient preparation, and consent',
          'Vacutainer color codes, anticoagulants, and order of draw',
          'Complications of venipuncture and pediatric/geriatric adjustments',
          'Sample transport, preservation, and rejection criteria'
        ]
      },
      {
        moduleTitle: 'Module 2: Hematology & Microscopy Fundamentals',
        hours: '80 Hours',
        topics: [
          'Binocular microscope calibration and maintenance',
          'Peripheral blood smear making, fixing, and Leishman staining',
          'Differential white cell identification and platelet estimation',
          'Erythrocyte sedimentation rate (ESR) and hemoglobin estimation'
        ]
      },
      {
        moduleTitle: 'Module 3: Clinical Chemistry & Parasitology Basics',
        hours: '70 Hours',
        topics: [
          'Urine physical, chemical, and microscopic examination (sediment analysis)',
          'Stool routine and occult blood testing (wet mount examination)',
          'Basic glucometer and semi-automated chemistry analyzer workflows',
          'Internal quality control and reagent expiration tracking'
        ]
      },
      {
        moduleTitle: 'Module 4: Biosafety & Quality Management',
        hours: '60 Hours',
        topics: [
          'Chemical spill response and sharp injury protocols',
          'Color-coded biomedical waste segregation and autoclave sterilization',
          'Laboratory information management and reporting accuracy'
        ]
      }
    ],
    faqs: [
      {
        question: 'Will I practice phlebotomy on real equipment?',
        answer: 'Yes. Trainees practice extensively on anatomical phlebotomy training arms with artificial venous blood flow before advancing to supervised clinical draws.'
      },
      {
        question: 'What are the career options in Kathmandu or outside?',
        answer: 'Graduates work in polyclinics, private hospitals, community pathology labs, and diagnostic screening camps across Nepal.'
      }
    ]
  },
  {
    id: 'course-first-aid-bls',
    title: 'Basic Life Support (BLS) & Emergency First Aid',
    slug: 'basic-life-support-emergency-first-aid',
    shortDescription: 'High-yield CPR, AED, airway management, and trauma response skills for healthcare workers and community leaders.',
    description: 'Accidents, cardiac arrests, and trauma situations require decisive action within the first critical minutes. Our BLS & First Aid course trains candidates in high-quality chest compressions, bag-valve mask ventilation, automated external defibrillator (AED) usage, choking management, fracture splinting, and severe bleed control.',
    category: 'Emergency & First Aid',
    duration: '3 Days Intensive (24 Hours)',
    eligibility: 'Open to all (Healthcare professionals, nursing students, teachers, guides, community workers)',
    fee: 'NRs. 6,500',
    location: 'Life Line Auditorium & Simulation Hall',
    intakeSchedule: 'Every Friday – Sunday Batch',
    themeColor: 'blue',
    published: true,
    featured: true,
    learningOutcomes: [
      'High-performance adult, child, and infant Cardiopulmonary Resuscitation (CPR)',
      'Safe and swift operation of Automated External Defibrillator (AED)',
      'Relief of foreign-body airway obstruction (choking) in conscious and unconscious victims',
      'Direct pressure, tourniquet application, and wound packing for severe hemorrhages',
      'Splinting, cervical spine stabilization, and emergency casualty movement'
    ],
    careerOpportunities: [
      'Essential credential for nursing, clinical, and paramedic students',
      'Designated First Aid Officer in corporate offices, schools, and trekking agencies',
      'Community health volunteers and emergency disaster rescue teams'
    ],
    whoShouldJoin: [
      'Nursing and healthcare students needing BLS certification',
      'Trekking guides and adventure tourism leaders in Nepal',
      'Workplace safety coordinators and responsible citizens'
    ],
    benefits: [
      'AHA-aligned chest compression feedback mannequins',
      'Simulated training with live AED audio prompts',
      'Instant digital & printed verifiable BLS card',
      'Valid for 2 years with refresher eligibility'
    ],
    syllabus: [
      {
        moduleTitle: 'Day 1: Adult Resuscitation & AED Protocol',
        hours: '8 Hours',
        topics: [
          'Scene safety, primary assessment, and activating emergency services (102)',
          'Chest compression mechanics, depth, recoil, and ventilation ratios (30:2)',
          'Two-rescuer team dynamics and AED pad placement and safety',
          'Special resuscitation scenarios: drowning, hypothermia, electrocution'
        ]
      },
      {
        moduleTitle: 'Day 2: Pediatric CPR, Choking & Airway Management',
        hours: '8 Hours',
        topics: [
          'Infant and child cardiac arrest differences and compression rates',
          'Heimlich maneuver (abdominal thrusts) and back blows for infants',
          'Pocket mask and bag-valve-mask (BVM) ventilations with oxygen',
          'Recovery position and respiratory depression recognition'
        ]
      },
      {
        moduleTitle: 'Day 3: Trauma, Hemorrhage Control & Mass Casualty Triage',
        hours: '8 Hours',
        topics: [
          'Direct pressure dressings, pressure points, and commercial tourniquets',
          'Burn management: thermal, chemical, and electrical injuries',
          'Musculoskeletal injuries: improvised splints, slings, and fracture care',
          'Practical Mega-Code OSCE examination'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is the certificate verifiable online?',
        answer: 'Yes! Every participant receives a certificate with a unique Verification ID accessible via our website portal.'
      },
      {
        question: 'Do we get hands-on time with mannequins?',
        answer: 'Yes, each participant spends over 70% of class time actively practicing on calibrated compression mannequins.'
      }
    ]
  },
  {
    id: 'course-dental-assistant',
    title: 'Dental Chairside Assistant & Clinical Practice',
    slug: 'dental-chairside-assistant-clinical-practice',
    shortDescription: 'Master four-handed dentistry, dental chair operations, sterilizer autoclaves, and patient chairside coordination.',
    description: 'A dedicated clinical program designed to prepare trained chairside assistants for modern dental clinics and hospitals in Nepal. Learn instrument transfer, suction control, dental restorative materials, tray setup for endodontics and extractions, infection control, and digital appointment workflow.',
    category: 'Clinical Skills',
    duration: '2.5 Months (200 Hours)',
    eligibility: 'Minimum SEE passed (High school)',
    fee: 'NRs. 32,000',
    location: 'Life Line Dental Skills Suite, Kathmandu',
    intakeSchedule: 'Mid-Month Intakes',
    themeColor: 'teal',
    published: true,
    featured: false,
    learningOutcomes: [
      'Four-handed dentistry chairside positioning and ergonomic instrument transfer',
      'Class B autoclave sterilization, chemical disinfection, and spore testing',
      'Mixing dental alginate, glass ionomer cement, and temporary fillings',
      'Assisting during tooth extraction, scaling, root canal, and crown procedures',
      'Digital patient records, intraoral photo assistance, and post-op advice'
    ],
    careerOpportunities: [
      'Chairside Dental Assistant in Dental Clinics & Hospitals',
      'Dental Hygiene & Sterilization Coordinator',
      'Dental Clinic Reception & Materials Coordinator'
    ],
    whoShouldJoin: [
      'Individuals seeking clean, high-demand dental practice employment',
      'Clinic assistants seeking systematic formal dental protocol certification'
    ],
    benefits: [
      'Fully equipped clinical dental unit for simulator practice',
      'Complete orientation on all standard dental burs and handpieces',
      'High placement demand in expanding Kathmandu dental clinics'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Dental Anatomy & Infection Prevention',
        hours: '50 Hours',
        topics: [
          'Tooth numbering systems, oral cavity structures, and tooth eruption',
          'Dental operatory barriers, surface disinfection, and water line flushing',
          'Instrument cleaning, ultrasonic bath, and autoclave cycles'
        ]
      },
      {
        moduleTitle: 'Module 2: Dental Instruments & Four-Handed Assistance',
        hours: '70 Hours',
        topics: [
          'Diagnostic kit, restorative hand instruments, and ultrasonic scaler tips',
          'High-volume evacuation (HVE) and saliva ejector techniques',
          'Instrument grasps, palm grasp, and finger rest stability',
          'Rubber dam application and moisture control'
        ]
      },
      {
        moduleTitle: 'Module 3: Restorative, Endo & Surgical Assistance',
        hours: '80 Hours',
        topics: [
          'Preparation of composite resin, etching, bonding, and curing lights',
          'Endodontic files, paper points, and gutta-percha handling',
          'Surgical forceps, elevators, and suture removal assistance',
          'Post-extraction care instructions and emergency fainting response'
        ]
      }
    ],
    faqs: [
      {
        question: 'Are dental clinics actively hiring trained assistants in Nepal?',
        answer: 'Yes, modern dental clinics in Kathmandu, Pokhara, Chitwan, and other hubs consistently look for trained assistants who understand sterilization and instrument handover.'
      }
    ]
  },
  {
    id: 'course-pharmacy-assistant',
    title: 'Community & Hospital Pharmacy Assistant Skills',
    slug: 'community-hospital-pharmacy-assistant',
    shortDescription: 'Practical training in prescription reading, inventory management, cold-chain storage, and patient medication guidance.',
    description: 'This course provides foundational practical competency for pharmacy assistants working alongside registered pharmacists. Covers essential drug classifications, prescription validation, drug safety warnings, storage temperatures, OTC guidance, and computerized billing systems.',
    category: 'Diagnostic & Pharmacy',
    duration: '3 Months (220 Hours)',
    eligibility: '+2 (Any Stream, Science or Management preferred) or SEE with experience',
    fee: 'NRs. 28,000',
    location: 'Life Line Pharmacy Simulation Unit, Kathmandu',
    intakeSchedule: 'Monthly on the 10th',
    themeColor: 'cyan',
    published: true,
    featured: false,
    learningOutcomes: [
      'Deciphering doctor handwriting, dosage calculations, and prescription verification',
      'Proper storage of temperature-sensitive drugs (insulin, vaccines) and cold-chain logs',
      'Generic vs. brand drug correlation across common chronic disease categories',
      'Stock inventory control, FEFO (First-Expired, First-Out), and batch tracking',
      'Empathetic patient counseling on medication timing and hydration'
    ],
    careerOpportunities: [
      'Hospital Inpatient / Outpatient Pharmacy Assistant',
      'Community Retail Pharmacy Coordinator',
      'Pharmaceutical Wholesale Inventory Clerk'
    ],
    whoShouldJoin: [
      'High school graduates desiring retail healthcare careers',
      'Staff working in retail pharmacies wanting systematic pharmacological competence'
    ],
    benefits: [
      'Real dummy prescription analysis and software billing practice',
      'Comprehensive reference guide of standard Nepal-registered drugs',
      'Practical counseling scenarios'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Pharmacology Fundamentals & Classifications',
        hours: '60 Hours',
        topics: [
          'Dosage forms: tablets, syrups, capsules, inhalers, and injectables',
          'Antimicrobial agents, analgesics, anti-hypertensives, and anti-diabetics',
          'Adverse drug reactions and drug-drug interactions basics'
        ]
      },
      {
        moduleTitle: 'Module 2: Prescription Management & Billing',
        hours: '80 Hours',
        topics: [
          'Components of a legal medical prescription',
          'Pediatric and adult dose calculations and metric unit conversions',
          'Pharmacy software, barcode scanning, and invoice printing'
        ]
      },
      {
        moduleTitle: 'Module 3: Storage, Regulatory Ethics & Counseling',
        hours: '80 Hours',
        topics: [
          'Narcotic and psychotropic drug record keeping under Nepal regulations',
          'Cold chain monitoring and emergency power backup protocol',
          'Patient privacy, OTC counseling limits, and referral protocols'
        ]
      }
    ],
    faqs: [
      {
        question: 'Does this replace the Pharmacy Council License?',
        answer: 'No. This is a skills training program for pharmacy assistants and support staff. Pharmacist and Assistant Pharmacist licenses are regulated by the Nepal Pharmacy Council through university/diploma programs.'
      }
    ]
  },
  {
    id: 'course-ha-refresher',
    title: 'Health Assistant (HA) Clinical Skills & OSCE Refresher',
    slug: 'health-assistant-ha-clinical-skills-refresher',
    shortDescription: 'Intensive clinical OSCE stations, minor surgical suturing, diagnostic decision making, and rural clinic workflows.',
    description: 'Designed specifically for Health Assistant (HA) diploma graduates preparing for licensing OSCE examinations or preparing for independent rural primary healthcare clinic postings. Hands-on modules include wound suturing, catheterization, ECG interpretation, pediatric dehydration staging, and protocol-based clinical diagnosis.',
    category: 'Clinical Skills',
    duration: '2 Months (160 Hours)',
    eligibility: 'Diploma in General Medicine (HA) completed or in final exam awaiting results',
    fee: 'NRs. 24,000',
    location: 'Life Line Clinical Simulation Suite',
    intakeSchedule: 'Quarterly Batches',
    themeColor: 'blue',
    published: true,
    featured: true,
    learningOutcomes: [
      'Proficiency in wound debridement, local anesthesia infiltration, and simple interrupted suturing',
      'Urinary catheter insertion and nasogastric tube placement on anatomical models',
      'Systematic 12-lead ECG lead placement and core rhythm abnormality recognition',
      'Management of acute emergencies: anaphylaxis, status asthmaticus, organophosphate poisoning',
      'Confident performance across standard NHPC OSCE stations'
    ],
    careerOpportunities: [
      'Primary Healthcare Center (PHC) & Health Post clinical readiness',
      'NGO / INGO Community Health Project Clinician',
      'Private Polyclinic Emergency Triage In-Charge'
    ],
    whoShouldJoin: [
      'Health Assistant graduates preparing for licensing exams',
      'HA professionals preparing for Lok Sewa practicals or rural service contracts'
    ],
    benefits: [
      'Suture pads and genuine surgical instrument sets for each trainee',
      'Simulated OSCE stations with peer evaluation and checklist scoring',
      'Mentorship by senior medical officers and experienced clinicians'
    ],
    syllabus: [
      {
        moduleTitle: 'Module 1: Minor Surgical Procedures & Wound Management',
        hours: '50 Hours',
        topics: [
          'Aseptic surgical scrubbing, gowning, and gloving',
          'Lidocaine 2% infiltration techniques and toxic dose limits',
          'Suturing techniques: simple, mattress, subcuticular on simulation pads',
          'Abscess drainage, dressing changes, and tetanus prophylaxis'
        ]
      },
      {
        moduleTitle: 'Module 2: Emergency Clinical Interventions',
        hours: '60 Hours',
        topics: [
          'Male and female Foley catheterization with sterile draping',
          'Nasogastric tube insertion, gastric lavage, and aspiration prevention',
          'Oxygen delivery devices, nebulization, and IV cannula placement',
          'Snake bite, poisoning, and acute trauma initial stabilization'
        ]
      },
      {
        moduleTitle: 'Module 3: Diagnostic OSCE & Simulation Stations',
        hours: '50 Hours',
        topics: [
          'Focused cardiovascular, respiratory, abdominal, and neurological exams',
          '12-lead ECG analysis and common arrhythmias',
          'Standardized OSCE station mock runs with timed checklists'
        ]
      }
    ],
    faqs: [
      {
        question: 'Who conducts the practical classes?',
        answer: 'Experienced Medical Officers (MBBS/MD) and senior licensed Health Assistants with extensive rural and hospital clinical backgrounds.'
      }
    ]
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Pooja Shrestha',
    course: 'Professional Elderly & Patient Caregiver',
    year: 'Batch 2024',
    rating: 5,
    quote: 'The simulation lab at Life Line gave me real confidence. Moving bedbound patients and checking vital signs on calibrated mannequins felt just like being in a hospital. Today I work with full clinical confidence.',
    currentWorkplace: 'Patient Care Specialist, Lalitpur Care Home',
    published: true
  },
  {
    id: 'test-2',
    name: 'Bikash Adhikari',
    course: 'Clinical Medical Laboratory Assistant',
    year: 'Batch 2024',
    rating: 5,
    quote: 'Phlebotomy always made me nervous until I joined Life Line. Practicing on simulation arms with vacuum collection tubes gave me the precision I needed. The instructors are supportive and patient.',
    currentWorkplace: 'Diagnostic Lab Assistant, Kathmandu',
    published: true
  },
  {
    id: 'test-3',
    name: 'Rohan Lama',
    course: 'Basic Life Support (BLS) & Emergency First Aid',
    year: 'Batch 2025',
    rating: 5,
    quote: 'Every healthcare worker in Nepal should take this BLS training. The CPR feedback mannequins and live AED trainers made the learning unforgettable. The online certificate verification is seamless.',
    currentWorkplace: 'Clinical Field Assistant, Kavre Project',
    published: true
  },
  {
    id: 'test-4',
    name: 'Manila Gurung',
    course: 'Dental Chairside Assistant Training',
    year: 'Batch 2024',
    rating: 5,
    quote: 'Within three weeks of finishing the course, I secured a position in a reputed dental hospital in Pokhara. The autoclave and four-handed dentistry drills matched clinic expectations exactly.',
    currentWorkplace: 'Dental Clinic Coordinator, Pokhara',
    published: true
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Essential Vital Signs Every Caregiver Must Master in Clinical Practice',
    slug: 'essential-vital-signs-caregiver-master-clinical-practice',
    excerpt: 'A comprehensive guide on measuring blood pressure, pulse, oxygen saturation, and respiratory rate accurately to safeguard patient health.',
    content: `
### Why Accurate Vital Signs Matter
Vital signs provide an objective window into the human body's autonomic functioning. For healthcare assistants and patient caregivers, monitoring vital signs is the first line of defense against clinical deterioration.

### 1. Blood Pressure (BP)
Blood pressure fluctuates with physical activity, pain, stress, and medications.
- **Normal Range**: Typically 90/60 mmHg to 120/80 mmHg in healthy resting adults.
- **Clinical Best Practice**: Ensure the patient is seated comfortably with feet flat on the floor for 5 minutes prior to measurement. The cuff bladder must encircle at least 80% of the upper arm.

### 2. Radial Pulse & Heart Rate
- **Normal Range**: 60 to 100 beats per minute.
- **Rhythm & Volume**: Beyond counting the number of beats, note whether the pulse is regular or irregular, strong or thready.

### 3. Respiratory Rate (RR)
- **Normal Range**: 12 to 20 breaths per minute.
- **Pro Tip**: Count respirations while pretending to check the radial pulse so the patient does not alter their natural breathing pattern.

### 4. Oxygen Saturation (SpO2)
Pulse oximetry reflects peripheral blood oxygenation.
- **Normal Range**: 95% to 100% on room air.
- **Caution**: Cold extremities or nail polish can yield falsely low readings. Warm the fingers before recording.

### Conclusion
At Life Line Skills Academy, students practice vital measurement dozens of times under clinical supervision, building muscle memory that saves lives.
    `,
    category: 'Health Tips',
    author: 'Nima Sherpa, BN',
    authorRole: 'Clinical Skills & Nursing Lead',
    publishedDate: 'January 28, 2025',
    readTime: '5 min read',
    published: true,
    tags: ['Vital Signs', 'Patient Care', 'Clinical Skills', 'Healthcare Nepal']
  },
  {
    id: 'blog-2',
    title: 'Career Pathways in Healthcare Skills & Caregiving: Nepal and Beyond',
    slug: 'career-pathways-healthcare-skills-caregiving-nepal',
    excerpt: 'Understanding realistic opportunities in hospitals, rehabilitation centers, and international care sectors with verified qualifications.',
    content: `
### The Growing Demand for Skilled Healthcare Support Staff
Healthcare systems around the world are facing structural shortages of compassionate, well-trained bedside professionals. Nepal is no exception: with expanding private hospitals, specialized nursing homes, and home-care agencies, certified support personnel are in high demand.

### Opportunities Inside Nepal
1. **Private Hospitals & Polyclinics**: Assisting registered nurses in emergency wards, post-operative units, and outpatient clinics.
2. **Elderly Care Facilities & Daycares**: Providing daily companionship, medication reminders, and mobility support.
3. **Home Healthcare Services**: Delivering specialized bedside care for patients recovering from strokes, fractures, or chronic conditions.

### International Considerations
Many young Nepalis aspire to work in global healthcare markets. It is crucial to understand that:
- **Qualifications & Documentation**: Every destination country (Japan, UK, Middle East, Europe) maintains distinct visa, language, and licensing criteria.
- **No False Guarantees**: Reputable institutions do not promise foreign job visas. Instead, we focus on providing verified practical competence, logbook hours, and verifiable transcripts that strengthen your official portfolio.

### Building Your Foundation
Start with solid practical skills, ethical bedside communication, and continuous learning.
    `,
    category: 'Career Guidance',
    author: 'Pratima Adhikari, BPH',
    authorRole: 'Academic & Career Counselor',
    publishedDate: 'February 12, 2025',
    readTime: '6 min read',
    published: true,
    tags: ['Healthcare Careers', 'Caregiving Nepal', 'Vocational Skills', 'Student Advice']
  },
  {
    id: 'blog-3',
    title: 'Safe Phlebotomy: How to Prevent Hemolysis and Hematomas',
    slug: 'safe-phlebotomy-prevent-hemolysis-hematomas',
    excerpt: 'Practical diagnostic laboratory tips for clean venipuncture, correct needle angles, and proper tube handling.',
    content: `
### The Art and Science of Venipuncture
A blood sample is only as good as the technique used to collect it. Hemolyzed specimens lead to rejected tests, delayed diagnosis, and repeated patient discomfort.

### Key Factors in Preventing Specimen Hemolysis
1. **Allow Alcohol to Dry Fully**: Wet alcohol causes chemical lysis of red blood cells and stings the patient. Wait 30 seconds for the antiseptic to evaporate.
2. **Avoid Excessive Tourniquet Time**: Release the tourniquet within 60 seconds of application. Prolonged constriction causes hemoconcentration.
3. **Gentle Inversion**: Blood tubes containing anticoagulants (EDTA, Heparin, Sodium Citrate) must be gently inverted 5 to 8 times—never vigorously shaken.
4. **Choose Appropriate Gauge**: Standard adult draws use 21G to 22G needles. Excessively small needles can shear erythrocyte membranes.

### Preventing Patient Hematomas
- Maintain a shallow insertion angle between 15° and 30°.
- Release the tourniquet before withdrawing the needle.
- Instruct the patient to apply direct firm pressure with gauze for 3 to 5 minutes without bending the elbow.

Learn more hands-on diagnostic laboratory techniques in our Kathmandu laboratory suites.
    `,
    category: 'Clinical Skills',
    author: 'Ramesh KC, BMLT',
    authorRole: 'Laboratory Training Coordinator',
    publishedDate: 'March 04, 2025',
    readTime: '4 min read',
    published: true,
    tags: ['Phlebotomy', 'Lab Assistant', 'Diagnostic Skills', 'Biomedical Safety']
  }
];

export const initialTeam: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dr. Sunil K. Sharma, MD',
    position: 'Medical Advisory Director',
    qualification: 'MBBS, MD (Internal Medicine), Registered Clinician',
    bio: 'Dr. Sharma oversees the medical accuracy of our curriculum, clinical safety standards, and ensures practical simulation modules reflect modern hospital guidelines.',
    expertise: ['Clinical Medicine', 'Emergency Protocols', 'Healthcare Ethics', 'Curriculum Standards'],
    department: 'Medical Advisory',
    order: 1
  },
  {
    id: 'team-2',
    name: 'Nima Sherpa, BN',
    position: 'Lead Clinical Skills & Nursing Simulation Instructor',
    qualification: 'Bachelor of Nursing (BN), Palliative & Critical Care Experience',
    bio: 'With over 8 years of intensive hospital nursing and clinical instruction experience, Nima mentors students through bedside care, vital signs, and simulation scenarios.',
    expertise: ['Bedside Patient Care', 'Geriatric Nursing', 'Infection Control', 'OSCE Training'],
    department: 'Nursing & Simulation',
    order: 2
  },
  {
    id: 'team-3',
    name: 'Ramesh KC, BMLT',
    position: 'Clinical Diagnostic Laboratory Coordinator',
    qualification: 'Bachelor of Medical Laboratory Technology (BMLT)',
    bio: 'Ramesh leads our diagnostic laboratory practicals, guiding students through sterile phlebotomy, centrifuge operation, smear staining, and lab safety protocols.',
    expertise: ['Phlebotomy Techniques', 'Hematology Smears', 'Urinalysis', 'Laboratory Biosafety'],
    department: 'Diagnostic Laboratory',
    order: 3
  },
  {
    id: 'team-4',
    name: 'Pratima Adhikari, BPH',
    position: 'Academic Coordinator & Student Counselor',
    qualification: 'Bachelor of Public Health (BPH)',
    bio: 'Pratima supports prospective and enrolled students through course orientation, academic schedules, hospital observation placement, and verification records.',
    expertise: ['Public Health Training', 'Student Mentorship', 'Career Guidance', 'Institutional Operations'],
    department: 'Academic Administration',
    order: 4
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Advanced Nursing Simulation Lab',
    category: 'Practical Labs',
    description: 'Students practicing patient positioning, bed making, and vital signs monitoring on calibrated simulation mannequins.',
    date: 'February 2025'
  },
  {
    id: 'gal-2',
    title: 'Phlebotomy & Specimen Collection Training',
    category: 'Clinical Training',
    description: 'Hands-on practice with vacutainer blood collection systems and anatomical venipuncture arm simulators.',
    date: 'January 2025'
  },
  {
    id: 'gal-3',
    title: 'Basic Life Support (BLS) CPR Drills',
    category: 'Workshops',
    description: 'Emergency response drills with automated external defibrillator (AED) trainers and chest compression monitors.',
    date: 'March 2025'
  },
  {
    id: 'gal-4',
    title: 'Dental Chairside Equipment Orientation',
    category: 'Facilities',
    description: 'Dental unit controls, high-volume evacuation, and four-handed instrument handover techniques in action.',
    date: 'December 2024'
  },
  {
    id: 'gal-5',
    title: 'Clinical Laboratory Microscopy Session',
    category: 'Practical Labs',
    description: 'Students examining prepared blood smears and biological specimens under binocular high-power microscopes.',
    date: 'February 2025'
  },
  {
    id: 'gal-6',
    title: 'Graduation & Certificate Award Ceremony',
    category: 'Certification',
    description: 'Caregiver and lab assistant cohort celebrating successful completion of hospital practicums.',
    date: 'January 2025'
  }
];

export const initialCertificates: CertificateRecord[] = [
  {
    id: 'cert-1',
    certificateNumber: 'LLSA-2025-0891',
    studentName: 'Sunita Tamang',
    courseName: 'Professional Elderly & Patient Caregiver Training',
    issueDate: '2025-02-14',
    completionDate: '2025-02-10',
    grade: 'Distinction (92% Practical Assessment)',
    status: 'Verified',
    verifierNotes: 'Verified completion of 240 theoretical/simulation hours and 1-month clinical observation.'
  },
  {
    id: 'cert-2',
    certificateNumber: 'LLSA-2024-0412',
    studentName: 'Bikash Sharma',
    courseName: 'Basic Life Support (BLS) & Emergency First Aid',
    issueDate: '2024-11-20',
    completionDate: '2024-11-19',
    grade: 'Passed with Honors (100% OSCE)',
    status: 'Verified',
    verifierNotes: 'Demonstrated high-performance CPR and AED defibrillation competence.'
  },
  {
    id: 'cert-3',
    certificateNumber: 'LLSA-2025-1034',
    studentName: 'Anjali Thapa',
    courseName: 'Clinical Medical Laboratory Assistant (Skills & Refresher)',
    issueDate: '2025-01-10',
    completionDate: '2025-01-05',
    grade: 'First Division (88% Practical Exam)',
    status: 'Verified',
    verifierNotes: 'Completed standardized phlebotomy, urinalysis, and biosafety modules.'
  }
];

export const initialApplications: Application[] = [
  {
    id: 'app-1',
    referenceNumber: 'LLSA-APP-2025-901',
    fullName: 'Kamala Karki',
    email: 'kamala.karki@example.com',
    phone: '9841234890',
    address: 'Koteshwor-32, Kathmandu',
    dateOfBirth: '2002-05-18',
    gender: 'Female',
    courseId: 'course-caregiver',
    courseName: 'Professional Elderly & Patient Caregiver Training',
    educationLevel: '+2 Management Completed',
    preferredIntake: 'Immediate Next Intake (15th of the month)',
    message: 'Interested in working as a caregiver in hospitals. Please send batch timing details.',
    status: 'Reviewing',
    createdAt: '2025-03-01T10:30:00Z',
    adminNotes: 'Contacted over phone on March 2nd. Scheduled laboratory orientation visit.'
  },
  {
    id: 'app-2',
    referenceNumber: 'LLSA-APP-2025-902',
    fullName: 'Pradip Rai',
    email: 'pradip.rai@example.com',
    phone: '9860123984',
    address: 'Dharan-15, Sunsari (Relocating to Kathmandu)',
    dateOfBirth: '2001-08-22',
    gender: 'Male',
    courseId: 'course-lab-assistant',
    courseName: 'Clinical Medical Laboratory Assistant (Skills & Refresher)',
    educationLevel: '+2 Science Completed',
    preferredIntake: 'Upcoming Month Morning Batch',
    message: 'Looking to gain practical phlebotomy and diagnostic lab experience before applying for hospital jobs.',
    status: 'New',
    createdAt: '2025-03-05T14:15:00Z',
    adminNotes: ''
  }
];
