# Massa Studio 🍝

Cardápio digital interativo — projeto demonstrativo e autoral do portfólio de **Rejane Dantas**.

Inspirado na experiência de montar um pedido em sites de restaurantes, mas com identidade visual, textos e funcionalidades próprios. Não possui vínculo com restaurantes reais.

## O que faz

- Cardápio adaptado para celular e desktop;
- Abertura cinematográfica com fotografias que saltam para a tela, se organizam e se dispersam; botão para rever a cena;
- Galeria em movimento e entrada suave dos produtos conforme a navegação;
- Fotos ampliadas que viram para apresentar ingredientes e uma história do prato;
- Montagem de massa por tamanho, tipo de massa, molho e adicionais;
- Preço atualizado na hora;
- Sugestões animadas de bebida e pão depois do prato, seguidas de sobremesa quando a bebida é escolhida;
- Filtros de massas, acompanhamentos, bebidas e sobremesas;
- Sacola com controle de quantidades e subtotal;
- Persistência local da sacola no navegador;
- Resumo do pedido para WhatsApp (ou cópia no modo demonstração);
- Sem login, banco de dados, bibliotecas ou dependências de build.

## Como abrir

Abra `dist/index.html` no navegador. Os arquivos `styles.css`, `cinema.css` e `app.js` precisam permanecer na mesma pasta que o HTML.

Para rodar com servidor local (opcional):

```bash
python3 -m http.server 4173 --directory dist
```

Depois, abra `http://localhost:4173`.

## Como personalizar

1. Em `app.js`, edite `CONFIG.brand` e `CONFIG.whatsapp` para o nome e número de WhatsApp do restaurante. Use apenas DDI, DDD e telefone (ex.: `5511999999999`).
2. No mesmo arquivo, altere `SIZE_OPTIONS`, `PASTA_OPTIONS`, `SAUCE_OPTIONS` e `EXTRA_OPTIONS` para os tamanhos, molhos, adicionais e preços desejados.
3. Edite a lista `MENU` com produtos e imagens próprios ou devidamente licenciados.
4. Em `index.html`, `styles.css` e `cinema.css`, ajuste textos, cores, movimentos e logotipo.

> **Importante:** o WhatsApp está intencionalmente vazio. Enquanto não for configurado, o botão de finalizar copia o resumo do pedido e **não envia uma mensagem**. Não existem pagamentos reais ou processamento de pedidos no projeto.

## Publicar com GitHub Pages

1. Crie um repositório, por exemplo `massa-studio`.
2. Copie os quatro arquivos de `dist/` (`index.html`, `app.js`, `styles.css` e `cinema.css`) para a raiz do repositório na branch `main`.
3. Em **Settings → Pages**, escolha **Deploy from a branch → main → /(root)**.
4. Aguarde o endereço fornecido pelo GitHub. A disponibilidade do GitHub Pages pode depender da visibilidade do repositório e do seu plano.

## Tecnologias

HTML5, CSS3, JavaScript puro, `localStorage` e link `wa.me`.

## Observações

- Os produtos e preços são fictícios, usados exclusivamente na demonstração.
- As fotos de demonstração são carregadas do Unsplash; para produção, substitua por fotos com direitos de uso adequados e preferencialmente hospedadas no próprio projeto.
- O projeto não substitui um sistema de pagamento ou gestão de pedidos.
