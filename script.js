var language = localStorage.getItem('language',language) || "pt-BR"; //Pega a variável offline como cookie

function switchLang(){ //Função no botão que muda o idioma
    if(language == "pt-BR"){
        language = "en";
    }
    else{
        language = "pt-BR";
    }
    changeText(); //chama a função que muda o texto
}

function changeText(){ //Essa função esconde o texto em um idioma e exibe o de outro idioma
    // let é usado para variáveis locais
    let pt = document.getElementsByClassName("pt-BR"); // Cria uma lista com todos os elementos com classe='pt-BR'
    let en = document.getElementsByClassName("en"); //Cria uma lista com todos os elementos com classe='en'
    let i=0;

    localStorage.setItem('language', language); //Define o idioma (pt-BR || en)

    if(language == "pt-BR"){ //Exibe os itens da class pt-BR
        for(i=0;i<pt.length;i++){
            pt[i].style.display = "block";
        }
        i=0;
        for(i=0;i<en.length;i++){ //Esconde os itens da class en
            en[i].style.display = "none";
        }
    }
    else{
        for(i=0;i<pt.length;i++){ // Esconde os itens da class pt-BR
            pt[i].style.display = "none";
        }
        i=0;
        for(i=0;i<en.length;i++){ //Exibe os itens da class en
            en[i].style.display = "block";
        }
    }
    
}

window.changeText = changeText;
window.switchLang = switchLang;