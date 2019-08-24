fetch('./dados.json')
.then(response => response.text())
.then(jsonText => {
    const finalJson = JSON.parse(jsonText)
    console.log(finalJson)
})

const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 Javascript",
}

const stringConfig = JSON.stringify(configuracoes)

console.log(stringConfig)