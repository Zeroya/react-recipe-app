import React , {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Searched = () => {

const [searchedRecipes, setSearchedRecipes] = useState([]);
let params = useParams();


  const GetSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY1}&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  }

  useEffect(()=> {
    GetSearched(params.searched);
  },[params.searched])



  return (
    <Grid>
      {searchedRecipes.map((el) => {
        return (
          <Card key={el.id}>
            <img src={el.image} alt='' />
            <h4>{el.title}</h4>
          </Card>
        );
      }
      )}
    </Grid>
  );
};

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
grid-gap:3rem;
`;

const Card = styled.div`
img{
  width:100%;
  border-radius:2rem;
}
a{
  text-decoration:none;
}
h4{
  text-align:center;
  padding:1rem;
}
`;

export default Searched;