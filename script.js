function changeText(){
    var pt = document.getElementsByClassName("pt-BR");
    var en = document.getElementsByClassName("en");
    var i=0;
    if(pt[0].style.display == "none"){
        for(i=0;i<pt.length;i++){
            pt[i].style.display = "block";
        }
        i=0;
        for(i=0;i<en.length;i++){
            en[i].style.display = "none";
        }
    }
    else{
        for(i=0;i<pt.length;i++){
            pt[i].style.display = "none";
        }
        i=0;
        for(i=0;i<en.length;i++){
            en[i].style.display = "block";
        }
    }
    
}

window.changeText = changeText;