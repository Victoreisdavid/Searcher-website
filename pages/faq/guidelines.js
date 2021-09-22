import Head from "next/head"

export default function termsPage() {
    return (
        <div>
            <Head>
                <title>Searcher: guidelines</title>
            </Head>
            <header>
                <div className="centeredImg">
                    <div className="imgText">
                        <h1>SearcherBot</h1>
                        <p>Faça pesquisas dentro do discord.</p>
                    </div>
                </div>
            </header>
            <main>
                <div className="middle">
                    <div className="textpaper">
                        <h1>Searcher - guidelines</h1>
                        <p>Como todo bot, o Searcher pussui regras que são impostas a servidores e usuários que passarem a usar ele.</p>
                        <p>Você deve seguir estas regras, ou corre o risco de ser proibido de usar o Searcher.</p>
                        <h2 style={{ fontSize: "1.7em", textAlign: "center" }}>Tópicos</h2>
                        <h2>&bull; Ética e maturidade</h2>
                        <ul>
                            <li>Não fique persquisando coisas "imaturas" no Searcher sem motivos.</li>
                            <li>Não tente fazer o Searcher exibir conteúdos impróprios nas pesquisas (sujeito a banimento.)</li>
                            <li>Não abuse de bugs encontrados no Searcher, ao invés disso, você pode abrir um pull request no nosso <a href="https://github.com/Victoreisdavid/Searcher_bot" target="_blank">github</a>.</li>
                        </ul>
                        <h2>&bull; Peça suporte de forma certa</h2>
                        <ul>
                            <li>Ao abrir uma issue/pull request no github do Searcher, vá direto ao ponto, assim fica melhor para a equipe entender.</li>
                            <li>De preferência, use o github para reportar bugs, porém se você quiser, pode avisar no servidor de suporte.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}