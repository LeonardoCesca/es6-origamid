async function puxarDados() {
    const responseDados = fetch('./dados.json')
    const responseClientes = fetch('./clientes.json')

    const jsonDados = await (await responseDados).json()
    const jsonClientes = await (await responseClientes).json()

   console.log(jsonDados)
   console.log(jsonClientes)
}

puxarDados()

async function asyncSemPromise() {
    //Console não espera
    setTimeout(() => console.log('Depois de 1s'), 1000)
    console.log('acabou')
}

asyncSemPromise()
