document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        el: '#app',
        data: {
            aboutText: 'Welcome to JR Visit, your passport to unforgettable journeys and adventures around the world...',
            isHeaderSticky: false,
            showPackagesButton: true,
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                if (window.scrollY > 100) {
                    this.isHeaderSticky = true;
                } else {
                    this.isHeaderSticky = false;
                }
            },
            smoothScroll(target) {
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            },
        }
    });
});
