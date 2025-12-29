// Animate role cards on page load
window.addEventListener('load', () => {
    const roleCards = document.querySelectorAll('.role-card');
    roleCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
});

// Add hover sound effect (optional - you can remove this if you don't want it)
const roleCards = document.querySelectorAll('.role-card');
roleCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'all 0.3s ease';
    });
});

// Add click feedback
roleCards.forEach(card => {
    card.addEventListener('click', () => {
        const roleName = card.querySelector('h2').textContent;
        console.log(`You clicked on the ${roleName} role!`);
        // You can add more functionality here, like showing a modal with more details
    });
});