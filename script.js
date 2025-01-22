var language = localStorage.getItem('language',language) || "pt-BR";

function switchLang(){
    if(language == "pt-BR"){
        language = "en";
    }
    else{
        language = "pt-BR";
    }
    changeText();
}

function changeText(){
    let pt = document.getElementsByClassName("pt-BR");
    let en = document.getElementsByClassName("en");
    let i=0;

    localStorage.setItem('language', language);

    if(language == "pt-BR"){
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
window.switchLang = switchLang;