function findIndex(array, num, start = 0, end = array.length - 1){
    if(start <= end){
        let mid = Math.floor((start + end) / 2)
        
        if(array[mid] === num)
            return mid

        if(array[mid] > num)
            return findIndex(array, num, start, mid - 1)
        else
            return findIndex(array, num, mid + 1, end)
    }
    return -1
}


console.log(findIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 19))