
# 💵 Comanda System – Sistema de Consumo via Terminal

![Captura de Tela 2025-05-22 às 09 50 32](https://github.com/user-attachments/assets/fd0b93a9-0831-4938-a434-7fea98eb6218)

Este projeto simula um sistema de comanda digital executado diretamente no terminal. Ele permite o controle de clientes, consumo individual e coletivo por mesa, além do cálculo de gorjetas.

## 🎥 Demonstração do Projeto



https://github.com/user-attachments/assets/f454b8bb-d7ed-4b0e-a495-cc477927f101


- ### Opção: Abortar Lançamentos




https://github.com/user-attachments/assets/84d7aaf5-59d5-42e7-9901-5406348b0d21





  
## 🧠 Objetivo

Praticar a lógica de programação com foco em entrada e saída de dados no terminal, uso de módulos e manipulação de arrays e objetos em JavaScript.

## 🛠️ Tecnologias

- JavaScript (Node.js)
- prompt-sync

## ⚙️ Funcionalidades

- Cadastro de clientes por mesa
- Registro de consumo por cliente
- Cálculo total por mesa
- Aplicação de gorjeta
- Saída detalhada no terminal com `console.log`

## ⚙️ Organização e estrutura dos arquivos com os códigos.
![Captura de Tela 2025-05-22 às 20 42 49](https://github.com/user-attachments/assets/701caecf-6055-4308-a6c0-30a9a6172648)


O projeto teve como desafio inicial, a estrutura e organização dos arquivos de modo que seja fácil a localização de possíveis erros. Com isso, alem de praticar uma codificação mais limpa e organizada, facilita a compreensão de cada função aplicada, no projeto.

![Captura de Tela 2025-05-22 às 20 46 55](https://github.com/user-attachments/assets/d37f5ebe-fbfd-4589-b2dd-3c9a93daf862)
Com isso, cada tema, como aplicação de gorgeta, está correlacionado com seu próprio arquivo de origem.



### While em Loop
![Captura de Tela 2025-05-22 às 21 03 53](https://github.com/user-attachments/assets/6e11a7ac-8085-4eba-a16e-a40e5c79293a)

Uso de while em loop para evitar múltiplas tentativas de if e else, tornando o trecho menos poluído e com melhor performance, já que esse tipo de estrutura permite um controle de fluxo mais direto e contínuo até que o dado esperado seja corretamente fornecido pelo usuário. Essa escolha também contribui para uma experiência mais fluida e segura durante a execução da aplicação no terminal, prevenindo travamentos ou comportamentos inesperados causados por entradas incorretas. 

## 💡 Aprendizados

- Modularização do código em JS
- Uso de `require()` para importar scripts
- Entrada de dados com `prompt-sync`
- Manipulação de listas e objetos
- Organização e clareza de código no terminal


## 👩🏿‍💻 Histórias de usuários 👨🏽‍💻
Uma história do usuário é uma explicação informal e geral sobre um recurso de software escrita a partir da perspectiva do usuário final. Seu objetivo é articular como um recurso de software pode gerar valor para o cliente. No caso desta aplicação, a utilização é voltada para o atendimento de mesas em restaurantes, operada diretamente por um atendente via terminal.

- ### Primeira História de Usuário
Eu, como garçom/garçonete, inicio o sistema via terminal para registrar o nome dos clientes que estão sentados na mesa, evitando anotações manuais.

- ### Segunda História de Usuário
Eu, como garçom/garçonete, informo individualmente os itens consumidos por cada cliente, garantindo o controle específico de consumo.

- ### Terceira História de Usuário
Eu, como garçom/garçonete, acompanho o total acumulado de cada cliente e da mesa, sem precisar realizar cálculos manualmente.

- ### Quarta História de Usuário
Eu, como garçom/garçonete, decido se será aplicada ou não a taxa de gorjeta, de acordo com a política do restaurante ou escolha do cliente.

- ### Quinta e última História de Usuário
Eu, como garçom/garçonete, finalizo o atendimento visualizando um resumo detalhado com o valor total da mesa, a divisão proporcional por cliente e a aplicação (ou não) da gorjeta.


## ▶️ Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/comanda-system.git
```

2. Acesse a pasta do projeto:
```bash
cd comanda-system/src
```

3. Instale a dependência:
```bash
npm install prompt-sync
```

4. Execute o sistema:
```bash
node index.js
```

## ✍🏾 Autor

### Diego Abner

  [LinkedIn](https://www.linkedin.com/in/abnerdiego/)

  Projeto sob supervisão da [Campinho Digital](https://www.instagram.com/campinhodigital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==) no curso de Programação Web Front End
