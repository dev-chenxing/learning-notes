function randomChoice(array) {
    return array[(Math.floor(Math.random() * array.length))]
}

fetch("py/gushiwen_short.json")
    .then((response) => response.json())
    .then((data) => randomChoice(data))
    .then((poem) => {
        document.getElementById('poem-content').innerHTML = poem.content
        document.getElementById('poem-title').innerHTML = poem.title
        document.getElementById('poem-author').innerHTML =
            poem.author +
            document.getElementById('poem-author').innerHTML
    })
    .catch(err => console.error(err))