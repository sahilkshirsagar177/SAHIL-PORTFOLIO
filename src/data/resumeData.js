export const resumeData = {
  personal: {
    name: "Sahil Kshirsagar",
    title: "Computer Science Graduate | Aspiring Software Engineer",
    subtitle: "MERN Stack • Python • Data Structures & Algorithms",
    location: "Pune, Maharashtra, India",
    phone: "+91 9049090996",
    email: "sahilkshirsagar456@gmail.com",
    linkedin: "https://www.linkedin.com/in/sahil-kshirsagar",
    github: "https://github.com",
    summary:
      "Computer Science graduate (B.Sc.) currently pursuing a Master's in Computer Application (SPPU), with a strong foundation in Java, Python, C++, SQL, and Data Structures & Algorithms. Proven project experience building a productivity SaaS platform from scratch and performing Python-based data analysis. Combines technical problem-solving with high-impact communication skills developed through client-facing business roles. Actively seeking a Trainee Software Engineer / Full-Stack Developer role to build scalable, high-performance software as part of a forward-thinking engineering team.",
    status: "Open for Opportunities",
    roleTarget: "Trainee Software Engineer / Full-Stack Developer",
    stats: [
      { label: "AIR-3", detail: "All India Thal Sainik Camp (NCC)", icon: "Trophy" },
      { label: "7.05 GPA", detail: "B.Sc. in Computer Science", icon: "GraduationCap" },
      { label: "MCA Scholar", detail: "Modern College of Engg (SPPU)", icon: "BookOpen" },
      { label: "VP Rotaract", detail: "Club of Nagpur United", icon: "Users" },
    ],
  },

  skills: {
    categories: [
      {
        name: "Full-Stack & Web Development",
        icon: "Globe",
        items: [
          { name: "React.js", level: 85, tag: "Frontend" },
          { name: "Node.js", level: 80, tag: "Backend" },
          { name: "Express.js", level: 80, tag: "Backend" },
          { name: "MongoDB", level: 75, tag: "Database" },
          { name: "HTML5 / CSS3", level: 92, tag: "Markup" },
          { name: "Bootstrap / Tailwind CSS", level: 88, tag: "Styling" },
          { name: "UI/UX & Prototyping", level: 82, tag: "Design" },
        ],
      },
      {
        name: "Programming Languages & Core CS",
        icon: "Code2",
        items: [
          { name: "Python", level: 85, tag: "Language" },
          { name: "Core & Advance Java", level: 80, tag: "Language" },
          { name: "C++", level: 75, tag: "Language" },
          { name: "SQL / Relational DB", level: 82, tag: "Database" },
          { name: "Data Structures & Algorithms (DSA)", level: 80, tag: "Core CS" },
          { name: "SDLC & Agile Principles", level: 85, tag: "Engineering" },
        ],
      },
      {
        name: "Data, Analytics & AI Tools",
        icon: "Cpu",
        items: [
          { name: "Python Data Analysis", level: 85, tag: "Data" },
          { name: "Data Cleaning & EDA", level: 82, tag: "Data" },
          { name: "Data Visualization (Matplotlib/Seaborn)", level: 80, tag: "Visuals" },
          { name: "Generative AI Tools & LLM APIs", level: 78, tag: "AI" },
          { name: "Machine Learning Foundations", level: 70, tag: "Learning" },
        ],
      },
      {
        name: "Professional & Soft Skills",
        icon: "Sparkles",
        items: [
          { name: "Problem Solving & Analytical Thinking", level: 90, tag: "Aptitude" },
          { name: "Stakeholder Communication", level: 92, tag: "Client-facing" },
          { name: "Leadership & Team Management", level: 88, tag: "Leadership" },
          { name: "Strategic Lead Generation & Sales", level: 85, tag: "Business" },
        ],
      },
    ],
    spokenLanguages: [
      { language: "English", proficiency: "Professional Working Proficiency" },
      { language: "Hindi", proficiency: "Full Professional / Native" },
      { language: "Marathi", proficiency: "Native / Mother Tongue" },
    ],
    currentlyLearning: [
      {
        title: "Machine Learning & AI-Driven Development",
        desc: "Building practical foundations of ML models and integrating Generative AI pipelines for smart automation and data analytics.",
        progress: 75,
        icon: "BrainCircuit",
      },
      {
        title: "Advanced DSA & Coding Assessments",
        desc: "Practicing algorithms, tree/graph traversals, dynamic programming, and logical reasoning for high-caliber technical screening rounds.",
        progress: 82,
        icon: "Terminal",
      },
    ],
  },

  projects: [
    {
      id: "purple-invigi-date",
      title: "Purple – Invigi-Date",
      subtitle: "Full-Stack Productivity SaaS & Accountability Platform",
      timeline: "Mar '26 – Present",
      organization: "Modern College of Engineering, Pune",
      type: "Featured Full-Stack Web Application",
      featured: true,
      category: "Full-Stack Web App",
      description:
        "Designing and developing a high-impact productivity SaaS web platform from scratch to help users conquer daily task goals. Features collaborative task tracking, peer monitoring, and an algorithmic reward system engineered to drive sustained user accountability and habit consistency.",
      highlights: [
        "Architected modular micro-features for multi-user task management and shared milestone progress.",
        "Engineered an automated reward & penalty metric system to boost daily task completion rates.",
        "Designed a responsive, distraction-free glassmorphic UI with real-time feedback loops.",
        "Integrated secure authentication, role access, and stateful dashboard analytics.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs", "JWT Auth"],
      liveDemoAvailable: true,
      githubUrl: "https://github.com",
      demoPreviewType: "task-tracker",
    },
    {
      id: "netflix-analysis",
      title: "Netflix Content Trends & Regional Analysis",
      subtitle: "Python Data Analysis & Exploratory Visualization System",
      timeline: "Dec '25",
      organization: "Modern College of Engineering, Pune",
      type: "Data Science & Analytics",
      featured: true,
      category: "Data & AI",
      description:
        "Comprehensive Exploratory Data Analysis (EDA) on Netflix's global catalog. Applied robust Python data wrangling, cleaning, and visualization techniques to uncover historical content release shifts, genre dominance, country-specific production volume, and audience rating distributions.",
      highlights: [
        "Processed and sanitized raw multi-attribute datasets handling missing values and unstructured genre tags.",
        "Derived statistical correlations between content release years, runtime, and global regional additions.",
        "Constructed interactive charts and visual dashboards highlighting market trends and international movie vs TV show ratios.",
        "Summarized actionable insights for streaming content strategy and international localization.",
      ],
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning", "Statistical EDA"],
      liveDemoAvailable: true,
      githubUrl: "https://github.com",
      demoPreviewType: "data-explorer",
    },
  ],

  experience: [
    {
      role: "Business Development Executive",
      company: "Henry Harvin Education",
      location: "Pune, Maharashtra, India",
      period: "May '25 – Sep '25",
      type: "Professional Experience",
      badge: "Revenue & Client Relations",
      achievements: [
        "Drove notable revenue growth by identifying high-potential new business opportunities and client acquisition pipelines.",
        "Built lasting corporate and professional relationships, executing strategic sales and outreach initiatives.",
        "Bridged technical and non-technical stakeholders to pitch educational software solutions and certifications.",
      ],
    },
    {
      role: "Lead Generation Associate",
      company: "Avenaa.co.in",
      location: "Nagpur, Maharashtra, India",
      period: "Sep '24 – Apr '25",
      type: "Professional Experience",
      badge: "Targeted Outreach & Growth",
      achievements: [
        "Identified, researched, and qualified potential B2B customers through systematic data-driven market outreach.",
        "Generated high-quality prospective sales leads, directly supporting revenue growth objectives.",
        "Optimized communication frameworks and CRM pipeline hygiene to improve conversion conversion rates.",
      ],
    },
    {
      role: "UI/UX Intern",
      company: "MastCore Digital Services",
      location: "Nagpur, Maharashtra, India",
      period: "Jan '24 – Apr '24",
      type: "Professional Experience",
      badge: "Design & Product UX",
      achievements: [
        "Assisted senior product teams with UI/UX wireframing, high-fidelity prototypes, and component design.",
        "Applied foundational user psychology, information hierarchy, and usability principles to improve product interfaces.",
        "Collaborated with frontend engineering interns to ensure seamless design-to-code implementation fidelity.",
      ],
    },
  ],

  leadership: [
    {
      role: "Vice President",
      organization: "Rotaract Club of Nagpur United",
      location: "Nagpur, India",
      period: "Jul '26 – Present",
      badge: "Executive Leadership",
      description:
        "Directing strategic community initiatives, youth engagement programs, and club operations. Leading a cross-functional team of student volunteers to organize social impact projects and professional leadership workshops.",
    },
    {
      role: "Active Volunteer",
      organization: "Stambh Organization",
      location: "Nagpur, India",
      period: "Dec '24 – Present",
      badge: "Community Service",
      description:
        "Spearheading social welfare campaigns, educational outreach for underprivileged students, and environmental awareness drives.",
    },
  ],

  education: [
    {
      degree: "Master's in Computer Application (MCA)",
      institution: "Modern College of Engineering (SPPU)",
      location: "Pune, Maharashtra",
      period: "Sep '25 – Present",
      status: "Currently Pursuing",
      highlights: [
        "Specializing in Advanced Software Engineering, Full-Stack Architecture, Cloud Computing & AI applications.",
        "Active contributor to technical departmental software projects and hackathons.",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science (B.Sc. CS)",
      institution: "RTM Nagpur University",
      location: "Nagpur, Maharashtra",
      period: "Aug '21 – Jul '24",
      status: "Graduated with 7.05 GPA",
      highlights: [
        "Awarded prestigious 'Student of the Year' in 2024 at Dr. Ambedkar College.",
        "In-depth core coursework: C++, Java, Database Management (SQL), Data Structures & Algorithms, OS, Networks.",
      ],
    },
  ],

  achievements: [
    {
      title: "All India Rank 3 (AIR-3)",
      organization: "DG NCC, New Delhi",
      event: "All India Thal Sainik Camp (TSC)",
      period: "Sep '23",
      category: "National Honor",
      icon: "ShieldAlert",
      description:
        "Achieved National Rank 3 among thousands of elite NCC cadets across India, showcasing extreme discipline, leadership, tactical fitness, and shooting/field skills under high pressure.",
    },
    {
      title: "Student of the Year (2024)",
      organization: "Dr. Ambedkar College, Nagpur",
      event: "Academic & Extracurricular Excellence",
      period: "Aug '24",
      category: "College Recognition",
      icon: "Award",
      description:
        "Conferred the top college honor recognizing consistent academic merit, technical contributions, and exemplary student leadership.",
    },
    {
      title: "West Zone Basketball Runner-Up",
      organization: "University Basketball Federation",
      event: "Inter-University Championship",
      period: "Feb '26",
      category: "Sports & Athletics",
      icon: "Medal",
      description:
        "Demonstrated elite teamwork, athletic stamina, and competitive agility as starting player in the West Zone Inter-University Basketball Tournament.",
    },
    {
      title: "Presentation Skills Certification",
      organization: "Saylor Academy",
      event: "Executive Communication & Public Speaking",
      period: "Nov '25",
      category: "Certification",
      icon: "Presentation",
      description:
        "Mastered advanced business presentation delivery, technical storytelling, and stakeholder persuasion techniques.",
    },
    {
      title: "HTML, CSS and Bootstrap Certification",
      organization: "Dr. Ambedkar College, Nagpur",
      event: "Web Development Certification",
      period: "Jan '24",
      category: "Certification",
      icon: "Code",
      description:
        "Certified in semantic frontend web architecture, mobile-responsive layout engineering, and CSS frameworks.",
    },
  ],
};
