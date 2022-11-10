import server from './Config/server.js';
import database from './Config/database.js';
database.connect();

// import movie from './Models/movieSchema.js';

// new movie({
//     name: "ghostbuster",
//     year: 1984,
//     note: 20,
//     url: "https://getwallpapers.com/wallpaper/full/e/7/2/878333-ghostbuster-wallpaper-2160x1920-for-full-hd.jpg"
// }).save();

// new movie({
//     name: "star trek",
//     year: 1989,
//     note: 12,
//     url: "https://i2.wp.com/www.my-sf.com/wp-content/uploads/2015/11/Star-Trek-V-The-Final-Frontier-theatrical-poster.jpg"
// }).save();

// new movie({
//     name: "they live",
//     year: 1988,
//     note: 17,
//     url: "https://flxt.tmsimg.com/assets/p11240_p_v10_ac.jpg"
// }).save();

server.start();