import { keywords } from './keywords';

export interface WorkExperience {
  company: string;
  position: string[];
  startDate: string;
  endDate: string;
  summary: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  location: string;
}

export interface Education {
  degree: string;
  institution: string;
  graduationDate: string;
}

export interface Award {
  company: string;
  awards: string[];
}

export interface ResumeData {
  contact: ContactInfo;
  aboutMe: string;
  strengths: string[];
  education: Education[];
  awards: Award[];
  certificates: string[];
  keywords: string[];
  skillsets: SkillCategory[];
  workExperience: WorkExperience[];
}

export const resumeData: ResumeData = {
  contact: {
    name: 'Brandon Stout',
    phone: '304.816.6450',
    email: 'bdstout1617@gmail.com',
    location: 'Bridgeport, WV',
  },
  aboutMe: `Adaptable and results-driven Senior Full Stack Engineer with extensive experience delivering enterprise-grade solutions across government, security, and commercial environments. Highly skilled at quickly learning and integrating new technologies, frameworks, and development patterns. Strong background in full-stack development, microservices, CI/CD pipelines, cloud-native architectures, and containerization. Known for flexibility, curiosity, and the ability to ramp up on unfamiliar tech stacks to build scalable, maintainable systems that support organizational goals.`,
  strengths: [
    'Full-stack Development SME',
    'Microservices SME',
    'Agile & SAFe Methodologies',
    'Test Automation & Continuous Integration',
    'Problem Solving & Innovation',
    'Learning new tech stacks',
  ],
  education: [
    {
      degree: 'Bachelor of Science | Computer Science',
      institution: 'Fairmont State University',
      graduationDate: '2012',
    },
    {
      degree: 'Bachelor of Science | Computer Security',
      institution: 'Fairmont State University',
      graduationDate: '2012',
    },
  ],
  awards: [
    {
      company: 'The MITRE Corporation',
      awards: ['Spark', 'Applause'],
    },
    {
      company: 'ATSG',
      awards: ['Rockstar'],
    },
  ],
  certificates: [
    'SAFe Agilist',
  ],
  keywords,
  skillsets: [
    {
      "category": "Programming Languages",
      "skills": [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" }
      ]
    },
    {
      "category": "Frameworks & Libraries",
      "skills": [
        { name: "Spring MVC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Nuxt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
        { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Vuetify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg" },
        { name: "Quasar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quasar/quasar-original.svg" },
        { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" }
      ]
    },
    {
      "category": "Web Technologies",
      "skills": [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
      ]
    },
    {
      "category": "Runtime & Platforms",
      "skills": [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ]
    },
    {
      "category": "Databases",
      "skills": [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        { name: "DB2", icon: "fa-database" }
      ]
    },
    {
      "category": "Architecture & Design Patterns",
      "skills": [
        { name: "Microservices", icon: "fa-layer-group" },
        { name: "REST APIs", icon: "fa-network-wired" },
        { name: "Infrastructure Design", icon: "fa-server" },
        { name: "RBAC", icon: "fa-user-shield" }
      ]
    },
    {
      "category": "Cloud & Infrastructure",
      "skills": [
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Message Queues", icon: "fa-inbox" }
      ]
    },
    {
      "category": "Build Tools",
      "skills": [
        { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
        { name: "Ant", icon: "fa-cogs" }
      ]
    },
    {
      "category": "CI/CD Tools",
      "skills": [
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "GitLab CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" }
      ]
    },
    {
      "category": "Version Control",
      "skills": [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "BitBucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
        { name: "Subversion/CVS", icon: "fa-code-branch" }
      ]
    },
    {
      "category": "Enterprise Software",
      "skills": [
        { name: "IBM TAM", icon: "fa-industry" },
        { name: "IBM IAM", icon: "fa-user-lock" },
        { name: "IBM DataPower", icon: "fa-server" },
        { name: "WebSEAL", icon: "fa-shield-alt" },
        { name: "ESB", icon: "fa-project-diagram" }
      ]
    },
    {
      "category": "Scripting & Automation",
      "skills": [
        { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { name: "Test Automation", icon: "fa-robot" }
      ]
    },
    {
      "category": "Methodologies",
      "skills": [
        { name: "Agile", icon: "fa-project-diagram" },
        { name: "SAFe", icon: "fa-project-diagram" }
      ]
    },
    {
      "category": "Project Management & Collaboration",
      "skills": [
        { name: "Confluence/JIRA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
        { name: "Wiki", icon: "fa-book" }
      ]
    },
    {
      "category": "IDEs & Code Editors",
      "skills": [
        { name: "Visual Studio Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
        { name: "NetBeans", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netbeans/netbeans-original.svg" }
      ]
    },
    {
      "category": "Operating Systems",
      "skills": [
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" }
      ]
    }
  ]
  ,
  workExperience: [
    {
      company: 'The MITRE Corporation',
      position: ['Senior Full Stack Engineer'],
      startDate: '2018-05-01',
      endDate: '2025-10-01',
      summary: 'Served in a variety of capacities that adapted and evolved throughout MITRE career. Due to the sensitive nature of the work, this summary reflects a broad range of skills and accomplishments in advancing organizational goals and mission-critical initiatives.',
      achievements: [
        'Led architecture and development of secure web applications for government sponsors, improving system performance and usability for stakeholders',
        'Directed engineering efforts as team lead, achieving improvement in delivery predictability and reducing rework through effective Agile planning',
        'Designed and deployed scalable microservices with Docker/Kubernetes, reducing deployment time and increasing system reliability',
        'Delivered cloud-native solutions on Azure (queues, storage, auth), enabling faster data processing',
        'Collaborated across cross-functional teams in SAFe/Agile ceremonies, ensuring delivery of mission-critical capabilities',
        'Recognized for adaptability in rapidly learning new tech stacks, accelerating project ramp-up and reducing onboarding time',
      ],
    },
    {
      company: 'ATSG',
      position: ['Senior Full Stack Engineer', 'Technical Lead'],
      startDate: '2016-08-01',
      endDate: '2018-05-01',
      summary: 'Served as Senior Full Stack Engineer and Technical Lead on the SOAPS Contract in Support of the DOJ, delivering enterprise-wide solutions and mentoring development teams.',
      achievements: [
        'Designed, developed, and deployed a test automation web application adopted enterprise-wide, significantly improving efficiency',
        'Trained and supported an entire testing unit in application adoption, streamlining QA and operations',
        'Served as Subject Matter Expert (SME) and project liaison for external initiatives, aligning software solutions with unit objectives',
        'Evaluated third-party procurements for scalability, integration, and production readiness',
        'Mentored junior developers, fostering skill development and professional growth',
      ],
    },
    {
      company: 'OnWire',
      position: ['Security Engineer', 'Research & Development', 'Senior Software Engineer'],
      startDate: '2013-03-01',
      endDate: '2016-08-01',
      summary: 'Served in multiple roles supporting DOJ contracts including GCSS, Government Cloud Applications, and COMPS. Progressed from Security Engineer to Senior Software Engineer, developing secure authentication solutions, IAM cloud applications, and modernizing development practices. Worked across security engineering, research & development, and full-stack software development, delivering enterprise solutions and customer-focused products.',
      achievements: [
        'Designed and implemented web-based GUIs using Java',
        'Developed backend Java services and daemons',
        'Created custom HTTP authentication modules leveraging IBM TAM API',
        'Built Java regression tests for systems including ESB, IBM DataPower, DB2, and TAM',
        'Deployed and configured software across diverse host environments',
        'Established RBAC strategies for secure user access control',
        'Installed and configured Jenkins for CI/CD across multiple environments',
        'Developed custom Jenkins plugins for TAM, WebSEAL, and IBM DataPower integration',
        'Authored installation, developer, and administrator manuals for ETC solutions',
        'Designed and implemented IAM Cloud front-end user interface application',
        'Built Self-Service and End-User Portal using JavaScript and jQuery, integrated with IBM IAM software',
        'Modernized software development tools and practices for ongoing projects, enhancing team productivity and output',
        'Standardized the Subversion Workflow for the New Uniform Crime Reporting development team, ensuring consistency and streamlined collaboration',
        'Designed and implemented back-end Java code and front-end web application interfaces, delivering high-quality, user-friendly solutions',
        'Increased team efficiency by developing a prototype leveraging the Spring framework',
        'Contributed to Agile team development, collaborating closely to create customer-focused products and support',
        'Engaged directly with customers to gather feedback and integrate end-user preferences into system design and development',
      ],
    },
    {
      company: 'Backbone Security',
      position: ['Computer Security Engineer'],
      startDate: '2011-09-01',
      endDate: '2013-03-01',
      summary: 'Worked as Computer Security Engineer at DSD Laboratories, developing steganography detection tools and forensic security solutions.',
      achievements: [
        'Built and maintained a database of 1150+ steganography applications for detection tools',
        'Enhanced the Steganography Application Fingerprint Database (SAFDB)',
        'Developed SQL Server queries and procedures to support SAFDB improvements',
        'Created Linux Bash scripts for USB partitioning and application installation',
        'Developed licensing control tools integrating CodeMeter USB devices via SDK',
        'Built tools to update StegAlyzerAS, SS, FS, and RTS scanners',
        'Contributed to the development of StegAlyzerFS, a field triage tool for steganography detection',
        'Designed a web-based monitoring system for StegAlyzerRTS network security appliances',
        'Developed forensic and network security tools to detect steganography in criminal investigations',
      ],
    },
  ],
};

