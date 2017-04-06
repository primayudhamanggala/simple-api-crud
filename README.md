# simple-api-crud
App that able to create, read, update & delete food or restaurant.


## Routes
Route | HTTP | Description
---------- | ---------- | ----------
/api/foods | GET | Get all the foods
/api/foods/:id | GET | Get a single food
/api/foods | POST | Create a user
/api/foods/:id | DELETE | Delete a food
/api/foods/:id | PUT | Update a food with new info

/api/restaurants | GET | Get all the restaurants
/api/restaurants/:id | GET | Get a single restaurant
/api/restaurants | POST | Create a restaurant
/api/restaurants/:id | DELETE | Delete a restaurant
/api/restaurants/:id | PUT | Update a restaurant with new info

## Usage
```
npm install
npm start
```
How to use : http://localhost:3000<use route available in the Routes table>
example :
To show all the foods data
http://localhost:3000/api/foods
