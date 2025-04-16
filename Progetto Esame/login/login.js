


document.getElementById("tasto_accedi").addEventListener("click", function () {
    console.log("entrato")
    const username = document.getElementById("username").value;
    const password = document.getElementById("pass").value;

    function adminLogin() {
        localStorage.setItem("username", username)
    } 

    if (username === "admin" && password === "its") {
        console.log("entrato")
        window.location.href = "file:///C:/Users/A618apulia/Desktop/Progetto%20Esame/magazzino/magazzino.html";
        adminLogin()
    } else {
        alert("No, No, No ma che fai!!");
    }
});

document.getElementById("home").addEventListener("click", function(){
    window.location.href = "file:///C:/Users/A618apulia/Desktop/Progetto%20Esame/main/main.html";
})

