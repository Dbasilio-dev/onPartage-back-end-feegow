const custom = require("./custom/customExpress");
const app = custom();

app.listen(process.env.PORT || 8080, () => {
  console.log(`app listening at http://localhost:${process.env.PORT || 8080}`);
});
