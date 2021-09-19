# Searcher-website
Website do Searcher

# Principal
O website é feito usando o [next.js](https://nextjs.org), caso você for fazer alguma alteração, siga o básico do nextjs.
Caso queira ver o código fonte do Searcher, [clique aqui](https://github.com/Victoreisdavid/Searcher_bot)

# Selfhosting
Para fazer selfhosting aqui, é bem fácil.

## Respeite os desenvolvedores
Respeite quem está desenvolvendo o projeto, dê os créditos a mim e aos outros contribuidores do projeto, e **siga a licença GPLv3**.

## Passo a passo:

### Instalando as dependências
Depois de clonar esse repositório, você poder simplesmente rodar:
```
npm install
```
isso irá instalar todas as dependências.
### Configurando as variáveis de ambiente
Você pode criar um arquivo chamado `.env`, e coloque isso dentro dele:
```
BOT_TOKEN=token do seu bot
```
O next.js automaticamente irá carregar o conteúdo do .env!
Porém em plataformas como a [vercel](https://vercel.com), você pode configurar isso em `secrets`.
### Mudando a ID da sua aplicação na página de comandos
vá em `pages/commands.js` e mude o valor que está na variável `ID` para o ID do seu bot.

### Iniciando a versão auto-hospedada
Caso você for fazer testes, pode iniciar em modo desenvolvimento:
```
npm run dev
```
Porém, se for rodar em produção você deve primeiro rodar isso:
```
npm run build
```
isso fará o next compilar as páginas para um arquivo HTML, logo depois você pode iniciar usando:
```
npm run start
```
Logo após isso, seu website será iniciado!