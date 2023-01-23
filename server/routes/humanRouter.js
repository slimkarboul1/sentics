import express from 'express'
import Human from '../models/human.js'

const router = express.Router()

// @desc    Get all humans
// @route   GET /humans
// @access  Public
router.get('/', async (req, res) => {
  try {
    const humans = await Human.aggregate([
      {
        $project: {
          nbHumans: { $size: '$instances.pos_x' },
          timestamp: 1,
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
    ])
      .limit(1200)
      .sort({ timestamp: -1 })

    // console.log(humans)
    res.status(200).json(humans)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

// add new human
router.post('/', async (req, res) => {
  try {
    // destructure the body
    const { timestamp, instances } = req.body
    if (
      timestamp &&
      instances.length > 0 &&
      instances[0].pos_x &&
      instances[0].pos_y
    ) {
    }
    const newHuman = new Human({
      timestamp,
      instances,
    })
    await newHuman.save()
    res.status(201).json(newHuman)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
})

export default router
