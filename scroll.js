let isScrolling;
window.addEventListener('scroll', function (e) {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {
        const sections = document.querySelectorAll('section');
        let closestSection = null;
        let minOffset = Number.MAX_VALUE;

        sections.forEach((section) => {
            const offset = Math.abs(section.offsetTop - window.pageYOffset);
            if (offset < minOffset) {
                minOffset = offset;
                closestSection = section;
            }
        });

        if(closestSection) {
            window.scrollTo({
                top: closestSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }, 66); // Adjust the timeout as needed for performance
}, false);
