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
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`);
    const result = await api.json();
    setPopular(result.recipes);

  }

  const Wrapper = styled.div`
  margin: 4rem 0rem;`
    ;

  const Card = styled.div`
  min-height:18rem;
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
      left:50%;
      bottom:5%;
      transform:translate(-50%, 0%);
      color:white;
      width:100%;
      text-alight:center;
      font-weight:600;
      font-size:1rem;
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
          <h3>Popular Picks</h3>
          <Splide options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gab: '5rem',
          }}>
            {popular.map((recipe) => {
              return (
                <SplideSlide>
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