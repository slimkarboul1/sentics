import express from 'express'
import Human from '../models/human.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    // const humans = await Human.find().limit(10)
    const humans = await Human.aggregate([
      {
        $project: {
          nbHumans: { $size: '$instances.pos_x' },
          // return instances not null
          instances: {
            $filter: {
              input: '$instances',
              as: 'instance',
              cond: {
                $and: [
                  { $ne: ['$$instance.pos_x', null] },
                  { $ne: ['$$instance.pos_y', null] },
                ],
              },
            },
          },
        },
      },
    ]).limit(100)

    // console.log(humans)
    res.status(200).json(humans)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

export default router
