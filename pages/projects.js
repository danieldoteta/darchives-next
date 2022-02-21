import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import Project from '../components/Project'

export default function Home({ projects }) {
  console.log(projects)
  return (  
    <div>
      <Head>
        <title>Daniel Eta</title>
      </Head>

      <div className="project-container">
        <div className="top">
          <h1>Project</h1>

          <p className="about-p">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>

          {projects.map((project, index) => (
            <Project project={project} />

          ))}

        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // gets files from the post directory
  const files = fs.readdirSync(path.join('projects'))

  console.log(files)

  // get slug
  const projects = files.map(filename =>{
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('projects', filename), 'utf-8')

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      projects,
    },
  }
}