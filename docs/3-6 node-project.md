# node project

## API (application programming interface)

a piece if software that can be used by another piece if software, in order to allow applications to talk to each other. (not only used to send data)

## REST (representational stats transfer)

1. separate API into logical **resources**
2. expose structured, **resource-based URLs**
3. use **HTTP methods** (verbs)
4. send data as **JSON** (usually)
5. be **stateless**

|              | HTTP Methods    | CRUD   |
| ------------ | --------------- | ------ |
| /addNewTour  | POST /tours     | Create |
| /getTour     | GET /tours/7    | Read   |
| /updateTours | PUT /tours/7    | Update |
|              | PATCH /tours/7  |        |
| /deleteTours | DELETE /tours/7 | Delete |
