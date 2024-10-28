
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('nav a');
        const projectCards = document.querySelectorAll('.project-card');
        const modal = document.getElementById('project-modal');
        const closeModal = document.querySelector('.close-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalImage = document.getElementById('modal-image');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            observer.observe(section);
        });

        const projectData = {
            1: {
                title: "Calculator",
                description: "This project features a clean interface that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The layout is responsive, ensuring a seamless user experience across devices, with a focus on intuitive design and usability.",
                image: "Project 1.png"
            },
            2: {
                title: "Music Player",
                description: "The application features a dynamic playlist, play/pause controls, volume adjustment, and a progress bar for tracking playback. The design is modern and responsive, providing an enjoyable experience for music enthusiasts on any device.",
                image: "Projects 2.png"
            },
            3: {
                title: "Amazon Clone",
                description: "This project showcases essential features such as product listings, a shopping cart, and user authentication. The interface is designed to mimic the user experience of a real online store, with responsive design elements that ensure accessibility across various screen sizes.",
                image: "Project 3 a.png"
            }
        };

        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                const project = projectData[projectId];
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                
                modalImage.src = project.image;

                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            alert('Form submitted! (This is a placeholder action)');
        });
    });
