# back-end-products
### Instruction
#### Clone the repo - 
```git clone https://github.com/jmejiamu/back-end-products.git```


```cd to /back-end-products/server and do npm i to install all the dependencies ```

#### Adding testing data

```cd to /back-end-products/server/DB and login to postgreSQL - psql -U username```
#
```Once log in create a database - CREATE DATABASE products_items; and enter into the database \c products_items```
#
```Then run the scripts \i create_tables.sql, then \i insert_data.sql if you like to drop the table run \i drop_table.sql```

#
```Create a .env in the root dir where the server.js lives. 
   in the .env file include:
   HOSTNAME = localhost
   USERNAMEPG = yourusername
   PASSWORD = yourpassword 
   DATABASE = products_items

    URL = localhost
```

