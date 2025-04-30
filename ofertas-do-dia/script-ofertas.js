
function adicionarProdutosTabela(produtos) {
    produtos.forEach(produto => {
        const tbody = document.getElementById(produto.categoria);

        if (!tbody) {
            console.warn(`Elemento com o ID "${produto.categoria}" não foi encontrado.`);
            return;
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
        // colunaValor.classList.add('valor-produto');
        colunaValor.innerHTML = `
            R$ ${produto.valorPor.toFixed(2).toString().replace('.', ',')}<br> 
            <a class="ver-oferta" href="${produto.url}" target="_blank">
               
                <img src="/imagens/logo-lojas/mini-${produto.loja}.png" alt="Logo marca ${produto.loja}">
            </a>
        `;
        novaLinha.appendChild(colunaValor);

        // Adiciona a nova linha ao tbody
        tbody.appendChild(novaLinha);
    });
}

// Define the ProdutoOferta class


document.addEventListener('DOMContentLoaded', () => {
    //A ordem de execução das funções aqui é importante para garantir que os elementos sejam criados e que as funcionalidades sejam aplicadas corretamente.POR ISSO ESSE ESTÁ SEPARADO DO OUTRO DOM!!!!!!!!!!!!!
  
    
        const produtos = [








//---------------------STANLEY---------------------//
//---------------------STANLEY---------------------//
          //ACABA DIA DAS MAES
          //ACABA DIA DAS MAES


              new ProdutoOferta(
              'MUG',//Titulo do produto aqui',
              'Camp Mug Stanley | 350ML',//Descrição do produto aqui',
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/stanley/mug.jpg',//src da imagem aqui',
              'Camp Mug Stanley | 350ML',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0B57GPWY1?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=03e19c64424d8d87a6a1677ea6ebd23e&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
               148,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
    
    
            ),

              new ProdutoOferta(
              'cervja',//Titulo do produto aqui',
              'O Clássico Copo Térmico de Cerveja (com tampa) Stanley | 473ML',//Descrição do produto aqui',
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/stanley/classico.jpg',//src da imagem aqui',
              'Copo Térmico de Cerveja Stanley',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0783R4XYZ?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=04a45136d3cf017bb43aa006242fcdad&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
              110,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
    
    
            ),

             new ProdutoOferta(
              'Aerolight',//Titulo do produto aqui',
              'Garrafa Térmica Aerolight Flip Straw Clover Shimmer | 710 ML',//Descrição do produto aqui',
              'amazon',//Loja do produto aqui', amazon magalu
              '/imagens/ofertas-do-dia/stanley/aerolight.jpg',//src da imagem aqui',
              'Garrafa Térmica Aerolight Flip Straw',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0DMTQTSHR?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=9d82f566223574c39ca428a1d214bcea&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
                237,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
    
    
            ),

             new ProdutoOferta(
              'Sem-tampa',//Titulo do produto aqui',
              'Copo térmico de cerveja Stanley|473ml',//Descrição do produto aqui', 
              // amazon magalu
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/stanley/sem.jpg',//src da imagem aqui',
              'Imagem copo Stanley',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0CZM26HS5?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=ca344e16ae783c821ff73380722eb56f&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
              72.51,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
    
    
            ),
    
           new ProdutoOferta(
              'prismático ',//Titulo do produto aqui',
              'Stanley - Copo prismático isolado para cocktails, antiderrapante e Borda com a assinatura de William Stanley Jr. 381 ml, Ash Bronze',//Descrição do produto aqui', amazon magalu
              'amazon',//Loja do produto aqui',cocktails
              '/imagens/ofertas-do-dia/stanley/cocktails_.jpg',//src da imagem aqui',
              'Imagem copo Stanley',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0CZPVFNB3?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=3f2ab40ffe956633e0ff917d6f21b777&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
                149,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
    
    
            ),

              new ProdutoOferta(
              'Quencher',//Titulo do produto aqui',
              'Stanley - Copo Quencher H2.0 FlowState 591ml - Copo de aço inoxidável com tampa, isolamento a vácuo, para água, chá gelado, café, smoothies e muito mais, Pool',//Descrição do produto aqui', amazon magalu
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/stanley/quencher.jpg',//src da imagem aqui',
              'Imagem copo Stanley',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0CZM7YDMH?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=a886aa1c324e3b4b027434d531a86c18&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
                129.62,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
    
    
            ),

              new ProdutoOferta(
              'Everyday ',//Titulo do produto aqui',
              'Stanley - Copo Térmico Everyday, 296ml, para Bebidas Quentes e Frias com Tampa, Aço Inoxidável, Marinha',//Descrição do produto aqui', amazon magalu
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/stanley/everyday.jpg',//src da imagem aqui',
              'Imagem copo Stanley',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0CZPVL1CP?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=a172ce8e5e59656c86a18c55ec9e0470&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
               143.92 ,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
              ),



              
           new ProdutoOferta(
              'fluxo ',//Titulo do produto aqui',
              'Stanley - Garrafa de água Aerolight com tampa de fluxo rápido, copo isolado a vácuo para bebidas frias, aço inoxidável leve, 710 ml, Polar',//Descrição do produto aqui', amazon magalu
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/stanley/fluxo .jpg',//src da imagem aqui',
              'Imagem copo Stanley',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0CT5X3YM1?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=620f02bbe7e9c77877cee0eae4f5ee11&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
               208 ,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
           ),



            new ProdutoOferta(
              'Aerolight',//Titulo do produto aqui',
              'Stanley Garrafa Térmica Aerolight Transit Cream, 591ml',//Descrição do produto aqui', amazon magalu
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/stanley/cream.jpg',//src da imagem aqui',
              'Imagem copo Stanley',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0CZPSD2SC?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=4e67d2e1e6376c3583d34a2f6720212d&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
               159.61 ,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
           ),


            new ProdutoOferta(
              'Tumbler',//Titulo do produto aqui',
              'Tumbler Térmico Flip Straw Stanley|887ml',//Descrição do produto aqui', amazon magalu
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/stanley/tumbler.jpg',//src da imagem aqui',
              'Imagem copo Stanley',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0DMTYSX8Y?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=fd42363edbcdf3f31ddb3ec5bde36047&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
               255.20 ,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
           ),

             new ProdutoOferta(
              'Straw',//Titulo do produto aqui',
              'Tumbler Térmico Flip Straw Varsity Cream Lilac Stripes | 887 ML',//Descrição do produto aqui', amazon magalu
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/stanley/straw.jpg',//src da imagem aqui',
              'Imagem copo Stanley',//alt da imagem aqui',
              'https://www.amazon.com.br/dp/B0DVBJFFQB?th=1&linkCode=ll1&tag=allanamazon07-20&linkId=97fd476f1e60ff6e850d22c400965708&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
               319.20 ,//valor do produto aqui',
            'stanley',//categoria do produto aqui' tecnologia variados fitness
           ),











          //ACABA DIA DAS MAES
          //ACABA DIA DAS MAES
//---------------------STANLEY---------------------//
//---------------------STANLEY---------------------//







//---------------------MAES---------------------//
//---------------------MAES---------------------//


            new ProdutoOferta(
              'Celular',//Titulo do produto aqui',
              'Smartphone Samsung Galaxy A15 6,5" 128GB Azul Escuro 4G 4GB RAM Câm. Tripla 50MP + Selfie 13MP 5000mAh Dual Chip',//Descrição do produto aqui', amazon magalu
              'magalu',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/maes/celular-a15.webp',//src da imagem aqui',
              'Imagem celular A15',//alt da imagem aqui',
              'https://www.magazinevoce.com.br/magazinemelhorescustoben/smartphone-samsung-galaxy-a15-65-128gb-azul-escuro-4g-4gb-ram-cam-tripla-50mp-selfie-13mp-5000mah-dual-chip/p/237216400/te/ga14/',//url do produto aqui',
               809 ,//valor do produto aqui',
            'tecnologias',//categoria do produto aqui' tecnologia variados fitness
           ),


           
           new ProdutoOferta(
              'Echo Pop ',//Titulo do produto aqui',
              'Echo Pop (Última geração) | Smart speaker compacto com som envolvente e Alexa | Cor Preta',//Descrição do produto aqui', amazon magalu
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/maes/echo.jpg',//src da imagem aqui',
              'Imagem copo Stanley',//alt da imagem aqui',
              'https://www.amazon.com.br/Echo-Pop-Cor-Preta/dp/B09WXVH7WK?_encoding=UTF8&pd_rd_w=FuACD&content-id=amzn1.sym.8fbb3d34-c3f1-46af-9d99-fd6986f6ec8f&pf_rd_p=8fbb3d34-c3f1-46af-9d99-fd6986f6ec8f&pf_rd_r=0RTZR0XKY45KSDN76YSH&pd_rd_wg=caNDe&pd_rd_r=55d446f1-9bd0-43f9-9c85-191b0164f0db&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=350a0ac920a2e1c4dd99fcb7ee2bc35e&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
               319 ,//valor do produto aqui',
            'tecnologias',//categoria do produto aqui' tecnologia variados fitness
           ),


           new ProdutoOferta(
              'Kindle',//Titulo do produto aqui',
              'Novo Kindle (16 GB - modelo 2024) - Leve e compacto, com tela antirreflexo, trocas de página mais rápidas, luz frontal ajustável e bateria de longa duração - Cor Verde',//Descrição do produto aqui', amazon magalu
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/maes/kindle.jpg',//src da imagem aqui',
              'Imagem do kindle',//alt da imagem aqui',
              'https://www.amazon.com.br/kindle-16gb-verde/dp/B0CP31QS6R?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=FX5R21TQUIRI&dib=eyJ2IjoiMSJ9.kbn6OcEFCdpZ_4_ZxrXNiMTB9j8KcpWsfZhOSUZR4sTwqYvInG0jlM9udD003YdtjJUyTXNve_yph_atr_VqZ12q_Y2V62E118_oakWE_RK-eM01U6THyuJa9ix04Wh8VLsAnF35f8KQHVVUkjOc-3ggj7MEgiCtswjO3wWUE1M0B5HABff9ImRFLJmI0bf06CZFUgu2jT_nR46ehohFfvCjAVugRZnYTXefzNzF4d2OAquYRzcZhLDWntsAdICPb8iDPcO8sbtPWrrmeBOQ1bSPcq89rppYy_xlM3AUVks.Z_0RAfDF-iVbCZHPKIOAqQLK0QiF7vr5cJbAlSHzkO4&dib_tag=se&keywords=kindle&qid=1746024898&sprefix=kindle%2Caps%2C348&sr=8-1&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=a9ec613c58f0ae39c62850c8ca514868&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
               569 ,//valor do produto aqui',
            'tecnologias',//categoria do produto aqui' tecnologia variados fitness
           ),

           new ProdutoOferta(
              'Echo Dot',//Titulo do produto aqui',
              'Echo Dot (Última geração) | O Echo Dot com o melhor som já lançado | Cor Preta',//Descrição do produto aqui', amazon magalu
              'amazon',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/maes/echo-bola.jpg',//src da imagem aqui',
              'Imagem Echo Dot (Última geração) Cor Preta',//alt da imagem aqui',
              'https://www.amazon.com.br/Echo-Dot-5%C2%AA-gera%C3%A7%C3%A3o-Cor-Preta/dp/B09B8VGCR8?pd_rd_w=4kMhC&content-id=amzn1.sym.6c467c3e-30d6-44a6-a3dc-69f18a051b8c&pf_rd_p=6c467c3e-30d6-44a6-a3dc-69f18a051b8c&pf_rd_r=HQKGTDDYPWPY3W0CAJNJ&pd_rd_wg=TWjU9&pd_rd_r=e5a4041f-fba8-466d-b4a4-7fcadc5fc33e&pd_rd_i=B09B8VGCR8&th=1&linkCode=ll1&tag=allanamazon07-20&linkId=74cc877dca44c7e47b87a8a94061c722&language=pt_BR&ref_=as_li_ss_tl',//url do produto aqui',
               459 ,//valor do produto aqui',
            'tecnologias',//categoria do produto aqui' tecnologia variados fitness
           ),


             new ProdutoOferta(
              'La Vie Est Belle Lancôme',//Titulo do produto aqui',
              'Perfume Feminino La Vie Est Belle Lancôme EDP 100ml',//Descrição do produto aqui', amazon mercadolivre magalu
              'mercadolivre',//Loja do produto aqui',
              '/imagens/ofertas-do-dia/maes/lacome.webp',//src da imagem aqui',
              'Imagem copo Stanley',//alt da imagem aqui',
              'https://www.mercadolivre.com.br/perfume-feminino-la-vie-est-belle-lancme-edp-100ml/p/MLB6140723?pdp_filters=deal%3AMLB779362-1#polycard_client=homes-korribanSearchPromotions&searchVariation=MLB6140723&wid=MLB5011962698&position=8&search_layout=grid&type=product&tracking_id=2ceac590-456a-484b-bd3e-f9b0b3694c7c&sid=search&c_id=/home/promotions-recommendations/element&c_uid=f21682d1-b63b-4b45-b0b9-4d7f0eb39b40',//url do produto aqui',
              459 ,//valor do produto aqui',
            'perfumaria',//categoria do produto aqui' tecnologia variados fitness
           ),


           new ProdutoOferta(
            'Una Blush Deo Parfum',//Titulo do produto aqui',
            'Una Blush Deo Parfum Feminino 75ml Natura',//Descrição do produto aqui', amazon mercadolivre magalu
            'mercadolivre',//Loja do produto aqui',
            '/imagens/ofertas-do-dia/maes/una.webp',//src da imagem aqui',
            'Imagem copo Stanley',//alt da imagem aqui',
            'https://www.mercadolivre.com.br/social/melhorescustobenefic?matt_tool=58695067&forceInApp=true&ref=BCUXZ%2B1vdmS0Iy0eXryliK5IALl9vw%2FxdBXD1FZr8QCqwnn%2BQ3SWlxNU%2FRsb4FZrokh7a2%2BMgNBWFE4yyi4yturVoWbqQLqv%2B%2BLGqVucbLAAkavP3rrrBJugr0bGUA1pqwl%2BR9rk7OV%2F52UGRuJIUwZatfuYetaQPpcQYr1w0Nj7TmK5kVFQ8Iz51olIMA4XLR%2FQfW4%3D',//url do produto aqui',
            169 ,//valor do produto aqui',
          'perfumaria',//categoria do produto aqui' tecnologia variados fitness
         ),


         new ProdutoOferta(
          'Fakhar Lattafa Rose',//Titulo do produto aqui',
          'Perfume Fakhar Lattafa Rose feminino 100ml',//Descrição do produto aqui', amazon mercadolivre magalu
          'mercadolivre',//Loja do produto aqui',
          '/imagens/ofertas-do-dia/maes/fakhar.webp',//src da imagem aqui',
          'Imagem do perfume',//alt da imagem aqui',
          'https://www.mercadolivre.com.br/social/melhorescustobenefic?matt_tool=58695067&forceInApp=true&ref=BJrbIHfZSLt9dKZ0TBzA1oDsw4qqrXVhkfWw%2FsiMNSOvaltXoiNGUaPEXF7ManClrrvaiUm%2BzHyBNhIToQ1ZB1oi45kUm6Hx1moAZfD16dKGSlJ9jY6KV%2B5V6tSGSfACiIbxEpZBv8RdaFqFV%2FwaqR2nJyOov686Htyn%2FBAk7tNRMsLVrvZKX%2Bt2CPnjeQOs3VIo%2FwE%3D',//url do produto aqui',
          170 ,//valor do produto aqui',
        'perfumaria',//categoria do produto aqui' tecnologia variados fitness
       ),

              
        new ProdutoOferta(
          'Lattafa Yara',//Titulo do produto aqui',
          'Perfume Feminino Lattafa Yara eau de parfum 100 ml',//Descrição do produto aqui', amazon mercadolivre magalu
          'mercadolivre',//Loja do produto aqui',
          '/imagens/ofertas-do-dia/maes/latafa.webp',//src da imagem aqui',
          'Imagem do perfume',//alt da imagem aqui',
          'https://www.mercadolivre.com.br/social/melhorescustobenefic?matt_tool=58695067&forceInApp=true&ref=BM7ACFISk1uZTUMeGOJ0G%2FruZlV2rXMx1yRV0SZcWDteB21hcWo6F4pjZwXNx8JzV2bTq%2BuXjRDx9ppmPbHse%2Fz0ZZvPz3XIkhcYUFSNM%2B8ft1eIPEiW0aytBL2UC3q6BdpLMQyDHDDMTUh2Hgekcmt6%2BBOTngyyYxq9QLW%2BysiCslVwjGxpdyDBywa5Wb9KZ9mAKsE%3D',//url do produto aqui',
          183 ,//valor do produto aqui',
        'perfumaria',//categoria do produto aqui' tecnologia variados fitness
        ),

                
        new ProdutoOferta(
          'Lancôme Idôle',//Titulo do produto aqui',
          'Perfume Feminino Lancôme Idôle EDP 100ml',//Descrição do produto aqui', amazon mercadolivre magalu
          'mercadolivre',//Loja do produto aqui',
          '/imagens/ofertas-do-dia/maes/idole.webp',//src da imagem aqui',
          'Imagem do perfume',//alt da imagem aqui',
          'https://www.mercadolivre.com.br/social/melhorescustobenefic?matt_tool=58695067&forceInApp=true&ref=BEXznsoFf3XxWkFYskEVuyqTICMjDa3F22w0kO0eA7hJtHXFaPh4vTPr7fbQqombnrHd5zMAvqoYDimRFJe2utDPwg2e2O337hmWkYX3M%2FGhTL0kQRSqEA0Pq0cTmQbraCUIEVhuY8v%2BV%2FGXqflxkJpCDznb78tQxZnR4KfGOswj03tnlbTmCYFcVItnhLsb%2Bj8Z%2Bpg%3D',//url do produto aqui',
          736.82 ,//valor do produto aqui',
        'perfumaria',//categoria do produto aqui' tecnologia variados fitness
        ),



//---------------------MAES---------------------//
//---------------------MAES---------------------//


// new ProdutoOferta(
//   'XXXXXXXX',//Titulo do produto aqui',
//   'XXXXXXXX',//Descrição do produto aqui', amazon mercadolivre magalu
//   'mercadolivre',//Loja do produto aqui',
//   '/imagens/ofertas-do-dia/maes/XXXXXXXX.webp',//src da imagem aqui',
//   'Imagem do perfume',//alt da imagem aqui',
//   'XXXXXXXX',//url do produto aqui',
//   0000000 ,//valor do produto aqui',
// 'perfumaria',//categoria do produto aqui' tecnologia variados fitness
// ),


           // new ProdutoOferta(
            //   '',//Titulo do produto aqui',
            //   '',//Descrição do produto aqui', amazon magalu
            //   'amazon',//Loja do produto aqui',
            //   '/imagens/ofertas-do-dia/maes/cecho-bola.jpg',//src da imagem aqui',
            //   'Imagem copo Stanley',//alt da imagem aqui',
            //   '',//url do produto aqui',
            //    0 ,//valor do produto aqui',
            // 'tecnologias',//categoria do produto aqui' tecnologia variados fitness
           //),

    
    
            // new ProdutoOferta(
            //   '',//Titulo do produto aqui',
            //   '',//Descrição do produto aqui', amazon magalu
            //   '',//Loja do produto aqui',
            //   '',//src da imagem aqui',
            //   '',//alt da imagem aqui',
            //   '',//url do produto aqui',
            //     0,//valor do produto aqui',
            // '',//categoria do produto aqui' tecnologia variados fitness
    
    
            // ),
    
        
    
    
            // ),
    
        
            // Adicione mais produtos aqui, se necessário
        ];//OS PODUTO CRIADOS AQUI SERÃO ADICIONADOS AUTOMATICAMENTE A TABELA E AO CARROCEL
    
        adicionarProdutosTabela(produtos);
    
    });