"use client";

import Link from "next/link";
import { useState, useEffect } from "react"
// import NewShit from "../../../../lt_dashboard/src/app/layout"

export default function NavBar() {
    const [isMenuActive, setIsMenuActive] = useState(false)

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive)
    }
    useEffect(() => {
        if(isMenuActive) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [isMenuActive])
    return (
        <div className="nav-bar">
            <nav className="navigation">
                <a href="/"><img className="logo" src="/assets/lautalk.png" alt="logo" /></a>
                <form>
                <input type="text" placeholder="Want to make payment or purchase anything?"/>
                <button id="srch-btn"></button>
                </form>
                <ul className="desk-nav">
                    <Link href="#" id="crt-talks"> <span></span> create talks</Link>
                    <Link href="/auth/login">log in</Link>
                    <Link href="/auth/signup" id="sign">sign up</Link>
                </ul>
                <li className="menu-btn" onClick={toggleMenu}><ion-icon id="tog" name="menu-outline" /></li>
                <div className={`overlay ${isMenuActive ? "active" : ""}`} onClick={toggleMenu}></div>
                <ul className={`mob-nav ${isMenuActive ? "active" : ""}`}>
                    <li className="menu-btn mob-btn" onClick={toggleMenu}><ion-icon id="tog" name="close-outline" /></li>
                    <a  href="#" onClick={toggleMenu} id="crt-talks"> <span></span> create talks</a>
                    <a href="/auth/login" onClick={toggleMenu} >log in</a>
                    <a href="/auth/signup" onClick={toggleMenu} id="sign">sign up</a>
                </ul>
            </nav>
        </div>
    )
}