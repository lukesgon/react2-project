import './styles.css'
import { Link } from 'react-router-dom'

interface MenuProps {
    onClick?: ()=> void,
}

const Menu = ({onClick}:MenuProps) => {
    return (
        <ul onClick={onClick}>
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
        </ul>
    )
};

export default Menu;
