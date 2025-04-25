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
    titleSumario.innerHTML = 'Índice';
    titleSumario.setAttribute('id', 'title-sumario');
    conteinerSumario.insertBefore(titleSumario, conteinerSumario.firstChild); // Adiciona o título do sumário antes do primeiro filho do sumário

    let retornarAoTopo = document.createElement('a');
    let newLi = document.createElement('li');
    let shortcuts=document.getElementById('shortcuts')
    retornarAoTopo.setAttribute('id', 'up-page');
    retornarAoTopo.setAttribute('href', '#');
    retornarAoTopo.style.fontWeight='bold';
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
        <div>Índice</div>
        <div class="seta">&#10094;</div>
        `;
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
    let tempo = 6000; // Tempo em milissegundos (3 segundos)
  
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

































function ProdutoOferta(titulo, decricao, loja, foto1Src, foto1Alt, url, valorPor) {
    this.titulo = titulo;
    this.decricao = decricao;
    this.loja = loja;
    this.foto1 = { src: foto1Src, alt: foto1Alt };
    this.url = url;
  
    this.valorPor = valorPor;
}

// Função para adicionar um novo item ao carousel
function adicionarItemCarousel(ProdutoOferta) {
    const carouselTrack = document.querySelector('.carousel-track');
    
    if (!carouselTrack) {
        console.warn('Elemento .carousel-track não encontrado.');
        return;
    }

    const novoItem = document.createElement('li');
    novoItem.classList.add('carousel-item', 'carousel-item-index');
   
  
    novoItem.innerHTML = `
        <div class="texto-carousel">

            <h3>${ProdutoOferta.titulo}</h3>

            <span class="descricao">${ProdutoOferta.decricao}</span>

            <div class="valores">
            
                <span class="por">Por: R$ ${ProdutoOferta.valorPor}<img src="/favicon.ico" alt=""></span>

            </div>

            <a class="ver-oferta" href="${ProdutoOferta.url}" target="_blank">Ver oferta<img src="/imagens/logo-lojas/mini-${ProdutoOferta.loja}.png" alt="Logo marca${ProdutoOferta.loja}"></a>

        </div>

        <img src="${ProdutoOferta.foto1.src}" alt="${ProdutoOferta.foto1.alt}">
    `;

    carouselTrack.appendChild(novoItem);
}

// Exemplo de uso no DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('rodando script termo.js');

    const ecotankEpson = new ProdutoOferta(
        'Epson Ecotank L3250',
        'Impressora multifuncional tanque de tinta 3 em 1 com conexão WI-FI',
        'magalu',
        '/imagens/ofertas-do-dia/impressora-ecotank.webp',
        'Imagem da impressora Epson Ecotank L3250',
        'https://www.magazinevoce.com.br/magazinemelhorescustoben/impressora-multifuncional-epson-ecotank-l3250-tanque-de-tinta-colorida-usb-wi-fi/p/231776800/in/imtt/',
        1299.00
    );

    const kitNutella = new ProdutoOferta(
        'Kit Nutella Ferrero - 350g',
        'Nessa promoção o pote de 350g sai por menos de 20 reais',  
        'magalu',
        '/imagens/ofertas-do-dia/kit-tres-nutellas.webp',
        'Imagem do kit de 3 potes de Nutella',
        'https://www.magazinevoce.com.br/magazinemelhorescustoben/kit-creme-de-avela-com-cacau-nutella-ferrero-350g-3-unidades/p/229875500/me/crmv/',
        61.37,
    );

    const HpTank = new ProdutoOferta(
        ' HP Smart Tank 581',

        'HP tanque de tinta com conexão WI-FI 2 anos de garantia e tinta para 12mil páginas de BRINDE',

        'amazon',
        '/imagens/ofertas-do-dia/impressora-hp-tank_.jpg',
        'Imagem do ProdutoOferta exemplo',
        'https://www.amazon.com.br/Impressora-Multifuncional-HP-581-Colorida/dp/B0C1L2R4HH?pf_rd_r=9MSATNHTF1WJCXMDBW35&pf_rd_p=037b97f4-4275-49d5-bd4f-fb0f27024f66&linkCode=ll1&tag=allanamazon07-20&linkId=75134c1092f4a8823f0a39cc6544b2b3&language=pt_BR&ref_=as_li_ss_tl',
        899.00
    );

     const Geonav  = new ProdutoOferta(
        'Geonav Power Bank com MagSafe',

        'Carregador Portátil Universal por Indução 10.000mAh, Carregamento rápido, Suporte Dobrável',

        'amazon',

        '/imagens/ofertas-do-dia/geonav-magsafe.jpg',

        'Imagem do Geonav Power Bank com MagSafe',

        'https://www.amazon.com.br/Geonav-Carregador-Carregamento-Compat%C3%ADvel-PB10MAGSG/dp/B0C9QSV82F?pf_rd_r=M84J4PZB7VFMFVDTC07B&pf_rd_p=037b97f4-4275-49d5-bd4f-fb0f27024f66&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=7f1ffd7dfcd7b59a0bdba4efcddd7acf&language=pt_BR&ref_=as_li_ss_tl',

        159.00,
    );

      const WheyIsolateFuse = new ProdutoOferta(
        'Whey Protein Isolado ',

        '26 g de proteina por dose e 5,4g de BCAA',

        'magalu',

        '/imagens/ofertas-do-dia/whey-fuse-isolate.webp',

        'Imagem do Whey Protein Isolado',

        'https://www.magazinevoce.com.br/magazinemelhorescustoben/whey-isolate-protein-fuse-900g-bcaas-whey-protein-glutamina-e-aminoacidos-essenciais-ganho-de-musculos-ganho-de-peso-sem-gordura-dark-lab/p/gff61e8kae/sa/samm/',

       65.01,
    );

    // const produtoExemplo = new ProdutoOferta(
    //     'Produto Exemplo',
    //     'Descrição do produto exemplo',
    //     'loja-exemplo',
    //     '/imagens/ofertas-do-dia/produto-exemplo.webp',
    //     'Imagem do produto exemplo',
    //     'https://www.exemplo.com.br/produto-exemplo',
    //     99.99
    // );
    
    adicionarItemCarousel(WheyIsolateFuse);

    adicionarItemCarousel(Geonav);

    adicionarItemCarousel(HpTank);

    adicionarItemCarousel(kitNutella);

    adicionarItemCarousel(ecotankEpson);

   
    carrocel();

});



