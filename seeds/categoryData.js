const { Category } = require("../models");

const categoryData = [
  {
    name: "Restaurant",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
  },
  {
    name: "Salon",
    image:
      "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Gym",
    image:
      "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Clothing",
    image:
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
