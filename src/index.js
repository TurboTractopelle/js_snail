let arr = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];

//console.log(arr[2][2])

function snail() {
  let out = [];

  const goRight = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i][j + 1] === undefined) {
        out.push(arr[i][j]);
        console.log(out);
        goDown(i + 1, j, secure);
      } else {
        out.push(arr[i][j]);
        console.log(out);
        goRight(i, j + 1, --secure);
      }
    }
  };

  const goDown = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i + 1] === undefined) {
        goLeft(i, j, --secure);
      } else {
        out.push(arr[i][j]);
        console.log(out);
        goDown(i + 1, j, --secure);
      }
    }
  };

  const goLeft = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i][j - 1] === undefined) {
        out.push(arr[i][j]);
        console.log(out);
        goUp(i - 1, j, --secure);
      } else {
        out.push(arr[i][j]);
        console.log(out);
        goLeft(i, j - 1, --secure);
      }
    }
  };

  const goUp = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i - 1] === undefined) {
        if (out.includes(arr[i][j])) {
          goRight(i + 1, j + 1, --secure);
        } else {
          out.push(arr[i][j]);
          console.log(out);
          goRight(i, j, --secure);
        }
      } else {
        out.push(arr[i][j]);
        console.log(out);
        goUp(i - 1, j, --secure);
      }
    }
  };

  goRight(0, 0, 10);
}

console.log(snail(arr));
