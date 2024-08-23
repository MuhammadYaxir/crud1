import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
// const morgan = require('morgan');

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
    app.get('/', (req, res) => {
    res.send('Hello, World!');
  })

dotenv.config()
let port = process.env.PORT;

app.use(express.json());

app.listen(port, ()=>{
    console.log("Expess Server is started on Port:", port)
})
