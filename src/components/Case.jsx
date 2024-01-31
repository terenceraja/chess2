import React from "react";
import styles from "../styles/Case.module.css";

const Case = ({
  row,
  col,
  name,
  color,
  OnClick,
  player,
  highlighted,
  highlightedBy,
}) => {
  const handleClick = () => {
    OnClick({
      row,
      col,
      name,
      player,

      highlighted,
      highlightedBy,
    });
  };

  return (
    <div
      onClick={() => handleClick()}
      className={styles.case}
      style={{ backgroundColor: color }}
    >
      <span>
        {row} / {col}
        {highlighted ? (
          <span style={{ backgroundColor: "yellow" }}>choose?</span>
        ) : (
          <></>
        )}
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
