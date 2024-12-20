const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');

function showLogin() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
}

function showSignup() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
}
 // Handle Google login response
 function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    // Optional: Send the token to your server for verification
    // fetch('/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ token: response.credential })
    // }).then(res => res.json()).then(data => console.log(data));
}
// Phone number validation
signupForm.addEventListener('submit', function(event) {
    const phoneNumber = phoneInput.value;
    const phoneRegex = /^\+91[0-9]{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
        event.preventDefault(); // Prevent form submission
        phoneError.textContent = 'Please enter a valid phone number in the format +91 XXXXXXXXXX';
    } else {
        phoneError.textContent = '';
    }
});