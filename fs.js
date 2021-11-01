const fs = require("fs");

fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) throw err;
    console.log("File created successfully");
    setTimeout(() => {
      fs.readFile("employees.json", (err) => {
        if (err) throw err;
        console.log("File been read successfully");
        setTimeout(() => {
          fs.appendFile(
            "employees.json",
            '{"name": "Employee 2 Name", "salary": 3000}',
            (err) => {
              if (err) throw err;
              console.log("file uploaded");
              setTimeout(() => {
                fs.unlink("employees.json", (err) => {
                  if (err) throw err;
                  console.log("File deleted successfully");
                });
              }, 4000);
            }
          );
        }, 3000);
      });
    }, 2000);
  }
);
