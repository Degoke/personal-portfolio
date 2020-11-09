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
    .fail(function (error) {
      swal("Oops...!", "could not send mail", "error", {
        button: "Try again",
      });
    });
});
