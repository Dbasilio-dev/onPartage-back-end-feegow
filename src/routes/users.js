module.exports = (app) => {
  app.get("/users", (req, res) => {
    res.send("route users up");
  });
};
