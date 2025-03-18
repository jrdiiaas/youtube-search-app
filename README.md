# YouTube Search App

Este projeto é um buscador que utiliza a API do YouTube para pesquisar vídeos com base em uma consulta de texto fornecida pelo usuário. Os resultados da busca são retornados em formato XML.

## Estrutura do Projeto

```
youtube-search-app
├── src
│   ├── index.js          # Ponto de entrada da aplicação
│   ├── api
│   │   └── youtube.js    # Funções para interagir com a API do YouTube
│   ├── utils
│   │   └── xmlConverter.js # Função para converter JSON em XML
│   └── views
│       └── searchForm.js  # Formulário de busca na interface do usuário
├── package.json           # Configuração do npm
└── README.md              # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd youtube-search-app
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso

1. Inicie a aplicação:
   ```
   npm start
   ```
2. Acesse a interface do usuário em seu navegador.

## API do YouTube

Este projeto utiliza a API do YouTube para realizar buscas de vídeos. A função `searchVideos(query)` no arquivo `src/api/youtube.js` é responsável por enviar a consulta e retornar os resultados.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie suas alterações através de um pull request.