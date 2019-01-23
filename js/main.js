var btn1 = document.getElementById("dodaj");
var btn2 = document.getElementById("usun");
var content = document.getElementById("tekst");

btn1.onclick = function() {
    content.textContent = "Akademia108";
}

btn2.onclick = function() {
    content.textContent = " ";
}