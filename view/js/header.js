
// script.js
function inicializarPagina() {
    const container = document.querySelector('.container_forma');
    const forma = document.querySelector('.forma');
    /*window.innerWidth para obter a largura da tela do dispositivo em pixels*/
 const larguraTela = window.innerWidth;
 /*offsetWidth para obter a largura da forma modelo em pixels.*/
 const larguraForma = forma.offsetWidth;
 /*Dividimos a largura da tela pela largura da forma modelo e usamos Math.ceil() 
 para arredondar para cima o número de cópias necessárias.*/
 const numCopias = Math.ceil(larguraTela / larguraForma);
 /*isso intera e faz um clone da forma*/
 for (let i = 0; i < numCopias; i++) {
     const clone = forma.cloneNode(true);
     container.appendChild(clone);
 }
}




 /*mobile*/


function handleResize() {
    if (window.innerWidth <= 600) {
        
        var logo = document.querySelector('#logo-header');
        var navegar = document.querySelector('.navegar-ul-mobile');
        var aberto = false;

        logo.addEventListener('click', () => {
            if (!aberto) {
                navegar.style.transform = 'translateX(0)';
            } else {
                navegar.style.transform = 'translateX(-101%)';
            }
            aberto = !aberto;
        });
    }
}
const sacolaObj ={
    sacola: document.querySelector('.lista-compras'),
    isTrue :false,
    verificar(){
        if (this.isTrue) {
            
            this.fechar();
        }else{
            this.abrir();
        }
    },
   

    abrir: function(){
        this.sacola.style.display = 'block';
        this.isTrue = true;
    },

    fechar: function(){
        this.sacola.style.display = 'none';
        this.isTrue = false;
    }

}

function carrinho(){
    sacolaObj.verificar();
}

// Chamada da função de inicialização na página HTML
// Adiciona um ouvinte de evento para o redimensionamento da janela
window.addEventListener('resize', handleResize);

// Adiciona um ouvinte de evento para o carregamento da página
window.addEventListener('load', handleResize);

inicializarPagina();