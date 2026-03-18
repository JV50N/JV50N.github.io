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
const commands = [
    " cd w2e/BreachAnalysis/",
    " ./run.sh",
    "...Loading modules...",
    "...Initializing environment...",
    "...Starting analysis...",
    " ready."
];

let cmdIndex = 0;
let charIndex = 0;

const terminal = document.getElementById("typing");

function typeTerminal() {
    if (cmdIndex < commands.length) {
        if (charIndex < commands[cmdIndex].length) {
            terminal.innerHTML += commands[cmdIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeTerminal, 20);
        } else {
            terminal.innerHTML += "<br>";
            cmdIndex++;
            charIndex = 0;
            setTimeout(typeTerminal,400);
        }
    } else {
        /* clear screen once everything is finished */
        setTimeout(() => {
            terminal.innerHTML = "";
            printPWD();
        },1000);
    }
}

function printPWD() {
    const pwd = "root@jv50n:~/w2e/BreachAnalysis/Example-Post$";
    let i = 0;
    function typePWD() {
        if (i < pwd.length) {
            terminal.innerHTML += pwd.charAt(i);
            i++;
            setTimeout(typePWD, 40);
        }
    }
    typePWD();
}
typeTerminal();