import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Menu from '../../components/Menu';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { GrCart } from "react-icons/gr";
// import { createPortal } from 'react-dom';
// import ContentBox from '../../components/ContentBox';
// import ContentSection from '../../components/ContentSection';
import './styles.css';

const Root = () => {
    const isPortrait = useMediaQuery('(orientation: portrait)');
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    function closeMenu(event: MouseEvent) {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        if (hamburgerBtn && isOpen && !hamburgerBtn.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeMenu as (event: Event) => void);
        return () => {
            document.removeEventListener('click', closeMenu as (event: Event) => void);
        };
    }, [isOpen]);

    return (
        <>
            <NavBar id='nav-bar'>
                <Title id='store-title'>Sk8 E-Shop</Title>
                <section id='nav-menu'>
                    <Button
                    onClick={()=>console.log()}
                    id='cart-btn'>
                        <GrCart className='cart-icon'/>
                    </Button>
                    {isOpen && <Menu />}
                    {isPortrait 
                        ? <Button id='hamburger-btn' onClick={handleClick}>☰</Button>
                        : <Menu />
                    }
                </section>
            </NavBar>
            <Outlet />
        </>
    );
};

export default Root;
