const XLSX = require('xlsx')//importing xlsx library to variable XLSX
function getCellData(row, column){
    const workbook = XLSX.readFile('TestData/ApplicationData.xlsx')//Assigning excel file to the variable workbook
    const sheet = workbook.Sheets['loginpage'] //Assigning the sheet with name loginpage to the variable sheet
    const cellValue = XLSX.utils.encode_cell({ //converting excel format(1 based indexing) to js style(0 based)
        r:row-1,
        c:column-1
    })
    const cell = sheet[cellValue]//Get the data from a specific excel cell
    return cell?cell.v:undefined //ternary operator. working is similar to if else. if there is value, it will get returned else undefined is returned
}
module.exports = {getCellData}