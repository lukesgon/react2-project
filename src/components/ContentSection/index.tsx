import './styles.css'

interface ContentSectionProps {
    children: React.ReactNode,
    id?: string,
    className?: string,
};

const ContentSection = ({ children, id, className }: ContentSectionProps) => {
    return (
        <section
        id={ id }
        className={ className }>
            { children }
        </section>
    )
};

export default ContentSection;