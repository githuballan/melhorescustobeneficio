// Função construtora para criar objetos de produtos
function Produto(titulo, foto1Src, foto1Alt, foto2Src, foto2Alt, url, diferencial, marca) {
    this.titulo = titulo;
    this.foto1 = { src: foto1Src, alt: foto1Alt };
    this.foto2 = { src: foto2Src, alt: foto2Alt };
    this.url = url;
    this.diferencial = diferencial;
    this.marca = marca;
}

// Função para renderizar os produtos no DOM
function renderizarProdutos(infoProdutosId, produtos) {

    const infoProdutos = document.getElementById(infoProdutosId);

    if (!infoProdutos) {
        console.warn(`Elemento com ID "${infoProdutosId}" não encontrado.`);
        return;
    }

    produtos.forEach(produto => {
        const titulo = document.createElement('h3');
        titulo.textContent = produto.titulo;

        const foto1 = document.createElement('img');
        foto1.src = produto.foto1.src;
        foto1.alt = produto.foto1.alt;

        const foto2 = document.createElement('img');
        foto2.src = produto.foto2.src;
        foto2.alt = produto.foto2.alt;

        const div = document.createElement('div');
        div.className = 'img-produto';
        div.appendChild(foto1);
        div.appendChild(foto2);

        const aLink = document.createElement('a');
        aLink.textContent = 'Ver produto';
        aLink.className = 'link';
        aLink.target = '_blank';
        aLink.href = produto.url;

        const diferencial = document.createElement('section');
        diferencial.className = 'diferencial-produto';
        const p = document.createElement('p');
        p.textContent = produto.diferencial;
        diferencial.appendChild(p);

        const marca = document.createElement('section');
        marca.className = 'marca';
        const h4 = document.createElement('h4');
        h4.textContent = 'Marca';
        const pMarca = document.createElement('p');
        pMarca.textContent = produto.marca;
        marca.appendChild(h4);
        marca.appendChild(pMarca);

        infoProdutos.appendChild(titulo);
        infoProdutos.appendChild(div);
        infoProdutos.appendChild(aLink);
        infoProdutos.appendChild(diferencial);
        infoProdutos.appendChild(marca);
    });
}

// Exemplo de uso no DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('rodando script termo.js');

    // Criando objetos de produtos usando a função construtora
    const KIMERA = new Produto(
        'KIMERA',
        '/fitness/imagens/dux/whey-dux-concentrado.webp',
        'Imagem do Produto 1',
        '/fitness/imagens/dux/tab-nutri-dux-concentrado.jpg',
        'Imagem do Produto 1',
        'https://www.amazon.com.br/Whey-Protein-Concentrado-Cookies-900g/dp/B07NGL3FDY?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2LVIRQ97MOR4M&dib=eyJ2IjoiMSJ9.mW5JUhgdkhFu7ipF7akoIOyu9RISrfkZo8Haxf_RBZzb4tBigQXtNUI4UsoaANNaMYR9o4UOvqCV8rpldNOtUXHX0lNV59MwLw7ptQ_Y-3d1duMv1Vig_1NKePAFWuNiS7_4HNeJ69FCrdZnX4fB5gvsC6MdczU5VKqH9qjYnk1bWazczSN7RH4_Zv44kgkRFY7bAm-aOyY3Q0u-1a6YlQLIpot0QP2ANcoQSy6984-fGTZESSBhc817hm3jMAjFawaZ-b1t_MTMg_HCIq6bbIsylm_okbaDWGINlPzFztY.whR5YddhAS9-DKAXI13LrrSXOM-aInYDolISKCS9Do0&dib_tag=se&keywords=whey%2Bdux&qid=1744494190&sprefix=whey%2Bd%2Caps%2C404&sr=8-5&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=892f69f4e15ba2726c827712dde2c2fb&language=pt_BR&ref_=as_li_ss_tl',
        'Alta qualidade e durabilidade.',
        'Marca A'
    );

    const produto2 = new Produto(
        'Produto 2',
        'https://via.placeholder.com/150',
        'Imagem do Produto 2',
        'https://via.placeholder.com/150',
        'Imagem do Produto 2',
        'https://example.com/produto2',
        'Design moderno e elegante.',
        'Marca B'
    );
   
   
   

    // Renderizando os produtos no DOM
    renderizarProdutos('infokimera', [KIMERA]);

    renderizarProdutos('infooutros', [produto2]);
  
     console.log(infokimera.querySelector('a.link'));
    console.log(infooutros.querySelector('a.link'));
    console.log(infokimera.querySelector('h3'));
});

