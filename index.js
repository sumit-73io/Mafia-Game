const card = document.getElementById('roleCard');

// Function to show the role
function revealCard(event) {
    event.preventDefault(); // Stop default browser behaviors
    card.classList.add('revealed');
    
    // Optional: Add haptic feedback (a short buzz) for supported devices
    if (navigator.vibrate) {
        navigator.vibrate(50); 
    }
}

// Function to hide the role
function hideCard(event) {
    event.preventDefault();
    card.classList.remove('revealed');
}

// --- TOUCH EVENTS (For Mobile Phones) ---
// { passive: false } is required so we can use event.preventDefault()
card.addEventListener('touchstart', revealCard, { passive: false });
card.addEventListener('touchend', hideCard);
card.addEventListener('touchcancel', hideCard); // Failsafe if touch is interrupted (e.g., a phone call comes in)

// --- MOUSE EVENTS (For Desktop Testing) ---
card.addEventListener('mousedown', revealCard);
card.addEventListener('mouseup', hideCard);
card.addEventListener('mouseleave', hideCard); // Failsafe if the mouse drags outside the card

// --- PREVENT CONTEXT MENU ---
// Stops the right-click or long-press menu from appearing
card.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});