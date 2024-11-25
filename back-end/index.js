const express = require("express");
const app = express();
const port = 3000;
// body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// router file
const portfolioRouter = require("./routes/portfolio-routes");
const subscribesRouter = require("./routes/subscribes-routes");

// cors
var cors = require("cors");
app.use(cors());

app.use("/hireMe", portfolioRouter);
app.use("/subs", subscribesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
