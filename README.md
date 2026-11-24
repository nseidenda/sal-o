# PentePula — Salão de Beleza Kids

Site estático responsivo para o PentePula, com estética inspirada na logo e paleta oficial:

- `#fcd770` — amarelo
- `#c394cb` — lilás
- `#69c7be` — verde-água
- `#fa9481` — coral

## Estrutura

```text
pente-pula/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── logo/
    │   └── logo.png
    ├── imagens/
    └── profissionais/
```

## Publicar no GitHub + Netlify

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para o repositório.
3. No Netlify, escolha **Add new project** e importe o repositório.
4. Para este projeto não é necessário build command. A pasta publicada é a raiz do projeto.
5. Publique o site.

## Logo

A logo usada no site fica em `assets/logo/logo.png`. Para trocar a logo futuramente, mantenha esse nome e substitua o arquivo.

## Agendamento

O formulário atual funciona no front-end e mostra uma confirmação na tela. Ele ainda não grava reservas em um banco de dados. Para agendamentos reais, será necessário conectar o formulário a um backend ou serviço de agenda.
