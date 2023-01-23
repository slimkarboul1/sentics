import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'

const Graph = ({ data, selectedOption }) => {
  ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

  const graphData = {
    labels: data.map((d) => d.timestamp),
    datasets: [
      {
        label: 'X',
        data: data.map((d) => d.instances[0][selectedOption]),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }
  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'time',
        },
      ],
      yAxes: [
        {
          type: 'linear',
        },
      ],
    },
  }

  return (
    <div className='text-center py-10'>
      <h1>
        GRAPH with X axis for timestamp and Y axis depends on the selected data
        {selectedOption}
      </h1>
      <div>
        <div>
          <Line data={graphData} options={options} />
        </div>
      </div>
    </div>
  )
}

export default Graph
