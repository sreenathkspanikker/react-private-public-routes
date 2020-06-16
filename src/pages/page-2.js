import React from 'react'
import { Layout } from '../component'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const PageTwo = () => {
  return (
    <Layout className="app-camearadetails" isHeader={true}>
      <h1>Welcome to Page Two</h1>
      <Link to="/home">Home</Link>
      <Link to="/page-1" className="ml-3">Page_One</Link>
    </Layout>
  )
}

export default PageTwo
