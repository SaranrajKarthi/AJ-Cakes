let registerData = JSON.parse(localStorage.getItem("registerData")) || [];

function getRegDetails() {
    regData = {
        userName: document.getElementById("userName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    let existingUser = registerData.find(user => user.email === regData.email);
    if (existingUser) {
        alert("Email is already exists");
    }
    else {
        registerData.push(regData);
        localStorage.setItem("registerData", JSON.stringify(registerData));
        console.log(registerData);
        alert("Register Successful");

    }
}

function login() {
    let loginEmail = document.getElementById("email").value;
    let loginPassword = document.getElementById("password").value;

    // Check if user exists in registerData
    let user = registerData.find(user => user.email === loginEmail && user.password === loginPassword);

    if (user) {
        alert("Login successful")
        console.log("Login successful:", user);
        window.location.href="../website-main/main-page.html"
        // Implement your login success logic here
    } else {
        alert("Login failed: Invalid credentials");
        console.log("Login failed: Invalid credentials");
        // Implement your login failure logic here
    }
}