
const button = document.querySelector("#tweet-button");
let tweet = document.querySelector("#text-tweet");

tweet.addEventListener("input", characterCount);
tweet.addEventListener("keydown", resizeTextArea);

button.addEventListener("click", postTweet);
button.disabled = true;

function checkButton(value) {
    button.disabled = value;
}

function resizeTextArea() {
    tweet.style.height = '12px';
    tweet.style.height = tweet.scrollHeight + 12 + 'px';
}

function characterCount() {

    let count = tweet.value.length;
    let maxCharacter = 140;

    let atual = maxCharacter - count;

    const contador = document.querySelector("#counter");

    contador.innerHTML = atual;

    if(atual >= 0 && atual <=9) {
        document.querySelector("#counter").className = 'font-color-red';
    }else if(atual >= 10 && atual <= 21){
        document.querySelector("#counter").className = 'font-color-yellow';
    }else if (atual >= 22 && atual <= 140){
        document.querySelector("#counter").className = 'font-color-blue';
    }else{
        document.querySelector('#counter').className = 'font-color-red';
    }

if (count > 0 && count <= 120) {
        checkButton(false);
    }else if (count >= 121 && count <= 130) {
            checkButton(false);
    } else if (count >= 131 && count <= 140) {
        checkButton(false);
    } else {
        checkButton(true);
    }
}


function postTweet() {

    let article = document.createElement("article");
    let content = document.createElement("div");
    let link = document.createElement("a");
    let linkuser = document.createElement("a");
    let header = document.createElement("div")
    let image = document.createElement("img");
    let parag = document.createElement("p");
    let time = document.createElement("span");
    let texto = document.createTextNode(tweet.value);
    let hora = document.createTextNode(getCurrentTime());
    let userName = document.createTextNode('Carla Martins');
    let userlink = document.createTextNode('@carlaam - ');


    link.href = "#";
    linkuser.href = "#";
    image.src="img/foto-tweet.png";

    link.appendChild(userName);
    linkuser.appendChild(userlink);
    parag.appendChild(texto);
    header.appendChild(link);
    header.appendChild(linkuser);
    article.appendChild(header);
    article.appendChild(parag);
    time.appendChild(hora);
    header.appendChild(time);
    content.appendChild(image);
    content.appendChild(article);

    content.classList.add("tweet-style");
    header.classList.add("tweet-header");
    time.classList.add("tweet-time");
    linkuser.classList.add("link");
    image.classList.add("profile-picture-tweet");
    article.classList.add("article");
    document.getElementById("tweets-section").appendChild(content);

    clearTweetBox();
    characterCount();
    resizeTextArea();
    tweetCount()
}

function clearTweetBox() {
    document.querySelector("#text-tweet").value = "";
}

function getCurrentTime(){

  let time = moment().format('HH:mm')
     
   return time;
}

let atual = 0;

function tweetCount(){

    let contador = document.querySelector("#tweet-number");
    atual += 1;
    contador.innerHTML = atual;
}
