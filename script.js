
const mediaQuerryMaxWidth = 1299; // Lar

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
}; // Adiciona o evento de clique ao botão de menu Index

function criarTituloDoSumario(){
    
    let conteinerSumario = document.getElementById('sumario');
    if (!conteinerSumario) {
        console.warn('Conteiner do sumário não encontrado.');
        return;
    }
   
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
    if ((larguraAnterior <= mediaQuerryMaxWidth && larguraAtual > mediaQuerryMaxWidth) || (larguraAnterior > mediaQuerryMaxWidth && larguraAtual <= mediaQuerryMaxWidth)) {
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
function criarMenuIndex(){
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
      
        let newButton = document.createElement('button');
        newButton.setAttribute('id', 'menu-index');
        newButton.setAttribute('aria-label', 'Abrir menu de acesso rápido');
        newButton.innerHTML = `
        <div>Índice</div>
        <div class="seta">&#10094;</div>
        `;
        menuSite.insertBefore(newButton, menuSite.firstChild);
       
        newButton.addEventListener('click', () => {
            console.log('Menu Index clicado');
            mostraMenuAcessoRapido();
            toggleMenu(newButton);
        });
    }
}// Cria o botão de menu Index e adiciona o evento de clique. Antes de criar o botão, verifica se o menu site e o sumário existem na página.

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
    header.innerHTML = ` <a href="/index.html"><img id="logo-link" src="/favicon.png" alt="Logo da página">  Melhores Custo-Benefício</a>`
                       ;
    // logoLink.href = '/index.html'; // URL do link
    // logoLink.innerHTML = '<img src="/favicon.png" alt="Logo da página">'; // Imagem do logo
    // logoLink.id = 'logo-link'; // ID opcional para estilização
    // header.insertBefore(logoLink, header.firstChild); // Adiciona o logo ao header
}


document.addEventListener('DOMContentLoaded', () => {
   
    criarNavMenuSite();
    fechaMenuAcessoRapido();
    criarTituloDoSumario()
    criarMenuIndex();
    criarLogoLink();
   
    if(document.getElementById('sumario') && window.innerWidth <= mediaQuerryMaxWidth){
        document.getElementById('sumario').style.display = 'none'; 
    } //Gambiarra para esconder o sumário quando a tela é menor que mediaQuerryMaxWidthpx, estudar o que está acontecendo.
    
    criarDivsMenu('menu-site', [
        { id: 'menu-fitness', nome: 'Fitness' },
        { id: 'menu-informatica', nome: 'Informática' },
        { id: 'menu-utilidade', nome: 'Utilidades' } // Exemplo de um novo menu
    ]);

    criarLinks('menu-fitness', [
        { nome: 'Whey', url: '/fitness/whey.html' },
        { nome: 'Creatina', url: '/fitness/creatina.html' },
        { nome: 'Pré-treinos', url: '/fitness/pre-treino.html' }
    ]);

    criarLinks('menu-informatica', [
        { nome: 'Notebooks', url: '/informatica/notebook.html' },
       
    ]);
    
    criarLinks('menu-utilidade', [
        { nome: 'Copos e garrafas térmicas', url: '/utilidades/copo-termico.html' },
       
    ]);




        const urlAtual = window.location.href;
    console.log(urlAtual); // Exibe a URL atual no console

        const caminhoAtual = window.location.pathname;
    console.log(caminhoAtual); // Exibe apenas o caminho da URL

  
});
window.addEventListener('click', (event) => {
        fecharImagem();
});

function fecharImagem() {
    const clicada = document.querySelector('#clicada');
    if (clicada) {
        console.log('Clique fora da imagem');
        clicada.removeAttribute('id'); // Remove o id apenas da imagem clicada
    }
};//aumenta a imagem quando clicada e fecha a imagem quando clica fora dela
    


