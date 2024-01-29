import React from "react";
import styles from "../styles/Board.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Case from "./Case.jsx";

const Board = () => {
  const initialBoard = useSelector((state) => state.board.value);
  console.log("init", initialBoard);

  const handleClick = (props) => {
    console.log(props);
  };

  let board = initialBoard.map((obj, key) => {
    return (
      <Case
        key={key}
        row={obj.row}
        col={obj.col}
        player={obj.player}
        color={obj.color}
        name={obj.name}
        OnClick={handleClick}
      />
    );
  });
  return <div className={styles.board}>{board}</div>;
};

export default Board;
