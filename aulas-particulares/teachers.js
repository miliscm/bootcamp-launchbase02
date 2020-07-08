const fs = require("fs");
const data = require("./data.json");
//create

exports.post = function (req, res) {
  const keys = Object.keys(req.body);
  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("fill");
    }
  }
  let {
    avatar_url,
    name,
    datanascimento,
    degress,
    tipo_aula,
    acompanhamentos,
  } = req.body;

  datanascimento = Date.parse(datanascimento);
  const created_at = Date.now();
  const id = Number(data.teachers.length + 1);

  data.teachers.push({
    id,
    avatar_url,
    name,
    datanascimento,
    degress,
    tipo_aula,
    acompanhamentos,
    created_at,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("write file error");
    return res.redirect("/teachers");
  });
  // return res.send(req.body);
};
