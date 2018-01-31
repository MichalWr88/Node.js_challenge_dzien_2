//Twój kod
// fs.writeFile - zapis
// fs.readFile - odczyt
// fs.readdir - odcyt listy
const fs = require('fs'),
    file = "./data/zadanie01/input.json",
    sumPath = "./data/zadanie01/sum.txt";

let sum = 0;
fs.readFile(file, 'utf8', (err, data) => {
    if (err === null) {
        const arr = JSON.parse(data);
        arr.map((elem) => {
            sum += elem
            return sum
        })
        console.log('Poprawnie  odczytano plik.');
        fs.writeFile(sumPath, `suma liczb to ${sum}`, err => {
            if (err === null) {
                console.log('Poprawnie zapisano  plik sum.txt ');
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        });

    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});

// let promise = new Promise((resolve, reject) => {
	
// });
// /*ES6 PROMISES*/

// function readFilePromisified() {
// 	return new Promise(
//         function (data, reject) {
            
//             resolve(result);
            
//             reject(error);
//         });
// }


// readFilePromisified(file, 'utf8')
// .then(function(data){
// 	const arr = JSON.parse(data);
// 	arr.map((elem) => {
//             sum += elem
//             return sum
//         });
// 	console.log('Poprawnie  odczytano plik.');
// });