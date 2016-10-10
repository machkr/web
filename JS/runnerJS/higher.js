//if (true)
//{
////    var x = "Hello";
//    let x = "Hello";
//}

let nums = [9, 2, -5, 13, 7];
console.log(nums);
//console.log(nums[1]);

//for (let i = 0; i < nums.length; i++)
//{
//    console.log("nums[" + i + "] = " + nums[i]);
//}

//for (let n of nums)
//{
//    console.log(n);
//}

//nums.forEach(console.log);

//nums.forEach(function(value, index)
//{
//    console.log("nums [" + index + "] = " + value);
//});

nums.forEach((value, index) =>
{
    console.log("nums [" + index + "] = " + value);
});

function foo(a, b)
{
    console.log("a:", a);
    console.log("b:", b);
}