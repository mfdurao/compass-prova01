import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DataListInput from "react-datalist-input";

import { searchBooks } from "../../api/api";
import { keyWords, showOptions } from "../../utils";

import { BoxInput, HeaderStyle, Logo } from "./style";

const Header = ({getList}) => {
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
   if(searchedBooks){
    getList(searchedBooks);
   }
  }, [getList, searchedBooks]);

  const handleSearch = (text) => {
    searchBooks(text).then((data) => {
      const search = data.books;
      setSearchedBooks(search);
    });
  };

  const items = useMemo(
    () =>
      keyWords.map((item) => ({
        label: item,
        key: item,
      })),
    []
  );

  return (
    <HeaderStyle>
      <Link to="/">
        <Logo>MyReads</Logo>
      </Link>
      {showOptions}
      <Link to="/search">
        <BoxInput>
          <DataListInput
            placeholder="Search"
            items={items}
            onSelect={(event) => {
              handleSearch(event.key);
            }}
          />
        </BoxInput>
      </Link>
    </HeaderStyle>
  );
};

export default Header;