document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    // Get form values
    const username = document.getElementById("username").value; // Corrected here
    const password = document.getElementById("password").value;
    // Simulate login validation (replace with server-side validation in real applications)
    if ((username === "ziaullah" || username === "admin" || username === "iqra") && 
        (password === "1234" || password === "12345")) {
        alert("Login successful!");
        window.location.href = "ebay.html"; // Redirect to a new page
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
