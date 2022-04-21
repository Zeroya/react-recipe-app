import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  function handleClickPrev() {
    navigate(-1);
  }

  function handleClickNext() {
    navigate(1);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <button onClick={handleClickPrev}>Go Back</button>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleClickNext}>go Next</button>
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
margin: 0rem 18%;
margin-top:20px;

div{
  position:relative;
  width:100%;
}
input{
  border:none;
  background:linear-gradient(35deg, #494949, #494949);
  font-size:1.5rem;
  color:white;
  padding:1rem 3rem;
  border:none;
  border-radius:1rem;
  outline:none;
} 

button {
  border:none;
  background:linear-gradient(35deg, #494949, #494999);
  font-size:1.1rem;
  color:white;
  padding:0.85rem 1rem;
  margin: 0rem 1rem;
  border:none;
  border-radius:1rem;
  outline:none;
}
svg{
  position:absolute;
  top:50%
  left:0%;
  transform:translate(100%, -50%)
  color:white;
}
`;

export default Search;