import React from 'react'
import Head from 'next/head'
import NavLinks from '../components/NavLinks'
function About() {
    return (
        <div>
            <NavLinks />
            <Head>
                <title>About</title>
                <meta name="description" content="About Page" />
            </Head>
            <h1>About Page</h1>
        </div>
    )
}

export default About
