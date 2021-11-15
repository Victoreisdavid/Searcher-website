import Img from "next/image"
import Searcher from "../imagens/lupa_sem_fundo.png"
import "../style.css"

function NavBar() {
    return (
        <nav>
            <div className="content">
                <div className="logo-img">
                    <Img 
                        src={Searcher}
                        alt="Searcher Logo"
                        width="75"
                        height="75"
                    />
                </div>
                <p>Searcher</p>
                <a href="/">Início</a>
                <a href="/commands">Comandos</a>
            </div>
        </nav>
    )
}

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <div className="nav-space" />
            <div className="container">
                <Component {...pageProps} />
            </div>
            <footer>
                <p>SearcherBot</p>
                <p>&bull; <a href="https://github.com/Victoreisdavid/Searcher-website" target="_blank">Código fonte do website</a></p>
                <p>&bull; <a href="https://github.com/Victoreisdavid/Searcher_bot" target="_blank">Código fonte do Searcher</a></p>
            </footer>
        </div>
    )
}

export default MyApp