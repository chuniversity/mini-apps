
$(document).ready(function () {
  $("#form1").submit(function (e) {
    e.preventDefault();
    var file = $(":file")[0].files[0];
    var form = new FormData();
    form.append('post_json', file);

    $.ajax({
      method: "POST",
      url: "/form_submit",
      enctype: 'multipart/form-data',
      cache: false,
      data: form,
      contentType: false,
      processData: false,
      success: (data) => {
        console.log('data', data);
        var url = window.location + data;

        $(".download").empty();

        $(".download").append('<a href="uploads/" download>Download File </a>');
      }
    })
      .done(function (msg) {
        console.log("Success");
      });
  });
});




