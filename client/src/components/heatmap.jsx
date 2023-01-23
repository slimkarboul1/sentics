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
    var maxPosX = parseInt(
      Math.max(
        ...data
          ?.map((d) => {
            return d?.instances
              ?.filter((z) => z !== null)
              .map((i) => {
                return i?.pos_x
              })
          })
          .flat()
      )
    )
    var minPosX = parseInt(
      Math.min(
        ...data
          ?.map((d) => {
            return d?.instances
              ?.filter((z) => z !== null)
              .map((i) => {
                return i?.pos_x
              })
          })
          .flat()
      )
    )

    data?.length &&
      data?.map((d) => {
        const timestampdiff =
          toTimestamp(data[0].timestamp) - toTimestamp(d.timestamp)
        const posXDiff = maxPosX - minPosX

        const maxTimestamp =
          toTimestamp(data[0].timestamp) -
          toTimestamp(data[data.length - 1].timestamp)
        max = Math.max(max, d.nbHumans)

        var point = {
          // get the respective x value depending on the timestamp and the max timestamp value
          x: parseInt(((timestampdiff / maxTimestamp) * width).toFixed(0)),
          y: parseInt(
            // get the respective pos_x depending on the hight of the heatmap and the max pos_x value
            parseInt(
              d?.instances
                .filter((c) => c !== null)
                .map((c) => c.pos_x.toFixed(0))
                .flat()[0]
            ) *
              (posXDiff / height) * // get the percentage of the pos_x value
              height // multiply by the height of the heatmap
          ),
          value: d?.nbHumans,
        }

        points.push(point)
        return d
      })
    var heatmapdata = {
      max: max,
      data: points,
    }

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
