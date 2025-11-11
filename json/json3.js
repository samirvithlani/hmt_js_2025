var car={
    name:"BMW D4",
    seats:5,
    fuel:"petrol",
    avg:10,
    color:"black",
    gear:6,
    transmition:"auto",
    launch:2024,
    price:10000000
}


//purchase car if launch in 2024
//print name in lower case if key is avaialble
//give 10% disount on price if price is avaialble

console.log(car.launch == 2024 && "purchase...")
console.log(car.name && car.name.toLowerCase())
console.log(car.price && car.price-car.price*0.10)
console.log(car.price && car.price*0.10)
