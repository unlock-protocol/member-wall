import express from "express"
import members from "./api/members"
const app = express()

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "Render keys owners for a lock as a SVG file! Use /members?locks[]=lockAddress&locks[]=lockAddress ..."
    )
})

/**
 * This routes requires at least locks=lockAddress
 */
app.get("/members", members)

const port = process.env.PORT || 3030
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`)
})
