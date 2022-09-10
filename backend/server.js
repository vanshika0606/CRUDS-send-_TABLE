const app = require('./app');
const connectDatabase = require("./db.js");

connectDatabase();


app.listen(4000,()=>{
    console.log(`Server is running on  http://localhost:4000`);
})