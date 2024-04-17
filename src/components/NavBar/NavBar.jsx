import './NavBar.scss'
const NavBar = () => {
    return (
        <nav>
            <div className="left">
                <a href="/" className='logo'>
                    <img src="./logo.png" alt="logo"/>
                    <span>LamaState</span>
                </a>
                <a href="/">Home</a>
                <a href="/">Abaut</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Sign in</a>
                <a href="/" className='register'>Sign out</a>
            </div>
        </nav>
    )
}
export default NavBar