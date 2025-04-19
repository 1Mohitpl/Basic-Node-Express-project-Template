This is an Basic Example Nodejs project Templete, which anyone can use it.
It has been build on top off the most important coding principles and project management 
recommendations. Feel free to change anything.


- `src` -> Inside this folder all the code of this project will reside, this will not 
Include any kind of tests.

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
   