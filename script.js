'use strict'

function melvinDowns() {
  $('.mainPage').on('click', function (event){
    console.log("main page");
    mainPageContent();
  });
}


function projects() {
  $('.projectPage').on('click', function (event){
    console.log("projects page");
    projectsContent();
  });
}

function contactMe() {
  $('.contactPage').on('click', function (event){
    console.log("contact page");
    contactContent();
  });
}



function mainPageContent() {
  let mainPageHtml = `<main class="container" role="main">
      <header role="banner">
        <img class="image" src="heroimage.jpg" alt="quote-image">
      </header>
      <section> 
        <div class="headline">
          <h1>Hello, I’m Melvin. I’m a student that aspires to be a full stack developer.</h1>
        </div>
      </section>
      <section>
        <p>Currently, I am a student in the Full Stack Bootcamp at Thinkful. Since my early teens, I’ve always had interests in technology and developed curiosities on how things work. I have a passion for coding simply because it’s the brain of the tech world. It is so exciting to solve problems and create things with code. Currently, I am proficient in HTML, CSS, JavaScript, and JQuery. 
        </p>
        <p>Outside of coding, I love to play video games, watch anime, and read comics. I also enjoy exercising and playing sports. My lifelong goals are to enjoy life, to continue learning, to give 100% effort every time, and to improve each day.</p>
      </section>
    </main>`;

    $('.container').html(mainPageHtml);
}

function projectsContent() {
  let projectsPageHtml = `<main class="container" role="main">
      <header>
        <h1>My Projects</h1>
      </header>
      <section> 
        <div class="project">
          <h3>Philadelphia Eagles Quiz</h3>
        </div>
      </section>
      <section>
        <div class="screenshot">
        <img class="projectSS" src="quizappss2.PNG" alt="quizAppImage">
        </div>
      </section>
      <section>
        <p class="description">This quiz tests users on some Philadelphia Eagles trivia. It is a 10 question quiz that keeps the score of users as they progress through the quiz. As the users answer questions, they are provided feedback informing them if they are correct or incorrect. When the users select the wrong answer they are provided the correct answer before moving on to the next question. Based on the users’ score, the users will see a specific result image and message. All images used are football related making this quiz enjoyable.</p>
        <div class="tech">
          <ul>
            <li><img class="tech-used" src="html5.jpg" alt"html5-icon"></li>
            <li><img class="tech-used" src="css3.png" alt="css3-icon"></li>
            <li><img class="tech-used" src="javascript.jpg" alt="js-icon"></li>
            <li><img class="tech-used" src="jquery.jpg" alt="jquery-icon"></li>
          </ul>
        </div>
        <div class="buttons">
          <a href="https://github.com/mdowns22/QuizApp" target="_blank"><button>View Source</button></a>
          <a href="https://mdowns22.github.io/QuizApp/" target="_blank"><button>View Live</button>
        </div>
      </section>
    </main>`;

    $('.container').html(projectsPageHtml);
}

function contactContent() {
  let contactPageHtml = `<main class="container" role="main">
      <header>
        <h2>Contact Me</h2>
      </header>
      <section>
        <p>Melvin Downs</p>
        <p>Email: mdowns_22@yahoo.com</p>
      </section>
      <section> 
        <div class="contactLinks">
          <ul>
            <li>
              <a href="https://github.com/mdowns22" target="_blank">
              <img class="clinks" src="github.jpg" alt="github-link">
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/melvin-downs-a65032a6"       target="_blank">
              <img class="clinks" src="linkedin.jpg" alt="linkedIn-link">
              </a>
            </li>
            <li>
              <a href="mailto:mdowns_22@yahoo.com" target="_blank">
              <img class="clinks" src="email.jpg" alt="email-link">
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>`;

    $('.container').html(contactPageHtml);
}


function browserSize() {
$(window).resize(function() {

  if ($('nav').width() <= 800) {
    $(".gitHubPage").addClass('disappear');
  } else {
    $(".gitHubPage").removeClass('disappear');
  } 
});
}

browserSize();
melvinDowns();
projects();
contactMe();