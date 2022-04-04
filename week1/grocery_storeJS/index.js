
/*
    This is a introduction to javascript. 
    Creating an Shopper Object 
    When You Done Writing Your Code Open a Control Panel " CTRL + ` " in the 'grocery_storeJS' path and paste "node index.js"
*/

// shopper information
var shopper = {
    firstName: 'Ismael', 
    lastName: 'Suarez',
    groceryCart: ['milk', 'eggs', "butter", "cheese"],
    orderReady: false,
    customerReceipt: function() {
        return this.firstName + ' ' + this.lastName + ' ' + this.groceryCart; // this.
    }
};

// This will log the customers receipt inside of the shopper object using dot notation
console.log(shopper.customerReceipt()); // Shopper receipt