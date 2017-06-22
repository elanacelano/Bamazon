var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
})

function changeProduct(){
// 	products = 	[Coffee, Chocolate, Eggs, Cheese, Orange Juice, Dish Soap, 
// Ice Cream, Mint, Limes, Pens]
// products.push(); 
}