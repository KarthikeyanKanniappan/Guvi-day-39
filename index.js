let express = require("express");
let app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let a = req.body.name1;
  let b = req.body.name2;
  let c = req.body.app1;
  let d = req.body.app2;
  let e = req.body.name3;
  let final;
  if (a && b && c && d && e !== undefined) {
    final = `The Room ${e},is booked by ${a} on ${b} from ${c} to ${d} `;
  } else {
    final = "Enter a proper details";
  }
  res.send(final);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server listening on port 3000");
});
