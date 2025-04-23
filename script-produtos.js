// Função construtora para criar objetos de produtos
function Produto(titulo, foto1Src, foto1Alt, foto2Src, foto2Alt, urlAmazon, valorAmazon) {
    this.titulo = titulo;
    this.foto1 = { src: foto1Src, alt: foto1Alt };
    this.foto2 = { src: foto2Src, alt: foto2Alt };
    this.urlAmazon = urlAmazon;
    this.valorAmazon = valorAmazon;
}

// Função para preencher automaticamente os elementos do DOM com base nas classes
function preencherElementosPorClasse(produto) {
   const img1Elements = document.querySelectorAll(`.img1-${produto.titulo}`);
   if (img1Elements.length > 0) {
       img1Elements.forEach(img1 => {
           img1.setAttribute('src', produto.foto1.src);
           img1.setAttribute('alt', produto.foto1.alt);
       });
   } else {
       console.warn(`Elements with class img1-${produto.titulo} not found`);
   }

   const img2Elements = document.querySelectorAll(`.img2-${produto.titulo}`);
   if (img2Elements.length > 0) {
       img2Elements.forEach(img2 => {
           img2.setAttribute('src', produto.foto2.src);
           img2.setAttribute('alt', produto.foto2.alt);
       });
   } else {
       console.warn(`Elements with class img2-${produto.titulo} not found`);
   }
   const linkElements = document.querySelectorAll(`.link-${produto.titulo}-amazon`);
   if (linkElements.length > 0) {
       linkElements.forEach(link => {
           link.setAttribute('href', produto.urlAmazon);
       });
   } else {
       console.warn(`Elements with class link-${produto.titulo}-amazon not found`);
   }

    const valorElements = document.querySelectorAll(`.valor-${produto.titulo}-amazon`);
    if (valorElements.length > 0) {
         valorElements.forEach(valor => {
              valor.textContent = `R$ ${produto.valorAmazon.toFixed(2).replace('.', ',')}`;
         });
    } else {
        console.warn(`Elements with class valor-${produto.titulo}-amazon not found`);
    }
}

// Exemplo de uso no DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('rodando script termo.js');

    // Criando objetos de produtos usando a função construtora
   
    // const prohibido = new Produto(
    //     'prohibido',
    //     '/fitness/imagens/vs-nutrition/pre-treino-prohibido.jpg',
    //     'Imagem do Prohibido',
    //     '/fitness/imagens/vs-nutrition/pre-treino-prohibido-tab-nutri.jpg',
    //     'Imagem da tabela nutricional do Prohibido',
    //     'https://www.amazon.com.br/Strawberry-Pre-Workout-3VS-Nutrition-Estimulante/dp/B07RWP37B5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.5f48f559-4977-4046-84a6-226e1ac354ed%3Aamzn1.sym.5f48f559-4977-4046-84a6-226e1ac354ed&crid=298BMVVDX95WV&cv_ct_cx=pre%2Btreino&keywords=pre%2Btreino&pd_rd_i=B07RVD8M94&pd_rd_r=13865160-5f9c-4fa0-8a59-085a957552db&pd_rd_w=5l8nx&pd_rd_wg=eSVux&pf_rd_p=5f48f559-4977-4046-84a6-226e1ac354ed&pf_rd_r=BYT9TT4CM0P43ZSNHQN1&qid=1745258270&s=hpc&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=pre%2Btreino%2Chpc%2C306&sr=1-1-b8f34313-536f-475f-9207-a7c427a641c1&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=2ea98825a15fea0692b55a88da24405e&language=pt_BR&ref_=as_li_ss_tl',
    //     80.14


    // )
    // preencherElementosPorClasse(prohibido);
   
});

