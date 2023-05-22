    var users = [
        { username: "admin", password: "password" },
        { username: "user1", password: "pass123" },
        { username: "user2", password: "secret" }
    ];

    function handleSubmit(event) {
        event.preventDefault();
      
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
      
        if (username === "" || password === "") {
          alert("Please enter both username and password.");
          return;
        }
      
        var user = users.find(function (user) {
          return user.username === username && user.password === password;
        });

        if (user) {
            // alert("Login successful!");
            window.location.href = "home.html";
          } else {
            alert("Invalid username or password.");
          }
        }
        
        document.getElementById("loginForm").addEventListener("submit", handleSubmit);