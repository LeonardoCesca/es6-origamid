/*
METHODS: 

- GET -> Puxa informações, utilizado para pegar posts, usuários

- POST -> Utilizado para criar posts, usuários

- PUT -> Geralmente utilizado para atualizar informações

- DELETE -> Deleta uma informação
*/

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json())
.then(pokemon => {
    console.log(pokemon)
})

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
    method: 'POST',
    body: '{"title: "Javascript"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
}

fetch(url, options)
.then(response => response.json())
.then(json => console.log(json))