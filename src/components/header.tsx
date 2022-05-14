import * as React from "react"
import PropTypes from "prop-types"
import Nav from "./nav"
import Wrapper from "./wrapper"

const Header = ({ siteTitle }:any) => (
  <header className="w-full bg-white left-0 top-0 z-50 py-3 border-b border-fuchsia-600 fixed">
    <Wrapper>
      <Nav />
    </Wrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header