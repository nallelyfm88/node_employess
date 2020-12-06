const csv = require("csv-parser");
const fs = require("fs");

fs.createReadStream("employees.csv")
  .pipe(csv())
  .on("data", (row) => {
    const args = process.argv.slice(2);
    for (const property in row) {
      if (args[0] == `${row[property]}`) {
        console.log(Object.values(row));      
      }
    }
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });
