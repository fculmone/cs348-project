# cs348-project

This project is created using Node.js/Express, React and MySql. Follow the steps below to set up the database and the web app.

## Install MySQL on your Computer
Navigate to the [MySql Community Community Downloads Page](https://dev.mysql.com/downloads) and download the appropriate files. The MySQL Server is required and the MySQL workbench is optional.

Here are good youtube links for both Mac and Windows.

* https://www.youtube.com/watch?v=ODA3rWfmzg8 (Mac)
* https://www.youtube.com/watch?v=u96rVINbAUI (Windows)

Once the server is set up, you may continue.

## Clone the Repository
Cd into your desired directory and type the following into the terminal.
```
git clone https://github.com/fculmone/cs348-project.git
```

## Set up the MySQL Server
Make sure your local MySQL server is up and running. You can connect to the mysql server from the terminal with the following, replacing root with your username if your not on the root user.
```
mysql -u root -p
```
From there, you can copy every command from the schema.sql file from the repository and paste it in the terminal to create a database named test_db and a table called test which will be pre-populated with data.

## Set up Node.js
Cd into the nodejs folder. You will need to have Node.js and npm installed. Check to see if you already have them installed with the following commands.
```
node -v
npm -v
```
If a version number does not come up, you can install node at the offical website https://nodejs.org/en/download/ 

Once Node.js is installed, run ```npm install``` in the nodejs folder. 

You will need to create a .env file in the nodejs folder to store your username and password for the MySQL server on your computer. The contents of the file should look like the following.

```
MYSQL_HOST='127.0.0.1'
MYSQL_USER='root'
MYSQL_PASSWORD='your password'
MYSQL_DB='test_db'
```

Node.js is now set up! You can type `npm run dev` in the terminal to launch it.


## Set up the React app
Cd into the hello-world folder and run `npm install`. 

After the install is complete, run the app with `npm start`. A page should open in your browser where you can interact with the application.
