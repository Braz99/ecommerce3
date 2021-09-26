# Terceiro ecommerce
#### Link do projeto: https://ecommerce-project-three.netlify.app/
[![Netlify Status](https://api.netlify.com/api/v1/badges/45247886-24a7-480a-ac78-d92b37a41266/deploy-status)](https://ecommerce-project-three.netlify.app/)

## Sobre
Este site foi feito para treinar minhas habilidades com react e redux. Este é o terceiro projeto nesta linha de estudo, sendo o primeiro feito com localstore [projeto Ecommerce](https://github.com/Braz99/Ecommerce), e o segundo utilizando o conceito de context api,  [projeto Ecommerce 2](https://github.com/Braz99/ecommerce2).

## Instalação
Você vai precisar ter instalado em sua máquina:

[GIT](https://git-scm.com)

[Node.js](https://nodejs.org/en/). 

E também de um editor de código, de preferência o [VSCode](https://code.visualstudio.com/)

### Passos

- Primeiro clone o projeto, use o terminal git bash, com o comando <code>git clone https://github.com/Braz99/ecommerce3.git</code>
- Depois abra a pasta no terminal usando o comando <code> cd caminho da pasta</code>
- Com a pasta selecionada é hora de instalar todas as dependências do projeto com o comando <code>npm install</code>
- Para abrir usando o VSCode, depois da instalação de todas as dependências, digite <code> code . </code>
- Para executar a aplicação em modo de desenvolvimento use o comando <code>npm start</code>

 O servidor inciará na porta:3000 - acesse http://localhost:3000
 
 ## Estruturação do projeto
 
 Este projeto tem 3 páginas, encontradas na pasta __src/pages__, que são as seguintes: 
 
 - Home: Com os componentes Header, e MainHome(que contém os produtos); 
 - Cart: Com os componentes Header, MainCart(lista os produtos do carrinho) e TotalValue(Soma o valor de todos os produtos);
 - Checkout: Sem componentes, por ser apenas uma mensagem ao cliente.

### Informações 
- As rotas se encontram no arquivo __app.js__, dentro de __src__;
- Na pasta __src/api__ está a database do projeto, __products.json__, que nada mais é que a lista de produtos;
- As imagens se encontram na pasta __public/assets__
- A pasta __src/store__ contém todos os reducers e actions;
- Todos os componentes se encontram na pasta __src/components__;
- Todo o estilo do projeto se encontra na pasta __src/styles__.


## Licença 
License MIT

## Autor 
Fabrício Brazil

