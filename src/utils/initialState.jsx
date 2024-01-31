export const initiate = () => {
  let slots = [];
  let pieceProp = ["P", "R", "Kn", "B", "Q", "K", "B", "Kn", "R"];

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      function determinePlayer(i) {
        if (i === 1 || i === 2) return 1;
        if (i === 7 || i === 8) return 2;
        return null;
      }

      function determineName(j, pieceProp) {
        if (i === 1 || i === 8) return pieceProp[j];
        if (i === 2 || i === 7) return pieceProp[0];
        return "";
      }

      function determineColor(i, j) {
        if (i % 2 !== 0) {
          if (j % 2 !== 0) {
            return "white";
          } else {
            return "black";
          }
        } else {
          if (j % 2 !== 0) {
            return "black";
          } else {
            return "white";
          }
        }
      }
      // Example structure for a slot
      let slot = {
        row: i,
        col: j,
        color: determineColor(i, j),
        player: determinePlayer(i),
        name: determineName(j, pieceProp),
        highlighted: false,
        highlightedBy: {},
      };

      slots.push(slot);
    }
  }

  return slots;
};
