// Hero Aurora Animation
class AuroraHero {
    constructor() {
        this.heroSection = document.getElementById('hero-aurora');
        this.heroContent = document.getElementById('hero-content-aurora');
        this.heroBtn = document.querySelector('.hero-btn-aurora');
        
        this.init();
    }
    
    init() {
        if (!this.heroSection) return;
        
        // Ajouter l'interaction au bouton
        this.setupButton();
    }
    
    setupButton() {
        if (this.heroBtn) {
            this.heroBtn.addEventListener('click', () => {
                // Rediriger vers la page des investissements
                window.location.href = 'investments.html';
            });
        }
    }
}

// Site Data
const siteData = {
    company: {
        name: "Fare Trade Capital LLC",
        founded: 2022,
        location: "Princeton, New Jersey",
        address: "300 Carnegie Center, Ste 150, Princeton, NJ 08540",
        email: "info@faretradecapital.com",
        description: "Fare Trade Capital is a full service real estate firm which specializes in acquisition and sales of residential & commercial real estate. We specialize in either developing or re-developing distressed assets, and facilitating the improvements through the design, construction, and sales process."
    },
    team: [
        {
            id: 1,
            name: "James Charlot",
            title: "Founder & CVO",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            bio: "Visionary leader with extensive experience in real estate investment and development.",
            social: {
                linkedin: "#",
                facebook: "#",
                instagram: "#",
                youtube: "#"
            }
        },
        {
            id: 2,
            name: "Brooks Tate",
            title: "Private Equity Specialist",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            bio: "Specialized in private equity investments and portfolio management with over 8 years of experience.",
            social: {
                linkedin: "#"
            }
        },
        {
            id: 3,
            name: "Tyler Otterbein",
            title: "Private Equity Specialist",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            bio: "Expert in market analysis and investment strategy development for residential and commercial properties.",
            social: {
                linkedin: "#"
            }
        },
        {
            id: 4,
            name: "Angelica Brennan",
            title: "Private Equity Specialist",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            bio: "Focused on client relations and investment opportunities in the multi-family sector.",
            social: {
                linkedin: "#"
            }
        },
        {
            id: 5,
            name: "Dwight Alexandro",
            title: "Director of Project Management",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            bio: "Oversees all project development and construction management with a focus on quality and efficiency.",
            social: {
                linkedin: "#"
            }
        }
    ],
    projects: [
        {
            id: 1,
            title: "Sheffield Project",
            type: "fix-flip",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            description: "Step inside this beautifully transformed 4-bedroom, 3-bathroom home now reimagined as a spacious and upgraded 4-bedroom, 2.5-bathroom haven. Experience the perfect blend of modern elegance and comfort on every corner of this home, reflecting meticulous attention to detail.",
            location: "Sheffield, NJ",
            completionDate: "2023-08-15",
            investment: "$285,000",
            profit: "$65,000"
        },
        {
            id: 2,
            title: "Whittier Project",
            type: "fix-flip",
            image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            description: "Discover the stunning transformation of this charming 3-bedroom, 1-bathroom house into a delightful 3-bedroom, 2-bathroom oasis. This tastefully renovated residence now offers more space and convenience while maintaining its original character.",
            location: "Whittier, CA",
            completionDate: "2023-06-20",
            investment: "$220,000",
            profit: "$45,000"
        },
        {
            id: 3,
            title: "North Fifth Project",
            type: "multi-family",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            description: "Complete renovation of a duplex property in this thoughtfully renovated unit within a 3-triplex home.",
            location: "North Fifth Street, NJ",
            completionDate: "2023-04-10",
            investment: "$340,000",
            profit: "$78,000"
        },
        {
            id: 4,
            title: "Main Street Project",
            type: "commercial",
            image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            description: "Witness the remarkable transformation of this former corporate dental office into a spacious, fully-equipped professional workspace. A vibrant community hub, or any office purposes you can imagine.",
            location: "Main Street, Princeton, NJ",
            completionDate: "2023-02-28",
            investment: "$450,000",
            profit: "$95,000"
        },
        {
            id: 5,
            title: "Riverside Complex",
            type: "multi-family",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            description: "Modern multi-family development featuring 8 luxury units with contemporary amenities and sustainable design elements.",
            location: "Riverside, NJ",
            completionDate: "2023-12-05",
            investment: "$1,200,000",
            profit: "$280,000"
        }
    ],
    blog: [
        {
            id: 1,
            title: "Technology in Fix & Flip Home Investments",
            excerpt: "Discover how modern technology is revolutionizing the fix and flip industry, from smart home features to advanced construction techniques.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2024-01-15",
            author: "James Charlot",
            category: "Technology",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Mastering Due Diligence: The Key to Successful Real Estate Investments",
            excerpt: "Learn the essential steps and strategies for conducting thorough due diligence in real estate investment projects.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2024-01-08",
            author: "Brooks Tate",
            category: "Investment",
            readTime: "7 min read"
        },
        {
            id: 3,
            title: "Navigating the Fix and Flip Market in 2024: Opportunities and Challenges",
            excerpt: "Explore the current state of the fix and flip market and discover emerging opportunities for savvy investors.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2024-01-01",
            author: "Tyler Otterbein",
            category: "Market Analysis",
            readTime: "6 min read"
        },
        {
            id: 4,
            title: "Transforming the Real Estate Landscape: The Impact of AI",
            excerpt: "Understand how artificial intelligence is reshaping real estate investment strategies and property management.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2023-12-20",
            author: "Angelica Brennan",
            category: "Technology",
            readTime: "8 min read"
        },
        {
            id: 5,
            title: "Real Estate Investing for Retirement: Building Wealth through Property Portfolio",
            excerpt: "Discover strategies for building a robust real estate portfolio that will secure your financial future in retirement.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2023-12-12",
            author: "Dwight Alexandro",
            category: "Retirement Planning",
            readTime: "10 min read"
        },
        {
            id: 6,
            title: "Sustainable Living and Energy Efficiency in Real Estate",
            excerpt: "Learn about the growing importance of sustainable features and energy efficiency in modern real estate investments.",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2023-12-05",
            author: "James Charlot",
            category: "Sustainability",
            readTime: "6 min read"
        }
    ],
    faq: [
        {
            id: 1,
            question: "How do I contact Fare Trade Capital?",
            answer: "If you have any questions, please contact us at info@faretradecapital.com or fill out our contact form on this website."
        },
        {
            id: 2,
            question: "What types of investment opportunities does Fare Trade Capital offer?",
            answer: "We specialize in several investment strategies including Fix & Flip projects, Multi-Family Development Program, Apartment Buildings, Single-family rentals, Single-family occupied homes, Commercial properties, Mixed-use, Wholesale development, and our Fix n' Flip Investment Program with Distressed properties and Distressed homeowners."
        },
        {
            id: 3,
            question: "How do I get started as an investor with Fare Trade Capital?",
            answer: "To get started, we recommend scheduling a consultation with our team. During this meeting, we'll discuss your investment goals, risk tolerance, and available capital to determine the best investment strategy for your needs."
        },
        {
            id: 4,
            question: "What is the minimum investment amount?",
            answer: "Our minimum investment varies depending on the specific project and investment type. Generally, our Fix & Flip projects start at $50,000, while our Multi-Family Development projects may require higher minimum investments. Contact us for specific details about current opportunities."
        },
        {
            id: 5,
            question: "Can I invest through my IRA?",
            answer: "Yes, we work with several IRA custodians and can help facilitate investments through self-directed IRAs. This can be an excellent way to diversify your retirement portfolio with real estate investments while maintaining tax advantages."
        },
        {
            id: 6,
            question: "What type of tax documents will I receive?",
            answer: "Depending on the investment structure, you will receive appropriate tax documents such as K-1s for partnership investments, 1099s for interest payments, or other relevant tax forms. We recommend consulting with your tax advisor to understand the tax implications of your investments."
        },
        {
            id: 7,
            question: "How often will I receive distributions?",
            answer: "Distribution frequency varies by investment type. Fix & Flip projects typically provide returns upon project completion and sale, while rental properties may provide quarterly distributions. We'll clearly outline the expected distribution schedule for each investment opportunity."
        },
        {
            id: 8,
            question: "Are investment returns guaranteed?",
            answer: "No, like all real estate investments, returns are not guaranteed, and there are risks involved. However, our experienced team works diligently to minimize risks through thorough due diligence, market analysis, and strategic planning."
        },
        {
            id: 9,
            question: "Does Fare Trade Capital offer pre-coaching?",
            answer: "Yes, we provide educational resources and mentorship to help investors understand the real estate investment process and make informed decisions about their investment strategies."
        }
    ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize Website
function initializeWebsite() {
    setupNavigation();
    setupForms();
    setupAnimations();
    loadTeamMembers();
    loadProjects();
    loadBlogPosts();
    loadFAQ();
    setupProjectFilters();
    
    // Initialize Aurora Hero
    new AuroraHero();
    setupFAQToggle();
    setupScrollEffects();
    setupChatWidget();
    
    // Export data to JSON for conversational AI
    exportDataToJSON();
}

// Navigation Setup
function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    // Create mobile backdrop
    const mobileBackdrop = document.createElement('div');
    mobileBackdrop.className = 'mobile-backdrop';
    document.body.appendChild(mobileBackdrop);

    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        mobileBackdrop.classList.toggle('active');
    });

    // Close mobile menu when clicking backdrop
    mobileBackdrop.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        mobileBackdrop.classList.remove('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            mobileBackdrop.classList.remove('active');
        });
    });

    // Active link highlighting
    const currentPagePath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPagePath || (currentPagePath === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item.has-dropdown')) {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            mobileBackdrop.classList.remove('active');
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Set active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Forms Setup
function setupForms() {
    const quickForm = document.getElementById('quick-form');
    const contactForm = document.getElementById('contact-form');

    // Quick form submission
    quickForm?.addEventListener('submit', handleFormSubmission);
    
    // Contact form submission
    contactForm?.addEventListener('submit', handleFormSubmission);

    // Form validation
    setupFormValidation();
}

// Form Submission Handler
function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        if (data[key]) {
            // Handle multiple values (checkboxes)
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    }
    
    // Show loading spinner
    showLoadingSpinner();
    
    // Simulate form submission
    setTimeout(() => {
        hideLoadingSpinner();
        showSuccessMessage('Thank you for your interest! We will contact you soon.');
        form.reset();
    }, 2000);
    
    // In a real application, you would send this data to your server
    console.log('Form submitted:', data);
}

