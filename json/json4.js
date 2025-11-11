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
console.log(car)
car.gear = 8
console.log(car)
car.window = "auto"
console.log(car)
car.discount = car.price- car.price * 0.10
console.log(car);

//enhanced part..
// ... spread operaotr..
console.log("spread...",{...car,gear:7,color:"dark black",price:12000000,camera:"360"})//print
car = {...car,gear:7,color:"dark black",price:12000000,camera:"360"} //update...
console.log(car)