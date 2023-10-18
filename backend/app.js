//import
const express = require('express');


//import mysql module
const mysql = require('mysql2')

//create express app
const app = express();

//import cors module
const cors = require('cors');

//define the coneting parameters to the database
const dbConfig ={
    user: 'demoapp',
    database: 'demoapp',
    password:'demoapp',
    host: 'localhost',
    conectionlimit:10,
}
//create the connection to the database
const connection = mysql.createConnection(dbConfig);
//connect to the database
connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});


// json format
app.use(express.json());
//add cors middleware to the express app
app.use(cors());

//create a simple get request handler to send a response back

app.get('/', (req, res) => {
    res.send('Hello World');
});


//post request handler to insert new employee to the database
app.post("/addemployee", (req, res) => {
  console.log(req.body);
  //write the sql query to add to the data base table named employee_test
  const sql = `INSERT INTO employee_test(first_name, last_name, email, password) VALUES('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.password}')`;

  //execute the  query
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    // res.send("Values Inserted");
  });
  //send a response back to the client
  const response = {
    status: "success",
    message: "Employee added successfully",
  };
  res.status(200).send(response);
});
//post request handler to login  an employee which comes to this route/login
    app.post('/login', (req, res) => {
        console.log(req.body);
        //write the sql query to add to the data base table named employee_test
        const sql = `SELECT * FROM employee_test WHERE email='${req.body.email}' AND password='${req.body.password}'`;

        //execute the  query
        
        connection.query(sql,function (err,result) {
            if(err) throw err;
            console.log(result)
            //chek if the result if empty or not
            if(result.length > 0){
                //send the result back to the client
                const response = {
                    status: 'success',
                    message: 'Login successful',
                }
                res.status(200).send(response);
        
    }else{
        //send the result back to the client
        const response = {
            status: 'failure',
            message: 'Login failed',
        }
        res.status(200).send(response);
    }
})
});


//set up the port listen to
const PORT = 4000;

//Set up the listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});