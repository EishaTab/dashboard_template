import React, { useEffect, useState } from 'react';
import { Cross, Darkmode, Hamburger, Lightmode } from '../icons';

const Navbar = () => {
    const [toggleIcon, settoggleIcon] = useState(Cross);
    const [mode, setmode] = useState( 'light')
    const switchMode = () => {
        const currentTheme = document.body.getAttribute('theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setmode(newTheme)
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('theme', savedTheme);
        window.innerWidth >= 480 ?
            settoggleIcon(Cross) : settoggleIcon(Hamburger)

    }, []);
    const toggleSidebar = () => {
        const sidebar = document.getElementById('sidebar');
        const db_content = document.getElementById('db_content');
        const screenWidth = window.innerWidth;
        if (screenWidth < 480) {
            sidebar.classList.add('sm');
        }
        if (sidebar.classList.contains('closed')) {
            sidebar.classList.remove('closed');
            db_content.classList.remove('opened');
            settoggleIcon(Cross)
        } else {
            sidebar.classList.add('closed');
            db_content.classList.add('opened');
            settoggleIcon(Hamburger)
        }
    };

    return (
        <div className='topbar_container'>
            <span className='toggle' onClick={toggleSidebar}>{toggleIcon} </span>   
            <span id="theme-toggle"  onClick={switchMode}>{mode!=='light'?Lightmode :Darkmode}</span>
        </div>
    );
}

export default Navbar;
