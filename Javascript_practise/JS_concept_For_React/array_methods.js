
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const brands = products.map(product => product.brand);
 //console.log(brands); //[ 'lenovo', 'iphone', 'casio', 'ray', 'canon' ]
const prices = products.map(product => product.price);

 //console.log(prices); //[ 3200, 7000, 3000, 300, 9000 ]

// products.forEach(product => console.log(product))
                                                    /*{ name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' }
                                                     { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' }
                                                     { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' } 
                                                     { name: 'sungalss', price: 300, brand: 'ray', color: 'black' }  
                                                     { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }   */
//products.forEach(product => console.log(product.color)) 
                                                          /*silver
                                                          golden
                                                          yellow
                                                          black
                                                          gray */

// products.forEach(product => {
   
// })


// // 3. filter
// const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);
                                                                    /*[
                                                                     { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
                                                                    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
                                                                    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' }
                                                                    ] */
// const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);
                                                                        /*
                                                                        [
                                                                        { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
                                                                        { name: 'sungalss', price: 300, brand: 'ray', color: 'black' }
                                                                            ]
                                                                            */

//4. find
const special = products.find(p => p.name.includes('n'));
console.log(special);//{ name: 'phone', price: 7000, brand: 'iphone', color: 'golden' }


