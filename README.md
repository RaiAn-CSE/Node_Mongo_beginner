<ol>
    <li>At first create a folder without space</li>
    <li>Go to folder and select path then type "cmd"-> enter and type code .</li>
    <li>npm init --y : create “package.json” file</li>
    <li>Then create main file -> “index.js” file</li>
    <li>npm install mongodb</li>
    <li>Create MongoDB Atlas Account</li>
    <li>Create Cluster and you can connect with MongoDB Compass Database UserID and Password and setup mongoDB ->>Database,Database Access,Network Access set global port 0.0.0.0/0 </li>
    <li>Nodejs connect with mongodb —>>> "https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/"</li> </br></br>
    <li>For Hide Node_Modules create .gitignore and wright node_modules thats it</li></br></br>
    <li>MongoDB User_ID or Password hide to create .env and write USER_NAME=something,PASSWORD=asjkdnje73 and install it just type : npm install dotenv and require: require('dotenv').config(); to your index.js file</br> 
    Then edit ---->>> const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.bxqfvab.mongodb.net/?retryWrites=true&w=majority`;
    </li>

</ol>