const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();

    if (username && password && email) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, password, email }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Signup failed.');
        }
    }
};

const signupForm = document.querySelector('.signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
};
