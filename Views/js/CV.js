document.body.innerHTML += 
        `<header>
        <h1>My CV</h1>
        </header>
        <p><a href="../Pdf/cv_scoala_informala.pdf" id="ButtonDownload" download>Download my CV</a></p>
        <p>
        <h2>馃悎About Me</h2><br>
        I鈥檝e decided to learn front-end development because I wanted to develop my IT skills gained in the high school period. <br>
        I think front end development it鈥檚 the perfect way to combine my skills with my creative mind. <br><br><br>

        <h2>馃柡Education</h2><br>
        2022: Informal IT school, learning Java script programming language <br><br><br>

        <h2>馃捈Work Experience</h2><br>
        2022-prezent: Informal IT school, homework and optional work<br><br><br>
        <h2>馃拑Skill Set</h2><br>
        路 Languages: English, Spanish, French <br>
        路 Driver license: B <br>
        路 Well organized <br>
        路 Creative <br>
        路 Languages and Methods: C++, HTML, CSS, JavaScript <br>
        路 Software: Microsoft Office</p>
        <footer>
        <span id = "footer-content">Designed by Andreea Fenesanu</span>
        </footer>`;

function changeBackground(color) {
    document.body.style.backgroundImage = "linear-gradient(to right top, #052237, #00347a, #0086393, #00bf72, #a8eb120)";
}

window.addEventListener("load",function() { changeBackground("red") });