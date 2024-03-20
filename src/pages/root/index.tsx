import NavBar from '../../components/NavBar';
import Menu from '../../components/Menu';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { useState } from 'react';
import './styles.css'


const Root = () => {
    const isPortrait = useMediaQuery('(orientation: portrait)');
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen)
    };

    function closeMenu() {
        setIsOpen(false)
    };

    return (
        <>
            <NavBar id='nav-bar'>
                <Title>Sk8 E-Shop</Title>
                <section id='nav-menu'>
                    {isOpen && <Menu onClick={closeMenu} />}
                    {isPortrait 
                        ? <Button onClick={handleClick}>☰</Button>
                        : <Menu />
                    }
                </section>
            </NavBar>
            <Outlet />
        </>
    )
};

export default Root;