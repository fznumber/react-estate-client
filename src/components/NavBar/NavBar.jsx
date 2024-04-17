import { useState } from 'react'
import './NavBar.scss'
const NavBar = () => {
    const [open,setOpen] = useState(false)
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
                <div className='menuIcon'>
                    <img src="/menu.png" alt="" 
                    onClick={() => setOpen((prev) => !prev)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">Abaut</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign out</a>
                </div>
            </div>
        </nav>
    )
}
export default NavBar