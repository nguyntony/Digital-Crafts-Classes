// # 3. Products

// Use the `products.json` file for this exercise.

// Write a function that accepts the array as an argument and returns a new array of products that are on sale.

// const productsDB = require("../json/products.json")

const saleProducts = (arr) => {
    return arr.filter((product) => {
        return product.price !== product.originalPrice
    })
}

// const itemsOnSale = saleProducts(productsDB)
// console.log(itemsOnSale)

module.exports = saleProducts;