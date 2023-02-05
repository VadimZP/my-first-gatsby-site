import * as React from "react"
import { HeadFC, Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>

export default AboutPage