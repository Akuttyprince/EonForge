// JavaScript for menu toggling and image hover effects
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.navbar__hamburger');
    const menu = document.querySelector('.navbar__menu');
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    const menuItems = document.querySelectorAll('.navbar__menu-item');
    const menuImgContainer = document.querySelector('.navbar__menu-img');
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
      // Toggle active classes
      this.classList.toggle('active');
      menu.classList.toggle('active');
      navbar.classList.toggle('menu-active'); // Add black background to navbar
      body.classList.toggle('no-scroll'); // Prevent scrolling when menu is open
    });
    
    // Close menu when clicking on links
    const menuLinks = document.querySelectorAll('.navbar__menu-item a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        navbar.classList.remove('menu-active');
        body.classList.remove('no-scroll');
      });
    });
    
    // Image hover effects
    menuItems.forEach(item => {
      // On mouse enter
      item.addEventListener('mouseenter', function() {
        const imgSrc = this.getAttribute('data-img');
        if (imgSrc) {
          menuImgContainer.style.backgroundImage = `url(${imgSrc})`;
          menuImgContainer.style.opacity = '1';
        }
      });
      
      // On mouse leave
      item.addEventListener('mouseleave', function() {
        menuImgContainer.style.opacity = '0';
      });
    });
  });

// Team member data with unique social links
const teamMembers = [
    {
      number: "01",
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      description: "With over 15 years of industry experience, Sarah leads our team with vision and strategic direction.",
      imageUrl: "img/1.jpg", 
      profileUrl: "script.js",
      linkedin: "https://linkedin.com/in/sarah-johnson-ceo",
      github: "https://github.com/sjohnson-tech",
      email: "sarah.johnson@company.com"
    },
    {
      number: "02",
      name: "Michael Chen",
      role: "Chief Technology Officer",
      description: "Michael brings innovative solutions and technical expertise to drive our technological advancements.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/michael-chen",
      linkedin: "https://linkedin.com/in/michaelchen-cto",
      github: "https://github.com/mchen-dev",
      email: "michael.chen@company.com"
    },
    {
      number: "03",
      name: "Aisha Patel",
      role: "Head of Design",
      description: "Aisha transforms concepts into beautiful, user-centered designs that captivate our audience.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/aisha-patel",
      linkedin: "https://linkedin.com/in/aisha-patel-design",
      github: "https://github.com/aisha-designs",
      email: "aisha.patel@company.com"
    },
    {
      number: "04",
      name: "James Wilson",
      role: "Marketing Director",
      description: "James crafts compelling narratives and strategies that connect our brand with customers worldwide.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/james-wilson",
      linkedin: "https://linkedin.com/in/james-wilson-marketing",
      github: "https://github.com/jwilson-mktg",
      email: "james.wilson@company.com"
    },
    {
      number: "05",
      name: "Elena Rodriguez",
      role: "Lead Developer",
      description: "Elena's coding expertise and problem-solving skills ensure our products are robust and innovative.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/elena-rodriguez",
      linkedin: "https://linkedin.com/in/elena-rodriguez-dev",
      github: "https://github.com/erodriguez-code",
      email: "elena.rodriguez@company.com"
    },
    {
      number: "06",
      name: "David Kim",
      role: "Financial Analyst",
      description: "David's financial acumen helps guide our business decisions and strategic investments.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/david-kim",
      linkedin: "https://linkedin.com/in/david-kim-finance",
      github: "https://github.com/dkim-financial",
      email: "david.kim@company.com"
    },
    {
      number: "07",
      name: "Olivia Thompson",
      role: "Customer Relations",
      description: "Olivia ensures our clients receive exceptional service and their needs are always prioritized.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/olivia-thompson",
      linkedin: "https://linkedin.com/in/olivia-thompson-cr",
      github: "https://github.com/othompson",
      email: "olivia.thompson@company.com"
    },
    {
      number: "08",
      name: "Jamal Washington",
      role: "Product Manager",
      description: "Jamal transforms ideas into successful products through careful planning and execution.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/jamal-washington",
      linkedin: "https://linkedin.com/in/jamal-washington-pm",
      github: "https://github.com/jwash-product",
      email: "jamal.washington@company.com"
    },
    {
      number: "09",
      name: "Sophia Lee",
      role: "UX Researcher",
      description: "Sophia's insights into user behavior help us create intuitive and engaging experiences.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/sophia-lee",
      linkedin: "https://linkedin.com/in/sophia-lee-ux",
      github: "https://github.com/slee-researcher",
      email: "sophia.lee@company.com"
    },
    {
      number: "10",
      name: "Carlos Martinez",
      role: "Systems Architect",
      description: "Carlos designs scalable systems that form the backbone of our technological infrastructure.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/carlos-martinez",
      linkedin: "https://linkedin.com/in/carlos-martinez-arch",
      github: "https://github.com/cmartinez-systems",
      email: "carlos.martinez@company.com"
    },
    {
      number: "11",
      name: "Priya Sharma",
      role: "Content Strategist",
      description: "Priya creates compelling content that tells our story and engages our community.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/priya-sharma",
      linkedin: "https://linkedin.com/in/priya-sharma-content",
      github: "https://github.com/psharma-writer",
      email: "priya.sharma@company.com"
    },
    {
      number: "12",
      name: "Thomas Jackson",
      role: "Business Development",
      description: "Thomas identifies growth opportunities and forges partnerships that expand our reach.",
      imageUrl: "/api/placeholder/400/300", 
      profileUrl: "/team/thomas-jackson",
      linkedin: "https://linkedin.com/in/thomas-jackson-biz",
      github: "https://github.com/tjackson-bd",
      email: "thomas.jackson@company.com"
    }
  ];

  // Initialize the slider
  const sliderContainer = document.querySelector('.slider-container');
  const indicatorContainer = document.querySelector('.slide-indicator');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  
  let currentSlide = 0;
  let slideInterval;
  let visibleSlides = getVisibleSlides();
  let totalSlides = Math.ceil(teamMembers.length / visibleSlides);
  
  // Function to determine number of visible slides based on screen width
  function getVisibleSlides() {
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth < 1024) {
      return 2;
    } else {
      return 3;
    }
  }
  
  // Modify the team member card creation function to position the visit button opposite of social links
