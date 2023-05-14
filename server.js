const express = require("express");
const mongoose = require("mongoose");
/*const bodyParser = require('body-parser');*/
const app = express();
const port = 8000;

const uri = "mongodb+srv://mayuri2010952:aEadC5cxnsExlLz7@cluster0.3mmjiyq.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, 
  socketTimeoutMS: 30000 
}).then(() => {
  console.log("Connected to MongoDB cluster");
}).catch(err => {
  console.error(err);
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const { name, email, gender } = req.body;
    console.log(req.body); // log the request body to see if data is coming through
    const newUser = new User({ name, email, gender });
    await newUser.save();
    res.status(200).send('User saved to database.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user to database.');
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({ _id: 0, name: 1, email: 1, gender: 1 });
    res.status(200).send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users from database.');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});