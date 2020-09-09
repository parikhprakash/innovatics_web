import React from "react"
import { Link } from "gatsby"
import Navigation from './navigation'
import { rhythm, scale } from "../utils/typography"
import Footer from './footer'
import AllFooterJS from "./footjs"
const Layout = ({ location, title, children }) => {
  
  return (
      <div className="main-content">
        <Navigation></Navigation>
        <main class="main-wrapper">{children}</main>
        <Footer></Footer>
        {/* <AllFooterJS></AllFooterJS> */}
      </div>
   
  )
}

export default Layout
