import React from 'react';
import { Layout } from '../component';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NoMatch = () => (
    <Layout className="app-404" isHeader={false}>
        <h1>Page not found  404</h1>
        <Link to="/page-1" >Back_To_Home</Link>
    </Layout>
)

export default NoMatch
