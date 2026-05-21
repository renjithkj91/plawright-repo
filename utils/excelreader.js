const XLSX = require('xlsx')//importing the library
function getData(){
    const workbook = XLSX.readFile('TestData/ApplicationData.xlsx')
    const sheet = workbook.Sheets['loginpage']
    const data = XLSX.utils.sheet_to_json(sheet)
    return data
}
module.exports = {getData}