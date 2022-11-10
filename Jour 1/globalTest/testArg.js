
// va looper a travers le tableau process.argv qui contient tout 
// les arguments passés apres l'appel de lancement du script
for (let i = 2; i < process.argv.length; i++) {
    console.log("arg ",i-2," :", process.argv[i]);
}