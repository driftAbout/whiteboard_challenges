function arrObj(arr) {
  let sortArr = arr.sort((a,b) => a - b);
  let total = sortArr.reduce((acc, cur) => acc + cur);
  return {highest: sortArr[sortArr.length - 1], lowest: sortArr[0], average: total / sortArr.length }
}


function arrObj(arr) {
  return arr.sort((a,b) => a - b).reduce((acc, cur, i, ar) => {
    if (!i) acc.lowest = cur;
    acc.average += cur;
    if (i + 1 === ar.length) {
      acc.highest = cur;
      acc.average = acc.average  / ar.length
    }
    return acc;
  }, {highest: '', lowest: '', average: 0 })
}