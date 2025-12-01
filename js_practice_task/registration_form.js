document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let cpassword = document.getElementById("cpassword").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let valid = true;

    // clear old messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";
    document.getElementById("cpassError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    // Full Name (simple check)
    if (fullName === "") {
        document.getElementById("nameError").innerText = "Full name is required.";
        valid = false;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        valid = false;
    }

    // Password length
    if (password.length < 6) {
        document.getElementById("passError").innerText = "Password must be at least 6 characters.";
        valid = false;
    }

    // Confirm password
    if (password !== cpassword) {
        document.getElementById("cpassError").innerText = "Passwords do not match.";
        valid = false;
    }

    // Phone number digits only
    if (isNaN(phone) || phone === "") {
        document.getElementById("phoneError").innerText = "Phone must contain digits only.";
        valid = false;
    }

    // All fields valid
    if (valid === true) {
        document.getElementById("successMessage").innerText = "Registration Successful!";
    }
});
