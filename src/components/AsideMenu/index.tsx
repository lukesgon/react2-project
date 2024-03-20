import './styles.css'

interface AsideMenuProps {
    children: React.ReactNode,
    id: string,
    className: string,
}

const AsideMenu = ({ children, id, className }: AsideMenuProps) => {
    return (
        <aside
        id={ id }
        className={ className }>
            { children }
        </aside>
    )
};

export default AsideMenu;