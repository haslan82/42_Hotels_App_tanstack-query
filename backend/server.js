const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

// istekteki json verisini işler
app.use(express.json());

// cors hatlarını önleyen middleware
app.use(cors());

// route tanımı yap
app.use(recipeRoutes);

// dinlencek portu belirle
app.listen(4004, () => {
  console.log("Server 4004 portunu dinlemeye başladı");
});
