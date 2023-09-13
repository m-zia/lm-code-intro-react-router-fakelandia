import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/misdemeanours">Misdemeanours</Link>
                    </li>
                    <li>
                        <Link to="/confession">Confession</Link>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default Header