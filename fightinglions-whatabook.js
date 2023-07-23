/**
 * Title: fightinglions-whatabook.js
 * Authors: Trevor McLaurine and Patrick Cuauro
 * Date: 7/12/2023
 * Description: MongoDB Shell Scripts for the whatabook collection
 */

/**
 * Books Database Commands
 */

//Displays all books in the collection
db.books.find({ })

//Displays all books that belong to a certain genre
db.books.find({ "genre": "fantasy" })

//Displays all books that belong to a certain author
db.books.find({ "author": "Alexander Dumas" })

//Displays book by a specific Book ID
db.books.findOne({ "bookId": 1104 })

/**
 * Customer Database Commands
 */

// Display wishlist by customerId
db.customers.aggregate([
    { 
        $project : 
        {
            customerId: 1, 
            wishlists: 1
        }
    },
    {
        $match: {
            customerId: 1003
        }
    }    
])

// Adds a book to a customer's wish list
db.customers.updateOne(
    { "customerId": 1003 },
    { "$addToSet": {
        wishlists: {
            "bookId": 1103,
            "name": "Gone With the Wind",
            "genre": "historical fiction",
            "author": "Margaret Mitchell"
        }
    }}
)

// Removes a book from a customers wishlist
db.customers.updateOne(
    { "customerId": 1003 },
    { "$pull": {
        wishlists: { 
            "bookId": { 
                $eq: 1103 
            } 
        }
    }
})