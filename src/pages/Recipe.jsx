import { useEffect, useState } from "react";
import styled from "styled-components"
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';

export default function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTap] = useState('description');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailsData = await data.json();
        setDetails(detailsData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name])

    return (
        <DetailWrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Box1>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </Box1>
            <Box2>
                <ButtonFlex>
                    <Button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTap('description')}>Description</Button>
                    <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTap('ingredients')}>Ingredients</Button>
                    <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTap('instructions')}>Instructions</Button>
                </ButtonFlex>

                {activeTab === 'description' && (
                    <div>
                        <MainHeading>Description</MainHeading>
                        <Para dangerouslySetInnerHTML={{ __html: details.summary }}></Para>
                    </div>
                )}

                {activeTab === 'ingredients' && (
                    <ol>
                        <MainHeading>Ingredients</MainHeading>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ol>
                )}

                {activeTab === 'instructions' && (
                    <div>
                        <MainHeading>Instructions</MainHeading>
                        <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                    </div>
                )}

            </Box2>
        </DetailWrapper>
    )
}

const DetailWrapper = styled(motion.div)`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    @media (max-width: 992px) {
        flex-direction: column;
    }

    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2{
        margin-bottom: 2rem;
    }

    li{
        font-size: 14px;
        line-height: 1.5;
        margin-bottom: 1rem;
        border: 1px solid #ddd;
        padding: 1rem;
        border-radius: 13px;
        background: #f0f9fd;
    }

    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 21px;
    color: #313131;
    background-color: #fff;
    cursor: pointer;
    border: 2px solid #000;
    font-weight: 600;
    transition: .3s;

    @media (max-width: 400px) {
        padding: 1rem 6px;
    }
`; 

const Para = styled.p`
    margin: 1rem 0 4rem 0;

    @media (max-width: 1150px) {
        margin: 1rem 0 4rem 0;
        font-size: 14px;
    }

    @media (max-width: 992px) {
        margin: 1rem 0 4rem 0;
        font-size: 1rem;
    }
`

const MainHeading = styled.h4`
    margin: 4rem 0 1rem 0rem;
`

const ButtonFlex = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`

const Box1 = styled.div`
    @media (max-width: 992px) {
        padding-bottom: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media (max-width: 992px) {
        img{
            width: 100%;
        }
    }
`

const Box2 = styled.div`
    margin-left: 7rem;


    @media (max-width: 1140px) {
        margin-left: 2rem;
    }

    @media (max-width: 992px) {
        margin-left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1rem;
    }

`