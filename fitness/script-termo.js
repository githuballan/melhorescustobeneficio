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
        'https://via.placeholder.com/150',
        'Imagem do Produto 1',
        'https://via.placeholder.com/150',
        'Imagem do Produto 1',
        'https://example.com/produto1',
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

    console.log(KIMERA.foto1.src);

    // Renderizando os produtos no DOM
    renderizarProdutos('infokimera', [KIMERA]);
    renderizarProdutos('infooutros', [produto2]);
});