const express = require("express")
const api = require("./server/api/index")
const app = express()
const port = process.env.PORT || 3001

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})


app.use("/", api)
