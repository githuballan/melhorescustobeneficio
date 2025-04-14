
function exibir(x) {
    x.nextElementSibling.style.display = "block";
}

function esconder(x){
 x.nextElementSibling.style.display = "none";
}

function mostraMenuAcessoRapido() {

    let menuEsquerda = document.getElementById('menu-lateral-esquerda');
    let lateralEsquerda = document.getElementById('lateral-esquerda');
    let header = document.getElementsByTagName('header')[0];
    let scrollY = window.scrollY; // Pega a posição do scroll Y
    let menuSite = document.getElementById('menu-site');
    let calcAlturaHeader= header.offsetHeight-scrollY+menuSite.offsetHeight; // Calcula a altura do header menos a altura do scroll Y mais a altura do menu site
    
        if(menuEsquerda.style.display === 'block')
            {menuEsquerda.style.display = 'none';}

            else{ 
                console.log(header.offsetHeight);
                console.log(scrollY);
                console.log(menuSite.offsetHeight);
                console.log(calcAlturaHeader);

                if(calcAlturaHeader > 0){
                    console.log("maior que 0");
                    lateralEsquerda.style.top = calcAlturaHeader+'px';

                    
                    lateralEsquerda.style.height=window.innerHeight-calcAlturaHeader+'px'; // Define a altura do menu lateral esquerda considerando o header
                }
                else{console.log("menor que 0");
                    lateralEsquerda.style.top = menuSite.offsetHeight + 'px'; 
                    // Define a altura do menu lateral esquerda considerando o header
                    lateralEsquerda.style.height='auto'; // Define a altura do menu lateral esquerda considerando o header
                    }
                    menuEsquerda.style.display = 'block';
                }
}; // Adiciona o evento de clique ao botão de menu hamburguer

function criarMenuHamburguer(){
    let menuSite = document.getElementById('menu-site');
    let sumario = document.getElementById('sumario');
    
    if (!document.getElementById('menu-site')) {
        console.warn('menuSite or sumario is not found in the DOM.');
        return;
    }

    if (!document.getElementById('sumario')) {
        console.warn('menuSite or sumario is not found in the DOM.');
        return;
    }
    
    if (document.getElementById('sumario') || document.getElementById('menu-site')){
        console.log('ok');
        let newButton = document.createElement('button');
        newButton.setAttribute('id', 'menu-hamburguer');
        newButton.setAttribute('aria-label', 'Abrir menu de acesso rápido');
        newButton.innerHTML = `
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>`;
        menuSite.insertBefore(newButton, menuSite.firstChild);
       
        newButton.addEventListener('click', () => {
            console.log('Menu hamburguer clicado');
            mostraMenuAcessoRapido();
            toggleMenu(newButton);
        });
    }
}// Cria o botão de menu hamburguer e adiciona o evento de clique. Antes de criar o botão, verifica se o menu site e o sumário existem na página.

  function toggleMenu(x) {
    x.classList.toggle("change");
  }

// function bomDia(saudacao) {
//     console.log(saudacao);
//     let hora = new Date().getHours();
//     if (hora >= 0 && hora < 12) {
//         saudacao.innerHTML = "Bom dia!";
//     } else if (hora >= 12 &&Hora<18) {
//         saudacao.innerHTML = "Boa tarde!";
//     } else {
//         saudacao.innerHTML = "Boa noite!";
//     }
// }// Chama a função para exibir a saudação

window.addEventListener('resize', () => {
   
    let menuEsquerda = document.getElementById('menu-lateral-esquerda');

    if(window.innerWidth > 1099) {
        menuEsquerda.style.display = 'block'; // Exibe o menu lateral esquerda ao redimensionar a tela}
    }else{
        menuEsquerda.style.display = 'none'; // Oculta o menu lateral esquerda ao redimensionar a tela
    }
});

document.addEventListener('DOMContentLoaded', () => {
    fechaMenuAcessoRapido();
    expandirImagem();
    criarMenuHamburguer();
    

 
});
window.addEventListener('click', (event) => {
        fecharImagem();
});

function fecharImagem() {
    const clicada = document.querySelector('.img-produto img#clicada');
    if (clicada) {
        console.log('Clique fora da imagem');
        clicada.removeAttribute('id'); // Remove o id apenas da imagem clicada
    }
};//aumenta a imagem quando clicada e fecha a imagem quando clica fora dela
    
function expandirImagem(){
    // Adiciona um evento de clique a cada imagem selecionada
    const imagens = document.querySelectorAll('.img-produto img');

   
    if (imagens.length > 0) {
        imagens.forEach((img) => {
            img.addEventListener('click', () => {
                console.log('Imagem clicada');
                if (img.id === 'clicada') {
                    // Esse if é necessário para caso o segundo click seja na imagem depois de aberta ela fecha a imagem, pois sem esse if a imagem reabre a imagem após 10ms
                    img.removeAttribute('id');
                } else {        
                    setTimeout(() => {
                        img.id = 'clicada';
                    }
                    , 10); // Aguarda 10 milisegundos antes de abrir a imagem para impedir que o clique na tela feche a visualização antes da imagem expandir
                }
            });
        });
    } else {
        console.warn('Nenhuma imagem encontrada para expandir.');
    }
};

function fechaMenuAcessoRapido() {
    document.querySelectorAll('#shortcuts a').forEach((link) => {
        link.addEventListener('click', () => {
            document.getElementById('menu-hamburguer').click();
        });
    });
}// Fecha o sumario quando clica em um de seus links

let lastScrollY = window.scrollY;

function toggleMenuSiteOnScroll() {
    let menuEsquerda = document.getElementById('menu-lateral-esquerda');
    
    if (window.innerWidth <= 1099) {
        const menuSite = document.getElementById('menu-site');
        if (!menuSite) return;

        if (window.scrollY < lastScrollY || menuEsquerda.style.display==='block') {
            // Scroll para baixo - recolhe o menu
              menuSite.style.position = 'sticky';
            menuSite.style.top = '0';

        } else {menuSite.style.position = 'static ';
            // Scroll para cima - exibe o menu
          
        }

        lastScrollY = window.scrollY;
    }
}//exibe o nav menu site quando o scroll é para baixo e esconde quando o scroll é para cima

window.addEventListener('scroll', () => { toggleMenuSiteOnScroll();
fecharSumarioScroll();
    
});

function fecharSumarioScroll(){
   
    if(document.getElementById('menu-lateral-esquerda').style.display==='block' &&  window.innerWidth <= 1099){
    document.getElementById('menu-hamburguer').click();}
}//Essa função existe para evitar desalinhamento entre o sumario e a nav#menu-site

   




