import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Wrapper, Card, Gradient } from "../style/Styles.styled";
import { Link } from "react-router-dom";

export default function Popular() {
    //     the var  the function
    const [popular, setPopular] = useState([]);


    useEffect(() => {
        // Running this function as soon as component gets mounted
        getPopular();
    }, []) // and this empty pair of arrays here to basically tell it: only run it when the component gets mounted.

    // fetch api to get the respies
    const getPopular = async () => {

        // add it in local storge
        // check if the local storge is empty
        const check = localStorage.getItem('popular');

        if (check) {
            // use what in the localstorge + don't fitch
            // parse => change string to an array
            setPopular(JSON.parse(check));
        } else {
            // here you can fitch
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
            const data = await api.json();

            // strigify => change array to an string.
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    }

    // JSX 
    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}>
                    {/* map (Loop) over the recipes to get the data */}
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={'/recipe/' + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
} 


