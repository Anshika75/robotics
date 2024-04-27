// onclick function named about
var landingcontent = document.getElementById('landingcontent');

function about(event) {
    landingcontent.classList.add("about");
    landingcontent.classList.remove("theme");
    landingcontent.classList.remove("guidelines");
    landingcontent.innerHTML = `
        <h1><span style="color: cyan">About</span> <span style="color: red;">Event</span></h1>
        <p>
            Technoxian is an internal competition held at Chandigarh University, offering students a platform to showcase their skills and creativity in various robotics and technology-related challenges. The competition aims to foster innovation, teamwork, and problem-solving abilities among participants.
            There's going to be Wide Range of Competitions, Inclusive Participation, Hands-on Learning, Certifications, Prizes, Support and Guidance, Networking Opportunities and Promotion of Innovation.
        </p>
        <div class="menu">
                <a  onclick="home()">Home</a> •
                <a onclick="theme()">Themes</a> •
                <a onclick="guidelines()">Guidelines</a>
        </div>
    `;
}
function home(event){
    landingcontent.classList.remove("about");
    landingcontent.classList.remove("theme");
    landingcontent.classList.remove("guidelines");
    landingcontent.innerHTML = `
    <h1><span style="color: cyan">TECH</span><span style="color: red;">NOXIAN</span></h1>
            <button class="button-49" role="button">Register Now</button>
            <div class="menu">
                <a onclick="about()">About</a> •
                <a onclick="theme()">Themes</a> •
                <a onclick="guidelines()">Guidelines</a>
             </div>
    `;
}
{/* <p>
            <b>• Innovation Quest:</b> Explore innovative ideas and projects in science and technology. <br/>
            <b>• Robo Challenges:</b> Engage in robotics challenges like RoboSoccer, Robo Race, Sumobot, and more. <br/>
            <b>• Drone Adventures:</b> Take part in drone-related challenges such as Drone Race, Drone Soccer, and Drone Rescue. <br/>
            <b>• RC Thrills:</b> Experience the thrill of RC challenges including RC Electric Car Racing and RC Craft Challenge. <br/>
            <b>• STEM Challenges:</b> Participate in various STEM challenges like Fastest Line Follower and Maze Solver. <br/> */}

function theme(event) {
    landingcontent.classList.add("theme");
    landingcontent.classList.remove("about");
    landingcontent.classList.remove("guidelines");
    landingcontent.innerHTML = `
        <h1><span style="color: cyan">Themes</span> <span style="color: red;">Across</span></h1>
        <div class="grid">
            <a class="card">
                <h2>Innovation Quest</h2>
            </a>
            <a class="card">
                <h2>Robo Challenges</h2>
            </a>
            <a class="card">
                <h2>Drone Adventures</h2>
            </a>
            <a class="card">
                <h2>RC Thrills</h2>
            </a>
            <a class="card">
                <h2>STEM Challenges</h2>
            </a>
        </div>
        <div class="menu">
                <a  onclick="about()">About</a> •
                <a onclick="home()">Home</a> •
                <a onclick="guidelines()">Guidelines</a>
        </div>
    `;
}


function guidelines(event) {
    landingcontent.classList.add("guidelines");
    landingcontent.classList.remove("about");
    landingcontent.classList.remove("theme");
    landingcontent.innerHTML = `
        <h1><span style="color: cyan">Event</span> <span style="color: red;">Rules</span></h1>
        <p>
            <b>• Originality:</b>  Encourage fresh ideas. <br/>
            <b>• Safety:</b> Prioritize project safety. <br/>
            <b>• Documentation:</b> Keep project progress documented. <br/>
            <b>• Presentation:</b> Confidently showcase projects. <br/>
            <b>• Collaboration:</b> Foster effective teamwork. <br/>
            <b>• Creativity:</b> Think outside the box. <br/>
            <b>• Sportsmanship:</b> Compete with integrity. <br/>
            <b>• Time Management:</b> Meet deadlines effectively. <br/>
        </p>
        <div class="menu">
                <a  onclick="about()">About</a> •
                <a onclick="theme()">Themes</a> •
                <a onclick="home()">Home</a>
        </div>
    `;
}