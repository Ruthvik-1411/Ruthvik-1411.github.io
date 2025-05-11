// Data
// const projects = [
//     {
//       id: 1,
//       title: "GenAI Projects",
//       description: "A collection of generative AI projects exploring text-to-image models, language processing, and creative applications of machine learning.",
//       categories: ["ai"],
//       technologies: ["PyTorch", "Transformers", "DALL-E", "HuggingFace"],
//       links: {
//         github: "https://github.com/ruthvik-1411/genai-projects",
//         demo: "https://youtu.be/example1"
//       },
//       icon: "robot"
//     },
//     {
//       id: 2,
//       title: "Arduino FPV Setup",
//       description: "A DIY first-person-view camera system built with Arduino, enabling real-time video transmission for remote operation of devices and vehicles.",
//       categories: ["electronics", "robotics"],
//       technologies: ["Arduino", "C++", "RF Communication", "Electronics"],
//       links: {
//         github: "https://github.com/ruthvik/arduino-fpv-setup",
//         demo: "https://youtu.be/example2"
//       },
//       icon: "microchip"
//     },
//     {
//       id: 3,
//       title: "Finance Tracker App",
//       description: "A comprehensive personal finance tracking application with AI-powered insights, budget recommendations, and spending pattern analysis.",
//       categories: ["ai"],
//       technologies: ["Python", "TensorFlow", "React Native", "Firebase"],
//       links: {
//         github: "https://github.com/ruthvik/finance-tracker"
//       },
//       icon: "chart-line"
//     },
//     {
//       id: 4,
//       title: "Open Data QnA",
//       description: "A natural language processing system that enables users to ask questions about public datasets and receive accurate, contextual answers.",
//       categories: ["nlp", "ai"],
//       technologies: ["NLP", "BERT", "Flask", "MongoDB"],
//       links: {
//         github: "https://github.com/ruthvik/open-data-qna"
//       },
//       icon: "comment-dots"
//     },
//     {
//       id: 5,
//       title: "Robotic Arm Projects",
//       description: "A series of robotic arm implementations with various control mechanisms including gesture recognition, programmable patterns, and autonomous operation.",
//       categories: ["robotics", "electronics"],
//       technologies: ["Arduino", "Servo Motors", "Python", "Robotics"],
//       links: {
//         github: "https://github.com/ruthvik/robotic-arm-projects",
//         demo: "https://youtu.be/example3"
//       },
//       icon: "hand-paper"
//     },
//     {
//       id: 6,
//       title: "OpenCV Projects",
//       description: "A collection of computer vision applications including object detection, facial recognition, gesture control interfaces, and augmented reality.",
//       categories: ["cv", "ai"],
//       technologies: ["OpenCV", "Python", "Computer Vision", "YOLO"],
//       links: {
//         github: "https://github.com/ruthvik/opencv-projects"
//       },
//       icon: "eye"
//     },
//     {
//       id: 7,
//       title: "XY Pen Plotter",
//       description: "A custom-built drawing machine that converts digital designs into physical artwork using a precision-controlled mechanical system.",
//       categories: ["electronics", "robotics"],
//       technologies: ["Arduino", "Stepper Motors", "CAD", "G-code"],
//       links: {
//         github: "https://github.com/ruthvik/xy-pen-plotter"
//       },
//       icon: "pen"
//     },
//     {
//       id: 8,
//       title: "Automated Conveyor Belt Checkout",
//       description: "An automated system using computer vision to identify and track items on a conveyor belt, facilitating a streamlined checkout process.",
//       categories: ["cv", "robotics"],
//       technologies: ["OpenCV", "Python", "Arduino", "Machine Learning"],
//       links: {
//         github: "https://github.com/ruthvik/conveyor-belt-checkout",
//         demo: "https://youtu.be/example4"
//       },
//       icon: "barcode"
//     },
//     {
//       id: 9,
//       title: "Smart Agriculture Model",
//       description: "An IoT-based system for monitoring and automatically managing agricultural environments, including soil moisture, temperature, and irrigation control.",
//       categories: ["electronics", "ai"],
//       technologies: ["ESP32", "Sensors", "Cloud", "Data Analytics"],
//       links: {
//         github: "https://github.com/ruthvik/smart-agriculture"
//       },
//       icon: "seedling"
//     },
//     {
//       id: 10,
//       title: "Hand Gesture Controlled PC",
//       description: "A system that allows users to control their computer using hand gestures captured by a camera, offering an innovative way to interact with technology.",
//       categories: ["cv", "ai"],
//       technologies: ["Python", "OpenCV", "Machine Learning", "MediaPipe"],
//       links: {
//         github: "https://github.com/ruthvik/gesture-control"
//       },
//       icon: "hand-paper"
//     },
//     {
//       id: 11,
//       title: "SRpass Password Manager",
//       description: "A secure password manager with encryption and cross-platform synchronization, helping users maintain strong, unique passwords across their accounts.",
//       categories: ["ai", "nlp"],
//       technologies: ["Python", "Cryptography", "Flask", "React"],
//       links: {
//         github: "https://github.com/ruthvik/srpass"
//       },
//       icon: "key"
//     }
//   ];
  
