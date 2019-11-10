import React from "react"
import Head from "../components/head"
import Nav from "../components/nav"

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div className="hero">
        <img src="/api/members?locks=0xb0ad425ca5792dd4c4af9177c636e5b0e6c317bf" />
      </div>
    </div>
  )
}

export default Home
