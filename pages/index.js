import Lupa from "../imagens/lupa_sem_fundo.png"
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
   </header>
   <main>
    <div className="middle">
     <h1>Conheça o Searcher</h1>
     <p className="centered">Um bot do discord feito para fazer pesquisas nos mais diversos lugares.</p>
     <h2 className="centered">Por quê usar o Searcher?</h2>
     <p>As vezes ninguém quer sair do discord pra pesquisar alguma informação, e as vezes é até demorado achar ela. O Searcher tem o objetivo de economizar esse tempo mostrando resultados compactos, dinâmicos e precisos e também curiosidades e outras coisas legais.</p>
     <h2 className="centered">Um pouco mais sobre</h2>
     <h3> - Código aberto</h3>
     <p>O Searcher possui seu código aberto, ou seja, todos podem ver como ele foi feito e para os desconfiados também é uma boa, já que podem olhar o código e ver tudo o que ele faz e todas as informações que ele guarda.</p>
     <p>Todos também podem contribuir com o projeto reportando bugs, ajudando a melhorar o código, etc. <a href="https://github.com/Victoreisdavid/Searcher_bot" target="_blank">Clique aqui pra acessar o código fonte do Searcher.</a></p>
     <h3> - Seguro e estável</h3>
     <p>O Searcher dá muita prioridade à segurança dos servidores, tentando ao máximo evitar possibilidades de exibir conteúdos NSFW nas pesquisas.</p>
     <h1>Principais características</h1>
     <div className="mainlist">
      <ul>
       <li>Totalmente grátis.</li>
       <li>Seguro para os servidores.</li>
       <li>Código aberto.</li>
       <li>Focado principalmente para brasileiros.</li>
      </ul>
     </div>
    </div>
   </main>
  </div>
 )
}