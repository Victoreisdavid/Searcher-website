import Lupa from "../imagens/lupa_sem_fundo.png"
import Free_icon from "../imagens/tax-free.png"
import Secure_icon from "../imagens/secure-shield.png"
import OpenSource_icon from "../imagens/github_logo.png"
import Img from "next/image"
import Head from "next/head"
export default function IndexPage() {
    return (
        <div>
            <Head>
                <title>Searcher: Faça pesquisas no discord.</title>
            </Head>
            <header>
                <div className="centeredImg">
                    <Img
                        src={Lupa}
                        width="200"
                        height="200"
                        className="img"
                    />
                    <br />
                    <div className="imgText">
                        <h1>SearcherBot</h1>
                        <p>Faça pesquisas dentro do discord.</p>
                    </div>
                </div>
                <button className="centeredBtn" onClick={(d) => {
                    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=886046032616624138&permissions=277092879424&scope=bot%20applications.commands"
                }}>Adicionar</button>
            </header>
            <main>
                <div className="middle">
                    <h1>Conheça o Searcher</h1>
                    <p className="centered">O Seacher foi feito para ajudar pessoas a fazer pesquisas direto no discord, de forma fácil e segura.</p>
                    <h2 className="centered">Principais características</h2>
                    <div className="cardbox">
                        <div className="Imgcard">
                            <div className="img">
                                <Img
                                    src={Free_icon}
                                    width="120"
                                    height="120"
                                />
                            </div>
                            <div className="cardText">
                                <h1 style={{textAlign: "left"}}>Grátis</h1>
                                <p>O Searcher é totalmente gratuito, você não paga para usar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="Imgcard">
                            <div className="img">
                                <Img
                                    src={Secure_icon}
                                    width="120"
                                    height="120"
                                />
                            </div>
                            <div className="cardText">
                                <h1 style={{textAlign: "left"}}>Seguro</h1>
                                <p>O Searcher não representa nenhuma ameaça a servidores.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardbox">
                        <div className="Imgcard">
                            <div className="img">
                                <Img
                                    src={OpenSource_icon}
                                    width="120"
                                    height="120"
                                />
                            </div>
                            <div className="cardText">
                                <h1 style={{textAlign: "left"}}>Open-source</h1>
                                <p>O Searcher é um projeto de <a href="https://github.com/Victoreisdavid/Searcher_bot" target="_blank">código aberto</a>, todos podem ver.</p>
                            </div>
                        </div>
                    </div>
                    <p><strong>* Todas as imagens (exceto a do cabeçalho do website) foram pegas em <a href="https://flaticon.com" target="_blank">flaticon.com</a>.</strong></p>
                    <div className="camp_box">
                        <h1>Objetivos do Searcher</h1>
                        <h2>1. Searcher para programadores</h2>
                        <p>&bull; O Searcher está dando suporte gradualmente a plataformas que programadores usam, como o <a href="https://chocolatey.org" target="_blank">chocolatey.</a></p>
                        <h2>2. Searcher para estudantes</h2>
                        <p>&bull; O Searcher está dando suporte gradualmente a plataformas usadas por estudantes.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}