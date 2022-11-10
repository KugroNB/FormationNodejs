const fs = require("fs");

const files = fs.readdirSync(__dirname);

for (let i = 0; i < files.length; i++) {
    console.log(fs.lstatSync(files[i]).isDirectory() ? "Folder : ": "File : ", files[i])
  }


