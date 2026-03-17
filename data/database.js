let categorias = [
    { id: 1, nome: "Cafés" },
    { id: 2, nome: "Frapuccinos" }
];

let produtos = [
    { categoriaId:1,
      nome: "Caramelo Macchiato",
      descricao: "Leite vaporizado, um toque de baunilha, dose de espresso e cobertura de caramelo.", 
      preco: 24.50,
      imagem: "https://www.starbucksathome.com/pt/sites/default/files/2026-01/Caramel%20Macchiato_1842x1542_Contact%20Shadow_0.png" 
    },
    { 
        categoriaId:1,      
        nome: "Cappuccino Tradicional",
        descricao: "Espresso com leite cremoso.", 
        preco: 85.00,
        imagem: "https://bunny-wp-pullzone-8lgzf5kyx3.b-cdn.net/assets/uploads/2023/08/sbx20190617-33379-cappuccino-onwhite-corelib-srgb.png"
    },
    { 
        categoriaId:1, 
        nome: "Cappuccino Brigadeiro",
        descricao: "Espresso e leite cremoso com calda de brigadeiro e granulado de chocolate belga ao leite.", 
        preco: 27.00,
        imagem: "https://static.vecteezy.com/system/resources/previews/060/284/199/non_2x/hot-chocolate-isolated-on-transparent-background-free-png.png"
    },
    { 
        categoriaId:1, 
        nome: "Cappuccino Chocolate", 
        descricao: "Calda de chocolate, espresso e leite cremoso, com deliciosa cobertura de chocolate e chocolate em pó.",
        preco: 25.50,
        imagem: "https://static.vecteezy.com/system/resources/previews/057/445/513/non_2x/delicious-creamy-hot-chocolate-topped-with-whipped-cream-and-chocolate-shavings-on-a-transparent-background-delicious-creamy-hot-chocolate-on-transparent-background-free-png.png 980w, https://static.vecteezy.com/system/resources/previews/057/445/513/large_2x/delicious-creamy-hot-chocolate-topped-with-whipped-cream-and-chocolate-shavings-on-a-transparent-background-delicious-creamy-hot-chocolate-on-transparent-background-free-png.png"
    },
    { 
        categoriaId:2, 
        nome: "Super Morango",
        descricao: "Sem café. Leite com calda de morango, batidos com gelo, finalizado com chantilly.", 
        preco: 26.50,
        imagem: "https://bunny-wp-pullzone-8lgzf5kyx3.b-cdn.net/assets/uploads/2023/08/sbx20190528-30613-strawberryfrapp-onwhite-corelib-srgb.png"
    },
    { 
        categoriaId:2, 
        nome: "Caramelo",
        descricao: "Opção com ou sem café. Café, leite e essência de caramelo, batidos com gelo, finalizado com chantilly e cobertura de caramelo.", 
        preco: 28.50,
        imagem: "https://bunny-wp-pullzone-8lgzf5kyx3.b-cdn.net/assets/uploads/2023/08/ultra-caramel.png"
    },
    { 
        categoriaId:2, 
        nome: "Baunilha",
        descricao: "Sem café. Versão clássica, com baunilha e leite, batidos com gelo, finalizado com chantilly.", 
        preco: 29.00,
        imagem: "https://bunny-wp-pullzone-8lgzf5kyx3.b-cdn.net/assets/uploads/2023/08/sbx20181113-21211-vanillabeanfrapp-onwhite-corelib-srgb-copy.png"
    }
];

module.exports = { categorias, produtos };