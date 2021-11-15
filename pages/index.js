import Head from "next/head"

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Searcher - faça pesquisas no discord.</title>
            </Head>
            <header>
                <div className="content smooth_fade">
                    <h1>Searcher</h1>
                    <p>Um bot feito para fazer pesquisas dentro do discord, de forma fácil, rápida e interativa.</p>
                    <div className="buttons">
                        <button onClick={(d) => d.nativeEvent.view.window.open("https://discord.com/api/oauth2/authorize?client_id=886046032616624138&permissions=277092879424&scope=bot%20applications.commands", "_blank")}>Me adicione!</button>
                        <button onClick={(d) => d.view.document.location.href = "/about"}>Sobre mim</button>
                        <button onClick={(d) => d.view.document.location.href = "/terms"}>Termos</button>
                        <button onClick={(d) => d.nativeEvent.view.window.open("https://github.com/Victoreisdavid/Searcher_bot", "_blank")}>Código fonte</button>
                    </div>
                </div>
            </header>
        </>
    )
}