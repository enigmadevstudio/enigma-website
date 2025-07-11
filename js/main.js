        // Simple Image Slider (without arrows and dots)
        const sliderImages = [
            'https://placehold.co/1920x1080/1f2937/d1d5db?text=Enigma+Games',
            'https://placehold.co/1920x1080/2d3748/d1d5db?text=Enigma+Apps'
        ];

        let currentSlideIndex = 0;
        const slideElements = document.querySelectorAll('#image-slider-container img');
        // const imageSliderContainer = document.getElementById('image-slider-container'); // No longer needed for manual interaction

        function showSlide(index) {
            slideElements.forEach((slide, i) => {
                slide.classList.remove('opacity-100', 'z-10');
                slide.classList.add('opacity-0', 'z-0');
            });
            slideElements[index].classList.remove('opacity-0', 'z-0');
            slideElements[index].classList.add('opacity-100', 'z-10');
            currentSlideIndex = index;
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % sliderImages.length;
            showSlide(currentSlideIndex);
        }

        // Removed prevSlide function as it's not needed for auto-only
        // function prevSlide() {
        //     currentSlideIndex = (currentSlideIndex - 1 + sliderImages.length) % sliderImages.length;
        //     showSlide(currentSlideIndex);
        // }

        // Automatic slide change
        let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

        // Removed pause on hover as manual interaction is being removed
        // const homeSection = document.getElementById('home');
        // homeSection.addEventListener('mouseenter', () => clearInterval(slideInterval));
        // homeSection.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));

        // Removed drag/touch functionality for the main image slider
        // let isSliderDown = false;
        // let sliderStartX;
        
        // if (imageSliderContainer) {
        //     // Mouse events for desktop drag
        //     imageSliderContainer.addEventListener('mousedown', (e) => {
        //         isSliderDown = true;
        //         sliderStartX = e.pageX;
        //         clearInterval(slideInterval); // Stop auto-slide on interaction
        //     });

        //     imageSliderContainer.addEventListener('mouseup', (e) => {
        //         if (!isSliderDown) return;
        //         isSliderDown = false;
        //         const endX = e.pageX;
        //         const diffX = sliderStartX - endX; // Positive if swiped left, negative if swiped right

        //         if (Math.abs(diffX) > 50) { // Threshold for a valid swipe
        //             if (diffX > 0) { // Swiped left
        //                 nextSlide();
        //             } else { // Swiped right
        //                 prevSlide();
        //             }
        //         }
        //         slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
        //     });

        //     imageSliderContainer.addEventListener('mousemove', (e) => {
        //         if (!isSliderDown) return;
        //         e.preventDefault(); // Prevent text selection etc.
        //     });

        //     imageSliderContainer.addEventListener('mouseleave', () => {
        //         isSliderDown = false;
        //     });


        //     // Touch events for mobile slide
        //     imageSliderContainer.addEventListener('touchstart', (e) => {
        //         isSliderDown = true;
        //         sliderStartX = e.touches[0].pageX;
        //         clearInterval(slideInterval); // Stop auto-slide on interaction
        //     });

        //     imageSliderContainer.addEventListener('touchend', (e) => {
        //         if (!isSliderDown) return;
        //         isSliderDown = false;
        //         const endX = e.changedTouches[0].pageX;
        //         const diffX = sliderStartX - endX;

        //         if (Math.abs(diffX) > 50) { // Threshold for a valid swipe
        //             if (diffX > 0) { // Swiped left
        //                 nextSlide();
        //             } else { // Swiped right
        //                 prevSlide();
        //             }
        //         }
        //         slideInterval = setInterval(nextSlide, 5000); // Restart auto-slide
        //     });

        //     imageSliderContainer.addEventListener('touchmove', (e) => {
        //         if (!isSliderDown) return;
        //         e.preventDefault(); // Prevent vertical scrolling while swiping horizontally
        //     });
        // }



        // About Us Section Animated Heading (Typing Effect)
        const animatedHeadingElement = document.getElementById('animated-heading');
        const headingTexts = [
            "ABOUT ENIGMA",
            "WHO WE ARE ?"
        ];
        let currentHeadingTextIndex = 0;
        let headingCharIndex = 0;
        let isHeadingDeleting = false;
        let headingTypingSpeed = 150;
        let headingDeletingSpeed = 50;
        let headingDelayBetweenTexts = 2000;

        function typeHeading() {
            const currentText = headingTexts[currentHeadingTextIndex];

            if (isHeadingDeleting) {
                animatedHeadingElement.textContent = currentText.substring(0, headingCharIndex - 1);
                headingCharIndex--;
            } else {
                animatedHeadingElement.textContent = currentText.substring(0, headingCharIndex + 1);
                headingCharIndex++;
            }

            let currentSpeed = headingTypingSpeed;
            if (isHeadingDeleting) {
                currentSpeed = headingDeletingSpeed;
            }

            if (!isHeadingDeleting && headingCharIndex === currentText.length) {
                currentSpeed = headingDelayBetweenTexts;
                isHeadingDeleting = true;
            } else if (isHeadingDeleting && headingCharIndex === 0) {
                isHeadingDeleting = false;
                currentHeadingTextIndex = (currentHeadingTextIndex + 1) % headingTexts.length;
                currentSpeed = headingTypingSpeed;
            }

            setTimeout(typeHeading, currentSpeed);
        }

        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('mobile-menu-hidden');
            mobileMenu.classList.toggle('mobile-menu-visible');
        });

        // Horizontal Scroll with Drag/Touch for Products Section
        const productsScrollContainer = document.getElementById('products-scroll-container');
        let isProductsDown = false;
        let productsStartX;
        let productsScrollLeft;

        if (productsScrollContainer) {
            productsScrollContainer.addEventListener('mousedown', (e) => {
                isProductsDown = true;
                productsScrollContainer.classList.add('active');
                productsStartX = e.pageX - productsScrollContainer.offsetLeft;
                productsScrollLeft = productsScrollContainer.scrollLeft;
            });

            productsScrollContainer.addEventListener('mouseleave', () => {
                isProductsDown = false;
                productsScrollContainer.classList.remove('active');
            });

            productsScrollContainer.addEventListener('mouseup', () => {
                isProductsDown = false;
                productsScrollContainer.classList.remove('active');
            });

            productsScrollContainer.addEventListener('mousemove', (e) => {
                if (!isProductsDown) return;
                e.preventDefault();
                const x = e.pageX - productsScrollContainer.offsetLeft;
                const walk = (x - productsStartX) * 1.5;
                productsScrollContainer.scrollLeft = productsScrollLeft - walk;
            });

            productsScrollContainer.addEventListener('touchstart', (e) => {
                isProductsDown = true;
                productsStartX = e.touches[0].pageX - productsScrollContainer.offsetLeft;
                productsScrollLeft = productsScrollContainer.scrollLeft;
            });

            productsScrollContainer.addEventListener('touchend', () => {
                isProductsDown = false;
            });

            productsScrollContainer.addEventListener('touchmove', (e) => {
                if (!isProductsDown) return;
                e.preventDefault();
                const x = e.touches[0].pageX - productsScrollContainer.offsetLeft;
                const walk = (x - productsStartX) * 1.5;
                productsScrollContainer.scrollLeft = productsScrollLeft - walk;
            });
        }


        // Horizontal Scroll with Drag/Touch for Blog Section
        const blogScrollContainer = document.getElementById('blog-scroll-container');
        let isBlogDown = false;
        let blogStartX;
        let blogScrollLeft;

        if (blogScrollContainer) {
            // Mouse events for desktop drag
            blogScrollContainer.addEventListener('mousedown', (e) => {
                isBlogDown = true;
                blogScrollContainer.classList.add('active');
                blogStartX = e.pageX - blogScrollContainer.offsetLeft;
                blogScrollLeft = blogScrollContainer.scrollLeft;
            });

            blogScrollContainer.addEventListener('mouseleave', () => {
                isBlogDown = false;
                blogScrollContainer.classList.remove('active');
            });

            blogScrollContainer.addEventListener('mouseup', () => {
                isBlogDown = false;
                blogScrollContainer.classList.remove('active');
            });

            blogScrollContainer.addEventListener('mousemove', (e) => {
                if (!isBlogDown) return;
                e.preventDefault();
                const x = e.pageX - blogScrollContainer.offsetLeft;
                const walk = (x - blogStartX) * 1.5; // Multiplier for faster scroll
                blogScrollContainer.scrollLeft = blogScrollLeft - walk;
            });

            // Touch events for mobile slide
            blogScrollContainer.addEventListener('touchstart', (e) => {
                isBlogDown = true;
                blogStartX = e.touches[0].pageX - blogScrollContainer.offsetLeft;
                blogScrollLeft = blogScrollContainer.scrollLeft;
            });

            blogScrollContainer.addEventListener('touchend', () => {
                isBlogDown = false;
            });

            blogScrollContainer.addEventListener('touchmove', (e) => {
                if (!isBlogDown) return;
                e.preventDefault(); // Prevent vertical scrolling while swiping horizontally
                const x = e.touches[0].pageX - blogScrollContainer.offsetLeft;
                const walk = (x - blogStartX) * 1.5; // Multiplier for faster scroll
                blogScrollContainer.scrollLeft = blogScrollLeft - walk;
            });
        }

        // Intersection Observer for active navigation links
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observerOptions = {
            root: null, // viewport as root
            rootMargin: '0px',
            threshold: 0.5 // 50% of the section must be visible
        };

        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all links
                    navLinks.forEach(link => link.classList.remove('active'));
                    // Add active class to the corresponding link
                    const targetId = entry.target.id;
                    const activeLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            sectionObserver.observe(section);
        });


        // Initialize content on page load
        document.addEventListener('DOMContentLoaded', () => {
            showSlide(currentSlideIndex); // Show the first slide
            typeHeading(); // Start typing animation for About Us heading

            // Manually set active class for the initial section (e.g., home)
            const initialSection = document.querySelector('section[id="home"]');
            if (initialSection) {
                const initialLink = document.querySelector(`.nav-link[href="#home"]`);
                if (initialLink) {
                    initialLink.classList.add('active');
                }
            }
        });

        // Ensure header navigation links scroll smoothly and close mobile menu
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                // Close mobile menu if open
                if (mobileMenu.classList.contains('mobile-menu-visible')) {
                    mobileMenu.classList.remove('mobile-menu-visible');
                    mobileMenu.classList.add('mobile-menu-hidden');
                }
                const targetId = this.getAttribute('href').substring(1);
                document.querySelector(`#${targetId}`).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });