import './styles.css'

interface TitleProps {
    children: string,
    id?: string,
    className?: string
};

const Title = ({ children, className, id }: TitleProps) => {
    return (
        <h1
        id={ id }
        className={ className }>
            { children }
        </h1>
    )
};

export default Title;