import React from "react";
import styles from "../styles/Board.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isValidElement, createElement } from "react";

const Board = () => {
  const show = true;
  const initialBoard = useSelector((state) => state.board.value);
  console.log(isValidElement(initialBoard[0]));
  console.log("hey", typeof initialBoard);

  return (
    <div className={styles.board}>
      {initialBoard.map((item) => {
        return item;
      })}
    </div>
  );
};

export default Board;
