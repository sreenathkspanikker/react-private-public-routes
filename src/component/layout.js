import React from 'react'
import Header from './header'
import { Container } from 'react-bootstrap'

const Layout = props => (
    <main className={`app-layout ${props.className !== undefined ? props.className : ''}`}>
        {props.isHeader && <Header />}
        <Container fluid>
            {props.children}
        </Container>

    </main>
)

export default Layout