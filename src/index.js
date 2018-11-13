let arr = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];

//console.log(arr[2][2])

function snail() {
  const goRight = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i][j + 1] === undefined) {
        console.log(arr[i][j]);
        goDown(i + 1, j, secure);
      } else {
        console.log(arr[i][j]);
        goRight(i, j + 1, --secure);
      }
    }
  };

  const goDown = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i + 1] === undefined) {
        console.log(arr[i][j]);
        goLeft(i, j, --secure);
      } else {
        console.log(arr[i][j]);
        goDown(i + 1, j, --secure);
      }
    }
  };

  const goLeft = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i][j - 1] === undefined) {
        console.log(arr[i][j]);
        goUp(i - 1, j, --secure);
      } else {
        console.log(arr[i][j]);
        goLeft(i, j - 1, --secure);
      }
    }
  };

  const goUp = (i, j, secure) => {
    if (secure > 0) {
      if (arr[i - 1] === undefined) {
        console.log(arr[i][j]);
        goRight(i, j, --secure);
      } else {
        console.log(arr[i][j]);
        goRight(i - 1, j, --secure);
      }
    }
  };

  goRight(0, 0, 15);
}

console.log(snail(arr));
