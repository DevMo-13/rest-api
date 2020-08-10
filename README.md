# REST API
 Treehouse FSJS Techdegree Project 9 - REST API

School database that holds information about courses.

---

Key achievements:
- Programmed an API that provides a way for users to administer a school database containing information about courses
- Enabled users to interact with the database by retrieving a list of courses, as well as adding, updating, and deleting courses in the database
- Used REST API design, Node.js, and Express to create API routes
- Configured the Sequelize ORM for data modeling, validation, and persistence
- Utilized bcryptjs to hash user passwords
- Set up permissions that require users to create an account and be signed in to make changes to database

---

To get up and running with this project, download the project files, and run the following commands from the root of the folder that contains this README file.

First, install the project's dependencies using `npm`.

```
npm install
```

Second, seed the SQLite database.

``` 
npm run seed
```

And lastly, start the application.

```
npm start
```

To test the Express server, browse to the URL [http://localhost:5000/](http://localhost:5000/).

Feel free to use the `RESTAPI.postman_collection.json` file (a collection of Postman requests) to test and explore the REST API.