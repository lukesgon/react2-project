import './styles.css'

interface NavBarProps {
    children: React.ReactNode,
    className?: string,
    id?: string,
};

const NavBar = ({ children, className, id }: NavBarProps) => {
    return (
        <nav
        className={ className }
        id={ id }>
            { children }
        </nav>
    )
};

export default NavBar;
