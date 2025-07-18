// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('name-input');
    const dateInput = document.getElementById('date-input');
    const messageInput = document.getElementById('message-input');

    const birthDate = new Date(dateInput.value);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Koreksi umur jika belum ulang tahun tahun ini
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (nameInput.value === '') {
        alert('Please enter your name.');
    } else {
        document.getElementById('message-output').innerHTML = `Thank you, ${nameInput.value} with age ${age}, for your message: "${messageInput.value}"`;
        nameInput.value = ''; // Clear the input field after submission
        dateInput.value = ''; // Clear the date input field
        messageInput.value = ''; // Clear the message input field
    }
}