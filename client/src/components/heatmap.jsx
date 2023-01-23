import React, { useEffect } from 'react'
import h337 from 'heatmap.js'
const Heatmapp = ({ data }) => {
  const toTimestamp = (strDate) => {
    const dt = Date.parse(strDate)
    return dt / 1000
  }

  useEffect(() => {
    var heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: document.getElementById('heatmap'),
    })
    // now generate some random data
    var points = []
    var max = 0
    var width = 840
    var height = 400

    data?.length &&
      data?.map((d) => {
        // const timestampdiff =
        //   toTimestamp(data[0].timestamp) - toTimestamp(d.timestamp)

        // max = Math.max(max, d.nbHumans)
        // var point = {
        //   x: parseInt(timestampdiff).toFixed(0),
        //   y: parseInt(
        //     d?.instances
        //       .filter((c) => c !== null)
        //       .map((c) => c.pos_x.toFixed(2))
        //       .flat()[0]
        //   ),
        //   value: d?.nbHumans,
        // }
        var val = Math.floor(Math.random() * 100)
        max = Math.max(max, val)
        var point = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height),
          value: val,
        }

        points.push(point)
        return d
      })
    var heatmapdata = {
      max: max,
      data: points,
    }
    console.log(heatmapdata)
    heatmapInstance.setData(heatmapdata)
  }, [])

  return (
    <div className='py-8 text-center flex flex-col items-center'>
      <h1 className=' text-blue-500 text-2xl'>Heatmap</h1>
      <div id='heatmap' className='w-[840px] h-60'></div>
    </div>
  )
}

export default Heatmapp
