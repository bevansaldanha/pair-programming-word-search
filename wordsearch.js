const wordSearch = (letters, word) => {
  let colString = "";
  if (letters.length === 0 || word === "") {
    return false;
  }
  const numRows = letters.length;
  const numCols = letters[0].length;

  for (let row = 0; row < numRows; row++) {
    const rowString = letters[row].join("");
    if (rowString.includes(word)) {
      return true;
    }
  }


  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      colString += letters[row][col];
    }
  

  if (colString.includes(word)) {
    return true;
  }

  colString = "";

  }

  return false;

};


module.exports = wordSearch;