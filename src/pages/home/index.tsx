import ContentSection from '../../components/ContentSection';
import ContentBox from '../../components/ContentBox';
import ContentTitle from '../../components/ContentTitle';
import ImgBox from '../../components/ImgBox';
import './styles.css'

const Home = () => {
    return (
        <ContentSection id='shop-section'>
            <ContentTitle>Nossos Produtos!</ContentTitle>
            <ContentSection>
                <ContentBox>
                    <ImgBox src='' alt='item 1' onClick={()=>{alert('clicado')}}>
                        Item 1
                    </ImgBox>
                </ContentBox>
            </ContentSection>
        </ContentSection>
    )
};

export default Home;