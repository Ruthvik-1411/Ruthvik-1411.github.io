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
        case 'headset':
          iconHtml = '<i class="fas fa-headset text-accent"></i>';
          break;
        case 'wand-magic-sparkles':
          iconHtml = '<i class="fas fa-wand-magic-sparkles text-accent"></i>';
          break;
        case 'comments':
          iconHtml = '<i class="fas fa-comments text-accent"></i>';
          break;
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