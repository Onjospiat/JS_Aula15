function changeText(){
    var x = document.getElementsByTagName("h1");
    x[0].innerHTML = "Hello!";
}

window.changeText = changeText;