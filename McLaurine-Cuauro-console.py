# Trevor McLaurine
# 7/19/2023
# McLaurine_console.py
# Web 335 - Assignment 9.2

# Importing MongoClient from pymongo
import pymongo

# Kept receiving error that stated certificate was invalid. Imported this to solve the problem.
import certifi

print("*****************************************************")
print("************* Welcome to What-A-Book! ***************")
print("*****************************************************")

print("Connecting to MongoDB....\n")

# Connection string to connect to MongoDB. Certifi fixes certification issues
client = pymongo.MongoClient(
    # "mongodb+srv://web335_user:s3cret@web340db.93lxfky.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where()
    # Trevor's Database connection string
    "mongodb+srv://web335_user:s3cret@bellevueuniversity.5jww2it.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where()
    # Patrick's Database connection string
)

if (client):
    print("Success!\n")

# connect to web335DB
# db = client['web335DB']
# connect to Patricks DB
db = client['Whatabook']

print("Connecting to database...\n")

# initiates the collection to use
books = db['books']
customers = db['customers']

print("Database connected. Retrieving book list...\n")

bookList = db.books.find({})

for document in bookList:
    print("BookID: " + str(document.get('bookId')))
    print("Title: " + str(document.get('title')))
    print("Genre: " + str(document.get('genre')))
    print("Author: " + str(document.get('author')))
    print("\n ******************************************************* \n")
# included by Patrick
# def retrieve_array(object):
#   """Retrieves an array from an object.

#   Args:
    # object: The object that contains the array.

#   Returns:
    # The array.
#   """

#   array = object.get("array")
#   if not array:
#     raise ValueError("The object does not contain an array.")

#   return array


# if __name__ == "__main__":
#   object = {"array": [1, 2, 3]}
#   array = retrieve_array(object)
#   print(array)
#   end of included by Patrick

run_app = True
print("How can we help you today?\n To search by genre, type 'genre'. To display a customer's wishlist, type 'wishlist' .")
print("If you wish to exit, type 'exit' ")

while (run_app):
    user_input = input("What would you like to do?: ")
    if (user_input == "genre"):
        print("Please choose from fantasy, fiction, science fiction, or historical fiction")
        genre_input = input("What Genre would you like to search for?: ")
        if (genre_input == ""):
            print("Input is required.")
        else:
            print("Searching for " + genre_input + " books")
            books_found = (db.books.find({'genre': genre_input}))
            for document in books_found:
                print("\n ******************************************************* \n")
                print("BookID: " + str(document.get('bookId')))
                print("Title: " + str(document.get('title')))
                print("Genre: " + str(document.get('genre')))
                print("Author: " + str(document.get('author')))
                print("\n ******************************************************* \n")
    elif (user_input == "wishlist"):
        customer_input = input(
            "Please input the customer ID of the wishlist you wish to see: ")
        # included by Patrick
        # retrieve an object from the database using the code 1003 because it is the only one that has a wishlist more than two items
        # customer_found = (db.customers.find_one(
        #     # the customer ID is an integer, so it must be converted to an integer
        #     {'customerId': int(customer_input)}
        # ))
        # this functions only retrieves the keys in the object in this case should be the customer ID, first name, last name, and wishlist
        # for wishlist in customer_found:
        #     print(wishlist)
        # first retrieve the document with the array of books
        # in this case the document where the wishlist is located is the customer selected
        customer_wishlist = db.customers.find_one(
            {'customerId': int(customer_input)})
        # then retrieve the array of books from the document
        selected_books = customer_wishlist[selected_books]
        # then print the array of books
        for book in selected_books:
            print(book)
        print("nnnnnn")
        print("nnnnnn")
        # for document in customer_found:
        #     print("Customer ID: " + str(document.get('customerId')))
        #     print("First Name: " + str(document.get('firstName')))
        #     print("Last Name: " + str(document.get('lastName')))
        #     print("Wishlist: " + str(document.get('wishlist')))
        # end of included by Patrick
        # included by Patrick
    elif (user_input == "customers"):
        print("Here is a list of our customers: ")
        customerList = db.customers.find({})
        for document in customerList:
            print("\n ******************************************************* \n")
            print("Customer ID: " + str(document.get('customerId')))
            print("First Name: " + str(document.get('firstName')))
            print("Last Name: " + str(document.get('lastName')))
            print("\n ******************************************************* \n")
        # end of included by Patrick
    elif (user_input == "exit"):
        print("Thank you for using the What-a-book app! Good-bye!")
        run_app = False
    else:
        print("Unknown input. Please try again.")
        continue
