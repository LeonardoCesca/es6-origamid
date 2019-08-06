const promise = new Promise((resolve, reject) => {
    let condition = true;
    if(condition) {
        resolve('Estou pronto');
    } else {
        reject(Error('Um erro ocorreu'));
    }
});

promise.then((resolved) => {
    console.log(resolved);
})
