import Button from '../Button';
import './styles.css'

interface ImgBoxProps {
    children: string,
    className?: string,
    id?: string,
    src: string,
    alt: string,
    onClick: ()=>void
};

const ImgBox = ({ children, className, id, src, alt, onClick }: ImgBoxProps) => {
    return(
        <figure
        className={ className }
        id={ id }>
            <img 
            src={ src }
            alt={ alt }/>
            <figcaption>
                { children }
                <Button onClick={onClick}>Comprar</Button>
            </figcaption>
        </figure>
    )
};

export default ImgBox;