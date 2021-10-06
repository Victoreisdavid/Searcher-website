import Head from "next/head"
import Script from "next/script"
import Graph from "react-chartist"
import Chartist from "chartist"
const URL = process.env.SEARCHER_WEBSERVER_URL

export async function getServerSideProps() {
    const status = await fetch(URL)
    const parsedStatus = await status.json()
    const max = Math.max(...parsedStatus)
    const min = Math.min(...parsedStatus)
    return {
        props: {
            ramData: parsedStatus,
            max_value: max * 1.03,
            min_value: min * 0.99
        }
    }
}

export default function ramStatus(props) {
    const DATA = {
        series: [props.ramData]
    }
    const OPTIONS =  {
        height: "400px",
        fullWidth: true,
        showPoint: true,
        showArea: true,
        onlyIntenger: true,
        high: props.max_value,
        low: props.min_value,
        lineSmooth: Chartist.Interpolation.simple({
            divisor: 2
        }),
        axisX: {
            showGrid: false
        }
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