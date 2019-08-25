const links = document.querySelectorAll('a');

function handleClick(event) {
    event.preventDefault();
    fetchPage(event.target.href)
}

async function fetchPage(url) {
    const pageResponse = await fetch(url)
    const pageText = await pageResponse.text()
    replaceContent(pageText)
}

links.forEach(link => {
    link.addEventListener('click', handleClick)
})