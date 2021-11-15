import Script from "next/script"
import Head from "next/head"

export async function getStaticProps() {
    const URL = `https://discord.com/api/v9/applications/886046032616624138/commands`
    let commands = await fetch(URL, {
        headers: {
            Authorization: `Bot ${process.env.BOT_TOKEN}`,
        }
    })
    commands = await commands.json()
    return {
        props: {
            commands: commands
        },
        revalidate: 360
    }
}

export default function commandsPage(props) {
    return (
        <>
            <Head>
                <title>Searcher - Lista de comandos.</title>
            </Head>
            <header>
                <div className="content" style={{ marginTop: "0px" }}>
                    <h1>Lista de comandos</h1>
                </div>
            </header>
            <main>
                <div className="content" id="commands">
                    <p>Carregando....</p>
                </div>
            </main>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
                onLoad={() => {
                    //add commands
                    const commands = props.commands
                    $("#commands").text("")
                    for(const command of commands) {
                        const complemental_text = [`<h3>Sub comandos</h3>`]
                        const groups = command.options ? command.options.filter(option => option.type == 2 || option.type == 1) : []
                        for(const group of groups) {
                            complemental_text.push(`<h4>&bull; ${group.name}</h4>`)
                            complemental_text.push(`<p>${group.description}</p>`)
                            complemental_text.push(`<p>Como usar: <strong>/${command.name} ${group.name} ${group.type == 2 ? "search": ""}</strong></p>`)
                        }
                        $("#commands").append(`
                            <div class="menu-title">
                                <h2><span>+</span> ${command.name}</h2>
                                <div class="menu-content">
                                    <p>${command.description}</p>
                                    <p>Como usar: <strong>/${command.name}</strong></p>
                                    ${complemental_text.length > 1 ? complemental_text.join("") : ""}
                                </div>
                            </div>
                        `)
                    }
                    //add events
                    const menus = document.getElementsByClassName("menu-title")
                    for(const menu of menus) {
                        $(menu).click(function() {
                            const commandContent = $(this).children(".menu-content")
                            if(commandContent.css("display") == "none") {
                                $(this).children("h2").children("span").text("-")
                                commandContent.css("display", "block")
                            } else {
                                $(this).children("h2").children("span").text("+")
                                commandContent.css("display", "none")
                            }
                        })
                    }
                }}
            />
        </>
    )
}