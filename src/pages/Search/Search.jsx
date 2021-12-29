import React from "react";
import { Link } from "react-router-dom";

import BookCardSearch from "../../components/BookCards/BookCardSearch";

import { ContainerStyle, History } from "../style";

const Search = ({ setList }) => {
  return (
    <ContainerStyle>
      <History>
        <Link to="/">Home</Link>
        <> &gt; Search</>
      </History>
      <BookCardSearch setList={setList} />
    </ContainerStyle>
  );
};

export default Search;