// Form Validation Setup
function setupFormValidation() {
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Validate Field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing error
    clearFieldError(e);
    
    // Check if field is empty
    if (!value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    // Email validation
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Phone validation
    if (field.type === 'tel') {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Please enter a valid phone number');
            return false;
        }
    }
    
    return true;
}

// Show Field Error
function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.5rem';
    
    field.parentNode.appendChild(errorDiv);
}

// Clear Field Error
function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Load Team Members
function loadTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;
    
    // Skip the first team member (CVO) as it's displayed separately
    const teamMembers = siteData.team.slice(1);
    
    teamGrid.innerHTML = teamMembers.map(member => `
        <div class="team-member" data-aos="fade-up">
            <div class="team-member-image">
                <img src="${member.image}" alt="${member.name}" loading="lazy">
            </div>
            <h3 class="team-member-name">${member.name}</h3>
            <p class="team-member-title">${member.title}</p>
        </div>
    `).join('');
}

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = siteData.projects.map(project => `
        <div class="project-card" data-filter="${project.type}" data-aos="fade-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-meta">
                    <span class="project-location">${project.location}</span>
                    <span class="project-date">${formatDate(project.completionDate)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Load Blog Posts
function loadBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = siteData.blog.map(post => `
        <article class="blog-card" data-aos="fade-up">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="blog-info">
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span class="blog-author">By ${post.author}</span>
                    <span class="blog-date">${formatDate(post.date)}</span>
                    <span class="blog-read-time">${post.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Load FAQ
function loadFAQ() {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;
    
    faqContainer.innerHTML = siteData.faq.map(item => `
        <div class="faq-item">
            <button class="faq-question" data-faq-id="${item.id}">
                ${item.question}
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">
                    ${item.answer}
                </div>
            </div>
        </div>
    `).join('');
}

// Setup Project Filters
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const cardFilter = card.getAttribute('data-filter');
                
                if (filter === 'all' || cardFilter === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Setup FAQ Toggle
function setupFAQToggle() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Setup Scroll Effects
function setupScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe elements with animations
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Setup Chat Widget
function setupChatWidget() {
    const chatButton = document.getElementById('chat-button');
    
    chatButton?.addEventListener('click', () => {
        // In a real application, this would open a chat widget
        showSuccessMessage('Chat feature coming soon! Please use our contact form for now.');
    });
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function showLoadingSpinner() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.classList.add('active');
    }
}

function hideLoadingSpinner() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.classList.remove('active');
    }
}

