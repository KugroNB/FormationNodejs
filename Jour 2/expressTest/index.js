const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false })
const fs = require('fs');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

/* config pour utiliser ejs */
app.set("view engine", "ejs");

/* import des routes */
const pkmnRoute = require('./Routeur/pkmnRoute');
const testRoute = require('./Routeur/testRoute');

/* implementation des routes importées */
app.use('/Pokemon', pkmnRoute);
app.use('/Test', testRoute);
app.use(urlEncodedParser);

/* routes standard */
app.get('/', (req,res) => {
    console.log('get Request from home');
    const message = "HelloWorld";
    const movies = [
        {
            name: "ghostbuster",
            url: "https://getwallpapers.com/wallpaper/full/e/7/2/878333-ghostbuster-wallpaper-2160x1920-for-full-hd.jpg"
        },
        {
            name: "star trek",
            url: "https://i2.wp.com/www.my-sf.com/wp-content/uploads/2015/11/Star-Trek-V-The-Final-Frontier-theatrical-poster.jpg"
        },
        {
            name: "they live",
            url: "https://flxt.tmsimg.com/assets/p11240_p_v10_ac.jpg"
        }
    ];
    res.render("index",{
        message: message,
        movies: movies
    });
})

app.post('/post_item', (req,res) => {
    response = {
        movie_name:req.body.movie_name,
        poster_url:req.body.poster_url
     };
     console.log(response);
     res.end(JSON.stringify(response));
})

const cpUpload = upload.fields([{ name: 'file', maxCount: 1 }])

app.post('/post_upload', cpUpload, (req,res) => {
    req.files.file.forEach(element => {
        let file = __dirname + "/" + element.originalname;
        console.log('file :', file);
        
        fs.readFile( element.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if( err ) {
                console.log( err );
                res.end( JSON.stringify( err ) );
            } else {
                response = {
                    message:'File uploaded successfully',
                    filename:element.originalname
                };
                res.end( JSON.stringify( response ) );
                }         
            });
        });    
    });
})

/* lancement serveur */
let server = app.listen(8081, "127.0.0.1", () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Server listening on ${host} ${port}`);
})