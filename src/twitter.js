
const button = document.querySelector("#tweet-button");
const tweet = document.querySelector("#text-tweet");

tweet.addEventListener("input", characterCount)

button.addEventListener("click", postTweet);
button.disabled = true;

function checkButton(value) {
    button.disabled = value;
}

function characterCount() {

    let count = tweet.value.length;
    let maxCharacter = 140;

    let atual = maxCharacter - count;

    const contador = document.querySelector("#counter");

    contador.innerHTML = atual;

    if (count > 0 && count <= 140) {    
        checkButton(false);
        
    } else if (count > 140) {
        checkButton(true);
    }else{
        checkButton(true);
    }
}


function postTweet() {

    let div = document.createElement("div");
    let parag = document.createElement("P");
    let texto = document.createTextNode(tweet.value);
    parag.appendChild(texto);
    div.appendChild(parag)
    document.getElementById("tweets-section").appendChild(div);

    clearTweetBox();
    characterCount();
}

function clearTweetBox() {
    document.querySelector("#text-tweet").value = "";
}




