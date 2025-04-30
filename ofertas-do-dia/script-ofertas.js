
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



           // new ProdutoOferta(
            //   '',//Titulo do produto aqui',
            //   '',//Descrição do produto aqui', amazon magalu
            //   'amazon',//Loja do produto aqui',
            //   '/imagens/ofertas-do-dia/stanley/quencher.jpg',//src da imagem aqui',
            //   'Imagem copo Stanley',//alt da imagem aqui',
            //   '',//url do produto aqui',
            //    0 ,//valor do produto aqui',
            // 'stanley',//categoria do produto aqui' tecnologia variados fitness
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