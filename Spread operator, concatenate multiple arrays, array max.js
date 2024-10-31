const ages=[12,14,16,13,17];
const ages2=[15,16,17];
const ages3=[15,36,22,29];
const allAges=ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);//[
                         12, 14, 16, 13, 17, 15,
                        16, 17,  5, 15, 36, 22,
                        29
                        ]




const ages=[12,14,16,13,17];
const ages2=[15,16,17];
const ages3=[15,36,22,29];
const allAges=ages.concat(ages2);
console.log(allAges);//[
                         12, 14, 16, 13,
                        17, 15, 16, 17
                        ]



                        
const ages=[12,14,16,13,17];
const ages2=[15,16,17];
const ages3=[15,36,22,29];
const allAges=ages.concat(ages2).concat([5]).concat(ages3);
const allAges2=[ages,ages2,5,ages3];
console.log(allAges2);//  [ [ 12, 14, 16, 13, 17 ], [ 15, 16, 17 ], 5, [ 15, 36, 22, 29 ] ]




const ages=[12,14,16,13,17];
const ages2=[15,16,17];
const ages3=[15,36,22,29];
const allAges=ages.concat(ages2).concat([5]).concat(ages3);
const allAges2=[...ages, ...ages2, 5, ...ages3];
console.log(allAges2);//[
                         12, 14, 16, 13, 17, 15,
                         16, 17,  5, 15, 36, 22,
                        29
                        ]


const num1=650;
const num2=450;
const num3=250;
const num4=[650,450,250];
const maximum=Math.max(num1,num2,num3)
console.log(maximum);//650
const maximum=Math.max(num4)//NaN//array er value use kora jabe na
const maximum2=Math.max(...num4);
console.log(maximum2);//650