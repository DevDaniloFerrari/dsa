function stringifyNumbers(obj) {
  let objCopy = JSON.parse(JSON.stringify(obj));

  let stringify = (copy) => {
    for (let key of Object.keys(copy)) {
      if (typeof copy[key] === "number") copy[key] = copy[key].toString();
      if (typeof copy[key] === "object") copy[key] = stringifyNumbers(copy[key]);
    }
  };

  stringify(objCopy);

  return objCopy;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
