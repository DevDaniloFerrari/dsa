var firstUniqChar = function(s) {
    let hashmap = {}

    for(let i = 0; i < s.length; i++){
        if(!hashmap[s[i]])
            hashmap[s[i]] = [1,i]
        else
            hashmap[s[i]] = [hashmap[s[i]][0]+1,i]
    }

    for(let key of Object.keys(hashmap))
        if(hashmap[key][0] === 1)
            return hashmap[key][1]
    
    return -1
};

console.log(firstUniqChar('loveleetcode'))