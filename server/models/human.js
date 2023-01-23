import mongoose from 'mongoose'

const humanSchema = new mongoose.Schema(
  {
    timestamp: {
      type: Date,
      required: true,
    },
    _id: {
      type: ObjectId,
      required: true,
      unique: true,
    },
    instances: {
      type: Object,
      required: true,
      properties: {
        1: {
          pos_x: {
            type: Number,
            required: true,
          },
          pos_y: {
            type: Number,
            required: true,
          },
          vel_x: {
            type: Number,
            required: true,
          },
          vel_y: {
            type: Number,
            required: true,
          },
          confidence: {
            type: Number,
            required: true,
          },
          sensors: {
            type: Array,
            required: true,
          },
        },
      },
    },
  },
  {
    timestamps: true,
  }
)

const Human = mongoose.model('Human', humanSchema)

export default Human
