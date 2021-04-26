import React from 'react'
import Link from 'next/link'

function NavLinks() {
    return (
        <ul style={{ padding: 50 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/posts">Posts</Link></li>
        </ul>
    )
}

export default NavLinks
