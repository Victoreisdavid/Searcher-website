import Head from "next/head"
import Script from "next/script"
import Graph from "react-chartist"
const URL = process.env.SEARCHER_WEBSERVER_URL

export async function getServerSideProps() {
    const status = await fetch(URL)
    const parsedStatus = await status.json()
    return {
        props: {
            ramData: parsedStatus
        }
    }
}

export default function ramStatus(props) {
    const DATA = {
        series: [props.ramData]
    }
    const OPTIONS =  {
        fullWidth: true
    }
    return(
        <div>
            <Head>
                <title>Searcher: ram status</title>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css" />
                <Script 
                    src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"
                />
            </Head>
            <div id="chart">
                <h1 style={{ textAlign: "center" }}>Searcher ram usage stats (MB)</h1>
                <Graph 
                 className="ct-chart"
                 data={DATA}
                 type="Line"
                 options={OPTIONS}
                />
            </div>
        </div>
    )
}