let fs = require('fs');

/* argument nom de fichier */
let filename = process.argv[2];
/* argument contenu du fichier */
let filecontent = process.argv[3];

/* ecriture du fichier */
fs.writeFile(filename, filecontent, (err) => {
  if (err) throw err;
  /* lecture du fichier créé */
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(filename);
    console.log(data);
  })
});

