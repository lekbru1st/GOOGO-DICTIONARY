const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const inpWord = document.getElementById('input');
const ul = document.querySelector('.dropdown-menu');
const btn = document.querySelector('#searchBtn');



// search word
btn.addEventListener('click', function() {
    fetch(`${url}${inpWord.value}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
            <h3 class="word">GOOGO DICTIONARY</h3>
            <button onclick="playSound()">
                <i class="fas fa-volume-up"></i>
            </button>
            <div class="details">
                <p>PARTSOFSPEECH: ${data[0].meanings[0].partOfSpeech}</p>
            </div>
            <div class="details">
                <p>PHONETICS: ${data[0].phonetic}</p>
            </div>
            <p class="word-meaning">
                DEFINITION: ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].example || ''}
            </p>
        `
        sound.setAttribute('src', `${data[0].phonetics[0].audio}`);
    })
.catch(() => {
    result.innerHTML = `<h3>Couldn't Get The Word</h3>`
})
})
function playSound(){
    sound.play();
}

inpWord.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        fetch(`${url}${inpWord.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <h3 class="word">GOOGO DICTIONARY</h3>
                <button onclick="playSound()">
                    <i class="fas fa-volume-up"></i>
                </button>
                <div class="details">
                    <p>PARTSOFSPEECH: ${data[0].meanings[0].partOfSpeech}</p>
                </div>
                <div class="detail2">
                    <p>PHONETICS: ${data[0].phonetic}</p>
                </div>
                <p class="word-meaning">
                    ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ''}
                </p>
            `
            sound.setAttribute('src', `${data[0].phonetics[0].audio}`);
        })
    .catch(() => {
        result.innerHTML = `<h3>Couldn't Get The Word</h3>`
    })
    }
})
function playSound(){
    sound.play();
}
