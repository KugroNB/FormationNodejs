import fs from 'fs';
let file = process.argv[2];

fs.stat(file, (err, stat) => {
  let total = stat.size;;
  let chunckNB = 0;

  let read = fs.createReadStream(file);

  read.on('data', (chunck) => {
    chunckNB++;
    console.log(chunck.toString());
  });
  
  read.on('end', ()=>{
    console.log('J\'ai fini de lire le fichier');
    console.log('taille du fichier en octets : '+ total)
    console.log('total chunck :  ' + chunckNB );
    console.log('taille moyenne de chunck : ' + total/chunckNB);
  });
})