function showSuccessMessage(message) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(successDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 300);
    }, 5000);
}

// Export Data to JSON
function exportDataToJSON() {
    const jsonData = {
        exportDate: new Date().toISOString(),
        company: siteData.company,
        team: siteData.team,
        projects: siteData.projects,
        blog: siteData.blog,
        faq: siteData.faq,
        services: [
            "Fix & Flip Investments",
            "Multi-Family Development",
            "Commercial Real Estate",
            "Distressed Asset Redevelopment",
            "Real Estate Consulting",
            "Investment Advisory"
        ],
        investmentTypes: [
            "Fix & Flip",
            "Multi-Family",
            "Commercial",
            "Rental Properties",
            "Wholesale Development"
        ]
    };
    
    // Create downloadable JSON file
    const dataStr = JSON.stringify(jsonData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    // Store URL for potential download
    window.fareTradeDataURL = url;
    
    // Also store in localStorage for easy access
    localStorage.setItem('fareTradeData', dataStr);
    
    console.log('Site data exported to JSON and stored in localStorage');
}

// Download JSON Data (can be called from console)
function downloadSiteData() {
    if (window.fareTradeDataURL) {
        const a = document.createElement('a');
        a.href = window.fareTradeDataURL;
        a.download = 'fare-trade-capital-data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

// Additional CSS animations
const additionalStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .error {
        border-color: #e74c3c !important;
    }
    
    .success-message {
        animation: slideInRight 0.3s ease;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Performance optimization
function optimizeImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizeImages);

// Expose functions globally for debugging
window.fareTradeCapital = {
    exportDataToJSON,
    downloadSiteData,
    siteData,
    showSuccessMessage,
    showLoadingSpinner,
    hideLoadingSpinner
}; 