function Produto(titulo, decricao, loja, foto1Src, foto1Alt, url, valorPor) {
    this.titulo = titulo;
    this.decricao = decricao;
    this.loja = loja;
    this.foto1 = { src: foto1Src, alt: foto1Alt };
    this.url = url;
  
    this.valorPor = valorPor;
}

// Função para adicionar um novo item ao carousel
function adicionarItemCarousel(produto) {
    const carouselTrack = document.querySelector('.carousel-track');

    if (!carouselTrack) {
        console.warn('Elemento .carousel-track não encontrado.');
        return;
    }

    const novoItem = document.createElement('li');
    novoItem.classList.add('carousel-item', 'carousel-item-index');

    novoItem.innerHTML = `
        <div class="texto-carousel">

            <h3>${produto.titulo}</h3>

            <span class="descricao">${produto.decricao}</span>

            <div class="valores">
            
                <span class="por">Por: R$ ${produto.valorPor.toFixed(2).replace('.', ',')}<img src="/favicon.ico" alt=""></span>

            </div>

            <a class="ver-oferta" href="${produto.url}" target="_blank">Ver oferta<img src="/imagens/logo-lojas/mini-${produto.loja}.png" alt="Logo marca${produto.loja}"></a>

        </div>

        <img src="${produto.foto1.src}" alt="${produto.foto1.alt}">
    `;

    carouselTrack.appendChild(novoItem);
}

// Exemplo de uso no DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('rodando script termo.js');

    const ecotankEpson = new Produto(
        'Epson Ecotank L3250',
        'Impressora multifuncional tanque de tinta 3 em 1 com conexão WI-FI',
        'magalu',
        '/imagens/ofertas-do-dia/impressora-ecotank.webp',
        'Imagem da impressora Epson Ecotank L3250',
        'https://www.magazinevoce.com.br/magazinemelhorescustoben/impressora-multifuncional-epson-ecotank-l3250-tanque-de-tinta-colorida-usb-wi-fi/p/231776800/in/imtt/',
        1299.00
    );

    const kitNutella = new Produto(
        'Kit Nutella Ferrero - 350g',
        'Nessa promoção o pote de 350g sai por menos de 20 reais',  
        'magalu',
        '/imagens/ofertas-do-dia/kit-tres-nutellas.webp',
        'Imagem do kit de 3 potes de Nutella',
        'https://www.magazinevoce.com.br/magazinemelhorescustoben/kit-creme-de-avela-com-cacau-nutella-ferrero-350g-3-unidades/p/229875500/me/crmv/',
        61.37,
    );

    const HpTank = new Produto(
        ' HP Smart Tank 581',

        'HP tanque de tinta com conexão WI-FI 2 anos de garantia e tinta para 12mil páginas de BRINDE',

        'amazon',
        '/imagens/ofertas-do-dia/impressora-hp-tank_.jpg',
        'Imagem do produto exemplo',
        'https://www.amazon.com.br/Impressora-Multifuncional-HP-581-Colorida/dp/B0C1L2R4HH?pf_rd_r=9MSATNHTF1WJCXMDBW35&pf_rd_p=037b97f4-4275-49d5-bd4f-fb0f27024f66&linkCode=ll1&tag=allanamazon07-20&linkId=75134c1092f4a8823f0a39cc6544b2b3&language=pt_BR&ref_=as_li_ss_tl',
        799.00
    );

     const Geonav  = new Produto(
        'Geonav Power Bank com MagSafe',

        'Carregador Portátil Universal por Indução 10.000mAh, Carregamento rápido, Suporte Dobrável',

        'amazon',

        '/imagens/ofertas-do-dia/geonav-magsafe.jpg',

        'Imagem do Geonav Power Bank com MagSafe',

        'https://www.amazon.com.br/Geonav-Carregador-Carregamento-Compat%C3%ADvel-PB10MAGSG/dp/B0C9QSV82F?pf_rd_r=M84J4PZB7VFMFVDTC07B&pf_rd_p=037b97f4-4275-49d5-bd4f-fb0f27024f66&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=7f1ffd7dfcd7b59a0bdba4efcddd7acf&language=pt_BR&ref_=as_li_ss_tl',

        159.00,
    );

    // const produtoExemplo = new Produto(
    //     'Produto Exemplo',
    //     'Descrição do produto exemplo',
    //     'loja-exemplo',
    //     '/imagens/ofertas-do-dia/produto-exemplo.webp',
    //     'Imagem do produto exemplo',
    //     'https://www.exemplo.com.br/produto-exemplo',
    //     99.99
    // );

    adicionarItemCarousel(Geonav);

    adicionarItemCarousel(HpTank);

    adicionarItemCarousel(kitNutella);

    adicionarItemCarousel(ecotankEpson);


});