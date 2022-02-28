import Link from 'next/link'
import Image from 'next/image'

export default function Post({ post }){
    return (
        <div className="item">
            <img src={post.frontmatter.cover_image} />

        
           <div className="text">
                <h1 className="title">
                    <Link href={`/blog/${post.slug}`}>
                        <a href="#">{post.frontmatter.title}</a>
                    </Link>
                </h1>

                <p>{post.frontmatter.excerpt}</p>    
                <small className="date-text">
                    Posted on {post.frontmatter.date}
                </small>
           </div> 
        </div>
    )
} 