import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPages = () => {
  return (
    <Layout>
      <Seo title="Page three" />
      <h1>Hi from the third page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ThirdPages