function expandirImagem(){
    // Adiciona um evento de clique a cada imagem selecionada
    const imagens = document.querySelectorAll('.img-produto'); // Seleciona todas as imagens dentro de elementos com a classe 'img-produto'

   
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
    if(innerWidth > mediaQuerryMaxWidth) return; // Não fecha o menu se a tela for maior que mediaQuerryMaxWidthpx
    document.querySelectorAll('#shortcuts a').forEach((link) => {
        link.addEventListener('click', () => {
            document.getElementById('menu-index').click();
        });
    });
}// Fecha o sumario quando clica em um de seus links

let lastScrollY = window.scrollY;

function toggleMenuSiteOnScroll() {
        const menuSite = document.getElementById('menu-site');
        const sumario = document.getElementById('sumario');
        const header = document.getElementsByTagName('header')[0];
        const calcTop = header.offsetHeight + menuSite.offsetHeight; // Calcula a altura do header menos a altura do scroll Y mais a altura do menu site
        const ofertasDoDia = document.querySelector('#lateral-direita .ofertas-do-dia');
        if (!menuSite) return;

        if (window.scrollY < lastScrollY) {
            menuSite.setAttribute('class', 'menu-site-scroll-exibir'); 
          
        } else { menuSite.setAttribute('class', 'menu-site-scroll-esconder');

            // Scroll para cima - exibe o menu
             }

        lastScrollY = window.scrollY;
    }
//exibe o nav menu site quando o scroll é para baixo e esconde quando o scroll é para cima



window.addEventListener('scroll', () => { 
toggleMenuSiteOnScroll();
fecharSumarioScroll();
    
});

function fecharSumarioScroll(){

    const sumario = document.getElementById('sumario');
   if(!sumario) return; // Verifica se o elemento existe antes de continuar
    if(sumario.style.display==='block' &&  window.innerWidth <= mediaQuerryMaxWidth){
    document.getElementById('menu-index').click();}
}//Essa função existe para evitar desalinhamento entre o sumario e a nav#menu-site

function mostrarToast(mensagem) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = mensagem; // Define a mensagem do toast
    toast.classList.add('show'); // Adiciona a classe para exibir o toast

    // Remove o toast após 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


















function criarOfertasDoDia(){

    const conteinerTelasPequenas = document.getElementById('conteiner-ofertas-do-dia-para-telas-pequenas');
   
    const conteinerTelasGrandes = document.getElementById('conteiner-ofertas-do-dia-para-telas-grandes');
    

    const ofertasDoDia = document.createElement('div');
    ofertasDoDia.setAttribute('class', 'ofertas-do-dia');
    ofertasDoDia.setAttribute('id', 'ofertas-do-dia');
    ofertasDoDia.setAttribute('aria-label', 'Ofertas do dia');
   ;


   if(innerWidth > mediaQuerryMaxWidth && conteinerTelasGrandes){
    conteinerTelasGrandes.appendChild(ofertasDoDia);
   

   }else if(innerWidth <= mediaQuerryMaxWidth && conteinerTelasPequenas){
    conteinerTelasPequenas.appendChild(ofertasDoDia);
   

   } else {
        console.warn('Elemento de tela pequena ou grande não encontrado.');
        return;
    }
}


function criarCarousel() {
  
    const ofertaDoDia = document.querySelector('.ofertas-do-dia');

    if (!ofertaDoDia) {
        console.warn('Elemento .ofertas-do-dia não encontrado.');
        return;
    }
    ofertaDoDia.innerHTML = `     <div class="carousel">
                    
                        <button class="carousel-control prev" aria-label="Anterior">&#10094;</button>
                       
                        <div class="carousel-track-container">
                            <ul class="carousel-track" id="carousel-track-index">
                                <!-- Os itens serão adicionados dinamicamente aqui -->
                            </ul>
                        </div><!-- /.carousel-track-container -->
                    
                        <button class="carousel-control next" aria-label="Próximo">&#10095;</button>
                    
                    </div><!-- /.carousel -->

                    <div class="texto-markenting"><a href="/ofertas-do-dia/destaques-do-dia.html">Ofertas do dia!</a> </div>`;
}

