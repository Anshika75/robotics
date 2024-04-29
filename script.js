// onclick function named about
var landingcontent = document.getElementById('landingcontent');

function about(event) {
    landingcontent.classList.add("about");
    landingcontent.classList.remove("theme");
    landingcontent.classList.remove("guidelines");
    landingcontent.innerHTML = `
        <h1><span style="color: cyan">About</span> <span style="color: red;">Event</span></h1>
        <p>
            Technoxian is robot world competition held every year  for nominating teams from Chandigarh University provide a platform by organising internal competition offering students a platform to showcase their skills and creativity in various robotics and technology-related challenges. The competition aims to foster innovation, teamwork, and problem-solving abilities among participants. There's going to be Wide Range of Competitions, Inclusive Participation, Hands-on Learning, Certifications, Prizes, Support and Guidance, Networking Opportunities and Promotion of Innovation.
        </p>
        <div class="menu">
                <a  onclick="home()">Home</a>
                <a onclick="theme()">Themes</a>
        </div>
    `;
}
function home(event) {
    landingcontent.classList.remove("about");
    landingcontent.classList.remove("theme");
    landingcontent.classList.remove("guidelines");
    landingcontent.innerHTML = `
    <p class="toptext">Internal competition for</p>
    <h1><span style="color: cyan">TECH</span><span style="color: red;">NOXIAN</span></h1>
        <div class="btn-row">
            <button class="button-49" role="button"><a>Register Now</a></button> 
            <button class="button-49" role="button"><a>Guidelines</a></button>
        </div>
            <div class="menu">
                <a onclick="about()">About</a>
                <a onclick="theme()">Themes</a>
             </div>
    `;
}

function theme(event) {
    landingcontent.classList.add("theme");
    landingcontent.classList.remove("about");
    landingcontent.classList.remove("guidelines");
    landingcontent.innerHTML = `
        <h1><span style="color: cyan">Themes</span> <span style="color: red;">Across</span></h1>
        <div class="grid">
            <a href="https://www.technoxian.com/" class="card">
                <img src="https://www.dropbox.com/scl/fi/oobkizj404268ahqcrhz0/icon_01.png?rlkey=xhfg4shtcb3m6dn0yvjpzr3vz&st=gfj00coe&dl=1" alt="robotics">
                <h2>Innovation Quest</h2>
            </a>
            <a href="https://www.technoxian.com/" class="card">
                <img src="https://www.dropbox.com/scl/fi/y6wezle9try83gincvcyt/icon_08.png?rlkey=zeujrdk564ney5bvxi2oc8eas&st=ztqzwgif&dl=1" alt="drone">
                <h2>Robo Challenges</h2>
            </a>
            <a href="https://www.technoxian.com/" class="card">
                <img src="https://www.dropbox.com/scl/fi/o51bphit4ank3xnso22l5/icon_10.png?rlkey=5wbpj5svjzyyz4sgmnbcuh375&st=fqichysr&dl=1" alt="rc">
                <h2>Drone Adventures</h2>
            </a>
            <a href="https://www.technoxian.com/" class="card">
                <img src="https://www.dropbox.com/scl/fi/zhhhu1rrmkzr93vp9giuk/icon_05.png?rlkey=z44dwnbc0hibfn7iq5ntwwfi2&st=orzdvmb0&dl=1" alt="stem">
                <h2>RC Thrills</h2>
            </a>
            <a href="https://www.technoxian.com/" class="card">
                <img src="https://www.dropbox.com/scl/fi/n0gjteveew5ha588hi39n/icon_03.png?rlkey=esr8venhd2ihdzr5is12v5pu5&st=tbmnyc5a&dl=1" alt="innovation">
                <h2>STEM Challenges</h2>
            </a>
        </div>
        <div class="menu">
                <a  onclick="about()">About</a>
                <a onclick="home()">Home</a>
        </div>
    `;
}

