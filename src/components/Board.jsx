import React from "react";
import styles from "../styles/Board.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Case from "./Case.jsx";

const Board = () => {
  const [board, setBoard] = useState([]);
  const initialBoard = useSelector((state) => state.board.value);

  useEffect(() => {
    setBoard(initialBoard);
  }, []);

  const handleClick = (props) => {
    ///////////EXECUTE///////////////
    // if (props.highlighted) {
    //   let updatedBoard = board.map((obj) => {
    //     if (obj.row === props.row + 1 && obj.col === props.col) {
    //       return { ...obj, highlighted: true };
    //     }
    //     return obj;
    //   });
    // }

    //PAWN///////
    //HIGHLIGHT/////////////////////////////////
    // FOR PLAYER 1
    if (props.player === 1) {
      let updatedBoard = board.map((obj) => {
        if (obj.row === props.row + 1 && obj.col === props.col) {
          return { ...obj, highlighted: true, highlightedBy: props };
        }
        return obj;
      });

      setBoard(updatedBoard);
      console.log(updatedBoard);
    }

    //FOR PLAYER 2
    if (props.player === 2) {
      let updatedBoard = board.map((obj) => {
        if (obj.row === props.row - 1 && obj.col === props.col) {
          return { ...obj, highlighted: true, highlightedBy: props };
        }
        return obj;
      });
      setBoard(updatedBoard);
      console.log(updatedBoard);
    }
  };
  //HIGHLIGHT/////////////////////////////////
  //PAWN///////

  const boardSetup = board.map((obj, key) => {
    return (
      <Case
        key={key}
        row={obj.row}
        col={obj.col}
        player={obj.player}
        color={obj.color}
        name={obj.name}
        OnClick={handleClick}
        highlighted={obj.highlighted}
        highlightedBy={obj.highlightedBy}
        border=""
      />
    );
  });

  return <div className={styles.board}>{boardSetup}</div>;
};

export default Board;