teamMembers.forEach((member, index) => {
    const memberCard = document.createElement('li');
    memberCard.classList.add('team__item');
    
    memberCard.innerHTML = `
      <div class="team__image-container">
        <img src="${member.imageUrl}" alt="${member.name}" class="team__image">
        <span class="team__num">/${member.number}</span>
      </div>
      <h3 class="team__name">${member.name}</h3>
      <p class="team__role">${member.role}</p>
      <p class="team__p">${member.description}</p>
      <div class="profile-actions">
        <div class="social-links">
          <a href="${member.linkedin}" class="social-link linkedin" target="_blank" aria-label="LinkedIn profile">
            <svg viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          <a href="${member.github}" class="social-link github" target="_blank" aria-label="GitHub profile">
            <svg viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </a>
          <a href="mailto:${member.email}" class="social-link email-icon" aria-label="Email contact">
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
        <a href="${member.profileUrl}" class="visit-btn">
          Visit
          <svg class="arrow-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
          </svg>
        </a>
      </div>
    `;
    
    sliderContainer.appendChild(memberCard);
  });
  
  // Function to update indicators
  function updateIndicators() {
    // Clear existing indicators
    indicatorContainer.innerHTML = '';
    
    // Create new indicators based on current totalSlides value
    for (let i = 0; i < totalSlides; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      if (i === currentSlide) indicator.classList.add('active');
      
      indicator.addEventListener('click', () => {
        clearInterval(slideInterval);
        goToSlide(i);
        startSlideInterval();
      });
      
      indicatorContainer.appendChild(indicator);
    }
  }
  
  // Create initial indicators
  updateIndicators();
  
  // Function to update the active indicator
  function updateActiveIndicator() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
  
  // Function to go to a specific slide
  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    
    // Ensure currentSlide doesn't exceed totalSlides
    if (currentSlide >= totalSlides) {
      currentSlide = totalSlides - 1;
    }
    
    const slideWidth = document.querySelector('.team__item').offsetWidth + 20; // Adding margin
    sliderContainer.style.transform = `translateX(-${slideWidth * currentSlide * visibleSlides}px)`;
    updateActiveIndicator();
  }
  
  // Function for next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  }
  
  // Function for previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
  }
  
  // Event listeners for arrows
  arrowLeft.addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    startSlideInterval();
  });
  
  arrowRight.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    startSlideInterval();
  });
  
  // Auto-slide function
  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }
  
  // Start auto-sliding
  startSlideInterval();
  
  // Improved resize handler
  window.addEventListener('resize', () => {
    clearInterval(slideInterval);
    
    const newVisibleSlides = getVisibleSlides();
    if (newVisibleSlides !== visibleSlides) {
      visibleSlides = newVisibleSlides;
      totalSlides = Math.ceil(teamMembers.length / visibleSlides);
      
      // Reset to first slide to avoid display issues
      currentSlide = 0;
      goToSlide(currentSlide);
      
      // Update indicators based on new totalSlides
      updateIndicators();
    }
    
    startSlideInterval();
  });
  
  // Add touch swipe functionality for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;
  
  sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  sliderContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    clearInterval(slideInterval);
    
    // Determine swipe direction (50px threshold)
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right
      prevSlide();
    }
    
    startSlideInterval();
  }

