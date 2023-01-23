import express from 'express'
import Human from '../models/human.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const humans = await Human.find({})
    res.json(humans)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
})

export default router
