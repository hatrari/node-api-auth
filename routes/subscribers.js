const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Get all subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get one subscriber
router.get('/:id', async (req, res) => {
  const result = await Subscriber.findById(req.params.id)
  res.json(result)
})

// Create one subscriber
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedChannel: req.body.subscribedChannel
  })

  try {
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Update one subscriber
router.patch('/:id', async (req, res) => {
  try {
    const result = await Subscriber.updateOne({_id: req.params.id}, req.body)
    res.json(result)
  } catch {
    res.status(400).json({ message: err.message })
  }

})

// Delete one subscriber
router.delete('/:id', async (req, res) => {
  try {
    const result = await Subscriber.deleteOne({_id: req.params.id}, req.body)
    res.json(result)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router