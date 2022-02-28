import Image from 'next/image'

export default function Home() {

  return (  

    <div>
        <img className="black-1" src="images/black-block.png" />
        <img className="grey-1" src="images/grey-block.png" />
        <img className="black-2" src="images/black-block.png" />
        <img className="grey-2" src="images/grey-block.png" />
        
        <div className="me-container">
            <div className="about-me">
                <img src="images/me.png" />

                <h1><b>Daniel Eta</b></h1>
                <small>
                    <a href="mailto:daniel.eta@outlook.com">daniel.eta@outlook.com</a>  
                </small>
                <p>Hi there, I am Daniel, a self-taught developer with a passion for innovative technologies. I started coding in 2017 and although I frequently find myself developing robust web-applications with Django, I love to spend time doing research on machine learning and it&apos;s implications. I frequently try to diversify and learn as much as I can in this ever-changing tech world. When I&apos;m not writing software, I like to write about topics like sports, politics or even personal development.🤠
                </p>
                <span>
                    <a href="https://www.twitter.com/onyedikachiiii">TW</a>
                    <a href="">-</a>
                    <a href="https://www.github.com/danieldoteta">GH</a>
                    <a href="">-</a>
                    <a href="https://www.linkedin.com/in/daniel-eta/">LI</a>
                </span>
            </div>
        </div>
    </div>
  )
}
