$(".form").on("submit", function (event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append("service_id", "service_ibq7bhi");
  formData.append("template_id", "template_likkl0t");
  formData.append("user_id", "user_YnxNO7mW1obMdVQjSXTGD");

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
});



$('.mobile-nav').on('click', function () {
  this.classList.toggle("change");
  $(".mobile-navlist").toggleClass("show");
})

$(".mobile-navlist")
  .find("li")
  .children("a").on('click', function () {
    $(".mobile-navlist").removeClass("show");
    $(".mobile-nav").removeClass("change");
  });

$('.css, .vanillajs, .jquery, .d3, .react, .node, .frontend, .backend').on('click', function () {
  $('.active').removeClass('active');
  this.classList.add('active');

  switch (this.classList[0]) {
    case "css":
      $('.show-work').removeClass('show-work');
      $('.workboxes').children('div').filter('.html').addClass('show-work');
      break
    case "vanillajs":
      $('.show-work').removeClass('show-work');
      $('.workboxes').children('div').filter('.javascript').addClass('show-work');
      break
    case "jquery":
      $('.show-work').removeClass('show-work');
      $('.workboxes').children('div').filter('.jquery').addClass('show-work');
      break
    case "d3":
      $('.show-work').removeClass('show-work');
      $('.workboxes').children('div').filter('.d3').addClass('show-work');
      break
    case "react":
      $('.show-work').removeClass('show-work');
      $('.workboxes').children('div').filter('.react').addClass('show-work');
      break
    case "node":
      $('.show-work').removeClass('show-work');
      $('.workboxes').children('div').filter('.node').addClass('show-work');
      break
    case "frontend":
      $('.show-work').removeClass('show-work');
      $('.workboxes').children('div').filter('.html, .javascript, .jquery, .react').addClass('show-work');
      break
    case "backend":
      $('.show-work').removeClass('show-work');
      $('.workboxes').children('div').filter('.node').addClass('show-work');
      break;
  }
  

})

$('.hire').click(function(){
  window.location = '#contact'
})
