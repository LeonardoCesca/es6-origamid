const archive = fetch('./docs.txt');

archive.then(response => {
    console.log(response.type)
    if(response.status === 404) {
        console.log('Página não existe')
    }
})

/* Types:
    - basic: significa requisição para dentro do próprio servidor 
    - cors: requisição para outro servidor mas é permitida
*/