// Service navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Map service items to their corresponding page URLs
  const servicePageMap = {
    '/Graphic Design': 'graphic-design.html',
    '/UX/UI Design': 'ux-ui-design.html',
    '/Web Design': 'web-design.html',
    '/Brend Design': 'brand-design.html'
  };

  // Get all service items
  const serviceItems = document.querySelectorAll('.serv__item');

  // Add click event listeners to each service item
  serviceItems.forEach(item => {
    // Get the service text to determine which page to navigate to
    const serviceText = item.querySelector('.serv__item-text').textContent;
    
    // Add click event to the entire item
    item.addEventListener('click', function() {
      navigateToServicePage(serviceText);
    });
    
    // Add click event to just the arrow (though it will do the same thing)
    const arrow = item.querySelector('.serv__item-arrow');
    if (arrow) {
      arrow.addEventListener('click', function(e) {
        // Prevent the event from triggering the parent's click event too
        e.stopPropagation();
        navigateToServicePage(serviceText);
      });
    }
  });

  // Function to handle navigation
  function navigateToServicePage(serviceText) {
    // Get the corresponding page URL
    const pageUrl = servicePageMap[serviceText];
    
    if (pageUrl) {
      // Navigate to the page
      window.location.href = pageUrl;
    } else {
      console.error('No page mapping found for service:', serviceText);
    }
  }

  // Add hover effects for better user experience
  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      // Change the color to indicate interactivity
      const textElement = item.querySelector('.serv__item-txt');
      if (textElement) {
        textElement.style.color = '#ffffff'; // Change to white on hover
      }
      
      // Animate the arrow
      const arrow = item.querySelector('.serv__item-arrow img');
      if (arrow) {
        arrow.style.transform = 'rotate(135deg)';
        arrow.style.transition = 'transform 0.3s ease';
      }
    });

    item.addEventListener('mouseleave', function() {
      // Revert color back on mouse leave
      const textElement = item.querySelector('.serv__item-txt');
      if (textElement) {
        textElement.style.color = '#4b4b4b'; // Change back to original color
      }
      
      // Revert arrow animation
      const arrow = item.querySelector('.serv__item-arrow img');
      if (arrow) {
        arrow.style.transform = 'rotate(180deg)';
      }
    });
  });
});