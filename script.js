function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "piu" && pass === "lub u") {
        window.location.href = "memories.html";
    } else {
        document.getElementById("error").innerText =
        "Wrong username or password 😢";
    }
}