// Client section
export function getQueryToAddNewClient (user){

    let currentDate = new Date();
    currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;

    return `INSERT INTO users (username, fullname, password, registrationDate, email, phone, role)
                        VALUES ("${user.username}", "${user.fullname}", "${user.password}", "${currentDate}", "${user.email}",
                        "${user.phone}", "Client")`;
}

export function checkIfTheUserNameExists(user){

}

export function queryToSignIn (user){
    return `SELECT role FROM users WHERE username = "${user.username}" AND password = "${user.password}"`
}

// Product section

export function checkIfTheProductExists(product){

}

export function getQueryToAddNewProduct (product, productImageURL){

    return `INSERT INTO ${product.type} (name, price, ${Object.keys(product)[3]}, pictureURL, product_number, brands, description)
                        VALUES ("${product.name}", "${product.price}", "${product[Object.keys(product)[3]]}", "${productImageURL}", "${product.number}", "${product.brands}", "${product.description}")`
}

// Orders section
export const queryToGetAllOrdersFromDB = "SELECT * FROM orders";
export function queryToGetProductFromDB (product) {
    console.log(product)
    return `SELECT * FROM ${product}`;
}

