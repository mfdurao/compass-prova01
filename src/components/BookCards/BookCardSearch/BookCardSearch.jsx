/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-operators */
import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Loading } from "../..";

import { getMyBooks, updateBook } from "../../../api/api";
import { notify } from "../../Notification";

import BookCardContent from "../BookCardContent";

import {
  BookMoved,
  Box,
  Btn,
  BtnContainer,
  Dropdown,
  DropdownContent,
  DropDownSearch,
} from "../style";

const BookCardSearch = ({ setList }) => {
  const [books, setBooks] = useState([]);
  const [allShelf, setAllShelf] = useState([]);

  const inShelf = (id) => {
    const allSearchBooks = books.map((item) => {
      if (allShelf.find((items) => items.id === item.id)) {
        return true;
      } else return false;
    });
    if (allSearchBooks[id]) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyBooks();
      setAllShelf(response.books);
    };
    fetchData();
  }, []);

  const handleChangeStatus = useCallback((items, newStatus) => {
    updateBook(items, newStatus);
    notify(items);
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyBooks();
      setAllShelf(response.books);
    };
    fetchData();
  }, [handleChangeStatus]);

  useEffect(() => {
    return allShelf;
  }, [allShelf]);

  useEffect(() => {
    setBooks(setList);
  }, [setList]);

  const moveToCurrently = (items) => {
    return (
      <Btn onClick={() => handleChangeStatus(items, "currentlyReading")}>
        Currently Reading
      </Btn>
    );
  };

  const moveToWant = (items) => {
    return (
      <Btn onClick={() => handleChangeStatus(items, "wantToRead")}>
        Want to Read
      </Btn>
    );
  };

  const moveToRead = (items) => {
    return <Btn onClick={() => handleChangeStatus(items, "read")}>Read</Btn>;
  };

  console.log(books);
  return (
    <>
      {books.map((items, index) => (
        <Box key={items.id}>
          <BookCardContent itemCard={items} />
          {(!inShelf(index) && (
            <Dropdown>
              <DropDownSearch>Move to...</DropDownSearch>
              <DropdownContent>
                <BtnContainer>
                  {moveToCurrently(items)}
                  {moveToWant(items)}
                  {moveToRead(items)}
                </BtnContainer>
              </DropdownContent>
            </Dropdown>
          )) || <BookMoved>Book already moved</BookMoved>}
        </Box>
      )) || <Loading></Loading>}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default BookCardSearch;
