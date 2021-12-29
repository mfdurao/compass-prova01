import React, { useEffect, useState } from "react";

import Routes from "./routes";

export default function App() {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    return searchList;
  });

  const getSearchData = (list) => {
    setSearchList(list);
  };

  return <Routes getList={getSearchData} setList={searchList} />;
}
