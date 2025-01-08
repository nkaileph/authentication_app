//import required modules

const express = require ('express')
const cors = require ('cors')
const dotenv = require ('dotenv')

//load invironment variables from dotenv
dotenv.config();

// create express application
const app = express();
const PORT = process.env.PORT || 8000;

//use cors middleware
app.use(cors()); //enable all cors requests
app.use(express.json()); //parse json request body

//sample api endpoint
app.get('/api/data', (req, res) => {
    res.json('Hello World from backend');
});

app.get('/api/', (req, res) => {
    res.send('Hello Melsoft');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`);
});

