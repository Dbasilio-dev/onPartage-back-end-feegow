{
  require("dotenv").config();
}
const custom = require("./custom/customExpress");
const app = custom();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`app listening at http://localhost:${process.env.SERVER_PORT}`);
});
