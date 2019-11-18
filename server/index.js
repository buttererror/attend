const ExcelJS = require('exceljs');

var workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile("./mahmoud ahmed.xlsx").then(function () {

   //Get sheet by Name
   var worksheet = workbook.getWorksheet('mahmoud ahmed');

   // Iterate over all rows that have values in a worksheet
   // worksheet.eachRow(function (row, rowNumber) {
   //    console.log(row)
   //    // console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
   // });
   let attTime = worksheet.getColumn('M').values;
   console.log(typeof attTime);

   //Update a cell
   // console.log(row.getCell(1).value)

});
