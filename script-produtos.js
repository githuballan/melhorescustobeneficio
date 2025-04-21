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
    const kimee = new Produto(
        'kimera',
        '/fitness/imagens/iridium-labs/thermogenico-kimera.jpg',
        'Imagem do Termogênico Kimera',
        '/fitness/imagens/iridium-labs/thermogenico-kimera-tab-nutri.jpg',
        'Imagem da tabela nutricional do Termogênico Kimera',
        'https://www.amazon.com.br/Termog%C3%AAnico-Suplemento-Cafe%C3%ADna-Acelera%C3%A7%C3%A3o-Metabolismo/dp/B078XGHBJH?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=EA9XO9P1HMN2&dib=eyJ2IjoiMSJ9.pdHYCsP7N_fdFWd1QraiEcuraZWD0dkTvHaNpALbS3ahoJnUCF4Kwm9J1ycwX0nodDcL3I-MCbBg84pFlFOlE_CZ9saNO1AsNer7SO0ijOLUs_2GfrkISNtgyOR_NmDF-EWSXeh9zMyL-QOA6Z6JyOjxwIoS1gljyyBAOWt8ZjF8y2LY3xSc7-W2tCevNQDx4yhNFLwbyqvdznp7ND84EBrzfGNVFQhPgxET8gu31uTViAn11VQA6ImL0T6eFSpOey-WFB5CteF5I6KK8b_9y8_WiJznAsIyHe461kn1MUs.tlrcoOzMfnId6b1bxkXI7pfeVKn-hrP3cc1MIRuYKYo&dib_tag=se&keywords=termogenico&qid=1745201221&sprefix=termogenico%2Caps%2C250&sr=8-9&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&linkCode=ll1&tag=allanamazon07-20&linkId=1906181793a100ce6814eeda0a409a7f&language=pt_BR&ref_=as_li_ss_tl',
        49.99
    );
    const skull = new Produto(
        'black-skull',
        '/fitness/imagens/black-skull/thermoflame-black-skull.jpg',
        'Imagem do Black Skull Thermoflame',
        '/fitness/imagens/black-skull/thermoflame-black-skull- tab-nutri.jpg',
        'Imagem da tabela nutricional do Black Skull Thermoflame',
        'https://www.amazon.com.br/Thermo-Flame-Tabs-Black-Skull/dp/B07CTCW2TP?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.pdHYCsP7N_fdFWd1QraiEcuraZWD0dkTvHaNpALbS3a-irtWawb40Z_nQBDLzAh1OzmckqHSA2T0AfU7Z4HSTi_2SkcZnveI11wy0EkR-J3OLrL28mB7VXzFOqZcCds1DQcIIYJUOygPCtGZIX7UyujxwIoS1gljyyBAOWt8ZjFxBuc4T1VlZ074BiIYpFXfgKfFgyx7tMXueEguOlawxVPXCXgFq2UuDwjqhgR2apXxZf3BhoX8WASF8rV589ovu33Xd8w_58ErgJOlrzx88cefZTeDM8LFq50A_Hlq6g4.DybLWRiLkDEuMM_wKvNFmOfJoipyn8XZM3h_i-6qfPU&dib_tag=se&keywords=termogenico&qid=1745205315&sr=8-6&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=5ac572ba300e5f62e302f41dfba42af1&language=pt_BR&ref_=as_li_ss_tl',
        35.90
    );

    const nightTrain = new Produto(
        'max-night-train',
        '/fitness/imagens/max-titanium/pre-treino-night-train-max.jpg',
        'Imagem do Max Titanium Night Train',
        '/fitness/imagens/max-titanium/pre-treino-night-train-max-tab-nutri.jpg',
        'Imagem da tabela nutricional do Max Titanium Night Train',
        'https://www.amazon.com.br/Max-Titanium-Night-Frutas-Vermelhas/dp/B0CL9Z96GL?pd_rd_w=kP8tJ&content-id=amzn1.sym.aa143e42-108d-4304-9b53-605ce83d144a&pf_rd_p=aa143e42-108d-4304-9b53-605ce83d144a&pf_rd_r=EDHT0V7WX22WKYG88EE4&pd_rd_wg=P8wUx&pd_rd_r=e2b7788d-f4ce-4872-ab96-0476a0bac460&pd_rd_i=B0CL9Z96GL&psc=1&linkCode=ll1&tag=allanamazon07-20&linkId=f5770122de98b272818b0de802869d88&language=pt_BR&ref_=as_li_ss_tl',
        86.96
    )
    const horus = new Produto(
        'max-horus',
        '/fitness/imagens/max-titanium/pre-treino-horus-max.jpg',
        'Imagem do Max Titanium Horus',
        '/fitness/imagens/max-titanium/pre-treino-horus-max-tab-nutri.jpg',
        'Imagem da tabela nutricional do Max Titanium Horus',
        'https://www.amazon.com.br/Horus-300G-Frutas-Vermelhas-Titanium/dp/B09B1B9QBP?dib=eyJ2IjoiMSJ9.cHiGoK_hgJaNbQU_q-Tdt9UbrUf1_pFU0AidlYCm_-TIdqNc1VNK-lQGyJUG9rUZ0dhP03Tk0zcP8wVMGlL2DJs6Ykh9AIZSE7fmQs1TxMG3ZBIKani1LIh11jxq68ILYbiASk-1oup4-PXhfWsIhDk8xsWKUBpM81YyFY9WXtRioNiXPiv1hr6mjHD4rGgaFhj7DTKmXkuwm7qiY1XPWhHuoSwcTxRWm6i0FnDt7D-mExMhZggFBWUuimqN3s7SeqP3rYLiy4OXYg5cV70hfRwfLrdwDpbb-0IDrfI6PVo.bvPiNSqTI7XUYlR7Ydw_p5LwHx76uNxkv8VDqOXbOls&dib_tag=se&qid=1745255414&refinements=p_4%3AMax%2BTitanium&s=hpc&sr=1-9&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=8090c2b9a29ea48a34256c11324a86cc&language=pt_BR&ref_=as_li_ss_tl',
        96.16

    )

    const prohibido = new Produto(
        'prohibido',
        '/fitness/imagens/vs-nutrition/pre-treino-prohibido.jpg',
        'Imagem do Prohibido',
        '/fitness/imagens/vs-nutrition/pre-treino-prohibido-tab-nutri.jpg',
        'Imagem da tabela nutricional do Prohibido',
        'https://www.amazon.com.br/Strawberry-Pre-Workout-3VS-Nutrition-Estimulante/dp/B07RWP37B5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.5f48f559-4977-4046-84a6-226e1ac354ed%3Aamzn1.sym.5f48f559-4977-4046-84a6-226e1ac354ed&crid=298BMVVDX95WV&cv_ct_cx=pre%2Btreino&keywords=pre%2Btreino&pd_rd_i=B07RVD8M94&pd_rd_r=13865160-5f9c-4fa0-8a59-085a957552db&pd_rd_w=5l8nx&pd_rd_wg=eSVux&pf_rd_p=5f48f559-4977-4046-84a6-226e1ac354ed&pf_rd_r=BYT9TT4CM0P43ZSNHQN1&qid=1745258270&s=hpc&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=pre%2Btreino%2Chpc%2C306&sr=1-1-b8f34313-536f-475f-9207-a7c427a641c1&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=2ea98825a15fea0692b55a88da24405e&language=pt_BR&ref_=as_li_ss_tl',
        80.14


    )
    preencherElementosPorClasse(prohibido);
    preencherElementosPorClasse(horus);
    preencherElementosPorClasse(nightTrain);
    preencherElementosPorClasse(kimee);
    preencherElementosPorClasse(skull);
});

