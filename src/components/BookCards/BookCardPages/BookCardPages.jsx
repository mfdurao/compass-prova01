/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { getMyBooks, updateBook } from "../../../api/api";
import { bookFilter } from "../../../utils";
import { Loading } from "../..";
import { notify, notifyRemoved } from "../../Notification";
import BookCardContent from "../BookCardContent";

import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Btn,
  BtnContainer,
  Dropdown,
  DropdownContent,
  DropdownHover,
  SideOption,
  SideOptionContent,
} from "../style";

const BookCardPages = ({ bookLocal }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyBooks();
      const bookShelf = bookLocal;
      setBooks(bookFilter(response.books, bookShelf));
    };
    fetchData();
  }, []);

  const handleChangeStatus = (items, newStatus) => {
    updateBook(items, newStatus);
    const reduceValue = books.filter((item) => item !== items);
    setBooks(reduceValue);

    newStatus === "noShelf" ? notifyRemoved(items) : notify(items);
  };

  const moveFromCurrently = (items) => {
    return (
      <SideOptionContent>
        <BtnContainer>
          <Btn onClick={() => handleChangeStatus(items, "read")}>Read</Btn>
          <Btn onClick={() => handleChangeStatus(items, "wantToRead")}>
            Want to Read
          </Btn>
        </BtnContainer>
      </SideOptionContent>
    );
  };

  const moveFromRead = (items) => {
    return (
      <SideOptionContent>
        <BtnContainer>
          <Btn onClick={() => handleChangeStatus(items, "wantToRead")}>
            Want to Read
          </Btn>
          <Btn onClick={() => handleChangeStatus(items, "currentlyReading")}>
            Currently Reading
          </Btn>
        </BtnContainer>
      </SideOptionContent>
    );
  };

  const moveFromWantRead = (items) => {
    return (
      <SideOptionContent>
        <BtnContainer>
          <Btn onClick={() => handleChangeStatus(items, "read")}>Read</Btn>
          <Btn onClick={() => handleChangeStatus(items, "currentlyReading")}>
            Currently Reading
          </Btn>
        </BtnContainer>
      </SideOptionContent>
    );
  };

  return (
    <>
      {(books.length &&
        books.map((items) => (
          <Box key={items.id}>
            <BookCardContent itemCard={items} />
            <Dropdown>
              <DropdownHover>...</DropdownHover>
              <DropdownContent>
                <BtnContainer>
                  <SideOption>
                    Move to
                    <SideOptionContent>
                      {bookLocal === "currentlyReading" &&
                        moveFromCurrently(items)}
                      {bookLocal === "read" && moveFromRead(items)}
                      {bookLocal === "wantToRead" && moveFromWantRead(items)}
                    </SideOptionContent>
                  </SideOption>
                  <Btn onClick={() => handleChangeStatus(items, "noShelf")}>
                    Remove from shelf
                  </Btn>
                </BtnContainer>
              </DropdownContent>
            </Dropdown>
          </Box>
        ))) || <Loading></Loading>}
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

export default BookCardPages;
