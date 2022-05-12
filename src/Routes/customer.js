import { customer } from '../models/customer.model.js'
import express from 'express';
let router = express.Router()

//create new customer
// POST localhost:3010/customer

// Create a new customer
// POST localhost:3000/customer
router.post('/customer', (req, res) => {
    if(!req.body) {
      return res.status(400).send('Request body is missing')
    }
  
    if(!req.body.email) {
      // ...
    }
  
    // let user = {
    //   name: 'firstname lastname',
    //   email: 'email@gmail.com'
    // }
  
    let model = new customer(req.body)
    model.save()
      .then(doc => {
        if(!doc || doc.length === 0) {
          return res.status(500).send(doc)
        }
  
        res.status(201).send(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
  
  // GET
  router.get('/customer', (req, res) => {
    if(!req.query.email) {
      return res.status(400).send('Missing URL parameter: email')
    }
  
    customer.findOne({
      email: req.query.email
    })
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
  
  // UPDATE
  router.put('/customer', (req, res) => {
    if(!req.query.email) {
      return res.status(400).send('Missing URL parameter: email')
    }
  
    customer.findOneAndUpdate({
      email: req.query.email
    }, req.body, {
      new: true
    })
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
  
  // DELETE
  router.delete('/customer', (req, res) => {
    if(!req.query.email) {
      return res.status(400).send('Missing URL parameter: email')
    }
  
    customer.findOneAndRemove({
      email: req.query.email
    })
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
  

export default router
