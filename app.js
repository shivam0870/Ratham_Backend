const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(bodyParser.json());
app.use(cors());


const studentRoutes = require('./src/routes/studentRoutes');
const deanRoutes = require('./src/routes/deanRoutes');

app.use('/student', studentRoutes);
app.use('/dean', deanRoutes);


app.listen(9000, () => {
  console.log('Server is running on port 9000');
});
