import express from 'express';
import cors from 'cors';
import { getAllRestaurants, getRestaurantById, deleteRestaurant,
  updateRestaurant, addRestaurant } from './src/restaurants.js';

const app = express();
app.use(cors());
app.use(express.json());

// setup my routes
app.get('/restaurants', getAllRestaurants);
app.get('/restaurants/:restaurantId', getRestaurantById);
app.delete('/restaurants/:restaurantId', deleteRestaurant);
app.patch('/restaurants/:restaurantId', updateRestaurant);
app.post('/restaurants', addRestaurant);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
