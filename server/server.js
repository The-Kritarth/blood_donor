const dotenv = require ('dotenv');
const express = require("express");
const cors = require ("cors");
const connectDB = require ('./config/connectdb.js');


const  app = express();
const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;

dotenv.config();
// cors policy
app.use(cors());

// JSON
app.use(express.json());

// Connect Database
connectDB();

// Available Routes
app.use("/api/user", require('./routes/userRoutes.js'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



