const fs = require('fs');
const readline = require('readline');
const { isNullOrUndefined } = require('util');

path = ["files/v212.txt","files/v32.txt"]
var js=  `\{`
var A = new Array
var i = 0
var j=0
var obj
obj = {Username: [ ], "Email Address": [], "First Name": [],"Last Name": [],"Date de naissance": [],Sexe: [],Phone: [], Banque: [], RIB: [],Login: [] };
var B = [obj.Username,obj['Email Address'],obj['First Name'],obj['Last Name'],obj['Date de naissance'],obj.Sexe,obj.Phone,obj.Banque,obj.RIB,obj.Login]




function  nline(line){
    fs.appendFile('log.txt', `${line} \n`, function (err) {
      if (err) {
        // append failed
      } else {
        // done
      }
    })
}
function  njson(line){
    const alta = JSON.stringify(line,null,2)
    fs.writeFile('data.json', alta, function (err) {
      if (err) {
        // append failed
      } else {
        // done
      }
    })
}
    
async function processLineByLine(path) {
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
 
 
  for await (const line of rl) {
    if(! line.match(/Username|Email Address|First Name|Last Name|Date de naissance|Sexe|TÃ©lÃ©phone|Banque|RIB Complet \(24 Chiffres\)|Login/g)){
        console.log(`Line from file: ${line}`);
        js = js + ` \"${line}\"`
        if (line != "*") {
          A[i] = line
          console.log(B[i])
          
          B[i].push(line)
          i = i+1
        }else{
          return
        }
        await nline(line)
        setTimeout(() => {
   
          console.log()
      }, 801);
    }
  }
}


    processLineByLine(path[0]);
    setTimeout(() => {
      i =0
      processLineByLine(path[1]);
  }, 401);

 setTimeout(() => {
   
    njson(obj)
}, 801);


// setTimeout(() => {
//    obj = {Username: [A[0],A[0] ], "Email Address": [A[1],A[1]], "First Name": [A[2]],"Last Name": [A[3]],"Date de naissance": [A[4]],Sexe: [A[5]],Phone: [A[6]], Banque: [A[7]], RIB: [A[8]],Login: [A[9]]   };
//     njson(obj)
// }, 500);

// setTimeout(() => {
//    obj.Username.push(A[3])
//     njson(obj)
// }, 501);


