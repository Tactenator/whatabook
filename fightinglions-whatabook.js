/**
 * Title: fightinglions-whatabook.js
 * Authors: Trevor McLaurine and Patrick Cuauro
 * Date: 7/12/2023
 * Description: MongoDB Shell Scripts for the whatabook collection
 */

// Cleaning up the book collection 

db.books.deleteOne({ "bookId": 1100 })
db.books.deleteOne({ "bookId": 1101 })
db.books.deleteOne({ "bookId": 1102 })
db.books.deleteOne({ "bookId": 1103 })
db.books.deleteOne({ "bookId": 1104 })
db.books.deleteOne({ "bookId": 1105 })

// Cleaning up the customer collection 

db.customers.deleteOne({ "customerId": 1000 })
db.customers.deleteOne({ "customerId": 1001 })
db.customers.deleteOne({ "customerId": 1002 })
db.customers.deleteOne({ "customerId": 1003 })
db.customers.deleteOne({ "customerId": 1004 })
db.customers.deleteOne({ "customerId": 1005 })

/**
 * Creating Six Customer Documents
 */
customer_one = {
    "customerId":1000,
    "firstName":"Patrick",
    "lastName":"Cuauro",
    "username":"patrickcuauro",
    "wishlists":[
        {
            "bookId":1100,
            "title":"The Lord Of The Rings: The Fellowship of the Ring"
        }
    ]
}

customer_two = {
    "customerId":1001,
    "firstName":"Trevor",
    "lastName":"McLaurine",
    "username":"tmclaurine",
    "wishlists":[
        {
            "bookId":1100,
            "title":"The Lord Of The Rings: The Fellowship of the Ring",
            "genre":"fantasy",
            "author":"J.R.R. Tolkien"
        },
        {
            "bookId":1104,
            "title":"Ender's Game",
            "genre":"science fiction",
            "author":"Orson Scott Card"
        },
        {
            "bookId": 1103,
            "title": "Gone with the Wind",
            "genre": "historical fiction",
            "author": "Margaret Mitchell"
        }
    ]
}

customer_three = {
    "customerId":1002,
    "firstName":"Patrick",
    "lastName":"Cuauro",
    "username":"patrickcuauro",
    "wishlists":[
        {
            "bookId": 1101,
            "title": "The Lord of the Rings: The Two Towers",
            "genre": "fantasy",
            "author": "J.R.R. Tolkien"
        },
        {
            "bookId": 1102,
            "title": "The Lord of the Rings: Return of the King",
            "genre": "fantasy",
            "author": "J.R.R. Tolkien"
        }
    ]
}

customer_four = {
    "customerId":1003,
    "firstName":"Patrick",
    "lastName":"Cuauro",
    "username":"patrickcuauro",
    "wishlists":[
        {
            "bookId": 1105,
            "title": "The Count of Monte Cristo",
            "genre": "fiction",
            "author": "Alexander Dumas"
        }
    ]
}

customer_five = {
    "customerId":1004,
    "firstName":"Patrick",
    "lastName":"Cuauro",
    "username":"patrickcuauro",
    "wishlists":[
        {
            "bookId": 1105,
            "title": "The Count of Monte Cristo",
            "genre": "fiction",
            "author": "Alexander Dumas"
        },
        {
            "bookId": 1103,
            "title": "Gone with the Wind",
            "genre": "historical fiction",
            "author": "Margaret Mitchell"
        }
    ]
}

customer_six = {
    "customerId":1005,
    "firstName":"Patrick",
    "lastName":"Cuauro",
    "username":"patrickcuauro",
    "wishlists":[
        {
            "bookId": 1100,
            "title": "The Lord of the Rings: Fellowship of the Ring",
            "genre": "fantasy",
            "author": "J.R.R. Tolkien"
        },
        {
            "bookId": 1101,
            "title": "The Lord of the Rings: The Two Towers",
            "genre": "fantasy",
            "author": "J.R.R. Tolkien"
        },
        {
            "bookId": 1102,
            "title": "The Lord of the Rings: Return of the King",
            "genre": "fantasy",
            "author": "J.R.R. Tolkien"
        }
    ]
}
/**
 * Create Six Books Documents
 */

lotr_one = {
    "bookId": 1100,
    "title": "The Lord of the Rings: Fellowship of the Ring",
    "genre": "fantasy",
    "author": "J.R.R. Tolkien"
}

lotr_two = {
    "bookId": 1101,
    "title": "The Lord of the Rings: The Two Towers",
    "genre": "fantasy",
    "author": "J.R.R. Tolkien"
}

lotr_three = {
    "bookId": 1102,
    "title": "The Lord of the Rings: Return of the King",
    "genre": "fantasy",
    "author": "J.R.R. Tolkien"
}

gwtw = {
    "bookId": 1103,
    "title": "Gone with the Wind",
    "genre": "historical fiction",
    "author": "Margaret Mitchell"
}

ender = {
    "bookId": 1104,
    "title": "Ender's Game",
    "genre": "science fiction",
    "author": "Orson Scott Card"
}

monte = {
    "bookId": 1105,
    "title": "The Count of Monte Cristo",
    "genre": "fiction",
    "author": "Alexander Dumas"
}

/**
 * Inserts the documents into the books database
 */

db.books.insertOne(lotr_one)
db.books.insertOne(lotr_two)
db.books.insertOne(lotr_three)
db.books.insertOne(gwtw)
db.books.insertOne(ender)
db.books.insertOne(monte)

/**
 * Inserts the documents into the customers database
 */
db.customers.insertOne(customer_one)
db.customers.insertOne(customer_two)
db.customers.insertOne(customer_three)
db.customers.insertOne(customer_four)
db.customers.insertOne(customer_five)
db.customers.insertOne(customer_six)

//Displays all books in the collection
db.books.find({ })

//Displays all books that belong to a certain genre
db.books.find({ "genre": "fantasy" })

//Displays all books that belong to a certain author
db.books.find({ "author": "Alexander Dumas" })

//Displays book by a specific Book ID
db.books.findOne({ "bookId": 1104 })