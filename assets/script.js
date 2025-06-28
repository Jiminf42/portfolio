const navMenu = document.querySelector('.nav-menu');
const menuButtons = document.querySelectorAll('.menu li');
const menuButtonsLabel = document.querySelectorAll('.menu li a');
document.querySelector('.menu-toggle-btn').addEventListener('click', function () {
    if (navMenu.style.left === '0px') {
        navMenu.style.left = '900px'
        // extra styling
        menuButtons.forEach(menuButton => {
            menuButton.style.transition = 'background 0.15s ease, border-bottom 0s ease'
            menuButton.style.borderBottom = '2px solid #393939';
        });
        menuButtonsLabel.forEach(menuButtonLabel => {
            menuButtonLabel.classList.remove('enabled');
            menuButtonLabel.classList.add('disabled');
        });
    } else {
        navMenu.style.left = '0px'
        // extra styling
        menuButtons.forEach(menuButton => {
            menuButton.style.transition = 'background 0.15s ease, border-bottom 1s ease'
            menuButton.style.borderBottom = '2px solid #76b900';
        });
        menuButtonsLabel.forEach(menuButtonLabel => {
            menuButtonLabel.classList.remove('disabled');
            menuButtonLabel.classList.add('enabled');
            setTimeout(() => {
                menuButtonLabel.classList.remove('enabled');
            }, 900);
        });
    }
})

// close menu when phone screen width
function setInitialMenuState() {
    if (window.innerWidth <= 736) {
        navMenu.style.left = '900px';
    } else {
        navMenu.style.left = '0px';
    }
}
setInitialMenuState();
window.addEventListener('resize', setInitialMenuState);

// close menu when clicked on menu item when phone screen width
menuButtonsLabel.forEach(menuButtonLabel => {
    menuButtonLabel.addEventListener('click', function () {
        if (window.innerWidth <= 736) {
            navMenu.style.left = '900px';
            menuButtons.forEach(menuButton => {
                menuButton.style.transition = 'background 0.15s ease, border-bottom 0s ease';
                menuButton.style.borderBottom = '2px solid #393939';
            });
            menuButtonsLabel.forEach(menuButtonLabel => {
                menuButtonLabel.classList.remove('enabled');
                menuButtonLabel.classList.add('disabled');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hoverContainers = document.querySelectorAll('.gradient-hover-container, .gradient-hover-container-contact');

    hoverContainers.forEach((container) => {
        container.addEventListener('mousemove', (event) => {
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left; // Mouse X relative to the container
            const y = event.clientY - rect.top;  // Mouse Y relative to the container

            // Update CSS variables for the specific container
            container.style.setProperty('--mouse-x', `${x}px`);
            container.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
