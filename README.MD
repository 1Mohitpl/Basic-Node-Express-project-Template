### Nodejs template project 
This is an Basic Example Nodejs project Templete, which anyone can use it.
It has been build on top off the most important coding principles and project management 
recommendations. Feel free to change anything.


- `src` -> Inside this folder all the code of this project will reside, this will not 
Include any kind of tests.

- To configure all the environments execute the following command:
  ```
   npm install
   ```
- To Run the serevr execute the following command :
  ```
   npm run start
   ```

Lets take a look inside the `src` folder


- `config`-> In this folder we are warpping up all our project configurations or setup 
 of a library or module will be done. For example: setting up `dotenv` so that we can 
 able to use the environment variables at anyother folder whenever is needed and it 
 is a efficient way to write cleaner code. this is done in the `server-config.js` folder.

- `routes`-> In this folder we are register a route and the corresponding middleware and controllers to it.

- `middlewares`-> It is just handle the incoming request where we can write our validation, authentication etc.

- `controllers`-> It is mainly handle the business logic and in controller we just receive request from client. after that execute the business logic and sending to the businesss layer over the router and router send the output.

- `repositories` -> This folder contains all the logic in which we can interact with database for data, all the raw queries are go there.

- `services` -> This folder contain all the business logic of the project and interacts with repositories for data from the database

- `utils`-> this folder contains all the helper function and we can use anywhere in the project.


### Setup the project

- Download this Template from github in your local machine and open it to your text editor.
- In the root directory create an `.env` folder and add the following env variables.
   ```
      PORT = < take port of your choice>
   ```
   ex :
   ``` 
      PORT = 3000
   ```
- Go Innside the `src` folder and execute the  following Command:

   ```
   npm install sequelize-cli
   ```

- if you are setting up your development environment, then write the username of your database, mentiond password of your database 
 and also mentioned which database you are going to use ex : mysql etc.
     
- if you are setting up test or production environment, make suer you also replace the host with DB url.

- `Miggrations` folder can maintain your virsion controll of database
- `seeders` inside this folder, it is generally testing purpose.