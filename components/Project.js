import Link from 'next/link'
import Image from 'next/image'

export default function Project({ project }){
    return (
        <div className="item">
            <img src={project.frontmatter.cover_image} />

           <div className="text">
                <h1 className="title">
                    <Link href="#">
                        <a href="#">{project.frontmatter.title}</a>
                    </Link>
                </h1>

                <p>{project.frontmatter.excerpt}</p>    
                <small className="date-text">
                    Posted on {project.frontmatter.date}
                </small>
           </div> 
        </div>
    )
} 