//Twój kod
const fs = require('fs'),
    file = process.argv.slice(2),
    format = file[0].slice(-4);

    // outputFile = file.
    console.log(process.argv);
    console.log(file);

// [a, b, ...file] = process.argv;

// 	fs.readdir('/home/ja', (err, files) => {
//     if (err === null){
//         console.log('Lista plików:');
//         files.forEach(file => {
//             console.log(file);
//         });
//     } else {
//         console.log('Błąd podczas listowania katalogu!', err);
//     }
// });
// ODCZYT
// 
// fs.readFile('/home/some/file.txt', 'utf8', (err, data) => {
//     if (err === null){
//         console.log('Poprawnie odczytano plik.', data);
//     } else {
//         console.log('Błąd podczas odczytu pliku!', err);
//     }
// });
// 

/*fs.writeFile('./data/file.txt', 'Hello, World!', err => {
    if (err === null){
        console.log('Zapisano poprawnie!');
    } else {
        console.log('Błąd podczas zapisu pliku!', err);
    }
});*/




fs.readFile(file[0], 'utf8', (err, data) => {
    if (err === null) {
        console.log('Poprawnie odczytano plik.');
        let isLastBig = false;
        const stringArr = data.split('').map(function(elem, index) {
            const regWord = /\w/;

            if (regWord.exec(elem) !== null) {
                if (isLastBig === false) {
                    isLastBig = true;
                    return elem.toUpperCase();
                } else {
                    isLastBig = false;
                    return elem.toLowerCase();
                }
            } else {
                return elem
            }

        });
        const grassText = stringArr.join("");

        fs.writeFile(file[0], grassText, err => {
            if (err === null) {
                console.log('Zapisano poprawnie!');
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        });

    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});