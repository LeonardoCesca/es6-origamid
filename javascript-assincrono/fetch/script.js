const archive = fetch('./docs.txt');

archive.then(response => {
    console.log(response.url)
    if(response.status === 404) {
        console.log('Página não existe')
    }
})
