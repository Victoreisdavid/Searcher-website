import Head from "next/head"

export default function TermsPage() {
    return (
        <>
            <Head>
                <title>Searcher - termos.</title>
            </Head>
            <header>
                <div className="content" style={{ marginTop: "0px" }}>
                    <h1>Termos</h1>
                </div>
            </header>
            <main>
                <div className="content">
                    <p>Bem-vindo à página de termos do Searcher, aqui você poderá ler a política de privacidade, termos de uso e informações adicionais.</p>
                    <h2>&bull; Tópicos</h2>
                    <p>Para facilitar sua navegação na página, você pode ir direto para um desses tópicos:</p>
                    <br />
                    <p>
                        <a href="#privacy">Política de Privacidade</a> <br/>
                        <a href="#guidelines">Termos de Uso</a> <br/>
                        <a href="#repository">Notas sobre o código do Searcher</a>
                    </p>
                    <br />
                    <p>LEMBRANDO: <strong>ao usar o Searcher, você concorda com os termos de uso e a política de privacidade.</strong></p>
                    <h2 id="privacy">&bull; Política de Privacidade</h2>
                    <p>Em tese, você deveria ler isso aqui antes de usar o Searcher, mas muitas vezes isso não acontece na prática, esperamos que você leia isso pelo menos alguma vez na sua vida.</p>
                    <p>Para os que tem preguiça de ler, vou deixar a parte mais importante resumida aqui:</p>
                    <ul>
                        <li>Nós guardamos o ID de todos os usuários que usam o Searcher no banco de dados, essa é a única informação sobre você que é guardada de fato.</li>
                        <li>Nós guardamos seu ID exclusivamente para moderação dos usuários que usam o Searcher, já que quem quebra os termos de uso é proibido de usar o Searcher.</li>
                        <li>Se você duvida do que for falado aqui, pode ver o <a href="https://github.com/Victoreisdavid/Searcher_bot" target="_blank">código fonte do Searcher</a> e constatar como ele guarda informações.</li>
                    </ul>
                    <h3>&bull; Seus dados</h3>
                    <p>Apesar de guardarmos apenas informações públicas da sua conta, precisamos garantir uma coisa:</p>
                    <p>O Searcher <strong>nunca vai usar seus dados para fins comerciais (nem faz sentido usar o discord pra isso, mas ok) ou para te rastrear em outros lugares</strong>, seus dados são usados apenas para moderação do Searcher.</p>
                    <h3>&bull; Como nós identificamos você</h3>
                    <p>Para identificar você, nós usamos o seu ID do discord</p>
                    <p>Nós temos o direito de saber quando você usa um comando, não vamos ver as seguintes informações:</p>
                    <ul>
                        <li>Em qual servidor você está usando comandos</li>
                        <li>Em qual canal você usa comandos.</li>
                    </ul>
                    <p>Porém vamos ver as seguintes informações:</p>
                    <ul>
                        <li>Informações da sua conta do discord</li>
                        <li>Qual comando você usou</li>
                        <li>Data exata de quando você usou o comando</li>
                    </ul>
                    <div className="splice-line" />
                    <h2 id="guidelines">&bull; Termos de uso</h2>
                    <p>O Searcher tem poucos termos de uso, então tudo aqui é muito simples.</p>
                    <h3>&bull; Uso de comandos</h3>
                    <p>Para evitar que o Searcher seja usado para prejudicar servidores (como fazer ele exibir imagens nsfw), o Searcher tem métodos para evitar essas coisas, como analisar imagens usando a verificação de pornografia do <a href="https://deepai.org" target="_blank">deepAI</a></p>
                    <p>Sabendo disso, veja algumas restrições para comandos:</p>
                    <ul>
                        <li>Não fique pesquisando coisas impróprias sem motivos.</li>
                        <li>Não faça spam de comandos.</li>
                    </ul>
                </div>
            </main>
        </>
    )
}