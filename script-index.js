function adicionarItemCarousel(titulo, imagemLoja, linkProduto, imagemProduto, altProduto) {
    const carouselTrack = document.querySelector('.carousel-track');

    // Cria o elemento do item
    const carouselItem = document.createElement('li');
    carouselItem.classList.add('carousel-item');

    // Adiciona o conteúdo do item
    carouselItem.innerHTML = `
        <div>
            ${titulo}
            <img style="height: 50px;" src="${imagemLoja}" alt="">
        </div>
        <a href="${linkProduto}">
            <img src="${imagemProduto}" alt="${altProduto}">
        </a>
    `;

    // Adiciona o item ao carousel
    carouselTrack.appendChild(carouselItem);
}

// Exemplo de uso:
// adicionarItemCarousel('Novo Produto', 'imagens/logo-lojas/nova-loja.webp', 'produto-novo.html', 'imagens/produtos/produto-novo.jpg', 'Novo Produto');
