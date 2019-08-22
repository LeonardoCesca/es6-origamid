const imagem = fetch('./imagem.png')

imagem.then(r => r.blob())
.then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imgDom = document.querySelector('img')
    imgDom.src = blobUrl;
})