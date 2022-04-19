import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Loader from './Loader/Loader';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import './Popular.css';

function Popular() {

  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopalar();
  }, [])


  const getPopalar = async () => {

    const check = localStorage.getItem('popular');

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY1}&number=20`);
      const result = await api.json();

      localStorage.setItem("popular" , JSON.stringify(result.recipes));

      setPopular(result.recipes);
      console.log(result.recipes)
      if (result.recipes.length === 0) {
        const api2 = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY2}&number=20`);
        const result2 = await api2.json();
        localStorage.setItem("popular" , JSON.stringify(result2.recipes));
        setPopular(result2.recipes);

      }
    }

  }

  const Wrapper = styled.div`
  margin: 4rem 0rem;`
    ;

  const Card = styled.div`
  min-height:12rem;
  border-radius: 2rem ;
  overflow: hidden;
  margin-left:1rem;
  margin-right:1rem;
  position:relative;

  img{
    border-radius:2rem;
    position:absolute;
    left:0;
    width:100%;
    heidth:100%;
    object-fit:cover;
    }

    p {
      position:absolute;
      z-index:10;
      left:52%;
      bottom:5%;
      transform:translate(-50%, 0%);
      color:white;
      width:100%;
      text-alight:center;
      font-weight:600;
      font-size:14px;
      height: 40%;
      display:flex;
      align-items: center;
      justify-content: center;
    }

  `;

  const LoaderWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top:15rem;
  `;



  return (
    <div>
      {popular.length === 0 ?
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
        :
        <Wrapper >
          <h3>Trending</h3>
          <Splide options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gab: '5rem',
          }}>
            {popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card className="toggle">
                    <p className={`${recipe.image == undefined ? "black" : "white"} `}>
                      {recipe.title}</p>
                    <img src={recipe.image == undefined ?
                      "https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png"
                      : recipe.image} alt={recipe.title} />
                  </Card>
                </SplideSlide>
              )
            })}
          </Splide>
        </Wrapper>

      }
    </div>
  )
}

export default Popular