function carrocel() {//cria animação do carrossel
    if(!document.querySelector('.carousel')) return; // Verifica se o elemento existe antes de continuar

    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children); //cada li do carroucel Converte a NodeList em um array para usar métodos de array
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const itemWidth = document.querySelector('.carousel-track-container').offsetWidth; // Pega a largura do primeiro item do carrossel

  console.log( itemWidth); // Pega a largura do elemento pai do carrossel

    // Arrange items side by side
    items.forEach((item, index) => {
        item.style.left = `${itemWidth * index}px`; 
      
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







function ProdutoOferta(titulo, decricao, loja, foto1Src, foto1Alt, url, valorPor, categoria) {
    this.titulo = titulo;
    this.decricao = decricao;
    this.loja = loja;
    this.foto1 = { src: foto1Src, alt: foto1Alt };
    this.url = url;
    this.valorPor = valorPor;
    this.categoria = categoria;    
}

// Função para adicionar um novo item ao carousel
function adicionarItensCarouselPorCategoria(produtos) {
    // Identifica o contêiner correto com base no tamanho da tela
    const conteiner =
        innerWidth > mediaQuerryMaxWidth
            ? document.getElementById('conteiner-ofertas-do-dia-para-telas-grandes')
            : document.getElementById('conteiner-ofertas-do-dia-para-telas-pequenas');

    if (!conteiner) {
        console.warn('Contêiner de ofertas do dia não encontrado.');
        return;
    }

    // Obtém a classe do contêiner para filtrar os produtos
    const categoria = conteiner.classList[0]; // Assume que a classe relevante é a primeira

    if (!categoria) {
        console.warn('Nenhuma classe encontrada no contêiner.');
        return;
    }

    // Seleciona o carrossel dentro do contêiner
    const carouselTrack = conteiner.querySelector('.carousel-track');

    if (!carouselTrack) {
        console.warn('Elemento .carousel-track não encontrado no contêiner.');
        return;
    }

    // Filtra e adiciona os produtos ao carrossel
    produtos
        .filter(produto => produto.categoria === categoria || categoria==='todos') // Filtra os produtos pela categoria
        .forEach(produto => {
            const novoItem = document.createElement('li');
            novoItem.classList.add('carousel-item', 'carousel-item-index');

            novoItem.innerHTML = `
                <div class="texto-carousel">
                    <h3>${produto.titulo}</h3>
                    <span class="descricao">${produto.decricao}</span>
                    <div class="valores">
                        <span class="por">Por: R$ ${produto.valorPor.toFixed(2).toString().replace('.', ',')}<img src="/favicon.ico" alt=""></span>
                    </div>
                    <a class="ver-oferta" href="${produto.url}" target="_blank">
                        Ver oferta
                        <img src="/imagens/logo-lojas/mini-${produto.loja}.png" alt="Logo marca ${produto.loja}">
                    </a>
                </div>
                <img  src="${produto.foto1.src}" alt="${produto.foto1.alt}">
            `;

            carouselTrack.appendChild(novoItem);
        });
}

function copyCoupon(id) {
    const coupon = document.getElementById(id).innerText;
    navigator.clipboard.writeText(coupon).then(() => {
        mostrarToast('Cupom '+coupon+' copiado com sucesso!');
        console.log('Cupom copiado: ', coupon);
    }).catch(err => {
        mostrarToast('Erro ao copiar o cupom.');
        console.error('Erro ao copiar o cupom: ', err);
    });
}
function adicionarProdutosTabela(produtos) {
    produtos.forEach(produto => {
        const tbody = document.getElementById(produto.categoria);

        if (!tbody) {
            console.warn(`Elemento com o ID "${produto.categoria}" não foi encontrado.`);
            return;
        }

        if(produto.categoria==='stanley'){ 
            let valor= produto.valorPor - produto.valorPor*0.2;
            produto.valorPor=valor;

        }

        const novaLinha = document.createElement('tr');

        // Coluna 1: Título
        const colunaTitulo = document.createElement('td');
        colunaTitulo.innerHTML = `<img class="img-produto" src="${produto.foto1.src}" alt="${produto.foto1.alt}">`;
        novaLinha.appendChild(colunaTitulo);
      

        // Coluna 2: Descrição
        const colunaDescricao = document.createElement('td');
        colunaDescricao.textContent = produto.decricao;
        novaLinha.appendChild(colunaDescricao);

        // Coluna 3: Valor e link
        const colunaValor = document.createElement('td');
        colunaValor.innerHTML = `
            R$ ${produto.valorPor.toFixed(2).toString().replace('.', ',')}<br> 
            <a class="ver-oferta" href="${produto.url}" target="_blank">
                Ver oferta
                <img src="/imagens/logo-lojas/mini-${produto.loja}.png" alt="Logo marca ${produto.loja}">
            </a>
        `;
         colunaValor.classList.add('valor-produto');
        novaLinha.appendChild(colunaValor);

        // Adiciona a nova linha ao tbody
        tbody.appendChild(novaLinha);
    });
}


document.addEventListener('DOMContentLoaded', () => {
//A ordem de execução das funções aqui é importante para garantir que os elementos sejam criados e que as funcionalidades sejam aplicadas corretamente.POR ISSO ESSE ESTÁ SEPARADO DO OUTRO DOM!!!!!!!!!!!!!
    criarOfertasDoDia();

    criarCarousel();

    const produtos = [
        new ProdutoOferta(
            'Epson Ecotank L3250',
            'Impressora multifuncional tanque de tinta 3 em 1 com conexão WI-FI',
            'magalu',
            '/imagens/ofertas-do-dia/impressora-ecotank.webp',
            'Imagem da impressora Epson Ecotank L3250',
            'https://www.magazinevoce.com.br/magazinemelhorescustoben/impressora-multifuncional-epson-ecotank-l3250-tanque-de-tinta-colorida-usb-wi-fi/p/231776800/in/imtt/',
            1299.00,
            'tecnologia'
        ),

        
        new ProdutoOferta(
            'Macbook Apple Air',//Titulo do produto aqui',
            ' Macbook Apple Air 15" M3 24GB RAM SSD 512GB Prateado. MENOR PREÇO HISTÓRICO com nosso cupom: 100MELHORESCUSTOBEN',//Descrição do produto aqui',
            'magalu',//Loja do produto aqui',
            '/imagens/ofertas-do-dia/mac-book.jpg',//src da imagem aqui',
            'Imagem mac book air 15"',//alt da imagem aqui',
            'https://www.magazinevoce.com.br/magazinemelhorescustoben/notebook-macbook-apple-air-15-m3-24gb-ram-ssd-512gb-prateado/p/238884400/in/mack/',//url do produto aqui',
            14939.10,//valor do produto aqui',
          'variados',//categoria do produto aqui' tecnologia variados fitness
  
  
          ),
  






        new ProdutoOferta(
            'Kit 3 Nutellas de 350g',
            'Nessa promoção o pote de 350g sai por menos de 20 reais',
            'magalu',
            '/imagens/ofertas-do-dia/kit-tres-nutellas.webp',
            'Imagem do kit de 3 potes de Nutella',
            'https://www.magazinevoce.com.br/magazinemelhorescustoben/kit-creme-de-avela-com-cacau-nutella-ferrero-350g-3-unidades/p/229875500/me/crmv/',
            61.37,
            'variados'
        ),

        new ProdutoOferta(
            ' HP Smart Tank 581',
    
            'HP tanque de tinta com conexão WI-FI 2 anos de garantia e tinta para 12mil páginas de BRINDE',
    
            'amazon',
            '/imagens/ofertas-do-dia/impressora-hp-tank_.jpg',
            'Imagem do ProdutoOferta exemplo',
            'https://www.amazon.com.br/Impressora-Multifuncional-HP-581-Colorida/dp/B0C1L2R4HH?pf_rd_r=9MSATNHTF1WJCXMDBW35&pf_rd_p=037b97f4-4275-49d5-bd4f-fb0f27024f66&linkCode=ll1&tag=allanamazon07-20&linkId=75134c1092f4a8823f0a39cc6544b2b3&language=pt_BR&ref_=as_li_ss_tl',
            899.00,
             'tecnologia'

        ),


     
        // new ProdutoOferta(
        //     'Whey Protein Isolado',

        //     '26 g de proteína por dose e 5,4g de BCAA',

        //     'magalu',

        //     '/imagens/ofertas-do-dia/whey-fuse-isolate.webp',

        //     'Imagem do Whey Protein Isolado',

        //     'https://www.magazinevoce.com.br/magazinemelhorescustoben/whey-isolate-protein-fuse-900g-bcaas-whey-protein-glutamina-e-aminoacidos-essenciais-ganho-de-musculos-ganho-de-peso-sem-gordura-dark-lab/p/gff61e8kae/sa/samm/',

        //     65.01,
        //     'fitness'
        // ),

        new ProdutoOferta(
           'Creatina Pura Integralmédica',

           'Creatina Hardacore 100% pura, 300g valor médio é entre 80 e 100 reais',

           'magalu',

           '/fitness/imagens/integral-medica/creatina-integral-hardcore.webp',

           'Imagem da Creatina Pura Integralmédica',

           'https://www.magazinevoce.com.br/magazinemelhorescustoben/creatina-100-pura-monohidratada-hardcore-300g-integral-medica-integral-medica/p/bba4jg8d9g/sa/sacr/',

           64.40,

         'fitness',

        ),

        new ProdutoOferta(
            'Tênis Adidas Breaknet Masculino',//Titulo do produto aqui',
            'Tênis Adidas Breaknet Masculino com bastante variedade de tamanhos',//Descrição do produto aqui',
            'magalu',//Loja do produto aqui',
            '/imagens/ofertas-do-dia/tennis-adidaas-lista-vermelha.webp',//src da imagem aqui',
            'Imagem Tênis Adidas Breaknet Masculino',//alt da imagem aqui',
            'https://www.magazinevoce.com.br/magazinemelhorescustoben/tenis-adidas-breaknet-masculino/p/cgj8jb2bk5/md/osnr/',//url do produto aqui',
              189.46,//valor do produto aqui',
          'variados',//categoria do produto aqui',
  
  
          ),

           new ProdutoOferta(
          'Xiaomi Mi Band 8 Active Versão Global',//Titulo do produto aqui',
          'Promoção com parcelamento sem juros',//Descrição do produto aqui',
          'amazon',//Loja do produto aqui',
          '/imagens/ofertas-do-dia/smartwatch-xiaomi.jpeg',//src da imagem aqui',
          'Imagem do produto',//alt da imagem aqui',
          'https://www.amazon.com.br/Xiaomi-Active-vers%C3%A3o-global-Preto/dp/B0CHJ2C1YS?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=0a0db8101e44cb1e603423bc4d6e1035&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
          187.90,//valor do produto aqui',
        'tecnologia',//categoria do produto aqui' tecnologia variados fitness


        ),


        // new ProdutoOferta(
        //   '',//Titulo do produto aqui',
        //   '',//Descrição do produto aqui',
        //   '',//Loja do produto aqui',
        //   '',//src da imagem aqui',
        //   '',//alt da imagem aqui',
        //   '',//url do produto aqui',
        //     0,//valor do produto aqui',
        // '',//categoria do produto aqui' tecnologia variados fitness


        // ),


    
        // Adicione mais produtos aqui, se necessário
    ];//OS PODUTO CRIADOS AQUI SERÃO ADICIONADOS AUTOMATICAMENTE A TABELA E AO CARROCEL

    adicionarProdutosTabela(produtos);

   

    adicionarItensCarouselPorCategoria(produtos);
    
  expandirImagem();

  
    carrocel();
});



















