let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

//console.log(arr[2][2])

function snail(arr) {
  let out = [];

  const goRight = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i][j + 1] === undefined || out.includes(arr[i][j])) {
        if (out.includes(arr[i][j])) {
          goDown(i + 1, j - 1, --secure);
        } else {
          out.push(arr[i][j]);
          //console.log(out);
          goDown(i + 1, j, secure);
        }
      } else {
        out.push(arr[i][j]);
        //console.log(out);
        goRight(i, j + 1, --secure);
      }
    }
  };

  const goDown = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i + 1] === undefined || out.includes(arr[i][j])) {
        if (out.includes(arr[i][j])) {
          goLeft(i - 1, j - 1, --secure);
        } else {
          goLeft(i, j, secure);
        }
      } else {
        out.push(arr[i][j]);
        //console.log(out);
        goDown(i + 1, j, --secure);
      }
    }
  };

  const goLeft = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i][j - 1] === undefined || out.includes(arr[i][j])) {
        if (out.includes(arr[i][j])) {
          goUp(i - 1, j + 1, secure);
        } else {
          out.push(arr[i][j]);
          //console.log(out);
          goUp(i - 1, j, --secure);
        }
      } else {
        out.push(arr[i][j]);
        //console.log(out);
        goLeft(i, j - 1, --secure);
      }
    }
  };

  const goUp = (i, j, secure) => {
    if (secure > 0) {
      //console.log(arr[i][j], out.includes(arr[i][j]))
      if (arr[i - 1] === undefined || out.includes(arr[i][j])) {
        if (out.includes(arr[i][j])) {
          goRight(i + 1, j + 1, secure);
        } else {
          out.push(arr[i][j]);
          goRight(i, j, --secure);
        }
      } else {
        out.push(arr[i][j]);
        //console.log(out);
        goUp(i - 1, j, --secure);
      }
    }
  };
  if (arr.length > 1) {
    goRight(0, 0, arr.length * arr[0].length + 1);
    return out;
  } else {
    return arr[0];
  }
}

console.log(snail(arr));
