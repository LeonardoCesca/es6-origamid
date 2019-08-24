async function iniciarAsync() {
    try {
        const dadosResponse = await fetch('./dados.json');
        const dadosJSON = await dadosResponse.json();
        document.body.innerText = dadosJSON.aula;
    } catch(error) {
        console.log(error)
    }
}

iniciarAsync();
