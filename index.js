const fs = require("fs");

fs.readFile("employees.csv", "utf-8", function (err, data) {
  const args = process.argv.slice(2);
  const id = args[0];
  const arg = args[1];
  if (err) {
    console.error(err.message);
  }
  let keys = data.split("\n")[0].split(",");
  let obj = data
    .split("\n")
    .slice(1)
    .map((employees) => {
      let res = {};
      keys.forEach((header) => {
        res[header] = employees.split(",")[keys.indexOf(header)];
      });
      return res;
    });

  let findbyId = obj.filter((employees) => {
    return employees.id == id;
  });

  if (arg) {
    let obj = findbyId[0];
    if (obj.hasOwnProperty(arg)) {
      console.log(`${arg}: ${obj[arg]}`)
    } 
  } else {
    console.log(findbyId);
  }
});