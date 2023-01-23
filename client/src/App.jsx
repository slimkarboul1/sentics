import { useEffect, useState } from 'react'
import axios from 'axios'
import Graph from './components/graph'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState('pos_x')
  useEffect(() => {
    const fetchHumans = async () => {
      const response = await axios.get('/humans')
      const { data } = response
      setData(data)
      setLoading(false)
      console.log(data)
    }
    fetchHumans()
  }, [])
  if (loading) return <h1>Loading...</h1>
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl text-blue-500'>Sentics Project </h1>
      <div className='w-2/3 h-2/3'>
        <label
          for='select'
          class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
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

        {/* <Graph data={data} /> */}
      </div>
    </div>
  )
}

export default App
