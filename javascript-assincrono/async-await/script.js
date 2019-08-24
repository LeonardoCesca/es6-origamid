// Diferença entre async / then

function iniciarFetch() {
    fetch('./dados.json')
    .then(dadosResponse => dadosResponse.json())
    .then(dadosJSON => {
      document.body.innerText = dadosJSON.titulo;
    })
  }
  iniciarFetch();
  
  async function iniciarAsync() {
    const dadosResponse = await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.titulo;
  }
  iniciarAsync();
  