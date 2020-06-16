import React from 'react'
import { Layout } from '../component'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PageOne = () => {
  return (
    <Layout className="app-livecamera" isHeader={true}>
      <h1>Welcome to Page One</h1>
      <Link to="/home" >Home</Link>
      <Link to="/page-2" className="ml-3">Page _Two</Link>
    </Layout>
  )
}

export default PageOne
