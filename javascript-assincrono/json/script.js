fetch('./dados.json')
.then(response => response.text())
.then(jsonText => {
    const finalJson = JSON.parse(jsonText)
    console.log(finalJson)
})