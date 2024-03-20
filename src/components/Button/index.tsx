import './styles.css'

interface ButtonProps {
    children: React.ReactNode,
    className?: string,
    id?: string,
    onClick: ()=> void
};

const Button = ({ children, id, className, onClick}: ButtonProps) => {
    return (
        <button
        id={ id }
        className={ className }
        onClick={ onClick }>
            { children }
        </button>
    )
};

export default Button;