const express = require('express')
const path = require('path')
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'b5ed6debab8845558cfb4f8d3bfa881e',
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

// const express = require('express')
// const path = require('path')

// const app = express()

// // include and initialize the rollbar library with your access token
// var Rollbar = require('rollbar')
// var rollbar = new Rollbar({
//   accessToken: '7b6d4c87610f485ebf4897b15cc8fd2b',
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// })

// // record a generic message and send it to Rollbar
// rollbar.log('Hello world!')

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'))
//     rollbar.info('html file served successfully.')
// })

// const port = process.env.PORT || 4545

// let students = []

// app.listen(port, () => console.log(`Take us to warp ${port}!`))
