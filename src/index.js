import express from "express";
import request from "request";

const app = express();

app.get("/", (req, res) => {
  res.send("hello home!");
});

app.get("/:something", (req, res) => {
  const { url } = req;
  var momo = "";
  if (!url.includes("http")) {
    momo = `http://${url.substr(11, url.length)}`;
  } else {
    momo = url;
  }
  request(momo, function(error, response, _) {
    const momoStatus = response && response.statusCode;
    try {
      if (momoStatus <= 445) {
        res.json(true);
        console.log("✅ TRUE ");
      } else if (momoStatus === 521) {
        res.json(false);
        console.log("✅ FALSE ");
      } else {
        console.log(error);
        res.send("❌ Error ! please check it one more time!!");
      }
    } catch (error) {
      console.log(error);
      res.send("❌ Status is not defined!");
    }
  });
});

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
