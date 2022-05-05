import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { Card2, Grid  } from "../style/Styles.styled";

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams(); 

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
  }

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card2 key={item.id}>
            <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card2>
        )
      })}
    </Grid>
  )
}
