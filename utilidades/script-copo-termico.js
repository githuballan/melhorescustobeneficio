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
           link.setAttribute('target', '_blank');
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

    const romanticCrown591ml = new Produto(
        'romantic-crown-591ml',
        '/utilidades/imagens/romantic-crown/romantic-crown-591ml-2.jpg',
        'Imagem do copo termico 591ml da marca Romantic Crown',
        '/utilidades/imagens/romantic-crown/romantic-crown-591ml.jpg',
        'Imagem do copo termico 591ml da marca Romantic Crown',
        'https://www.amazon.com.br/Romantic-Termico-Inoxid%C3%A1vel-Refor%C3%A7ado-Presente/dp/B0D9GC2H3G?pd_rd_w=Fthba&content-id=amzn1.sym.383da3a7-6575-48e0-b3db-32c989c715fa&pf_rd_p=383da3a7-6575-48e0-b3db-32c989c715fa&pf_rd_r=RFE60ZPNNAA2D34MB5AN&pd_rd_wg=Jdjz8&pd_rd_r=6d2dc05b-c74c-4600-b9d4-72bcc19c2f88&pd_rd_i=B0D9GC2H3G&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=d6d12318a2e70715a3c69172cc829d27&language=pt_BR&ref_=as_li_ss_tl',
        49.99

    )

    const romanticCrown1180ml = new Produto(
        'romantic-crown-1180ml',
        '/utilidades/imagens/romantic-crown/romantic-crown-1180ml-2.jpg',
        'Imagem do copo termico 1180ml da marca Romantic Crown',
        '/utilidades/imagens/romantic-crown/romantic-crown-1180ml.jpg',
        'Imagem do copo termico 1180ml da marca Romantic Crown',
        'https://www.amazon.com.br/Romantic-T%C3%A9rmico-Smoothie-Presente-inoxid%C3%A1vel/dp/B0D9GR8FJT?pd_rd_w=GHutm&content-id=amzn1.sym.383da3a7-6575-48e0-b3db-32c989c715fa&pf_rd_p=383da3a7-6575-48e0-b3db-32c989c715fa&pf_rd_r=BWAK8SCFQY4AVMHSZ3ER&pd_rd_wg=N9hrZ&pd_rd_r=f77efe38-0316-4bad-b877-e7576da4b2d2&pd_rd_i=B0D9GR8FJT&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=8b61da01b20e9e99016a53bfb1fdb3b8&language=pt_BR&ref_=as_li_ss_tl',
        79.99

    )

    const romanticCrownQuencher591ml = new Produto(
        'romantic-crown-quencher-591ml',
        '/utilidades/imagens/romantic-crown/romantic-crown-quencher-591ml.jpg',
        'Imagem do copo termico quencher 591ml da marca Romantic Crown',
        '/utilidades/imagens/romantic-crown/romantic-crown-quencher-591ml-2.jpg',
        'Imagem do copo termico quencher 591ml da marca Romantic Crown',
        'https://www.amazon.com.br/T%C3%A9rmico-Inoxid%C3%A1vel-Garrafas-Port%C3%A1til-Smoothies/dp/B0DWS96QW5?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=7f1b3f76d35c25d5a834792dab0b42e5&language=pt_BR&ref_=as_li_ss_tl',
        49.99
    )

    const GarrafaMagSafe = new Produto(
        'garrafa-magsafe',
        '/utilidades/imagens/romantic-crown/garrafa-magsafe.jpg',
        'Imagem da garrafa com suporte para celular',
        '/utilidades/imagens/romantic-crown/garrafa-magsafe-2.jpg',
        'Imagem da garrafa com suporte para celular',
        'https://www.amazon.com.br/Garrafa-T%C3%A9rmica-Inoxid%C3%A1vel-Telefone-Magn%C3%A9tico/dp/B0DSHKDH92?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1VR5THZFB3AS1&dib=eyJ2IjoiMSJ9.rF6XTxl9uP1Pa2cLDxHCCcwR0W7ftc_ErDwLncW1JwTj9y11zcDytn2YJZuCZE_MnYsNfLaCoMZAKALRoekV_rL2EiksiMyHG6AKEX4eDFBlES6xPWpvqX0KpLbrZSAHDLQA7l9ICoCbw6bTYPNj5bzBOpckvQutZwswvD6shjdRjM8W2P7fUA2EKGGF2PUjwWCdH3F-iApzwzUgPFpOOFTMO2kckUTSgojcam3PI2nlXWXSfwHtln35vWIMIKrOHhcSq25q8Cbrt8ouNtUsufmc7Q9kzaR6ffI7CjwJP2A.BUMc2lwHcDmiZOi9gww6EUzZ0LoT7BrImXS88_ecYg0&dib_tag=se&keywords=termico&psr=EY17&qid=1745355525&s=todays-deals&sprefix=termico%2Ctodays-deals%2C281&sr=1-22&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=73bcb0a4cfe8d93288ab203d3fe465dd&language=pt_BR&ref_=as_li_ss_tl',
        90
    )

    const copoColerman600ml = new Produto(
        'copo-colerman-600ml',
        '/utilidades/imagens/romantic-crown/copo-colerman-600ml.jpg',
        'Imagem do copo termico 600ml da marca Colerman',
        '/utilidades/imagens/romantic-crown/copo-colerman-600ml-2.jpg',
        'Imagem do copo termico 600ml da marca Colerman',
        'https://www.amazon.com.br/Copo-T%C3%A9rmico-Cerveja-Abridor-Preto/dp/B08R7RXM4J?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=BH5H85PDV39Q&dib=eyJ2IjoiMSJ9.GmU_nvF5_LgF32iR7prXH64-XiG24vaoWDxHZB_B8ZUMMCSv5AlcYwzuCfTbh7b-2txilBcCK8LlGMXCs_jNZEMXbt9ga7Immx6dzq5gOojlLo8SNMgGJbcpQm-jIjKriQr0eqWaWLzxCNzNWIZaBL3hQEJhgu2CJM1t7b4I69fv7ciCFDG5sqCgmuZWz-TjYZcz4QRF6CBZUWrEICEKjlrM2UnIwHj4brqyWjkDyH4.4AAFTEKc2pTHekb3-YRf7DdDBoe0v2U6t5zeixvb_1c&dib_tag=se&keywords=copo%2Bt%C3%A9rmico%2Bcaf%C3%A9&qid=1745362009&s=kitchen&sprefix=copo%2Bt%C3%A9rmico%2Bcaf%C3%A9%2Ckitchen%2C242&sr=1-7&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&xpid=TFEKpdNI0nj0y&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=461ba0625c7a4e99049d447505da0998&language=pt_BR&ref_=as_li_ss_tl',
        80.62
    )
    preencherElementosPorClasse(copoColerman600ml);
    preencherElementosPorClasse(GarrafaMagSafe);
    preencherElementosPorClasse(romanticCrownQuencher591ml);
    preencherElementosPorClasse(romanticCrown1180ml);
    preencherElementosPorClasse(romanticCrown591ml);

   
   
});

