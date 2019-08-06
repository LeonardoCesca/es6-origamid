const promise = new Promise((resolve, reject) => {
    let condition = false;
    if(condition) {
        setTimeout(() =>{
            resolve('Estou pronto');
        }, 1000);
    } else {
        reject(Error('Um erro ocorreu'));
    }
});

const returned = promise.then((resolved) => { 
    console.log(resolved); 
    return 'oi';
}).then((resolved) => {
    console.log(resolved);
}).catch((reject) => {
    console.log(reject);
})

console.log(returned);
