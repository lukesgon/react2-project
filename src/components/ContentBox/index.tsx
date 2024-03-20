import './styles.css'

interface ContentBoxProps {
    children: React.ReactNode,
    id?: string,
    className?: string
}

const ContentBox = ({ children, id, className}: ContentBoxProps)=> {
    return(
        <article
        id={ id }
        className={ className }>
            { children }
        </article>
    )
};

export default ContentBox;