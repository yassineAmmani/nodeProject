var fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path')

// const fileOps = async () => {
//     try {
//         const data = fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
//         console.log(data);
//     }catch(err){
//         console.error(err);
//     }
// }
// fileOps();
let func1 = () =>{
    return new Promise((resolve)=>{
        resolve('test101')
    })
}
let func2 = () =>{
    return new Promise((resolve)=>{
        resolve('test101')
    })
}
let num=1

const az = async ()=>{
    let text = 'hu'
    try{
                text = await func()
                
    }catch(azerr){
         text = azerr;
    }
    return text
}
az().then(a => console.log(a) )

var alfa  = new Promise((a,b)=>{
    let r =3
    if(r==2){
        a('succcess')
    }else{
        b('failed')
    }
})

alfa.then((message)=> {
    console.log(message)
}).catch((message)=> {
    console.log(message)
})


function alta(){
    return fsPromises.readFile(path.join(__dirname,'files','starter.txt'))
}
alta().then((result)=> {
console.log(""+result);

})
.catch(function(error) {
console.log(error);
})


// let  beta = fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
    
//     console.log(data);
//     if(err) throw err;
// })

// beta().then((data) => {
//     console.log(data)
// })


// console.log('hello world');

// fs.writeFile(path.join(__dirname,'files','reply.txt'),'nice to meet you',(err)=>{
//     if(err) throw err;
//     console.log('Write complete');
//     fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n\n mr yassin',(err)=>{
//         if(err) throw err;
//         console.log('Append complete');

//         fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newReply.txt'),(err)=>{
//             if(err) throw err;
//             console.log('Rename complete');
//         })
//     })
// })

// process.on('uncaughtException', err=>{
//     console.error(`there was an uncought error : ${err}`);
//     process.exit(1);
// })