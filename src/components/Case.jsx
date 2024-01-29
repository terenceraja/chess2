import React from "react";
import styles from "../styles/Case.module.css";

const Case = ({ row, col, name, color, OnClick, player }) => {
  const handleClick = () => {
    OnClick({ row, col, name, player, color });
  };

  return (
    <div
      onClick={() => handleClick()}
      className={styles.case}
      style={{ backgroundColor: color, outline: "5px solid yellow" }}
    >
      <span>
        {row} / {col}
      </span>
      <span
        style={
          player === 1
            ? { color: "blue", fontWeight: "bolder", fontSize: 20 }
            : { color: "violet", fontWeight: "bolder", fontSize: 20 }
        }
      >
        {name}
      </span>
    </div>
  );
};

export default Case;
