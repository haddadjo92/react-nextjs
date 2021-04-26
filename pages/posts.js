import React from 'react'
import Head from 'next/head'
import NavLinks from '../components/NavLinks'
function Posts({ posts }) {


    return (
        <div style={{ padding: 50 }}>
            <NavLinks />
            <Head>
                <title>Posts</title>
                <meta name="description" content="Posts" />
            </Head>

            {
                posts.map(post => {
                    return (
                        <ul style={{ border: "2px solid #eee", margin: 25, padding: 0, listStyle: "none" }} key={post.id}>
                            <li><strong>User ID: </strong>{post.userId}</li>
                            <li><strong>ID: </strong>{post.id}</li>
                            <li><strong>Title: </strong>{post.title}</li>
                            <li><strong>Body:<br /></strong>{post.body}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}



// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()

    // Pass data to the page via props
    return { props: { posts } }
}



export default React.memo(Posts)
