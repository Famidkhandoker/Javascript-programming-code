//--------------------------- For loop loop, run a loop for each element of an array----------------------------
for(var i=0;i<10;i++)
    {
        console.log(i);//output:(0-9)
    }
    for(var i=0;i<=10;i++)
    {
            console.log(i);//output:(0-10)
    }
    
    var nums=[55,66,77,88,99,11,44];
    for(i=0;i<nums.length;i++)
    {
        var element=nums[i];
        console.log(element);//output: 55,66,77,88,99,11,44
    }