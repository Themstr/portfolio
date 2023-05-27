import React, { useEffect, useRef } from 'react'

function Index({ cursorsRef }) {
    const menuIcon = useRef(null);
    const mobileNav = useRef(null);
    const changeMouse = () => {
        cursorsRef.current.classList.add('hover');
    }
    const removeMouse = () => {
        cursorsRef.current.classList.remove('hover');
    }
    const menuToggle = function () {
        if (menuIcon.current.classList.contains(`active`)) {
            menuIcon.current.classList.remove(`active`);
            mobileNav.current.classList.remove(`active`);
        } else {
            menuIcon.current.classList.add(`active`);
            mobileNav.current.classList.add(`active`);
        }
    }
    return (
        <>
            <header className="gridContainer">
                <div className="grid">

                    <div className="navLeft">
                        <a href="/" title="Mike Stilling Homepage" onMouseOver={changeMouse} onMouseOut={removeMouse} className="logo">MOHAMED AMINE</a>
                    </div>

                    <nav className="navRight desktop">
                        <a className="pad" href="/projects" title="View Mike's design" onMouseOver={changeMouse} onMouseOut={removeMouse}>
                            <span className="navLabel">Projects </span>
                            <span className="navNumber">01</span>
                        </a>
                        <a className="pad" href="/odds-and-ends" title="Odds and ends design work" onMouseOver={changeMouse} onMouseOut={removeMouse}>
                            <span className="navLabel">Odds & Ends </span>
                            <span className="navNumber">02</span>
                        </a>
                        <a href="/blog" title="Read Mike's blog" onMouseOver={changeMouse} onMouseOut={removeMouse}>
                            <span className="navLabel">Blog </span>
                            <span className="navNumber">03</span>
                        </a>
                    </nav>
                    <a className="navBtnContainer" ref={menuIcon} onClick={menuToggle}>
                        <p className="navBtnLabel"><span>Menu</span></p>
                    </a>

                </div>
            </header>
            <div className="mobileNav gridContainer" ref={mobileNav}>

                <nav className="grid">
                    <a href="/projects" title="View Mike's design">
                        <span className="navLabel">Projects </span>
                        <span className="navNumber">01</span>
                    </a>
                    <a href="/odds-and-ends" title="Odds and ends design work">
                        <span className="navLabel">Odds/Ends </span>
                        <span className="navNumber">02</span>
                    </a>
                    <a href="/blog" title="Read Mike's blog">
                        <span className="navLabel">Blog </span>
                        <span className="navNumber">03</span>
                    </a>
                </nav>
            </div>
            <section className="gridContainer homeHeadline">
                <div className="grid">

                    <h1>
                        <span onMouseOver={changeMouse} onMouseOut={removeMouse}>Med Ayadi</span><span className="hideTablet"> is a designer that</span> builds <span className="serif">digital brands</span> with nice<span className="hideMobile">, talented</span> people.
                    </h1>

                </div>
            </section>
        </>
    )
}

export default Index