import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Recipe = () => {

const params = useParams();
const [detail, setDetail] = useState([]);
const [activeTab, setActiveTab] = useState('instructions');

const fetchDetails = async () => {
  const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY1}`);
  const detailData = await data.json();
  setDetail(detailData);
  console.log(detailData);
}

useEffect(()=>{
fetchDetails();
},[params.name])


const flouTo = () => { 
  return (
    detail.extendedIngredients.map((ingredient) => {
  <li key={ingredient.id}>{ingredient.original}</li>})
)}

  return (
    <DetailWrapper>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt=''/>
      </div>
      <Info>
        <SButton className={activeTab === 'instructions' ? 'active' : ''}  onClick={() => setActiveTab("instructions")}>Instructions</SButton>
        <SButton className={activeTab === 'ingredients' ? 'active' : ''}  onClick={() => setActiveTab("ingredients")}>Ingredients</SButton>
        {activeTab === 'instructions' ? 
        <div>
          <h3 dangerouslySetInnerHTML={{__html: detail.instructions}}></h3>
        </div> : activeTab === 'ingredients' ?
        <div>
        <h3 dangerouslySetInnerHTML={{__html: detail.summary}}></h3>
      </div>
         : ""}
      
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
margin-top:6rem;
margin-bottom:5em;
display:flex;
.active{
  background:linear-gradient(35deg, #494949, #494949);
  color:white;
}
h2{
  margin-bottom:2rem;
}
li{
  font-size:1.2rem;
  line-height:2.5rem;
}
ul{
  margin-top:2rem;
}
img{
  width:420px;
}
`;

const SButton = styled.button`
padding:1rem 2rem;
color: #313131;
background:white;
border:2px solid black;
margin-left:2rem;
margin-bottom:1rem;
font-weight:600;
`;

const Info = styled.div`
margin-left:10rem;

`;

export default Recipe;