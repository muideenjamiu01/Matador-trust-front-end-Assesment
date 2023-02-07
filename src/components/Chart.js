import React from 'react'
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS,  CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler} from "chart.js";
import "chart.js/auto";

// register them
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,Tooltip,
    Legend,
    Filler,
    
)

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep"],
    datasets: [{
      label: "Balance",
    //   borderRadius:30,
      data:[0.5,1,2,3,4,5,6,7,8,9],
      backgroundColor : "#4545FE",
      barThickness:4,
    },
    {
        label: "Revenue",
    //   borderRadius:30,
      data:[0.5,1,2,3,4,5,6,7,8,9,],
      backgroundColor : "#12D8A0",
      barThickness:4,
    },
    {
        label: "Withdrawal",
    //   borderRadius:30,
      data:[0.5,1,2,3,4,5,6,7,8,9,],
      backgroundColor : "  #FF6A6A",
      barThickness:4,
    },
  
]
  }


  const options = {
    plugins: {
        legend: {
            position: "top",
            align: "center", 
            labels : {
                boxWidth: 7,
                usePointStyle :true,
                pointStyle: "circle"
            },
            title:{
                text: "Sales Report",
                display:true,
                color: "black",
                font: {
                    size:10,
                }
            }
        }
    },
    scales: {
        xAxis: {
            display: false,
        },
        // yAxis: {
        //     max:8
        // },
    },
    elements: {
        bar: {
            barPercentage:0.3,
            categoryPercentage:1
        }
    }
  }
function Chart() {
 
  return (
    <div className="h-full w-full lg:h-72 2xl:h-96  ">
      <Bar data={data}  height={300}  options={options} />
    </div>
  )
}

export default Chart
