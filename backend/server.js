const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const user = require("./models/Usermodel");

app.use(cors());
app.use(express.json());

// Correct connection logging
mongoose.connect("mongodb+srv://shrishankaranarayanan1464:shankaratmongo1464@users.ewynl.mongodb.net")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error: ", err));

app.get('/api/home', (req, res) => {
  res.json({ message: 'Welcome to the Home page from the backend!' });
});

app.get('/api/about', (req, res) => {
  res.json({ message: 'This is the About page from the backend!' });
});

app.post("/form/create", (req, res) => {
  const { name, email } = req.body;
  const newUser = new user({ name, email });
  newUser.save()
    .then(() => {
      res.status(201).json({ name, email });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Error creating user' });
    });
});

// Fetch all users
app.get("/api/users", async (req, res) => {
  await user.find()
    .then(users => {
      res.json(users); // Return users directly
    })
    .catch(error => {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Error fetching users" });
    });
});

// Fetch a user by ID
app.get('/api/users/:id', (req, res) => {
  user.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    })
    .catch(error => res.status(500).json({ error: 'Error fetching user' }));
});

// Delete a user by ID
app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  user.findByIdAndDelete(userId)
    .then(() => res.json({ message: 'User deleted successfully' }))
    .catch(error => res.status(500).json({ error: 'Error deleting user' }));
});

// Update a user by ID
app.put('/api/users/:id', (req, res) => {
  const { name, email } = req.body;
  user.findByIdAndUpdate(req.params.id, { name, email }, { new: true })
    .then(updatedUser => {
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    })
    .catch(error => res.status(500).json({ error: 'Error updating user' }));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
