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
          <meta name="author" content="Victor Reis David" />
          <meta name="description" content="Faça pesquisas no discord com o Searcher." />
          <meta name="keywords" content="discord bot, search, discord search, bot" />
          <meta name="robots" content="index,follow" />
        </Head>
        <body>
          <nav>
            <a href="/">Início</a>
            <a href="/commands">Comandos</a>
            <a href="/faq/guidelines">Guidelines</a>
          </nav>
          <br />
          <Main />
          <br />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument