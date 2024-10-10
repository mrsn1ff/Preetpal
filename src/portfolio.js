/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Preetpal's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Preetpal Singh Portfolio",
    type: "website",
   url:"https://preetpal.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Preetpal Singh",
  logo_name: "Preetpal Singh",
  nickname: "",
  subTitle:
    "I am an engineering student due to graduate in 2025, proficient in web development, I am Eager to continue pushing boundaries and making meaningful contributions in the tech industry.",
  resumeLink: 
    "https://drive.google.com/file/d/1_RF8LRwwcVyKbfwPOHi7HQYf0V7WN1tr/view?usp=drive_link",
  portfolio_repository: "https://github.com/mrsn1ff",
  githubProfile: "https://github.com/mrsn1ff",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/mrsn1ff",
  // linkedin: "https://www.linkedin.com/in/preetpalsingh591/",
  // gmail: "preetpalsingh591@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com//",
  // twitter: "https://twitter.com/0xsn1ff",
  // instagram : "https://www.instagram.com/0xsn1ff/"

  {
    name: "Github",
    link: "https://github.com/mrsn1ff",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/preetpalsingh591/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:preetpalsingh591@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/0xsn1ff",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Medium",
    link: "https://medium.com/@preetpalsingh591",
    fontAwesomeIcon: "fa-brands fa-medium", // Reference https://fontawesome.com/icons/medium?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "MERN Stack Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡I have completed comprehensive training in web development using the MERN stack, focusing on building dynamic, responsive applications with MongoDB, Express.js, React.js, and Node.js.",
        "⚡I am proficient in JavaScript and have a solid understanding of front-end technologies, allowing me to create engaging user interfaces and seamless user experiences.",
        "⚡I have practical experience in creating APIs, managing databases, and launching full-stack applications, which helps me solve various web development problems effectively.",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos-mongodb",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "logos-react",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "logos-express",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    

      ],
    }

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "KURUKSHETRA UNIVERSITY",
      subtitle: "Bachelor of Computer Application(Cloud Technology & Information Security)",
      logo_path: "Kurukshetra_University_logo.png",
      alt_name: "PIET",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ I have studied software engineering subjects like DS, Algorithms, DBMS, Computer Network, AI etc.",
        "⚡ Apart from this, I have done course on Web Development.",
      
      ],
      website_link: "https://kuk.ac.in/",
    },
    {
      title: "DR. M.K.K ARYA MODEL SCHOOL PANIPAT",
      subtitle: "Model Town Panipat",
      logo_path: "mkk_logo.png",
      alt_name: "DR. M.K.K ARYA MODEL SCHOOL PANIPAT",
      duration: "2007 - 2022",
      descriptions: [
        "Class XII: 91%",
        "Class X: 78%"
      ],
      website_link: "https://www.mkkschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "OCI Generative AI Professional",
    //   subtitle: "- Oracle",
    //   logo_path: "TVS.png",
    //   certificate_link:
    //     "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2D82F62B68796E11C737C120539D84C10AC4D4DC2896698E9D8257A2821AF9B5",
    //   alt_name: "NPTEL",
    //   color_code: "#FFFFFF",
    // },
    // {
    //   title: "Machine Learning ",
    //   subtitle: "Stanford University & DeepLearning.AI ",
    //   logo_path: "dl.png",
    //   certificate_link:
    //     "https://coursera.org/share/6a9c4f66aa9e18ea398ec20e7b432faf",
    //   alt_name: "Stanford University",
    //   color_code: "#FFFFFF",
    // },
    // {
    //   title: "CodSoft internship program",
    //   subtitle: "- CodSoft",
    //   logo_path: "codsoft.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1lJhq0EH3KAIDt7FvXhPAH85HSp4T7kFO/view",
    //   alt_name: "GCP",
    //   color_code: "#FFFFFF",
    // },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "Deep Learning.AI",
    //   logo_path: "dl.png",
    //   certificate_link:
    //     "https://coursera.org/share/87b854f14a71c47d7735ce989e4a7f77",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#FFFFFF",
    // },
    // {
    //   title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    //   subtitle: "- Deep Learning.AI",
    //   logo_path: "dl.png",
    //   certificate_link:
    //     "https://coursera.org/share/7a73eeb8dd96758f078477152c208f2c",
    //   alt_name: "Google",
    //   color_code: "#FFFFFF",
    // },
    // {
    //   title: "Python Project for Data Science",
    //   subtitle: "- Jospeh santarcangelo",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/75b46cbb22cb0ca1125e141464fa797b",
    //   alt_name: "IBM",
    //   color_code: "#FFFFFF",
    // },
    // {
    //   title: "Machine Learning with Python",
    //   subtitle: "- Saishruti Swaminathan",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/99a1e8afae934f7e168ae01de66df031",
    //   alt_name: "Microsoft",
    //   color_code: "#FFFFFF",
    // },
    // {
    //   title: " Python for AI, Data Science and Development",
    //   subtitle: "- Jospeh santarcangelo",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/3173e6ff7ce15a461f1b80b5f49e0335",
    //   alt_name: "Google",
    //   color_code: "#FFFFFF",
    // },
    // {
    //   title: "Data Science methodology",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/722da5cbb8e93a8e479f10166de4e631",
    //   alt_name: "Coursera",
    //   color_code: "#FFFFFF",
    // },
    // {
    //   title: "Coders Cave internship program",
    //   subtitle: "- Coders Cave",
    //   logo_path: "coderscave.png",
    //   certificate_link:
    //     " ",
    //   alt_name: "GCP",
    //   color_code: "#FFFFFF",
    // },
    
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Hackathons",
  description:
    "I participated in Manthon 2.0 and Manthon 3.0 hackathons, where I served as the Frontend Developer. During these events, I developed user interfaces for web applications, focusing on responsive design and user experience. I collaborated with team members to integrate APIs and enhance application functionality. These experiences not only improved my technical skills in React and UI/UX design but also strengthened my teamwork and problem-solving abilities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        // {
        //   title: "Machine Learning Intern",
        //   company: "CodSoft",
        //   company_url: "https://drive.google.com/file/d/1lJhq0EH3KAIDt7FvXhPAH85HSp4T7kFO/view",
        //   logo_path: "codsoft.png",
        //   duration: "Aug 2024 - Sep 2024",
        //   location: "Chennai, India",
        //   description:
        //     "Phase01: The objective of this project create a machine learning model that can predict the genre of a movie based on its plot summary or other textual information.",
        //   color: "#ee3c26",
        // }, 
      
           {
          title: "Web Developer",
          company: "GAO TEK Inc.",
          company_url: "https://www.linkedin.com/company/gao-tek-inc-/",
          logo_path: "logo1.png",
          duration: "Oct 2024 - Present",
          location: "Delaware, USA",
          description:
            "Web Developer Intern at GAO Tek Inc. in Delaware, USA for 3 months. Gained hands-on experience in debugging, optimizing performance , and working with a dynamic team.",
          color: "#ee3c26",
        },
      
      ],
    },
    {
      title: "Position of Responsibility",
      experiences: [
        {
          title: "Technical Team Member",
          company: "H4CKP13T",
          company_url: "https://www.instagram.com/h4ckp13t/",
          logo_path: "logo2_nobg.png",
          duration: "April 2023 - Present",
          location: "Panipat ,India",
          description:
            "H4CKP13T is a cybersecurity club of responsible for conducting CTFs, workshops and competitions , I was responsible for leading it's technical team",
          color: "#4285F4",
        },
        // {
        //   title: "Web development team Member",
        //   company: "SlugNPlug",
        //   company_url: "https://www.linkedin.com/company/slug-n-plug/mycompany",
        //   logo_path: "SNP.jpg",
        //   duration: "April 2023 - April 2024",
        //   location: "Chennai,India",
        //   description:
        //     "SlugNPlug is a technical club of SRMIST responsible for conducting events, workshops and competitions around new trends in tech, I was responsible for leading it's web development team responsible for creating it's website.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Member",
        //   company: "NSS-SRM",
        //   company_url: "https://www.srmist.edu.in/nss/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "march 2024",
        //   location: "Chennai,India",
        //   description:
        //     "My responsibility for this program was to organise an event in which participants were asked to present their research and tech projects and the most innovative and practical projects were awarded, more than 100 people participated."
        // },
        
      ],
    },
    {
      title: "Projects",
      work: true,
      experiences: [
        {
          title: "WANDERLUST",
          company: "project link",
          description: "The Wanderlust Project is a user-friendly platform that connects travelers and hosts, allowing users to easily add, edit, or delete listings and manage reviews after logging in. With an intuitive design and robust features, it fosters a trustworthy community for seamless property sharing and travel planning.",
          company_url: "https://github.com/mrsn1ff/Wanderlust",
          logo_path: "airbnp.png",
        
        },
        {
          title: "ZERODHA CLONE",
          company: "project link",
          description: "The Zerodha Frontend Clone is a sleek, user-friendly trading platform that replicates the original's functionality.Featuring real-time market data, trade placement, and portfolio tracking, the clone caters to both novice and experienced traders, providing essential tools for informed decision-making in various asset classes.",
          company_url: "https://github.com/mrsn1ff/zerodha-frontend",
          logo_path: "Zerodha-Logo.png",
        
        },
        {
          title: "CLOUDPOINT - WEATHER APP",
          company: "project link",
          description: "The Weather App allows users to easily access real-time weather information by simply typing in a city name. Utilizing weather APIs, it provides details like temperature, humidity, wind speed, and forecasts. With its intuitive interface, users can quickly stay informed about current conditions and future weather in any city.",
          company_url: "https://github.com/mrsn1ff/WeatherApp_React",
          logo_path: "weather.png",
        
        },
           
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research Work",
  description: "Some of my research work.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "mdp-diffusion",
      name: "Neurobehavioral Analysis Using EEG Readings and Graph Neural Networks",
      createdAt: "",
      description: "Explored AI for predicting emotional fluctuations from EEG scans, built a prototype ML model using neural networks, and submitted the paper for publication. Currently researching about how to use graph neural networks for efficient EEG analysis.",
      
    },
    {
      id: "consistency-models",
      name: "ITDECC-2023",
      createdAt: "",
      description: "Wrote and Presented paper on machine learning and data science in an international conference on Innovations and Technological development in electronics, computers and communication.",
    
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am actively looking for an opportunity to work in the field of engineering and technology, if you wish to work together on a project, please feel free to reach out!",
  },
  blogSection: {
    title: "Articles",
    subtitle:
      "I like to talk about the more technical skills.",
    link: "https://medium.com/@preetpalsingh591",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
