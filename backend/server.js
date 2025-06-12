require('dotenv').config();
const app = require("./app");

const PORT = 3000;
console.log("port:", PORT);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
