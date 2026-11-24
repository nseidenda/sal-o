# PentePula — site

Site estático para salão de beleza infantil, feito com HTML, CSS e JavaScript.

## Publicar no GitHub + Netlify

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para o repositório.
3. No Netlify, escolha **Add new project / Import an existing project**.
4. Conecte o GitHub e selecione este repositório.
5. Build command: deixe vazio.
6. Publish directory: `.` (raiz).
7. Publique.

## Importante sobre o agendamento

A versão atual é uma demonstração de front-end: ela valida os dados e mostra a confirmação no navegador, mas **não salva reservas em um banco de dados**.

Para um sistema real, será necessário conectar o formulário a um backend/banco de dados (por exemplo Supabase ou Firebase) e configurar disponibilidade dos profissionais.

## Personalização rápida

Abra `script.js` e altere:
- serviços e preços no array `services`
- profissionais no array `professionals`
- telefone/Instagram/endereço em `index.html`

O formulário já possui:
- seleção de serviço
- seleção de profissional
- data
- horário
- dados do cliente
- resumo
- confirmação
