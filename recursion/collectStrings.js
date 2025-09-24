function collectStrings(object) {
  let arrayStrings = [];

  for (let key of Object.keys(object)) {
    if (typeof object[key] === "string") arrayStrings.push(object[key]);
    if (typeof object[key] === "object")
      arrayStrings = arrayStrings.concat(collectStrings(object[key]));
  }

  return arrayStrings;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
