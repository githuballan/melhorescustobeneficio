function exibir(x) {
    x.nextElementSibling.style.display = "block";
}

function esconder(x){
 x.nextElementSibling.style.display = "none";
}

function mostraMenuAcessoRapido() {

    let menuEsquerda = document.getElementById('sumario');
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

function criarTituloDoSumario(){
    
    let conteinerSumario = document.getElementById('sumario');
    if (!conteinerSumario) {
        console.warn('Conteiner do sumário não encontrado.');
        return;
    }
    console.log(conteinerSumario);
    let titleSumario = document.createElement('h3');
    titleSumario.innerHTML = 'Sumário';
    titleSumario.setAttribute('id', 'title-sumario');
    conteinerSumario.insertBefore(titleSumario, conteinerSumario.firstChild); // Adiciona o título do sumário antes do primeiro filho do sumário

    let retornarAoTopo = document.createElement('a');
    let newLi = document.createElement('li');
    let shortcuts=document.getElementById('shortcuts')
    retornarAoTopo.setAttribute('id', 'up-page');
    retornarAoTopo.setAttribute('href', '#');
    retornarAoTopo.innerHTML='Voltar ao topo'; 
    newLi.appendChild(retornarAoTopo);
    shortcuts.appendChild(newLi);
    //

}


  function toggleMenu(x) {
    x.classList.toggle("change");
  }

// function bomDia(saudacao) {
//     console.log(saudacao);
//     let hora = new Date().getHours();
//     if (hora >= 0 && hora < 12) {
//         saudacao.innerHTML = "Bom dia!";
//     } else if (hora >= 12 && hora<18) {
//         saudacao.innerHTML = "Boa tarde!";
//     } else {
//         saudacao.innerHTML = "Boa noite!";
//     }
// }// Chama a função para exibir a saudação

function atualizarPagina() {
    location.reload();
}
// Atualiza a página quando o tamanho da tela é alterado
let larguraAnterior = window.innerWidth; // Armazena a largura inicial da tela

window.addEventListener('resize', () => {
    const larguraAtual = window.innerWidth;

    // Verifica se houve uma mudança de faixa
    if ((larguraAnterior <= 1099 && larguraAtual > 1099) || (larguraAnterior > 1099 && larguraAtual <= 1099)) {
        console.log('Tamanho da tela alterado. Atualizando a página...');
        atualizarPagina();
    }

    // Atualiza a largura anterior
    larguraAnterior = larguraAtual;
});
// menuSite.insertBefore(novoElemento, menuSite.firstChild.nextSibling); // Adiciona o novo elemento antes do segundo filho do menuSite

function criarNavMenuSite(){
    let navMenuSite = document.createElement('nav');
    navMenuSite.setAttribute('id', 'menu-site');
    navMenuSite.setAttribute('aria-label', 'Menu de navegação do site');
  
    document.body.insertBefore(navMenuSite, document.body.firstChild.nextSibling); // Adiciona o menu de navegação ao início do body após o header
}
function criarMenuHamburguer(){
    let menuSite = document.getElementById('menu-site');
    let sumario = document.getElementById('sumario');
    
    if (!menuSite) {
        console.warn('menuSite is not found in the DOM.');
        return;
    }

    if (!sumario) {
        console.warn('sumario is not found in the DOM.');
        return;
    }
    
    if (sumario || menuSite){
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

function criarDivsMenu(menuSiteId, menus) {
    const menuSite = document.getElementById(menuSiteId);

    if (!menuSite) {
        console.warn(`Elemento com o ID "${menuSiteId}" não foi encontrado.`);
        return;
    }

    menus.forEach(menu => {
        const div = document.createElement('div');
        div.id = menu.id;

        const button = document.createElement('button');
        button.textContent = menu.nome;

        div.appendChild(button);
        menuSite.appendChild(div);
    });
}

// Função para criar links dinamicamente
function criarLinks(menuId, paginas) {
    const menu = document.getElementById(menuId);
    const ul = document.createElement('ul');
   

    paginas.forEach(pagina => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = pagina.url;
        link.textContent = pagina.nome;
        li.appendChild(link);
        ul.appendChild(li);
    });

    menu.appendChild(ul);

    // Adiciona eventos para exibir/ocultar o menu
    menu.onmouseover = () => ul.style.display = 'block';
    menu.onmouseleave = () => ul.style.display = 'none';
}

// Exemplo de uso
function criarLogoLink() {
    const logoLink = document.createElement('a');
    let header =  document.getElementById('header-topo');
    logoLink.href = '/index.html'; // URL do link
    logoLink.innerHTML = '<img src="/favicon.png" alt="Logo da página">'; // Imagem do logo
    logoLink.id = 'logo-link'; // ID opcional para estilização
    header.insertBefore(logoLink, header.firstChild); // Adiciona o logo ao header
}


document.addEventListener('DOMContentLoaded', () => {
    carrocel();
    criarNavMenuSite();
    fechaMenuAcessoRapido();
    expandirImagem();
    criarTituloDoSumario()
    criarMenuHamburguer();
    criarLogoLink();
   
    if(document.getElementById('sumario') && window.innerWidth <= 1099){
        document.getElementById('sumario').style.display = 'none'; 
    } //Gambiarra para esconder o sumário quando a tela é menor que 1099px, estudar o que está acontecendo.
    
    criarDivsMenu('menu-site', [
        { id: 'menu-fitness', nome: 'Fitness' },
        { id: 'menu-tecnologias', nome: 'Tecnologias' },
        { id: 'menu-utilidade', nome: 'Utilidades' } // Exemplo de um novo menu
    ]);

    criarLinks('menu-fitness', [
        { nome: 'Whey', url: '/fitness/whey.html' },
        { nome: 'Creatina', url: '/fitness/creatina.html' },
        { nome: 'Pré-treinos', url: '/fitness/pre-treino.html' }
    ]);

    criarLinks('menu-tecnologias', [
        { nome: 'Em Breve!', url: '#' },
       
    ]);
    
    criarLinks('menu-utilidade', [
        { nome: 'Copos e garrafas térmicas', url: '/utilidades/copo-termico.html' },
       
    ]);

  
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
    
function carrocel() {
    if(!document.querySelector('.carousel')) return; // Verifica se o elemento existe antes de continuar

    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children); //cada li do carroucel Converte a NodeList em um array para usar métodos de array
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const itemWidth = items[0].getBoundingClientRect().width;// Pega a largura do primeiro item do carrossel

  
    // Arrange items side by side
    items.forEach((item, index) => {
        item.style.left = `${itemWidth * index}px`; 
        console.log('index: '+index);
        console.log('item: '+items);
        console.log('itemWidth: '+itemWidth);

    });// Coloca os itens lado a lado, multiplicando a largura do item pelo índice do item

    let currentIndex = 0;

    const moveToItem = (index) => {
        track.style.transform = `translateX(-${itemWidth * index}px)`;
        currentIndex = index;
    };// Move o carrossel para o item selecionado, aplicando uma transformação CSS para mover o carrossel para a esquerda

    prevButton.addEventListener('click', () => {
        console.log('prevButton clicked');
        if (currentIndex > 0) {
            moveToItem(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            moveToItem(currentIndex + 1);
        } else {
            // Volta ao início se estiver no último item
            moveToItem(0);
        }
    });

let w = 0; // Declara e inicializa a variável w
let backup = 0; // Declara e inicializa a variável backup

const autoCarousel = () => {
    let vezes = 101; // Reinicia a variável w a cada chamada da função
    let tempo = 4000; // Tempo em milissegundos (3 segundos)
  
    if (w < vezes) {
        document.querySelector('.carousel-control.next').click(); // Clica no botão "next" para iniciar o carrossel automaticamente
        
        w++;
        backup++;
        if (backup > 50) {
            console.log("break");
            return;
        }
        setTimeout(autoCarousel, tempo); // Chama a função novamente após 1 segundo
    }
};

autoCarousel(); // Inicia o carrossel automaticamente

}

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
    if(innerWidth > 1099) return; // Não fecha o menu se a tela for maior que 1099px
    document.querySelectorAll('#shortcuts a').forEach((link) => {
        link.addEventListener('click', () => {
            document.getElementById('menu-hamburguer').click();
        });
    });
}// Fecha o sumario quando clica em um de seus links

let lastScrollY = window.scrollY;

function toggleMenuSiteOnScroll() {
    let menuEsquerda = document.getElementById('sumario');

    if (window.innerWidth <= 1099) {
        const menuSite = document.getElementById('menu-site');
        if (!menuSite) return;

        if (window.scrollY < lastScrollY || menuEsquerda.style.display==='block') {
            menuSite.setAttribute('class', 'menu-site-scroll-exibir'); 
        } else { menuSite.setAttribute('class', '');
            // Scroll para cima - exibe o menu
             }

        lastScrollY = window.scrollY;
    }
}//exibe o nav menu site quando o scroll é para baixo e esconde quando o scroll é para cima

window.addEventListener('scroll', () => { 
toggleMenuSiteOnScroll();
fecharSumarioScroll();
    
});

function fecharSumarioScroll(){
   
    if(document.getElementById('sumario').style.display==='block' &&  window.innerWidth <= 1099){
    document.getElementById('menu-hamburguer').click();}
}//Essa função existe para evitar desalinhamento entre o sumario e a nav#menu-site






