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

  // PLAYER CLICKS ON A CASE
  const handleClick = (props) => {
    //PAWN///////
    ///////////EXECUTE///////////////
    console.log(board);

    //execute if case clicked was highlighted (player executes a move)
    if (props.highlighted) {
      //loops the board to update
      let updatedBoard = board.map((obj) => {
        //at the highlighted case
        if (
          (obj.row === props.row && obj.col === props.col) ||
          obj.highlighted
        ) {
          // replaces case's props to highlightedBy (player/piece that chose the move)
          return {
            ...obj,
            name: obj.highlightedBy.name,
            player: props.highlightedBy.player,
            highlighted: false,
            highlightedBy: {},
          };
        }

        // replace the case of the player/piece that chose to empty case
        if (
          obj.row === props.highlightedBy.row &&
          obj.col === props.highlightedBy.col
        ) {
          return { ...obj, name: "", player: null };
        }

        //if nothing then return previous case state
        return obj;
      });

      //update board
      setBoard(updatedBoard);
      console.log(updatedBoard);
    }

    //HIGHLIGHT/////////////////////////////////
    // HIGHLIGHTS FOR PLAYER 1
    if (props.player === 1) {
      let updatedBoard = board.map((obj) => {
        if (obj.row === props.row + 1 && obj.col === props.col) {
          return { ...obj, highlighted: true, highlightedBy: props };
        }
        return obj;
      });

      setBoard(updatedBoard);
    }

    //HIGHLIGHTS FOR PLAYER 2
    if (props.player === 2) {
      let updatedBoard = board.map((obj) => {
        if (obj.row === props.row - 1 && obj.col === props.col) {
          return { ...obj, highlighted: true, highlightedBy: props };
        }
        if (
          (obj.row === props.row - 1 && obj.col === props.col - 1) ||
          (obj.row === props.row - 1 && obj.col === props.col + 1)
        ) {
          if (obj.player === 1) {
            return { ...obj, highlighted: true, highlightedBy: props };
            console.log("kill");
          }
        }
        return obj;
      });
      setBoard(updatedBoard);
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
