document.querySelector('.cta-btn').addEventListener('click', function() {
    alert('Order feature coming soon!');
});

document.querySelectorAll('.dish-card').forEach(card => {
    card.addEventListener('click', function() {
        const dishName = this.querySelector('h3').textContent;
        console.log(`Selected: ${dishName}`);
    });
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    });
});

const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷'];
const container = document.querySelector('.falling-flowers');

for (let i = 0; i < 15; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * 100 + '%';
    flower.style.animationDuration = (Math.random() * 3 + 5) + 's';
    flower.style.animationDelay = Math.random() * 5 + 's';
    flower.style.opacity = Math.random() * 0.5 + 0.3;
    container.appendChild(flower);
}
