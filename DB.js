var DB = {
    produtos: [
      {
        "id": 0,
        "nome": "Camiseta Fuscão Preto",
        "imagem": "images/camiseta-fuscao-preto.png",
        "tipo": "camiseta",
        "destaque": true,
        "genero": "masculina",
        "preco": "80.99",
        "descricao": "A camiseta original Fuscão Preto para quem é fâ de fuscas ou de carros antigos, é feita 100% de algodão."
      },
      {
        "id": 1,
        "nome": "Camiseta Tarsila do Amaral",
        "imagem": "images/camiseta-tarsila-do-amaral.png",
        "tipo": "camiseta",
        "destaque": true,
        "genero": "masculina",
        "preco": "69.99",
        "descricao": "A camiseta que é uma obra de arte para todos que gostam de arte e querem demostrar isso através de uma estampa."
      },
      {
        "id": 2,
        "nome": "Tênis Adidas Breaknet",
        "imagem": "images/tenis-adidas-breaknet.png",
        "tipo": "tenis",
        "destaque": true,
        "genero": "masculina",
        "preco": "169.99",
        "descricao": "Um tênis super confortável da marca Adidas perfeito para eventos sociais."
      },
      {
        "id": 3,
        "nome": "Tênis Evolten",
        "imagem": "images/tenis-evolten.png",
        "tipo": "tenis",
        "destaque": true,
        "genero": "masculina",
        "preco": "269.99",
        "descricao": "Um tênis perfeito para caminhadas com amortecedor Mortex que deixa a pisada mais confortável."
      },
      {
        "id": 4,
        "nome": "Boné Fuking Summer",
        "imagem": "images/bone-fuking-summer.png",
        "tipo": "bone",
        "destaque": true,
        "genero": "masculina",
        "preco": "19.99",
        "descricao": "Um boné perfeito para utilizar no verão e demostar sua rebeldia."
      },
      {
        "id": 5,
        "nome": "Boné Longuinni",
        "imagem": "images/bone-longuinni.png",
        "tipo": "bone",
        "destaque": false,
        "genero": "masculina",
        "preco": "25.00",
        "descricao": "Boné original da marca Longuinni que você pode adquiri por um preço bastante acessível."
      },
      {
        "id": 6,
        "nome": "Bermuda Jeans Masculina",
        "imagem": "images/bermuda-jeans-masculina.png",
        "tipo": "bermuda",
        "destaque": true,
        "genero": "masculina",
        "preco": "45.00",
        "descricao": "Uma bermuda jeans com um tecido de qualidade que demora bastante tempo para se desgastar."
      },
      {
        "id": 7,
        "nome": "Bermuda Moletom",
        "imagem": "images/bermuda-moletom.png",
        "tipo": "bermuda",
        "destaque": true,
        "genero": "masculina",
        "preco": "55.00",
        "descricao": "Uma bermuda 100% moletom que é muito confortável e perfeita para o calor."
      },
      {
        "id": 8,
        "nome": "Bermuda Destroyed",
        "imagem": "images/bermuda-destroyed.png",
        "tipo": "bermuda",
        "destaque": true,
        "genero": "feminina",
        "preco": "32.00",
        "descricao": "Uma bermuda jeans estilosa e confortável que é perfeita para o calor."
      }
    ],
    comentarios: [
      {
        "id": 0,
        "produtoId": 0,
        "nota": 5,
        "comentario": "Que camiseta irada!",
        "autor": "Tiago Matos",
        "data": "2012-10-16T17:57:28.556094Z"
      },
      {
        "id": 1,
        "produtoId": 1,
        "nota": 5,
        "comentario": "Essa camiseta é uma obra de arte!",
        "autor": "Maiara Santos",
        "data": "2014-09-05T17:57:28.556094Z"
      },
      {
        "id": 2,
        "produtoId": 0,
        "nota": 5,
        "comentario": "Sempre quis um Fuscão Preto.",
        "autor": "Marcos Baiano",
        "data": "2016-02-16T13:50:28.556094Z"
      },
      {
        "dishId": "0",
        "rating": "3",
        "author": "Naiara",
        "comment": "Não tem de outra cor?",
        "data": "2023-01-26T20:56:23.721Z",
        "id": 3
      },
      {
        "produtoId": "0",
        "nota": "4",
        "autor": "Naiara",
        "comentario": "Não tem de outra cor?",
        "data": "2023-01-26T20:58:33.436Z",
        "id": 4
      },
      {
        "produtoId": "2",
        "nota": "3",
        "autor": "Guilherme Almeida",
        "comentario": "Que tênis legal!",
        "data": "2023-01-26T21:02:59.812Z",
        "id": 5
      },
      {
        "produtoId": "4",
        "nota": "4",
        "autor": "Peter Pan",
        "comentario": "Esse boné é foda.",
        "data": "2023-01-26T21:04:45.774Z",
        "id": 6
      },
      {
        "produtoId": "6",
        "nota": "3",
        "autor": "Iago Martins",
        "comentario": "É a bermuda que eu queria.",
        "data": "2023-01-26T21:12:35.214Z",
        "id": 7
      },
      {
        "produtoId": "7",
        "nota": "3",
        "autor": "Mara Aguiar",
        "comentario": "Esse tecido é perfeito.",
        "data": "2023-01-26T21:16:19.671Z",
        "id": 8
      },
      {
        "produtoId": "3",
        "nota": "5",
        "autor": "Yago Fernandes",
        "comentario": "Parece confortavel.",
        "data": "2023-01-26T21:17:47.153Z",
        "id": 9
      },
      {
        "produtoId": "3",
        "nota": "3",
        "autor": "Nanda Machado",
        "comentario": "Tem no tamanho 38?",
        "data": "2023-01-26T21:44:15.868Z",
        "id": 10
      },
      {
        "produtoId": "5",
        "nota": "4",
        "autor": "Minion",
        "comentario": "Que boné legal.",
        "data": "2023-01-26T21:46:40.212Z",
        "id": 11
      },
      {
        "produtoId": "2",
        "nota": "3",
        "autor": "João Pereira",
        "comentario": "Tem na cor vermelha?",
        "data": "2023-01-26T21:51:43.351Z",
        "id": 12
      },
      {
        "produtoId": "0",
        "nota": "4",
        "autor": "Julio Lopes",
        "comentario": "Quero um Fusca na cor verde.",
        "data": "2023-01-26T22:01:20.426Z",
        "id": 13
      },
      {
        "produtoId": "6",
        "autor": "Maria da Silva",
        "comentario": "Vou comprar pro meu marido.",
        "data": "2023-01-26T22:02:54.868Z",
        "id": 14
      },
      {
        "produtoId": "5",
        "nota": "3",
        "autor": "Lucas Caetano",
        "comentario": "Quero um na cor preta.",
        "data": "2023-01-26T22:04:16.428Z",
        "id": 15
      },
      {
        "produtoId": "1",
        "nota": "3",
        "autor": "Ronaldo Lopes",
        "comentario": "Que camisa legal.",
        "data": "2023-01-26T22:05:22.691Z",
        "id": 16
      },
      {
        "produtoId": "5",
        "autor": "Fernando Santos",
        "comentario": "Queria um chapéu.",
        "data": "2023-01-26T22:06:42.954Z",
        "id": 17
      },
      {
        "produtoId": "0",
        "nota": "2",
        "autor": "teste",
        "comentario": "Testando.",
        "data": "2023-01-27T00:22:51.983Z",
        "id": 18
      },
      {
        "produtoId": "0",
        "autor": "Teste 2",
        "comentario": "Segundo teste.",
        "data": "2023-01-27T00:24:08.277Z",
        "id": 19
      },
      {
        "produtoId": "1",
        "autor": "Testando",
        "comentario": "Isso é um teste.",
        "data": "2023-01-27T00:51:13.145Z",
        "id": 20
      },
      {
        "produtoId": "1",
        "autor": "Teste 2",
        "comentario": "Esse é o segundo teste.",
        "data": "2023-01-27T00:51:43.473Z",
        "id": 21
      },
      {
        "produtoId": "7",
        "autor": "Teste",
        "comentario": "Isso é um teste.",
        "data": "2023-01-27T00:52:08.429Z",
        "id": 22
      },
      {
        "produtoId": "8",
        "nota": "3",
        "autor": "Nanda",
        "comentario": "Que lindo!",
        "data": "2023-01-27T19:50:34.126Z",
        "id": 23
      },
      {
        "produtoId": "8",
        "nota": "1",
        "autor": "Maiara",
        "comentario": "Queria um desses.",
        "data": "2023-01-28T14:17:46.784Z",
        "id": 26
      },
      {
        "produtoId": "8",
        "nota": "5",
        "autor": "Murilo",
        "comentario": "Vou comprar para minha namorada.",
        "data": "2023-01-28T14:19:02.557Z",
        "id": 27
      },
      {
        "produtoId": "8",
        "nota": "3",
        "autor": "Mineirinho",
        "comentario": "Que isso uai.",
        "data": "2023-02-07T15:25:05.073Z",
        "id": 28
      }
    ],
    mensagens: [
      {
        "nome": "Tomas Araujo",
        "email": "tomas@gmail.com",
        "motivo": "Outros",
        "mensagem": "Olá, me chamo Tomas e estou procurando um emprego, alguma vaga disponível?",
        "promocoes": false,
        "data": "2023-01-20T12:50:04.126Z",
        "id": 0
      },
      {
        "nome": "",
        "email": "",
        "motivo": "",
        "mensagem": "",
        "promocoes": false,
        "data": "2023-01-28T00:09:47.244Z",
        "id": 1
      },
      {
        "nome": "",
        "email": "",
        "motivo": "",
        "mensagem": "",
        "promocoes": false,
        "data": "2023-01-28T00:12:34.131Z",
        "id": 2
      },
      {
        "nome": "",
        "email": "",
        "motivo": "",
        "mensagem": "",
        "promocoes": false,
        "data": "2023-01-28T00:16:22.114Z",
        "id": 3
      },
      {
        "nome": "ddddd",
        "email": "teste@teste.com",
        "motivo": "Reclamação",
        "mensagem": "ffff",
        "promocoes": false,
        "data": "2023-01-28T00:35:46.022Z",
        "id": 4
      }
    ]
  }

  module.exports = DB