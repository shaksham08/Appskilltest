const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

let steps = [];

//function to find the strong number
function strong(number) {
  let result = "";
  let num = [...number];
  while (num.length != 0) {
    if (num.length > 1) {
      let first = parseInt(num.shift());
      let last = parseInt(num.pop());
      if (first != last) {
        res = Math.max(first, last);
        result = result + res;
      }
    } else {
      result = result + num.pop();
    }
  }
  steps.push(result);
  return result;
}

function find(input) {
  while (input.length != 1) {
    input = strong(input);
  }
  return input;
}

app.post("/", (req, res) => {
  console.log(req.body.num);
  let input = req.body.num;
  console.log(typeof input);
  let final = find(input);
  console.log(final);
  let answers = {
    strong: input,
  };

  res.json(answers);
});

app.listen(port);

console.log("Server is running on " + port);
