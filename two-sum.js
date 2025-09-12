var twoSum = function(nums, target) {
    let objects = {}

    for(let i = 0; i < nums.length; i++)
        objects[nums[i]] = objects[nums[i]] ? [...objects[nums[i]], i] : [i]

    console.log(objects)

    for(let key of Object.keys(objects)){
        let pair = target - key

        if(objects[pair] && objects[pair].length === 1)
            return [...objects[key], ...objects[pair]]

        if(objects[pair] && objects[pair].length > 1)
            return objects[pair]
    }
};

console.log(twoSum([2,7,11,15], 9))