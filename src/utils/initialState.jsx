import Case from "../components/Case.jsx";

export const initState = () => {
  const handleOnClick = (props) => {
    props.highlight(props);
  };
  let slots = [];

  let pieceProp = [
    {
      name: "P",
      activate: function (props) {
        console.log(props);
      },
      highlight: function (props) {},
    },
    {
      name: "R",
      activate: function () {
        alert("baz");
      },
      highlight: function (props) {
        console.log(props);
      },
    },
    {
      name: "Kn",
      activate: function () {
        alert("baz");
      },
      highlight: function (props) {
        console.log(props);
      },
    },
    {
      name: "B",
      activate: function () {
        alert("baz");
      },
      highlight: function (props) {
        console.log(props);
      },
    },
    {
      name: "Q",
      activate: function () {
        alert("baz");
      },
      highlight: function (props) {
        console.log(props);
      },
    },
    {
      name: "K",
      activate: function () {
        alert("baz");
      },
      highlight: function (props) {
        console.log(props);
      },
    },
    {
      name: "B",
      activate: function () {
        alert("baz");
      },
      highlight: function (props) {
        console.log(props);
      },
    },
    {
      name: "Kn",
      activate: function () {
        alert("baz");
      },
      highlight: function (props) {
        console.log(props);
      },
    },
    {
      name: "R",
      activate: function () {
        alert("baz");
      },
      highlight: function (props) {
        console.log(props);
      },
    },
  ];

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      // PLAYER 1
      if (i === 1) {
        slots.push(
          <Case
            OnClick={handleOnClick}
            key={i + j * 100}
            row={i}
            col={j}
            color={j % 2 !== 0 ? "white" : "black"}
            player={1}
            name={pieceProp[j].name}
            activate={pieceProp[j].activate}
            highlight={pieceProp[j].highlight}
          />
        );
      }

      if (i === 2) {
        slots.push(
          <Case
            OnClick={handleOnClick}
            key={i + j * 100}
            row={i}
            col={j}
            color={j % 2 !== 0 ? "black" : "white"}
            player={1}
            name={pieceProp[0].name}
            activate={pieceProp[0].activate}
            highlight={pieceProp[0].highlight}
          />
        );
      }
      ///

      // PLAYER 2
      if (i === 7) {
        slots.push(
          <Case
            OnClick={handleOnClick}
            key={i + j * 100}
            row={i}
            col={j}
            color={j % 2 !== 0 ? "white" : "black"}
            player={2}
            name={pieceProp[0].name}
            activate={pieceProp[0].activate}
            highlight={pieceProp[0].highlight}
          />
        );
      }

      if (i === 8) {
        slots.push(
          <Case
            OnClick={handleOnClick}
            key={i + j * 100}
            row={i}
            col={j}
            color={j % 2 !== 0 ? "black" : "white"}
            player={2}
            name={pieceProp[j].name}
            activate={pieceProp[j].activate}
            highlight={pieceProp[j].highlight}
          />
        );
      }
      ///

      // BETWEEN;
      if (i % 2 !== 0 && i > 2 && i < 7) {
        slots.push(
          <Case
            OnClick={handleOnClick}
            key={i + j * 100}
            row={i}
            col={j}
            color={j % 2 !== 0 ? "white" : "black"}
            player1={true}
            name={""}
            activate={null}
            highlight={null}
          />
        );
      } else if (i % 2 === 0 && i > 2 && i < 7) {
        slots.push(
          <Case
            OnClick={handleOnClick}
            key={i * 333 + j}
            row={i}
            col={j}
            color={j % 2 !== 0 ? "black" : "white"}
            name={""}
            activate={null}
            highlight={null}
          />
        );
      }
    }
  }

  return slots;
};
