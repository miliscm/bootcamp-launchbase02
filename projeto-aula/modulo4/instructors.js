//post
const fs = require("fs");
exports.post = function (req, res) {
  const keys = Object.keys(req.body);
  const data = require("./data.json");
  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fills.");
    }
  }
  let { avatar_url, birth, name, services, gender } = req.body;

  birth = Date.parse(birth);
  const created_at = Date.now();
  const id = Number(data.instructors.length + 1);

  data.instructors.push({
    id,
    name,
    avatar_url,
    birth,
    gender,
    services,
    created_at,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("write file error");
    return res.redirect("/instructors");
  });
  // return res.send(req.body);
};

//update

//delete
