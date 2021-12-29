import React from "react";

import { Description, Img, SubTitle, Title } from "./style";

const BookCardContent = ({ itemCard }) => {
  return (
    <>
      <Img src={itemCard.imageLinks.thumbnail} alt="Capa do Livro" />
      <Description>
        <Title>{itemCard.title}</Title>
        <SubTitle>{itemCard.authors}</SubTitle>
      </Description>
    </>
  );
};

export default BookCardContent;
