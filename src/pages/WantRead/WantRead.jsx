import React from "react";
import { Link } from "react-router-dom";

import { BookCardPages } from "../../components/BookCards";

import { ContainerStyle, History } from "../style";

const WantRead = () => {
  return (
    <ContainerStyle>
      <History>
        <Link to="/">Home</Link>
        <> &gt; Want to Read</>
      </History>
      <BookCardPages bookLocal="wantToRead" />
    </ContainerStyle>
  );
};

export default WantRead;
