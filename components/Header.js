import Link from 'next/link'

const linkStyles = {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
};

export default function Header() {
    return (
        <header>
            <div>
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link href='/' passHref>
                                <p style={ linkStyles }>Home</p>
                            </Link>
                        </li>

                        <li>-</li>

                        <li>
                            <Link style={ linkStyles }  href='/blog' passHref>
                                <p style={ linkStyles }>Writing</p>
                            </Link>
                        </li>

                        <li>-</li>

                        <li>
                            <Link style={ linkStyles }  href='/projects' passHref>
                                <p style={ linkStyles }>Projects</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}