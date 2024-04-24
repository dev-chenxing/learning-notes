const typing = document.querySelectorAll('.typewriter');

function type(element) {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomEms() {
        if (Math.random() > .8) {
            return (randomInteger(-50, 50) / 800);
        }
        else {
            return 0;
        }
    }

    function wrap(char) {
        return (
            '<span style="opacity:' + randomInteger(80, 100) / 100 + '; ' +
            'text-shadow:' + randomEms() + 'em ' + randomEms() + 'em currentColor;">' +
            char + '</span>');
    }

    const wrappedText = Array.from(element.textContent).map(wrap);

    element.innerHTML = wrappedText.join('');

}

typing.forEach(type);