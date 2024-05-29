document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "menu.html";
    } else {
        alert("Invalid username or password");
    }
});

document.getElementById("create-account").addEventListener("click", function() {
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");

    if (username && password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find(user => user.username === username)) {
            alert("Username already exists");
            return;
        }

        let newUser = {
            username: username,
            password: password,
            gamesPlayed: 0,
            wins: 0,
            losses: 0
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created successfully");
    } else {
        alert("Username and password cannot be empty");
    }
});
