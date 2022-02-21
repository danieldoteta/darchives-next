import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import Post from '../components/Post'

export default function Home({ posts }) {
  console.log(posts)
  return (  
    <div>
      <Head>
        <title>Daniel Eta</title>
      </Head>

      <div className="project-container">
        <div className="top">
          <h1>Writing</h1>

          <p className="about-p">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>

          <input className="search-field" type="text" placeholder="search entries" name="" id="">
          </input>

          {posts.map((post, index) => (
            <Post post={post} />

          ))}

        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // gets files from the post directory
  const files = fs.readdirSync(path.join('posts'))

  console.log(files)

  // get slug
  const posts = files.map(filename =>{
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts,
    },
  }
}