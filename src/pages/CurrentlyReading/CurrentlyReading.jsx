import React from "react";
import { Link } from "react-router-dom";

import { BookCardPages } from "../../components/BookCards";

import { ContainerStyle, History } from "../style";

const CurrentlyReading = () => {
  return (
    <ContainerStyle>
      <History>
        <Link to="/">Home</Link>
        <> &gt; Currently Reading</>
      </History>
      <BookCardPages  bookLocal="currentlyReading" />
    </ContainerStyle>
  );
};

export default CurrentlyReading;

