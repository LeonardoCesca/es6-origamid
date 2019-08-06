// const promise = new Promise((resolve, reject) => {
//     let condition = true;
//     if(condition) {
//         setTimeout(() =>{
//             resolve('Estou pronto');
//         }, 1000);
//     } else {
//         reject(Error('Um erro ocorreu'));
//     }
// });

// const returned = promise.then((resolved) => { 
//     console.log(resolved); 
//     return 'oi';
// }).then((resolved) => {
//     console.log(resolved);
// }).catch((reject) => {
//     console.log(reject);
// }).finally(() => {
//     console.log('Finish')
// })

// console.log(returned);

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('User ok!')
    }, 1000)
})

const data = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Data ok!')
    }, 1500)
})

// const ok = Promise.all([login, data]);

// ok.then((resolve) => {
//     console.log(resolve);
// })

const ok = Promise.race([login, data]);

ok.then((resolve) => {
    console.log(resolve);
})