const express = require('express');
const app = express();
const PORT = 3001;
// Importing route modules
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
// Middleware to parse request bodies (if needed)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Route handling
app.use('/', homeRoute); // Homepage route
app.use('/about', aboutRoute); // About page route
app.use('/contact', contactRoute); // Contact page route
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});