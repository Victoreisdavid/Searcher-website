import Img from "next/image"
import command_ex from "../imagens/exemplos/command.jpg"
import search_ex from "../imagens/exemplos/search_example.jpg"
import result_ex from "../imagens/exemplos/result_example.jpg"

export default function AboutPage() {
    return (
        <>
            <header>
                <div className="content" style={{ marginTop: "0px" }}>
                    <h1>Conheça o Searcher</h1>
                </div>
            </header>
            <main>
                <div className="content">
                    <p>Ficar saindo do discord pra pesquisar algo, as vezes pode ser chato, né?</p>
                    <p>E se você pudesse pesquisar aquele mod de minecraft, ou então aquela extensão do visual studio code direto no discord?</p>
                    <p>O Searcher pode fazer isso! De forma rápida, fácil e interativa.</p>
                    <h2>Principais características</h2>
                    <h3>&bull; totalmente feito com comandos "/"</h3>
                    <p>O Searcher usa a <strong>nova forma de criar comandos no discord</strong>, os famosos <strong>comandos "/"</strong></p>
                    <Img 
                        src={command_ex}
                        alt="Exemplo de um comando do searcher sendo mostrado no discord."
                        quality={100}
                        placeholder="blur"
                    />
                    <p>Com integração direta à interface do discord, o uso de comandos é <strong>muito mais fácil para o usuário final, ou seja, você</strong>.</p>
                    <h3>&bull; Pesquisa rápida, simples e interativa</h3>
                    <p>As pesquisas do Searcher são rápidas e muito simples, direto ao ponto pra você achar exatamente o que procura.</p>
                    <Img 
                        src={search_ex}
                        alt="Exemplo de como o searcher mostra os resultados de uma pesquisa"
                        quality={100}
                        placeholder="blur"
                    />
                    <Img
                        src={result_ex}
                        alt="Exemplo de como o searcher mostra o resultado selecionado"
                        quality={100}
                        placeholder="blur"
                    />
                    <h3>&bull; Código aberto</h3>
                    <p>O Searcher é um projeto de <strong>código aberto</strong>, você pode contribuir ajudando a melhorar o código, criando novos comandos, reportando bugs, etc.</p>
                    <p>Isso também prova que o Searcher não faz nada de errado, como salvar dados sem sua permissão, já que todos podem ver o código dele e como ele funciona.</p>
                    <p>Se você quiser saber mais sobre o código, você pode acessar o <a href="https://github.com/Victoreisdavid/Searcher_bot" target="_blank">github do Searcher</a>.</p>
                </div>
            </main>
        </>
    )
}