
let button = document.querySelector("#tweet-button");
let tweet = document.querySelector("#text-tweet");
let tweetCount = 0;

tweet.addEventListener("input", characterCount);
tweet.addEventListener("keydown", resizeTextArea);

button.addEventListener("click", postTweet);
button.disabled = true;

function disableButton(value) {
    button.disabled = value;
}

function resizeTextArea() {
    tweet.style.height = '12px';
    tweet.style.height = tweet.scrollHeight + 12 + 'px';
    tweet.rows += 1;
}

function characterCount() {

    let count = tweet.value.length;
    let maxCharacter = 140;
    let atual = maxCharacter - count;

    let contador = document.querySelector("#counter");
    contador.innerHTML = atual;
 
     
    if(count === 0){
        disableButton(true);
        document.querySelector('#counter').className = 'font-color-blue';
    }else if (count > 0 && count <= 120){
        disableButton(false);
        document.querySelector("#counter").className = 'font-color-blue';
    }else if(count >= 121 && count <= 130){
        document.querySelector("#counter").className = 'font-color-yellow';
        disableButton(false);
    }  else if (count >= 131 && count <= 140){
        document.querySelector('#counter').className = 'font-color-red';
        disableButton(false)
    }else{
        disableButton(true);
        document.querySelector('#counter').className = 'font-color-red';
    }
}


function postTweet() {

    console.log("entrou na post tweet");

    let article = document.createElement("article");
    let content = document.createElement("div");
    let link = document.createElement("a");
    let linkuser = document.createElement("a");
    let header = document.createElement("div")
    let image = document.createElement("img");
    let parag = document.createElement("p");
    let time = document.createElement("span");
    let tweetText = document.createTextNode(tweet.value);
    let postTime = document.createTextNode(getCurrentTime());
    let userName = document.createTextNode('Carla Martins');
    let userlink = document.createTextNode('@carlaam - ');


    link.href = "#";
    linkuser.href = "#tweet"
    image.src="../img/foto-tweet.png";

    link.appendChild(userName);
    linkuser.appendChild(userlink);
    parag.appendChild(tweetText);
    header.appendChild(link);
    header.appendChild(linkuser);
    article.appendChild(header);
    article.appendChild(parag);
    time.appendChild(postTime);
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
    tweetCounter()
}

function clearTweetBox() {
    document.querySelector("#text-tweet").value = "";
}

function getCurrentTime(){

  let time = moment().format('HH:mm')
     
   return time;
}

function tweetCounter(){

    let counter = document.querySelector("#tweet-number");
    tweetCount += 1;
    counter.innerHTML = tweetCount;
}
