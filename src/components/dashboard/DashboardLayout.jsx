"use-client"
import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import DarkLayout from './DarkLayout';
import LightLayout from './LightLayout';

const DashboardLayout = ({ children }) => {
    const [mode, setMode] = useState(null);
    console.log(mode)
    useEffect(() => {
        const handleStorageChange = () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setMode(savedTheme);
            } else {
                setMode('light');
            }
        };
        handleStorageChange();
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const toggleTheme = () => {
        const newMode = mode === 'dark' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('theme', newMode);
    };
    if (mode === "dark") {
        return (<>
            <DarkLayout toggleTheme={toggleTheme}>   <Sidebar />
                <div id="db_content" className="db_content">
                    <Navbar />
                    {children}
                </div>
                <button onClick={toggleTheme}>Toggle Theme</button> </DarkLayout>
        </>)
    }
    return (
        <LightLayout toggleTheme={toggleTheme}>    <Sidebar />
            <div id="db_content" className="db_content">
                <Navbar />
                {children}
            </div>
            <button onClick={toggleTheme}>Toggle Theme</button></LightLayout>
    );
};

export default DashboardLayout;






