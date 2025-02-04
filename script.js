let respectCount = 0;
const button = document.getElementById('respect-button');
const counter = document.getElementById('respect-counter');

button.addEventListener('click', () => {
    respectCount++;
    counter.textContent = respectCount;
    
    // Crée des coeurs flottants
    const symbols = ['💖', '✨', '💝', '💌', '🌸'];
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            const particle = document.createElement('span');
            particle.textContent = symbol;
            particle.style.position = 'fixed';
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = '100vh';
            particle.style.fontSize = '1.5rem';
            particle.style.zIndex = '1000';
            document.body.appendChild(particle);
            
            particle.animate([
                { 
                    transform: `translate(0, 0) rotate(0deg)`,
                    opacity: 1 
                },
                { 
                    transform: `translate(${Math.random() * 100 - 50}px, -100vh) rotate(${Math.random() * 360}deg)`,
                    opacity: 0 
                }
            ], {
                duration: 2000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }, i * 200);
    }
});
