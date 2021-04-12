// Here put all ajax calls to execute at the beggining of the site load
function ajaxCalls() {
  $.ajax({
    url: "back/controllers/main.php",
    type: "GET",
    data: "",
    success: function (data) {
      //called when successful
      localStorage["data"] = data;
      //showUsers(localStorage.getItem("showUsers"));
      //setOthers(Number(localStorage.getItem("setOthers")));
    },
    error: function (e) {
      //called when there is an error
      //console.log(e.message);
    },
  });
}

// MAIL SEND
function ajaxSendContactUsMail() {
  objectData = { 
    name: $("#contactUsInputName").val(),
    email: $("#contactUsInputEmail").val(),
    message: $("#contactUsInputMessage").val(),
    age: $("#contactUsInputAge").val(),
    weight: $("#contactUsInputWeight").val(),
  }
  $.ajax({
    url: "back/controllers/sendmail.php",
    type: "POST",
    data: objectData,
    beforeSend: function(){
      toggleModal('modalLoader');
    },
    complete: function(){
      toggleModal('modalLoader');
    },
    success: function(result){ // on success
      if (result == 'success'){
        $('#container-email').hide();
        $('.output_message').text('Message Sent!');  
      } else {
        $('.output_message').text('Error Sending email!');
      }
    },
    error: function (e) { //called when there is an error
    },
  });
}