import React from "react";

import { LoaderBook, LoadingTitle, Page } from "./style";

const Loading = () => {
  return (
    <>
      <LoaderBook>
        <Page></Page>
        <Page></Page>
      </LoaderBook>
      <LoadingTitle>Looking for books...</LoadingTitle>
    </>
  );
};

export default Loading;
