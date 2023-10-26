## RESTaurant API - README

## Database Structure

The API interacts with a MySQL database with the following table structure:

### Categories

- `categories`
  - `id_categories` (Primary Key)
  - `category_name`

### Items

- `items`
  - `id_item` (Primary Key)
  - `category_name`
  - `name`
  - `desc`
  - `price`

### Formulas

- `formulas`
  - `id_item` (Primary Key)
  - `name`
  - `category_name`
  - `price`


## INSTALLATION
Step-by-step instructions on how to install and configure the API :

1. Clone the repository:

   ```bash
   git clone https://github.com/aneyame/RESTaurant_API.git
2. Change to the project directory:

   ```bash
   cd RESTaurant_API
3. Install the required dependencies:

   ```bash
   npm install
4. Start the API:

   ```bash
   npm start
The API should now be running on port 3300. You can access it by navigating to http://localhost:3300 in your web browser or using an API client like Postman.

.
# ENDPOINTS 
## Items

| Postman Method | Operation | Route        | Description                 |
| -------------- | ---------  | ------------ | ------------------------   |
| GET            | READ      | /items       | Retrieve all items.         |
| POST           | CREATE    | /items       | Add a new item.             |
| GET            | READ      | /items/{id}  | Retrieve an item by its ID. |
| PUT            | UPDATE    | /items/{id}  | Update an item by its ID.   |
| DELETE         | DELETE    | /items/{id}  | Delete an item by its ID.   | 

## Categories

| Postman Method | Operation | Route         | Description           |
| -------------- | ---------  | ------------  | ----------------     |
| GET  | READ      | /categories   | Retrieve all categories.         |
| POST | CREATE    | /categories   | Add a new category.              |
| GET  | READ      | /categories/{id} | Retrieve a category by its ID.|
| PUT | UPDATE    | /categories/{id} | Update a category by its ID.  |
| DELETE | DELETE    | /categories/{id} | Delete a category by its ID.  |

## Formulas

| Postman Method | Operation | Route         | Description           |
| -------------- | ---------  | ------------ | -------------------   |
| GET    | READ      | /formulas     | Retrieve all formulas.        |
| POST   | CREATE    | /formulas     | Add a new formula             |
| GET    | READ      | /formulas/{id} | Retrieve a formula by its ID.|
| PUT    | UPDATE    | /formulas/{id} | Update a formula by its ID.  |
| DELETE |  DELETE    | /formulas/{id} | Delete a formula by its ID. |


