
export function getQueryToAddNewClient (user){

    let currentDate = new Date();
    currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;

    return `INSERT INTO clients (username, fullname, password, registrationDate, email, phone)
                        VALUES ("${user.username}", "${user.fullname}", "${user.password}", "${currentDate}", "${user.email}",
                        "${user.phone}")`;
}

export function checkIfTheUserNameExists(user){

}

export const queryToGetAllOrdersFromDB = "SELECT * FROM offers";