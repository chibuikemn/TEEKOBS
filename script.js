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
