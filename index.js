var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
var validated = false;

const projects = [
  {
    name: "StarterList",
    id: "starter-list",
    category: "react",
    details:
      "A platform where you can post a startup, view a startup ,upvote and comment on startups, built with TypeScript, React, styled components",
    website: "http://starter-list-degoke.vercel.app/",
    githhub: "https://github.com/Degoke/starterList",
    hit: true,
  },
  {
    name: "Felt Teachers",
    id: "felt-teachers",
    category: "react",
    details:
      "A platform where teachers, schools in need of each other get to meet and connect, built with Typescript, React, material ui. (still in progress)",
    website:
      "https://felt-teacher.vercel.app/",
    githhub: "https://github.com/Degoke/Africahacks-Felt-teacher",
    hit: true,
  },
  {
    name: "Social Media Dashboard",
    id: "dashboard",
    category: "react",
    details:
      "A static social Media Dashboard with theme switcher, built with Html Css and vanilla javascript",
    website:
      "https://degoke-social-media-dashboard-with-theme-switcher.vercel.app/",
    githhub:
      "https://github.com/Degoke/social-media-dashboard-with-theme-switcher",
    hit: true,
  },
  {
    name: "Todo App",
    id: "todo",
    category: "react",
    details: "A todo app built with Next js, material ui",
    website: "http://todo-test-degoke.vercel.app/",
    githhub: "https://github.com/Degoke/todo-test",
    hit: false,
  },
  {
    name: "My Personal Portfolio",
    id: "personal-portfolio",
    category: "jquery",
    details: "Responsive portfolio website built with Sass and jquery",
    website: "https://degoke.github.io/personal-portfolio/",
    githhub: "https://github.com/Degoke/personal-portfolio",
    hit: false,
  },
  {
    name: "Choropleth Map",
    id: "map",
    category: "d3",
    details:
      "Data Visualization of usa education by county with a choropleth map",
    website: "https://codepen.io/degoke/pen/WNwVEQj",
    githhub: "https://codepen.io/degoke/pen/WNwVEQj",
    hit: false,
  },
  {
    name: "Issue Tracker",
    id: "issue-tracker",
    category: "node",
    details:
      "Issue tracker microservice built with Nodejs express mongoDB and chai for quality assurance",
    website: "https://repl.it/@Degoke/boilerplate-project-issuetracker",
    githhub: "https://repl.it/@Degoke/boilerplate-project-issuetracker",
    hit: true,
  },
  {
    name: "Personal Library",
    id: "personal-library",
    category: "node",
    details:
      "personal library microservice built with nodejs express mongoDB and chai for quality assurance",
    website: "https://repl.it/@Degoke/boilerplate-project-library",
    githhub: "https://repl.it/@Degoke/boilerplate-project-library",
    hit: false,
  },
  {
    name: "Exercise Tracker",
    id: "exercise-tracker",
    category: "node",
    details:
      "Exercise tracker microservice built with nodejs express and mongoDB",
    website: "https://repl.it/@Degoke/boilerplate-project-exercisetracker-3",
    githhub: "https://repl.it/@Degoke/boilerplate-project-exercisetracker-3",
    hit: false,
  },
];

const skills = [
  {
    name: "html",
    image: "images/svgs/html5-icon.svg",
  },
  {
    name: "css",
    image: "images/svgs/css3.svg",
  },
  {
    name: "Sass",
    image: "images/svgs/sass.svg",
  },
  {
    name: "javeScript",
    image: "images/svgs/javascript.svg",
  },
  {
    name: "typescript",
    image: "images/svgs/typescript.svg",
  },
  {
    name: "jquery",
    image: "images/svgs/jquery-icon.svg",
  },
  {
    name: "d3-js",
    image: "images/svgs/d3js-icon.svg",
  },
  {
    name: "react",
    image: "images/svgs/react-icon.svg",
  },
  {
    name: "graphql",
    image: "images/svgs/graphql.svg",
  },
  {
    name: "node js",
    image: "images/svgs/nodejs.svg",
  },
  {
    name: "express",
    image: "images/svgs/expressjs.svg",
  },
  {
    name: "mongo db",
    image: "images/svgs/mongodb.svg",
  },
];

projects.map((project) => {
  $(".workboxes").append(`<div class="workbox ${project.category} ${
    project.hit ? "hit" : ""
  }" id=${project.id} tabindex="0">
  <div class="icons">
    <a
      href=${project.github}
      target="_blank"
      rel="noopener noreferrer"
      ><i class="fab fa-github"></i
    ></a>
    <a
      href=${project.website}
      target="_blank"
      rel="noopener noreferrer"
      ><i class="fas fa-external-link-alt"></i
    ></a>
  </div>
  <div class="description">
    <p class="head">${project.name}</p>
    <p class="tail">
      ${project.details}
    </p>
  </div>
</div>`);
});

skills.map((skill) => {
  $(".skillboxes").append(`
  <div class="skillbox">
  <img src=${skill.image} alt=${skill.name} />
</div>
  `);
});

$("#email").on("input", function (event) {
  if (!regex.test(event.target.value)) {
    $(".error").css("display", "block");
    $("#email").css({
      border: "0.1px solid hsl(0, 100%, 74%)",
      color: "hsl(0, 100%, 74%)",
    });
  } else {
    $(".error").css("display", "none");
    $("#email").css({ border: "0.1px solid #141d26", color: "#141d26" });
    validated = true;
  }
});

$(".form").on("submit", function (event) {
  event.preventDefault();

  var formData = new FormData(this);
  formData.append("service_id", "service_ibq7bhi");
  formData.append("template_id", "template_likkl0t");
  formData.append("user_id", "user_YnxNO7mW1obMdVQjSXTGD");

  if (validated) {
    $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
    })
      .done(function () {
        swal(
          "Your mail is sent!",
          "You'll get a reply as soon as possible",
          "success"
        );
      })
      .fail(function () {
        swal("Oops...!", "could not send mail", "error", {
          button: "Try again",
        });
      });
  } else {
    swal("could not send mail", "please fill the form correctly", "error", {
      button: "Try again",
    });
  }
});

$(".mobile-nav").on("click", function () {
  this.classList.toggle("change");
  $(".mobile-navlist").toggleClass("show");
});

$(".mobile-navlist")
  .find("li")
  .children("a")
  .on("click", function () {
    $(".mobile-navlist").removeClass("show");
    $(".mobile-nav").removeClass("change");
  });

function showBoxes(group) {
  $(".workboxes").children("div").filter(group).addClass("hit");
}

function hideBoxes() {
  $(".hit").removeClass("hit");
}

$(document).ready(function () {
  $(".hit").addClass("temporary");
});

$(".frontend, .backend, .hot, .view").on("click", function () {
  $(".active").removeClass("active");
  $(".view-more").css("display", "none");
  hideBoxes();
  this.classList.add("active");

  switch (this.classList[0]) {
    case "frontend":
      hideBoxes();
      showBoxes(".html, .javascript, .jquery, .react");
      break;
    case "backend":
      hideBoxes();
      showBoxes(".node");
      break;
    case "hot":
      hideBoxes();
      showBoxes(".temporary");
      break;
    case "view":
      hideBoxes();
      $(".view-more").css("display", "flex");
      break;
  }
});

$(".hire").click(function () {
  window.location = "#contact";
});

$(".cv").click(function () {
  window.open("files/Adegoke-Adewoye.pdf");
});
