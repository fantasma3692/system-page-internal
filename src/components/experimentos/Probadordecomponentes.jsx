import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 230px;
  height: 340px;
  background: #131313;
  border: 2px solid #569E67;
  border-radius: 40px;
`;

const ImageContainer = styled.div`
  background-color: #1f1f1fa3;
  border-radius: 2.5em 2.5em 0em 0em;
  width: 100%;
  height: 37%;
  padding: 2px;
`;

const ProductTitle = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #569E67;
  font-family: 'Segoe UI', sans-serif;
  margin-top: 10px;
`;

const Cost = styled.div`
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  color: white;
  font-family: 'Segoe UI', sans-serif;
`;

const RadioInputs = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 13px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #182b1c;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 200px;
  font-size: 14px;

  .radio {
    flex: 1 1 auto;
    text-align: center;

    input {
      display: none;
    }

    .name {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      padding: 0.5rem 0;
      color: #fff;
      transition: all 0.15s ease-in-out;

      input:checked + .name {
        background-color: #000;
        color: #569E67;
        font-weight: 600;
      }
    }
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  margin-top: 19px;
  padding: 15px;
  border: none;
  border-top: 2px solid #569E67;
  background-color: #131313;
  color: #569E67;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Segoe UI', sans-serif;
  border-radius: 0px 0px 38px 38px;
  transition: 0.2s;

  &:hover {
    background-color: #569E67;
    border-top: 2px solid transparent;
    color: #111111;
  }
`;

const ProductCard = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <svg
          xmlSpace="preserve"
          viewBox="0 0 512.108 512.108"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          version="1.1"
          width="800px"
          height="800px"
        >
          {/* SVG Path */}
        </svg>
      </ImageContainer>
      <ProductTitle>Nebula Ludis</ProductTitle>
      <Cost>$149.90</Cost>
      <RadioInputs>
        <label className="radio">
          <input type="radio" name="radio" checked />
          <span className="name">B</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">D</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">2E</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">4E</span>
        </label>
      </RadioInputs>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </CardContainer>
  );
};

export default ProductCard;
