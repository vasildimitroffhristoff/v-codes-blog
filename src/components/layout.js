import * as React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">🐲 {title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
<div className="global-wrapper-outer">
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
    </div>
      <footer>
        {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      <div className="footer-inner">
        <div>
            {/* <Bio /> */}
            <h6>Vasil Hristov</h6>
            <ul>
              <li><a href="https://github.com/">About</a></li>
              <li><a href="https://github.com/">Projects</a></li>
              <li><a href="https://github.com/">Contact</a></li>

            </ul>
        </div>

        <div>
          <p><b>Things I'm interested in:</b></p>
          <ul>
            <li>🧠 JavaScript</li>
            <li>💪 React</li>
            <li>⚡ Svelte</li>
            <li>🤯 Node.js</li>
            <li>🐱 small cats</li>
         </ul>

        </div>
    </div>
      </footer>
</div>
  )
}

export default Layout
