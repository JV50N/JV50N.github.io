const postFiles = [
    "posts/welcome.md",
    "posts/google-dorking.md"
];

const container = document.getElementById("posts");

postFiles.forEach(post => {
    fetch(post)
        .then(res => res.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            const article = document.createElement("div");
            article.className = "post";
            article.innerHTML = html;
            container.appendChild(article);
        });
});

// terminal typing animation
const text = " loading breach intelligence . . .";
let i = 0;

function type(){
    if(i < text.length){
        document.getElementById("terminal").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}

type();