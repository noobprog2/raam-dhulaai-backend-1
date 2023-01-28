const dotenv = require('dotenv');
const app = require('./index');
dotenv.config({path: './.env'});
const port = process.env.PORT ||9999;
app.listen(port , ( ) => {
    console.log("Server started on port " + port);
});