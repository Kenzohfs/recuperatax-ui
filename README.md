# Projeto React com JSON Server

Este projeto foi desenvolvido utilizando **Vite** e **React.js**. Ele depende de um **JSON Server** para fornecer dados simulados.

## Tecnologias Utilizadas

- **Vite**
- **React.js**
- **JSON Server**

## Estrutura do Projeto

```
📦 recuperatax-ui
├── 📂 json-server     # Pasta contendo o JSON Server
│   ├── db.json       # Arquivo com os dados da API
├── 📂 src            # Código-fonte do React
│   ├── assets        # Arquivos utilziados na aplicação
│   ├── components    # Componentes reutilizáveis
│   ├── consts        # Constantes da aplicação
│   ├── hooks         # Hooks customizados
│   ├── layout        # Página layout da aplicação
│   ├── models        # Modelos de dados, validação de dados
│   ├── pages         # Páginas da aplicação
│   ├── routes        # Rotas da aplicação
└── README.md         # Documentação do projeto
```

## Como Rodar o Projeto

### Clonar o Repositório

```sh
git clone https://github.com/Kenzohfs/recuperatax-ui.git
cd recuperatax-ui
```

### Instalar as Dependências

```sh
npm install
```

### Iniciar o JSON Server

Antes de rodar o frontend, é necessário iniciar o JSON Server:

```sh
cd json-server
npm install -g json-server //caso não tenha instalado
json-server --watch db.json --port 3000
```

Isso fará com que a API falsa rode na porta `3000`.

### Rodar o Projeto React

Em outra aba do terminal, volte para a raiz do projeto e inicie o frontend:

```sh
npm run dev
```

Agora, o projeto estará disponível em `http://localhost:5173`.

## Evidências

### Tela de Login
![Tela de Login](/public/login.png)

### Empresas
![Empresas](/public/empresas.png)

### Sidebar
![Sidebar](/public/sidebar.png)

### Cadastro Empresas
![Cadastro Empresas](/public/cadastroempresa.png)

### Planilhas
![Planilhas](/public/planilhas.png)