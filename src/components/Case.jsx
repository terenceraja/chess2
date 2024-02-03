import React from "react";
import styles from "../styles/Case.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessPawn } from "@fortawesome/free-solid-svg-icons";

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
      {name === "P" && player === 2 ? (
        <FontAwesomeIcon
          icon={faChessPawn}
          size="2xl"
          style={{ color: "#63E6BE" }}
        />
      ) : (
        <></>
      )}

      {name === "P" && player === 1 ? (
        <FontAwesomeIcon
          icon={faChessPawn}
          size="2xl"
          style={{ color: "#FFD43B" }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Case;
