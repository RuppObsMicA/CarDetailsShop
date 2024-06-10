import mysql from "mysql";
export function setConnection (){

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "car_details",
        password: "root"
    });

    connection.connect(err => {
        if (err) {
            console.log(err);
            return err
        } else {
            console.log("Database works");
        }
    });

    return connection
}

export function closeConnection(connection){
    connection.end((error) => {
        if (error) {
            console.error('Error closing MySQL connection:', error);
            return;
        }
        console.log('MySQL connection closed.');
    });
}
