// Navigation toggle
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// Load markdown posts

const postFiles = [
    "./posts/welcome.md",
    "./posts/google-dorking.md"
];

const container = document.getElementById("posts");

postFiles.forEach(post => {
    fetch(post)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Failed to load ${post}`);
            }
            return res.text();
        })
        .then(markdown => {
            const html = marked.parse(markdown);
            const article = document.createElement("div");
            article.className = "post";
            article.innerHTML = html;
            container.appendChild(article);
        })
        .catch(err => console.log(err));
});

// terminal typing animation
const text = " loading breach intelligence . . .";
let i = 0;

function type(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}

type();