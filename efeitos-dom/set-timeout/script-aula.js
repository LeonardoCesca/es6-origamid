function espera(texto) {
    console.log('Passou 0');
}

setTimeout(() => {
    console.log('Testando')
}, 100);

for (let i = 0; i < 20; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}