import React from 'react'
import '../Css/Tokenomics.css'
import CanvasJSReact from '@canvasjs/react-charts';

function Tokenomics() {
  // var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
  animationEnabled: true,

  backgroundColor: 'rgb(47, 42, 42)',
  subtitles: [{
    text:"SUKUYANA",
    fontColor:"white",
    verticalAlign: "center",
    fontSize: 28,
    dockInsidePlotArea: true
  }],
  data: [{
    type: "doughnut",
    // showInLegend: true,
   
    indexLabel: "{name}: {y}",
    indexLabelFontColor: "white",
    indexLabelFontSize: 20,
   
    yValueFormatString: "#,###'%'",
    dataPoints: [
      { name: "Community", y: 30},
      { name: "Burn", y: 50  },
      { name: "Development", y: 15},
      { name: "Airdrop", y: 5 }
      
      
    ]
  }]
}
  return (
    <>
    <div className="container" id='tokenomics'>
       <h5 id="text_tokoenomics" className='text-center'>SUKUYANA TOKENOMICS</h5>
       <div>
			<CanvasJSChart options = {options}
			/>
			
		</div>
    </div>
    </>
  )
}
export default Tokenomics
