import React, { useEffect, useState } from 'react';
import '../style/navbar.css';
import anime from 'animejs/lib/anime.es.js';

function Navbar() {

    let element;

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    function Scroll(section) {
        
        switch (section) {
            case "ame":
                element = document.querySelector(".aboutme_container");
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                break;
            case "pro":
                element = document.querySelector(".card");
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case "cme":
                element = document.querySelector("#morph");
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            default:
        }
    }

    useEffect(() => {

        const morphing = anime({
          targets: ".morph-nav",
          d: [
            { value: "M0 53L30 56.5C60 60 120 67 180 66.3C240 65.7 300 57.3 360 62.2C420 67 480 85 540 82.8C600 80.7 660 58.3 720 58.2C780 58 840 80 870 91L900 102L900 0L870 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z" },
            { value: "M0 114L30 104.8C60 95.7 120 77.3 180 69.5C240 61.7 300 64.3 360 72C420 79.7 480 92.3 540 93.2C600 94 660 83 720 83.5C780 84 840 96 870 102L900 108L900 0L870 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z"},
            { value: "M0 62L30 65.8C60 69.7 120 77.3 180 85.8C240 94.3 300 103.7 360 100.5C420 97.3 480 81.7 540 78C600 74.3 660 82.7 720 84C780 85.3 840 79.7 870 76.8L900 74L900 0L870 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z"},
            { value: "M0 38L30 49.3C60 60.7 120 83.3 180 93.7C240 104 300 102 360 98C420 94 480 88 540 87C600 86 660 90 720 84.2C780 78.3 840 62.7 870 54.8L900 47L900 0L870 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z" },
          ],
          easing: 'easeInOutSine',
          duration: 10000,
          loop: true,
        })
    
      }, []);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-logo' onClick={closeMobileMenu}>
                    <span className="title">&lt;Portfolio /&#62;</span>
                    {/*<span className="title">Portfolio</span>
                    <i class="fa-solid fa-code"></i>*/}
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <div
                            className='nav-links'
                            onClick={() => (closeMobileMenu(), Scroll("ame"))}
                        >
                            About Me
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div
                            className='nav-links'
                            onClick={() => (closeMobileMenu(), Scroll("pro"))}
                        >
                            My Projects
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div
                            className='nav-links'
                            onClick={() => (closeMobileMenu(), Scroll("cme"))}
                        >
                            Contact Me
                        </div>
                    </li>
                </ul>
            </nav>
            <svg id="morph-nav" viewBox="0 0 900 300" width="900" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <rect x="0" y="0" width="900" height="300" fill="#FFFFFF"></rect>
                <path class="morph-nav"
                    d="M0 38L30 49.3C60 60.7 120 83.3 180 93.7C240 104 300 102 360 98C420 94 480 88 540 87C600 86 660 90 720 84.2C780 78.3 840 62.7 870 54.8L900 47L900 0L870 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z"
                    fill="#000000" stroke-linecap="round" stroke-linejoin="miter"></path>
            </svg>
        </>
    );
}

export default Navbar;