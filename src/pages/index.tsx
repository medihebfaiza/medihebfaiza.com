import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/navbar"
import HomePage from "./home"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
		<header>
			<Navbar></Navbar>
		</header>
		<main>
			<HomePage></HomePage>
		</main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
