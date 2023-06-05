export default function Navbar() {
    return (
    <nav className='nav'>
        <a href='/' className='site-title'>Ant Colony</a>
        <ul>
            <li>
                <a href='/mylist'>My List</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/settings'>Settings</a>
            </li>
        </ul>
    </nav>
    )   
}

