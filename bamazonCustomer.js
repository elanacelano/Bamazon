var mysql  = require("mysql");

var connection = mysql.createConnection({
	hosts: "localhost",
	port: 3306,
	// your username
	user: "root",
	// your password
	password: "",
	database: "bamazonDB",
}),
 // they are going to buy ten items; 
	 // Coffee, 
	 // Chocolate, 
	 // Eggs, 
	 // Cheese, 
	 // Orange Juice, 
	 // Dish Soap, 
	 // Ice Cream, 
	 // Mint, 
	 // Limes, 
	 // Pens 
connection.connect(function(err){
	if(err) {
		// console.log(err.message),
		throw err;
	}
	console.log("Connected as ID" + connection.threadID);

	connection.query("SELECT * FROM products", function(queryErr, res){
		if(queryErr){
			throw queryErr;
		}
	})
}),