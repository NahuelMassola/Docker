const {faker} = require('@faker-js/faker')



const generateProducts = ()=>{
    const arrayProduct = []
    const i = faker.string.numeric(100)
    for (let index = 0; index < i.length; index++) {
        arrayProduct.push({
            id:faker.database.mongodbObjectId(),
            neme:faker.commerce.productName(),
            description:faker.commerce.productDescription(),
            price:faker.commerce.price({min:3}),
        })
        
    }
    return {arrayProduct}
}

module.exports = generateProducts