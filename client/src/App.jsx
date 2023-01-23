import { useEffect, useState } from 'react'
import axios from 'axios'
import Graph from './components/graph'
import Heatmap from './components/heatmap'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState('pos_x')
  useEffect(() => {
    const fetchHumans = async () => {
      const response = await axios.get('/humans')
      const { data } = response
      setData(data)
      setLoading(false)
    }
    fetchHumans()
  }, [])
  if (loading)
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className=' text-3xl text-blue-700'>Loading...</div>
      </div>
    )

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl text-blue-500'>Sentics Project </h1>
      <div className='w-2/3 h-2/3'>
        <label
          htmlFor='select'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Select an option
        </label>

        <select
          id='select'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value='pos_x'>Humamn position X</option>
          <option value='nbHumans'>number of humans</option>
        </select>
        {data ? <Graph data={data} selectedOption={selectedOption} /> : <></>}
        {data.length > 0 ? <Heatmap data={data} /> : <></>}
      </div>
    </div>
  )
}

export default App
