function copyEmail() {
            const email = "vincetchan302@gmail.com";
            
            // Use the modern clipboard API if available
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showCopyTooltip();
                }).catch(err => {
                    // Fallback method
                    fallbackCopyTextToClipboard(email);
                });
            } else {
                // Fallback method for older browsers
                fallbackCopyTextToClipboard(email);
            }
        }
        
        function fallbackCopyTextToClipboard(text) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                showCopyTooltip();
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }
            
            document.body.removeChild(textArea);
        }
        
        function showCopyTooltip() {
            const tooltip = document.getElementById('copy-tooltip');
            tooltip.classList.add('show');
            
            setTimeout(() => {
                tooltip.classList.remove('show');
            }, 2000);
        }
        
        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navbarMenu = document.querySelector('.navbar__menu');
        
        mobileMenu.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });

        window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    // Add the class that triggers the transition to hide the loader
    loader.classList.add("loader-hidden");

    // Once the transition ends, remove the element from the DOM
    loader.addEventListener("transitionend", () => {
        loader.remove();
    });
});

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__container')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

 window.addEventListener("load", () => {
            const loader = document.querySelector(".loader");
            
            // Optional: Add a minimum display time for the loader
            setTimeout(() => {
                loader.classList.add("loader-hidden");
                
                // Remove the loader from DOM after transition
                loader.addEventListener("transitionend", () => {
                    loader.remove();
                });
            }, 1000); // 1 second minimum display time
        });

function downloadCV() {
    // Track the download (optional - for analytics)
    console.log('CV downloaded');
    
    // You can add more functionality here if needed
    // For example, showing a notification
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.textContent = 'CV download started!';
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
    
    // The actual download is handled by the HTML download attribute
    return true;
}