const tweetar = document.querySelector('#tweetar');
const textarea = document.querySelector('#TextoTweet')
const feed = document.querySelector(".conteudoPrincipal__listaTweets");

const imprimirNoConsole = (event) => {
    event.preventDefault();
    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea);
}

tweetar.addEventListener('click', imprimirNoConsole)

const criarTweet = (tweetTexto) => {
    let data = new Date();
    let hora = data.getHours();
    let minutes = data.getMinutes();

    const tweet = {
        nome: "João Victor da Silva",
        foto: "./assets/img/ProfilePic.png",
        usuario: " @joaosilva",
        texto: tweetTexto,
        tempo: `${hora}:${minutes}`
    }

    listarTemplateTweet(tweet)
}

const listarTemplateTweet = (tweet) => {

    const {nome, foto, usuario, texto, tempo} = tweet

    // CRIA ELEMENTOS DO TWEET
    let li = document.createElement("li");
    li.className = "conteudoPrincipal__tweet"
    
    let img = document.createElement("img");
    img.src = foto;
    img.alt = "foto de perfil"
    img.className = "tweet__fotoPerfil"

    let div = document.createElement("div");
    div.className = "tweet__conteudo";
    div.classList.add("tweet__conteudo");

    let h2 = document.createElement("h2");
    h2.innerText = nome;

    let span = document.createElement("span");
    span.innerText = `${usuario} - ${tempo}`;

    let p = document.createElement("p");
    p.innerText = texto;
    
    // ADICIONA ELEMENTOS DENTRO DA DIV 
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    // ADICIONA ELEMENTOS DENTRO DA LI
    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li);
    textarea.value = ""
}