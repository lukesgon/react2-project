import './styles.css'

interface ContentTitleProps {
    children: string,
    className?: string,
    id?: string,
};

const ContentTitle = ({ children, className, id }: ContentTitleProps)=> {
    return(
        <h3
        className={ className }
        id={ id }>
            { children }
        </h3>
    )
};

export default ContentTitle;
