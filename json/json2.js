var product ={
    name:"Iphone 16",
    price:87000,
    storage:512,
    color:"blue",
    company:"Apple"
}
console.log(product)
//console.log("company name =",product.companys.toUpperCase)
//1st way
if(product.companys){
    console.log(product.company.toLocaleUpperCase())
}
else{
    console.log("no data found...")
}

//if first part is true then it will execute next part
console.log("compnay name",product.companys && product.companys.toUpperCase())

console.log(product.storage>=512 && "product can purchase..")
console.log(product.color!="blue" || "dont buy");
