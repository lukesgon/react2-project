import './styles.css'

interface ContentSubtTitleProps {
    children: string,
    className?: string,
    id?: string,
};

const ContentSubtTitle = ({ children, className, id }: ContentSubtTitleProps)=> {
    return(
        <h4 
        className={ className }
        id={ id }>
            { children }
        </h4>
    )
};

export default ContentSubtTitle;