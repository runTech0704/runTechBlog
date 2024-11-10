import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location && location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/"><img src="/runtech-logo.png" alt="Footer Image" style={{ maxWidth: "200px" }} /></Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        <Link to="/"><img src="/runtech-logo.png" alt="Footer Image" style={{ maxWidth: "200px" }} /></Link>
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer style={{ textAlign: "center", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <a href="/privacy-policy" style={{ marginBottom: "1rem" }}>プライバシーポリシー</a>
        <img src="/runtech-logo.png" alt="Footer Image" style={{ maxWidth: "250px" }} />
      </footer>
    </div>
  )
}

export default Layout
