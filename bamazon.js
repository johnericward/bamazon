var inquirer = require("inquirer");
var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "bamazon"
});


var updateStock = (id,newStockQuantity) => {
    connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?",
    [newStockQuantity,id],
    err=>{
        if (err) throw err;
        connection.end()
    }
    
    )}



var promptBuyer = () => {
//what ID# ?
    inquirer.prompt([{
        type: "input",
        name: "id",
        message: "What ID# would you like?",
        validate: input => isNaN(input) === true ? false : true
    },
        //what quantity ?
    {
        type: "input",
        name: "amount",
        message: "What quantity?",
        validate: input => isNaN(input) === true ? false : true
    }]).then(({id,amount})=>{ 
        console.log(id,amount)
        connection.query("SELECT * FROM products WHERE item_id=?",[id],(err,res)=>{
            if (err) throw err;
            // we don't have enough
            if(res[0].stock_quantity < amount){
                console.log(`We don't have enough of that item.`)
                getAll()
            } else {
                //or order successful with recap of order
                console.log("Order successful!")
                console.log(`Your total is ${res[0].price*amount} \nRestart program to begin again.`)
                var newStockQuantity = res[0].stock_quantity - amount 
                updateStock(id,newStockQuantity)
            }
        })
    })
};


var getAll = () => {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        res.map(({ item_id, product_name, price }) => {
            console.log(`--------------------------------------------`)
            console.log(`ID #:  ${item_id} ,Product Name: ${product_name}, Price: ${price}`)
        })
        promptBuyer()
    })

}




connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId} `)
    getAll()
});




