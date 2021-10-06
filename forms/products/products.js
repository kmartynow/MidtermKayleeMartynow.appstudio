/*
 You want a program that keeps track of the products your store sells, 
 and can get a new product from the user to add to the list or can delete the last item on the list. 
 The program also shows the user the array contents after a new product is added. 
 */

let storeProducts = ["milk", "cheese", "cream", "eggs"]
let otherProduct = prompt("Enter YES if you want to add an item to the list, Enter NO if you want to remove the last item off the list")
if (otherProduct == 'YES') {
  newProduct = prompt("Enter your new item:")
  storeProducts.push(newProduct.toLowerCase())
  console.log(storeProducts)
} else {
  storeProducts.pop()

  console.log(storeProducts)
}