//   const skillCategories = [
//     {
//       title: "Programming & Machine Learning",
//       skills: [
//         { name: "Python" },
//         { name: "TensorFlow" },
//         { name: "PyTorch" },
//         { name: "Natural Language Processing" },
//         { name: "Computer Vision" },
//         { name: "JavaScript" },
//         { name: "C/C++" },
//         { name: "BERT" },
//         { name: "Transformers" },
//         { name: "Scikit-learn" },
//         { name: "Pandas" },
//         { name: "NumPy" }
//       ]
//     },
//     {
//       title: "Web Development",
//       skills: [
//         { name: "React Native" },
//         { name: "AppScript" },
//         { name: "Flask" },
//         { name: "Django" },
//         { name: "HTML/CSS" },
//         { name: "RESTful APIs" },
//         { name: "MongoDB" },
//         { name: "Firebase" }
//       ]
//     },
//     {
//       title: "IoT & Robotics",
//       skills: [
//         { name: "Arduino" },
//         { name: "Raspberry Pi" },
//         { name: "NRF24L01/RF" },
//         { name: "MPU6050/Sensors" },
//         { name: "Embedded Systems" },
//         { name: "Servo Motors" },
//         { name: "PID Controllers" },
//         { name: "PCB Design" },
//         { name: "Microcontrollers" },
//         { name: "Electronics" }
//       ]
//     },
//     {
//       title: "Cloud & Tools",
//       skills: [
//         { name: "Google Cloud" },
//         { name: "Git/GitHub" },
//         { name: "Docker" },
//         { name: "CI/CD" },
//         { name: "Linux" },
//         { name: "Shell Scripting" },
//         { name: "AWS" },
//         { name: "Kubernetes" }
//       ]
//     }
//   ];

  import {projects, skillCategories} from "./data.js";
  
  
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize hero section animations
    initHeroAnimation();
    
    // Initialize section animations
    initSectionAnimations();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize scroll spy for navigation
    initScrollSpy();
    
    // Initialize header scroll effects
    initHeaderScroll();
    
    // Populate projects
    populateProjects();
    
    // Initialize project filters
    initProjectFilters();
    
    // Populate skills
    populateSkills();
  });
  
  // Function to initialize hero animations
  function initHeroAnimation() {
    const heroItems = document.querySelectorAll('.hero-item');
    
    // Trigger animations with slight delay
    setTimeout(() => {
      heroItems.forEach(item => {
        item.classList.add('show');
      });
    }, 300);
  }
  
  // Function to initialize section animations with Intersection Observer
  function initSectionAnimations() {
    const sections = document.querySelectorAll('.section-hidden');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
  }
  
  // Function to initialize mobile menu
  function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('[data-mobile-link]');
    
    // Toggle mobile menu
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      
      // Toggle icon between menu and close
      const icon = menuButton.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    
    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        
        // Reset icon to menu
        const icon = menuButton.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }
  
  // Function to initialize scroll spy for navigation
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('[data-nav-link]');
    
    // Function to update active nav link
    function updateActiveLink() {
      const scrollPosition = window.scrollY + 150;
      
      sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-nav-link') === sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', updateActiveLink);
    
    // Initial update
    updateActiveLink();
  }
  
  // Function to initialize header scroll effects
  function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    
    function handleScroll() {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        header.classList.remove('py-4');
        header.classList.add('py-2');
        
        if (currentScrollY > lastScrollY) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      } else {
        header.classList.add('py-4');
        header.classList.remove('py-2');
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', handleScroll);
  }
  
  // Function to populate projects
  function populateProjects() {
    const projectsList = document.getElementById('projects-list');
    const projectsContainer = document.getElementById('projects-container');
    
    // Clear existing projects
    projectsList.innerHTML = '';
    
    // Add all projects initially
    renderProjects(projects);
    
    // Check if scrolling is needed
    checkProjectsScrolling();
  }
  
  // Function to render projects
  function renderProjects(projectsToRender) {
    const projectsList = document.getElementById('projects-list');
    
    // Clear existing projects
    projectsList.innerHTML = '';
    
    // Create project cards
    projectsToRender.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      
      // Format project technologies as badges
      const technologiesBadges = project.technologies.map(tech => 
        `<span class="badge">${tech}</span>`
      ).join('');
      
      // Set icon based on project type
      let iconHtml = '';
      switch(project.icon) {
        case 'robot':
          iconHtml = '<i class="fas fa-robot text-accent"></i>';
          break;
        case 'microchip':
          iconHtml = '<i class="fas fa-microchip text-accent"></i>';
          break;
        case 'chart-line':
          iconHtml = '<i class="fas fa-chart-line text-accent"></i>';
          break;
        case 'comment-dots':
          iconHtml = '<i class="fas fa-comment-dots text-accent"></i>';
          break;
        case 'hand-paper':
          iconHtml = '<i class="fas fa-hand-paper text-accent"></i>';
          break;
        case 'eye':
          iconHtml = '<i class="fas fa-eye text-accent"></i>';
          break;
        case 'pen':
          iconHtml = '<i class="fas fa-pen text-accent"></i>';
          break;
        case 'barcode':
          iconHtml = '<i class="fas fa-barcode text-accent"></i>';
          break;
        case 'seedling':
          iconHtml = '<i class="fas fa-seedling text-accent"></i>';
          break;
        case 'key':
          iconHtml = '<i class="fas fa-key text-accent"></i>';
          break;
        default:
          iconHtml = '<i class="fas fa-robot text-accent"></i>';
      }
      
      // Create links HTML
      const linksHtml = `
        ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="text-light-text hover:text-accent transition-colors" aria-label="GitHub repository for ${project.title}">
          <i class="fab fa-github text-xl"></i>
        </a>` : ''}
        
        ${project.links.live ? `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="text-light-text hover:text-accent transition-colors" aria-label="Live demo for ${project.title}">
          <i class="fas fa-external-link-alt text-xl"></i>
        </a>` : ''}
        
        ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="text-light-text hover:text-accent transition-colors" aria-label="Video demo for ${project.title}">
          <i class="fab fa-youtube text-xl"></i>
        </a>` : ''}
      `;
      
      // Set project card content
      projectCard.innerHTML = `
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-4">
            <div class="w-10 h-10 rounded-full bg-accent-bg flex items-center justify-center">
              ${iconHtml}
            </div>
            <div class="flex space-x-4">
              ${linksHtml}
            </div>
          </div>
          <h3 class="text-xl font-bold text-text mb-2 font-mono">${project.title}</h3>
          <p class="text-muted mb-6 flex-grow">${project.description}</p>
          <div class="flex flex-wrap gap-2 mb-2">
            ${technologiesBadges}
          </div>
        </div>
      `;
      
      projectsList.appendChild(projectCard);
    });
    
    // Check if scrolling is needed
    checkProjectsScrolling();
  }
  
  // Function to check if projects section needs scrolling
  function checkProjectsScrolling() {
    const projectsContainer = document.getElementById('projects-container');
    const projectsList = document.getElementById('projects-list');
    
    if (projectsList.children.length > 4) {
      projectsContainer.classList.add('max-h-[800px]', 'overflow-y-auto', 'pr-2', 'custom-scrollbar');
    } else {
      projectsContainer.classList.remove('max-h-[800px]', 'overflow-y-auto', 'pr-2', 'custom-scrollbar');
    }
  }
  
  // Function to initialize project filters
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        let filteredProjects;
        
        // Filter projects
        if (filter === 'all') {
          filteredProjects = projects;
        } else {
          filteredProjects = projects.filter(project => project.categories.includes(filter));
        }
        
        // Render filtered projects
        renderProjects(filteredProjects);
      });
    });
  }
  
  // Function to populate skills
  function populateSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    // Clear existing skills
    skillsContainer.innerHTML = '';
    
    // Create skill categories
    skillCategories.forEach((category, index) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'bg-secondary rounded-lg p-6 shadow-lg hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all duration-300';

      // Create skills HTML
      const skillsHtml = category.skills.map(skill => 
        `<div class="rounded-full py-2 px-4 border border-border hover:border-accent transition-colors duration-300 inline-flex" style="background-color:#1A2D51;">
          <span class="text-text font-mono text-sm">${skill.name}</span>
        </div>`
      ).join('');
      
      // Set category content
      categoryDiv.innerHTML = `
        <h3 class="text-xl font-bold text-white mb-6 font-mono border-b border-border pb-2">
          ${category.title}
        </h3>
        <div class="flex flex-wrap gap-3">
          ${skillsHtml}
        </div>
      `;
      
      skillsContainer.appendChild(categoryDiv);
    });
  }