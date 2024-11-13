document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const menuItems = document.querySelectorAll('.menu-item');

        menuItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});




function submitReservation() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = parseInt(document.getElementById('guests').value);


    if (guests > 50) {
        alert("The number of guests must be less than or equal 50.");
        return;
    }

    
    if (name && surname && phone && date && time && guests) {
        alert(`Reservation confirmed for ${name} ${surname} on ${date} at ${time} for ${guests} guests.`);
    } else {
        alert("Please fill in all fields.");
    }
}




function submitContact() {
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        alert(`Thanks for your feedback! We will text you back as soon as we can.`);
    } else {
        alert("Please fill your email and leave any message that you want");
    }
}