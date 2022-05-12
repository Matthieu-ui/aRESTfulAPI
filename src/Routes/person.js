import express from 'express';

let router = express.Router()

// QueryString => query property on req object
// localhost:3010/person?name=alcapone&age=42
router.get('/person', (req, res) => {
    if(req.query.name) {
        res.send(`You have requested a person ${req.query.name}`)
    }
    else {
        res.send('you have requested a person')
    }
})

// Params propery on the req object
// localhost:3010/person/alcapone
router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name}`)
})

router.get('router/error', (rew, res) => {
    throw new Error('This is a forced error')
})



export default router