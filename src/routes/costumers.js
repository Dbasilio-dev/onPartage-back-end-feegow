module.exports = (app) => {
  app.get("/costumers", (req, res) => {
    res.send("route costumers up");
  });
};
