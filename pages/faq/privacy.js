import Head from "next/head"

export default function PrivacyPolicyPage() {
    return (
        <div>
            <Head>
                <title>Searcher: Política de privacidade</title>
            </Head>
            <header>
                <div className="centeredImg">
                    <div className="imgText">
                        <h1>Searcher</h1>
                        <p>Faça pesquisas dentro do discord.</p>
                    </div>
                </div>
            </header>
            <main>
                <div className="middle">
                    <div className="textpaper">
                        <h1>Política de privacidade</h1>
                        <p>A privacidade dos usuários é importante para o Searcher.</p>
                        <p>Aqui você pode encontrar informações sobre como o Searcher usa seus dados.</p>
                        <h2>O que é o Searcher?</h2>
                        <p>O Searcher é um bot feito para fazer pesquisas dentro do discord de forma rápida e interativa, logo não necessita guardar muitos dados.</p>
                        <h3>Quais dados o Searcher guarda?</h3>
                        <p>&bull; O Searcher guarda apenas esses dados:</p>
                        <ul>
                            <li>O ID dos usuários que usaram algum comando</li>
                        </ul>
                        <h3>&bull; Como o Searcher usa seus dados?</h3>
                        <p>O Searcher não usa seus dados para nada. Apenas coleta o essencial para garantir a segurança de todos os servidores que estão utilizando ele.</p>
                        <p>Por exemplo, o seu ID é usado apenas para verificar se você não está banido do Searcher.</p>
                        <h3>&bull; Qual a garantia que meus dados não são usados de forma indevida?</h3>
                        <p>Você pode ver como os seus dados são tratados no código fonte do Searcher: <a href="https://github.com/Victoreisdavid/Searcher_bot" target="_blank">https://github.com/Victoreisdavid/Searcher_bot</a></p>
                    </div>
                </div>
            </main>
        </div>
    )
}