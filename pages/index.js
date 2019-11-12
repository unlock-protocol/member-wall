import React from "react"
import Head from "../components/head"
import Nav from "../components/nav"

const Home = () => {
  const base = "https://member-wall.julien51.now.sh/"
  return (
    <page>
      <h1>Member Wall!</h1>
      <p>
        Member wall is a serverless application which shows the MetaMask icons
        of all members for one or more Unlock locks.
      </p>
      <p>
        It renders the wall as a SVG image which can easily be embedded on any
        image!
      </p>
      <h2>Unlock Blog members</h2>
      <p>
        The image below shows all of the{" "}
        <a href="https://unlock-protocol.com/blog/">Unlock Blog</a> members!
      </p>
      <object
        data="/api/members?locks=0xB0114bbDCe17e0AF91b2Be32916a1e236cf6034F"
        type="image/svg+xml"
      ></object>
      <h2>Customize</h2>
      <p>
        Just use an <code>&lt;img/&gt;</code> with a <code>src</code> poiting to{" "}
        <code>{base}api/members?locks=</code>. Customize with the following
        query strings:
      </p>
      <ul>
        <li>
          <code>locks</code> <em>(required)</em>: coma separated list of locks
        </li>
        <li>
          <code>maxWidth</code> <em>(optional, defaults to 800)</em>: maximum
          width (actual size might be smaller to avoid clipping icons)
        </li>
        <li>
          <code>maxHeight</code> <em>(optional, defaults to 500)</em>: maximum
          height (actual size might be smaller to avoid clipping icons)
        </li>
      </ul>
      <p>
        You can also use{" "}
        <code>
          &lt;object data="{base}api/members?locks=..."
          type="image/svg+xml"/&gt;
        </code>{" "}
        to make the links on each icon clickable!
      </p>

      <footer>
        This is built with <a href="https://unlock-protocol.com/">Unlock</a>,{" "}
        <a href="https://thegraph.com/">The Graph</a> and{" "}
        <a href="https://github.com/danfinlay/jazzicon">Jazzicon</a>, and
        deployed with <a href="https://zeit.co/">Zeit</a>. The code is{" "}
        <a href="https://github.com/julien51/member-wall">open source</a>!
      </footer>
    </page>
  )
}

export default Home
