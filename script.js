let respectCount = 0;
const button = document.getElementById('respect-button');
const counter = document.getElementById('respect-counter');

button.addEventListener('click', (e) => {
    // Prevent default to avoid navigation on first click
    e.preventDefault();
    
    respectCount++;
    counter.textContent = respectCount;
    
    // Instagram themed symbols
    const symbols = ['📸', '💝', '✨', '💫', '💖'];
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createFloatingElement(symbols);
        }, i * 200);
    }
    
    // Navigate to Instagram after a short delay
    setTimeout(() => {
        window.open('https://instagram.com/ilias_drm', '_blank');
    }, 500);
});

function createFloatingElement(symbols) {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const particle = document.createElement('span');
    particle.textContent = symbol;
    particle.className = 'floating-heart';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = '100vh';
    document.body.appendChild(particle);
    
    particle.animate([
        { 
            transform: `translate(0, 0) rotate(0deg) scale(1)`,
            opacity: 1 
        },
        { 
            transform: `translate(${Math.random() * 100 - 50}px, -100vh) rotate(${Math.random() * 360}deg) scale(0)`,
            opacity: 0 
        }
    ], {
        duration: 1500,
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}
