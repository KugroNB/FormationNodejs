//exemple 1
// import fs from 'fs';
// let file = 'SKILL.mp3';
// fs.readFile(file, (err, data) => {
//     if (err) throw err
//     fs.writeFile('copySKILL.mp3', data, (err) => {
//         if (err) throw err
//         console.log('Le fichier à bien été copié');
//     })
// })



//exemple 2
// import fs from 'fs';
// let file = 'demo.wav';
//
// let read = fs.createReadStream(file)
//
// read.on('data', (chunck) => {
//   console.log('J\'ai lu ' + chunck.length);
// })
//
// read.on('end', ()=>{
//   console.log('J\'ai fini de lire le fichier');
// })



//exemple 3
// import fs from 'fs';
// let file = 'demo.wav';
// fs.stat(file, (err, stat) => {
//   let total = stat.size;
//   let progress = 0;
//
//   let read = fs.createReadStream(file)
//
//   read.on('data', (chunck) => {
//     progress += chunck.length;
//     console.log('J\'ai lu ' + (100 * progress/total) +'%' );
//   })
// 
//   read.on('end', ()=> {
//     console.log('J\'ai fini de lire le fichier');
//   })
// })



//exemple 4
import fs from 'fs';
let file = 'video.mp4';
fs.stat(file, (err, stat) => {
  let total = stat.size;
  let progress = 0;
  let chunckNB = 0;

  let read = fs.createReadStream(file);
  let write = fs.createWriteStream('copyvideo.mp4');

  read.on('data', (chunck) => {
    progress += chunck.length;
    chunckNB++;
    console.log('J\'ai lu ' + (100 * progress/total) +'%' );
  });
  
  read.on('end', ()=>{
    console.log('J\'ai fini de lire le fichier');
  });

  read.pipe(write);

  write.on('finish', () => {
    console.log('Le fichier a bien été copié');
    console.log('taille du fichier en octets : '+ total)
    console.log('total chunck :  ' + chunckNB );
    console.log('taille moyenne de chunck : ' + total/chunckNB);
  })
})

