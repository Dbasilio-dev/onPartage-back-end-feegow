module.exports = (app) => {
  app.get("/plans", (req, res) => {
    res.send("route plans up");
  });
};
