import React from "react"
import express from "express"
import { renderToString } from "react-dom/server"
import getMembers from "../../src/getMembers"
import Members from "../../src/Components/Members"

module.exports = async (req, res) => {
  let locks = []
  if (req.query.locks) {
    locks = req.query.locks.split(",")
  }
  if (!locks.length) {
    return res.status("422").send("Please make sure you have `locks=0x123`")
  }
  const maxWidth = req.query.maxWidth || 800
  const maxHeight = req.query.maxHeight || 500
  const members = await getMembers(locks)
  const content = renderToString(
    <Members maxWidth={maxWidth} maxHeight={maxHeight} members={members} />
  )
  res.setHeader("Content-Type", "image/svg+xml")
  res.setHeader(
    "Cache-Control",
    "max-age=0, s-maxage=600, stale-while-revalidate"
  )
  res.status(200).send(content)
}
