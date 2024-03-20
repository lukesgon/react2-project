import NavBar from '../../components/NavBar';
import { Link, Outlet } from 'react-router-dom';
import Title from '../../components/Title';
import './styles.css'


const Root = () => {
    return (
        <>
            <NavBar id='nav-bar'>
                <Title>Sk8 E-Shop</Title>
                <ul>
                    <li>
                        <Link to='/' className='nav-btn'>Início</Link>
                    </li>
                    <li>
                        <Link to='/signin' className='nav-btn'>Acesso</Link>
                    </li>
                    <li>
                        <Link to='/account' className='nav-btn'>Conta</Link>
                    </li>
                    <li>
                        <Link to='/about' className='nav-btn'>Sobre</Link>
                    </li>
                    <li>
                        <Link to='/cart' className='nav-btn'>Carrinho</Link>
                    </li>
                </ul>
            </NavBar>
            <Outlet />
        </>
    )
};

export default Root;