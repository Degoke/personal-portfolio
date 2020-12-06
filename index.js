var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
var validated = false;

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

$('.cv').click(function(){
  window.open('files/Adegoke-Adewoye.pdf')
})
