import express from 'express'
import personRoute from './Routes/person.js'
import customerRoute from './Routes/customer.js'
import path from 'path'
import bodyParser from 'body-parser'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let app = express()

app.use(bodyParser.json())

app.use((req,res,next) => {
    console.log(`${ Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})



app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))


// error 404 - resource not found
// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
  })
  
  // Handler for Error 500
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
  })
  
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.info(`Server has started on ${PORT}`))

