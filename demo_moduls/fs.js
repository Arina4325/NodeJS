const fs = require ('fs');
const path = require ('path');

//creating new folder
//fs.mkdir(path.join(__dirname, "name_of_folder"), (err) => {
//   if (err){
//        throw err
//    }
//    console.log ('Folder created');
//});

//creating new file
const filePath = path.join(__dirname,"name_of_folder", "name_of_new_file.txt"); //pathing and name of new file

fs.writeFile(filePath, "Hello from new file", err => {
    if (err){
        throw err
    }
    console.log ('file created');
});

//to add changes in file
fs.appendFile(filePath, "\n Hello from new file - 2", err => {
    if (err){
        throw err
    }
    console.log ('file changed');
});

//read file
fs.readFile(filePath, 'utf-8', (err, content)  => {
    if (err){
        throw err
    }
    console.log ('Content: ', content);
});





