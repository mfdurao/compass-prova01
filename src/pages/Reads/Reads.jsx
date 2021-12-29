import React from "react";
import { Link } from "react-router-dom";

import { BookCardPages } from "../../components/BookCards";

import { ContainerStyle, History } from "../style";

const Reads = () => {
  return (
    <ContainerStyle>
      <History>
        <Link to="/">Home</Link>
        <> &gt; Read </>
      </History>
      <BookCardPages bookLocal="read" />
    </ContainerStyle>
  );
};

export default Reads;
