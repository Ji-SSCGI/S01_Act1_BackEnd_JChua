var catalog = {
    name: ['Plate', 'Glass', 'Bowl', 'Spoon', 'Fork'],
    price: [50, 40, 60, 10, 10],
    stockQuantity: [100, 100, 100, 100, 100],
    category: ['Utensils','Utensils','Utensils','Utensils','Utensils']
}

console.log("Products");
for(i=0; i<catalog.name.length; i++){
    console.log([i+1] + ".   " + catalog.name[i] + "\t\t\t" + catalog.price[i] + " Pesos" + "\t\t\t" + catalog.stockQuantity[i] + "pcs." +"\t\t" + catalog.category[i]);
}
console.log(" ");
console.log("Manage Product");
console.log("1. Add New Product");
console.log("2. Update Product");
console.log("3. Delete Product");

var input = prompt ("Select: ");

if(input == 1) {
    var newName = prompt("Product Name: ");
    var newPrice = prompt("Price: ");
    var newStockQuantity = prompt("Quantity: ");
    var newCategory = prompt("Category: ");
    
    catalog.name.push(newName);
    catalog.price.push(newPrice);
    catalog.stockQuantity.push(newStockQuantity);
    catalog.category.push(newCategory);
}

else if (input == 2) {
    var productNum = prompt("Product Number: ");
    var newName = prompt("Product Name: ");
    var newPrice = prompt("Price: ");
    var newStockQuantity = prompt("Quantity: ")
    var newCategory = prompt("Category: ");

    var deleteProduct = Number(productNum)-1;
    catalog.name.splice(deleteProduct, 1, newName);
    catalog.price.splice(deleteProduct, 1, newPrice);
    catalog.stockQuantity.splice(deleteProduct, 1, newStockQuantity);
    catalog.category.splice(deleteProduct, 1, newCategory);
}

else if (input == 3) {
    var productNum = prompt("Product Number: ");
    var deleteProduct = Number(productNum)-1;
    catalog.name.splice(deleteProduct, 1);
    catalog.price.splice(deleteProduct, 1);
    catalog.stockQuantity.splice(deleteProduct, 1);
    catalog.category.splice(deleteProduct, 1);
}

console.log(" ");
console.log("Products");
for(i=0; i<catalog.name.length; i++){
    console.log([i+1] + ".   " + catalog.name[i] + "\t\t\t" + catalog.price[i] + " Pesos" + "\t\t\t" + catalog.stockQuantity[i] + "pcs." +"\t\t" + catalog.category[i]);
}