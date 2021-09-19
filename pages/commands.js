import Lupa from "../imagens/lupa_sem_fundo.png"
import Head from "next/head"
import Img from "next/image"
import { get } from "axios"
import Script from "next/script"
const ID = "886046032616624138"
const URL = `https://discordapp.com/api/v9/applications/${ID}/commands`


export async function getStaticProps() {
 const commands = await get(URL, {
  headers: {
   Authorization: `Bot ${process.env.BOT_TOKEN}`
  }
 })
 return {
  props: {
   commands: commands.data
  },
  revalidate: 300
 }
}

export default function commandsPage(props) {
 return (
  <div>
   <Script 
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    onLoad={() => {
     props.commands.forEach(command => {
        let subcommands_display = []
        const subcommandsgroup = command.options ? command.options.filter(cmd => cmd.type == 2) : []
        const subcommands = command.options ? command.options.filter(cmd => cmd.type == 1) : []
        subcommandsgroup.forEach(subcommand => {
         const subcommands = subcommand.options.filter(cmd => cmd.type == 1)
         subcommands.forEach(subcommand2 => {
          subcommands_display.push(`
           <h2 style="text-align: left;">&#128205; ${subcommand.name} ${subcommand2.name}</h2>
           <p style="text-align: left;">${subcommand2.description}</p>
           <p style="text-align: left;">Como usar: <strong> /${command.name} ${subcommand.name} ${subcommand2.name} </strong></p>
          `)
         })
        })
        subcommands.forEach(subcommand => {
        subcommands_display.push(`
         <h2 style="text-align: left;">&#128205; ${subcommand.name}</h2>
         <p style="text-align: left;">${subcommand.description}</p>
         <p style="text-align: left;">Como usar: <strong> /${command.name} ${subcommand.name} </strong></p>
        `)
        })
        if(subcommands_display.length == 0) {
         subcommands_display = [`<p>Não tem subcomandos.</p>`]
        }
        $("#commands").append(`
        <div class="command">
         <h1 style="text-align: left;">&#128204; ${command.name}</h1>
         <p style="text-align: left;">${command.description}</p>
         <p style="text-align: left;">Como usar: <strong> /${command.name} </strong></p>
         <h2 style="text-align: left;">&#128270; Sub-comandos</h2>
         ${subcommands_display.join("\n")}
        </div>
      `)
     })
    }}
   />
   <Head>
    <title>Searcher: Lista de comandos</title>
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
     <h1>Lista de comandos do searcher</h1>
     <div className="maininfo">
      <p>O que cada emoji diz:</p>
      <p>&#128204; - Nome do comando <br/> &#128270; - Sub-comandos <br/> &#128205; - Sub-comando <br/></p>
     </div>
     <br />
     <div id="commands"></div>
    </div>
   </main>
  </div>
 )
}