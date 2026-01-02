document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");

    userForm.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page reload

        const username = document.getElementById("username").value.trim();

        if (!username) {
            alert("Please enter a username");
            return;
        }

        // Save username
        localStorage.setItem("quizUsername", username);

        // Go to next page
        window.location.href = "changed.html";
    });
});

