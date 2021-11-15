import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html lang="pt-br">
          <Head>
            <meta name="author" content="Victor Reis David"/>
            <meta name="description" content="Searcher - Faça pesquisas de forma rápida, simples e interativa direto no discord."/>
            <meta name="keywords" content="discord bot, search, discord search, bot, fast, interactive, simple, rápido" />
            <meta name="robots" content="index,follow" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument