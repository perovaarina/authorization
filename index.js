document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Save the username and password to localStorage
    localStorage.setItem(username, password);
    document.getElementById('message').textContent = 'Регистрация успешна!';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve the password from localStorage
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        document.getElementById('message').textContent = 'Вы вошли!';
    } else {
        document.getElementById('message').textContent = 'Неправильный логин или пароль';
    }
});