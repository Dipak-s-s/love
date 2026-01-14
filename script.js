function login() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (user === "piu" && pass === "lub u") {
        window.location.href = "memories.html";
    } else {
        document.getElementById("error").innerText =
        "Wrong username or password 😢";
    }
}
