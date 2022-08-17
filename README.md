# express-router-validator
## Week7Day4 Activate Work


&#9744;  ```npm install``` will install package dependencies.  (You can view them in your package.json file)

### Part 1 - It's pronounced Routers

&#9744;   Create new directory for your Express Routes. 

&#9744;   Create an Express Router for accessing your ```users``` data with two end-points.  One for accessing the entire collection and one for retrieving a single item.

&#9744;  Create a POST request to your that adds an entry to your users array.

&#9744;   Create an Express Router for accessing your ```fruits``` data with two end-points.  One for accessing the entire collection and one for retrieving a single item.

&#9744;  Create a POST request to your that adds an entry to your fruit array.


&#9744; Import and use your routers in your app.js file.

&#9744; Test your end-points with Postman


### Part 2 - The Validator!  Are you not enter~~tain~~ed correctly?

&#9744; Import the Express Validator package in your user file.

&#9744; Import both the ```check``` and ```validationResult``` functions from the Express Validator package.

&#9744; In your user router's POST request end-point, add an array argument in between the path and the callback function.  Check that the user's name property is not empty and then trim for whitespace.

&#9744; Assign the results of ```validationResults(req)``` (a method with the request object for an argument) to a variable called errors.  If there are any errors, return them to the user in your response.
