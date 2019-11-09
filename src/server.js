import React from "react"
import express from "express"
import { renderToString } from "react-dom/server"

function Members() {
  return (
    <svg height="100" width="100">
      <circle cx="50" cy="50" r="40" fill="red" />
    </svg>
  )
}

const app = express()

app.get("/", async (req, res) => {
  res.status(200).send(renderToString(<Members />))
})

const port = process.env.PORT || 3030
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`)
})
