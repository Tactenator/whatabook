/**
 * Title: whatabook.js
 * Authors: Trevor McLaurine and Patrick Cuauro
 * Date: 7/22/2023
 * Description: Initializes the what-a-book collections
 */

//Dropping the collections
db.books.drop()
db.customers.drop()

// Creating the books collection.
db.createCollection('books', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['bookId', 'title', 'genre', 'author'],
        properties: {
          bookId: {
            bsonType: 'string',
          },
          title: {
            bsonType: 'string',
          },
          genre: {
            bsonType: 'string',
          },
          author: {
            bsonType: 'string',
          },
        },
      },
    },
  });
  
  // Creating the customers collection.
  db.createCollection('customers', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['customerId', 'firstName', 'lastName', 'wishlists'],
        properties: {
          customerId: {
            bsonType: 'string',
          },
          firstName: {
            bsonType: 'string',
          },
          lastName: {
            bsonType: 'string',
          },
          wishlists: {
            bsonType: 'array'
          }
        },
      },
    },
  });

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
