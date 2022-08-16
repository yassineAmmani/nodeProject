function makeRequiste(location){
    return new Promise((resolve,reject)=>{
       
        console.log(`making requiste to ${location}`)
        if(location == "rabat"){
            resolve('rabat say hi')
        }else{
            reject('we can only take to rabat')
        }
    })
}
function processRequist(response){
    return new Promise((resolve,reject)=>{
        console.log('processing response')
        resolve(`Extra information + ${response}`)
    })
}
// --------------1--------------------
// makeRequiste('rabat').then(response=>{
//     console.log('response had received')
//     return processRequist(response)
// }).then(processResponde=>{
//     console.log(processResponde)
// }).catch(err=>{
//         console.log(err)
// })

async function doWork(){
    try{
        const response =  await makeRequiste('rabat')
        console.log('response had received')
        const processResponde = await processRequist(response)
        console.log('prossecedResponce')
    }catch(err){
        console.log(err)
    }
    
}

doWork()