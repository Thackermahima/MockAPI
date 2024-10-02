const express = require('express');
const app = express();
const PORT = 4000;

// Initial Listings Array
let listings = [
  { id: 1, title: 'Listing 1', createdAt: new Date().toISOString() }
];

// Endpoint to fetch the latest listings
app.get('/latest-listings', (req, res) => {
  res.json(listings);
});

// Generate new listings dynamically every minute
setInterval(() => {
  const newListing = {
    id: listings.length + 1,
    title: `Listing ${listings.length + 1}`,
    createdAt: new Date().toISOString()
  };
  listings.push(newListing);  
  console.log('New listing added:', newListing);
}, 60000); 

app.listen(PORT, () => {
  console.log(`Mock server is running on http://localhost:${PORT}`);
});
