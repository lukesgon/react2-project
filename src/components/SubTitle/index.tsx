import './styles.css'

interface SubTitleProps {
    children: React.ReactNode,
    className: string,
    id: string,
};

const SubtTitle = ({ children, className, id}: SubTitleProps)=> {
    return (
        <h2
        className={ className }
        id={ id }>
            { children }
        </h2>
    )
};

export default SubtTitle;