const fs = require('fs');
const readline = require('readline');
const { isNullOrUndefined } = require('util');

const excel = require("excel4node");

const workbook = new excel.Workbook();

const style = workbook.createStyle({
    font: { color: "#0101FF", size: 11 }
});

const worksheet = workbook.addWorksheet("Sheet 1");

function  nline(line){
    fs.appendFile('log.txt', `${line} \n`, function (err) {
      if (err) {
        // append failed
      } else {
        // done
      }
    })
    }
async function processLineByLine() {
  const fileStream = fs.createReadStream('v212.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

var T=[1,2,3,4,5,6,7,8,9,10]
console.log(T)
  for await (const line of rl) {
    if(! line.match(/Username|Email Address|First Name|Last Name|Date de naissance|Sexe|TÃ©lÃ©phone|Banque|RIB Complet (24 Chiffres)|Login/g)){
        console.log(`Line from file: ${line}`);
        await nline(line)
    }
    
  }
}

processLineByLine();



const arrayToWrite = Array.from({length: 10}, (v, k) => [`Row ${k+2}, Col 1`,`Row ${k+1}, Col 2`]);
arrayToWrite.forEach((row, rowIndex) => {
    row.forEach((entry, colIndex) => { 
        worksheet.cell(rowIndex + 1, colIndex + 1).string(entry).style(style); 
    })
})

workbook.write("text.xlsx");