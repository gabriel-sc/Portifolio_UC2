
document.addEventListener('DOMContentLoaded', () => {
    
    init();
});

function init() {
    
    configurarEfeitoDigitacao();
    configurarMenuHamburguer();
    
}



function configurarEfeitoDigitacao() {
    const descricaoElement = document.querySelector("#sobre h3");

    if (!descricaoElement) {
        console.warn("Elemento #sobre h3 não encontrado. O efeito de digitação não será aplicado.");
        return; 
    }
    
    
    const textoOriginal = descricaoElement.textContent.trim();
    const tempoPorCaractere = 75; 

    
    aplicarEfeitoDigitacao(descricaoElement, textoOriginal, tempoPorCaractere);
}



function aplicarEfeitoDigitacao(element, texto, tempo) {
    let indiceCaractere = 0;
    element.textContent = ""; 

    function escreverProximo() {
        if (indiceCaractere < texto.length) {
            element.textContent += texto.charAt(indiceCaractere);
            indiceCaractere++;
            setTimeout(escreverProximo, tempo);
        } else {
        
            setTimeout(apagarParaRecomecar, 3000); 
        }
    }

    function apagarParaRecomecar() {
        if (element.textContent.length > 0) {
            element.textContent = element.textContent.slice(0, -1);
            setTimeout(apagarParaRecomecar, tempo / 2); 
        } else {
            indiceCaractere = 0; 
            escreverProximo(); 
        }
    }

    escreverProximo();
}



function configurarMenuHamburguer() {
    const menuButton = document.querySelector("#menu");
    const menu = document.querySelector(".menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", () => {
        
            menu.classList.toggle("open");
        });
        

        const linksMenu = menu.querySelectorAll('a');
        linksMenu.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove("open");
            });
        });
    }
}