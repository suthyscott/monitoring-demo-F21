const express = require('express')
const path = require('path')
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'fbe6a305e56a4b48941556c16ca2f4ef',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const app = express() 


// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`))


