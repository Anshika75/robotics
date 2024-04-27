// onclick function named about
var landingcontent = document.getElementById('landingcontent');

function about(event) {
    // change classname
    landingcontent.className = "about";
    landingcontent.innerHTML = `
    <div class="content">
    <h1><span style="color: cyan">About</span> <span style="color: red;">Event</span></h1>
        <p>
        Technoxian is an internal competition held at Chandigarh University, offering students a platform to showcase their skills and creativity in various robotics and technology-related challenges. The competition aims to foster innovation, teamwork, and problem-solving abilities among participants.
        There's going to be Wide Range of Competitions, Inclusive Participation, Hands-on Learning, Certifications, Prizes, Support and Guidance, Networking Opportunities and Promotion of Innovation.
        </p>
    </div>
    `;
}
