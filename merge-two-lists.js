var mergeTwoLists = function (list1, list2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let orderedList = [];

  while (pointer1 < list1.length || pointer2 < list2.length) {
    if(list1[pointer1] === list2[pointer2]){
      orderedList.push(list1[pointer1]);
      orderedList.push(list2[pointer2]);
      pointer1++;
      pointer2++;
    }
    else if (list1[pointer1] > list2[pointer2]) {
      orderedList.push(list2[pointer2]);
      pointer2++;
    } else {
      orderedList.push(list1[pointer1]);
      pointer1++;
    }
  }

  return orderedList
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
