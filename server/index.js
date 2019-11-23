const http = require('http');

const ExcelJS = require('exceljs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



// var workbook = new ExcelJS.Workbook();
// workbook.xlsx.readFile("./mahmoud ahmed.xlsx").then(function () {
//
//    //Get sheet by Name
//    var worksheet = workbook.getWorksheet('mahmoud ahmed');
//
//    // Iterate over all rows that have values in a worksheet
//    // worksheet.eachRow(function (row, rowNumber) {
//    //    console.log(row)
//    //    // console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
//    // });
//    let attTime = worksheet.getColumn('M').values;
//    console.log(typeof attTime);
//
//    //Update a cell
//    // console.log(row.getCell(1).value)
//
// });
