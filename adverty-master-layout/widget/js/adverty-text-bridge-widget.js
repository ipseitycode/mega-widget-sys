function elementScrollAdd(element, direction) {
    let amount = 300;
    const idtElements = document.getElementById(element);
    idtElements.scrollLeft += (direction === 'right' ? amount : -amount);
}

function windowActionAdd() {
    console.clear();
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;
    const larguraTela = screen.width;
    const alturaTela = screen.height;
    console.log("Janela:" + larguraJanela + " x " + alturaJanela);
    console.log("Tela:" + larguraTela + " x " + alturaTela);
    console.log("---------------------");
}

function popupActionAdd(popup, button) {
    console.clear();
    const buttonClose = document.getElementById(button);
    const popupSmall = document.getElementById(popup);
    // const popupSmall2 = document.querySelector('.sp-adverty-bridge');
    buttonClose.addEventListener('click', () => {
        popupSmall.classList.remove('sp-adverty-bridge-open-close');
        popupSmall.classList.add('sp-adverty-bridge-close');
        console.log('close...')
    });
    setTimeout(() => {
        //popupSmall.classList.add('sp-adverty-bridge-open');
    }, 5000);
    /*
    popupSmall.addEventListener('mouseover', () => {
        popupSmall.classList.add('sp-adverty-bridge-resize');
        console.log('add resize...')
    });

    popupSmall.addEventListener('mouseout', () => {
        popupSmall.classList.remove('sp-adverty-bridge-resize');
        console.log('remove resize...')
    });
    */
}

function openPopupAdverty(prefixo) {
    //MESSAGE
    let element = document.getElementById('sp_message');
    let text = document.getElementById('sp_message_text');
    let pageTitle = document.getElementById('sp_page_header_text');
    element.style.backgroundcolor="red";
    //TITLE 
    text.innerHTML="/popup: " + popup + "<br />/button: " + button;
    //POPUP
    var popup = prefixo + "__popup";
    var button = prefixo + "__button";
    pageTitle.innerHTML="Layout: " + prefixo;
    
    //popupActionAdd(popup, button);
}

window.onload = () => {
    //popupActionAdd();
}

/*
window.addEventListener('load', function () {
    const box = document.querySelector('.box');
    setTimeout(() => {
        box.classList.add('loaded');
    }, 500);
});

window.addEventListener('resize', function () {
   
    popupActionAdd(); 
   
});

*/
//window.addEventListener('resize', test__fxSearch);
//document.getElementById('campoNome').addEventListener('input', validarNome);