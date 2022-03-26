function validateFormsOnInit(){
  // ADD HERE ALL FORMS TO BE DINAMICALY VALIDATED, Need to validate for seen form in order to not repeat validate X times.
  if($("#contactUsForm").length == 1 && !$("#contactUsForm").hasClass('seen-form')){
    validateForm('contactUsForm');
  }
}
function sendForm(formId){
  if(formId == "contactUsForm"){
    if(validateForm(formId)){
      ajaxSendContactUsMail();
    }
  } else {
    console.log('Unhandled petition for Form "'+formId+'" specify it in form validators');
  }
}

function validateForm(formId){
  // this line is needed in order to not repeat validation X times on initHTML()
  $("#"+formId).addClass('seen-form');
  // the rest of the code
  var numfields = $("#"+formId).find(':input').length;
  var validation = $("#"+formId).validate({
    rules: {
      // name, message, age, email... are the "name" fields in input or textarea fields!
      // if you need to add more, just set a "name" attribute to the input different from previous and 
      // its specifications. Easy.
      name: {
        required: true,
        minlength: 3
      },
      message: {
        required: true,
        minlength: 3,
        maxlength: 50
      },
      age: {
        required: true,
        number: true,
        min: 18,
        max: 120
      },
      email: {
        required: true,
        email: true
      },
      weight: {
        required: false,
        number: true,
        min: 30,
        max: 500
      }
    }
  });
  var validForm = false;
  if(Object.keys(validation.invalid).length == numfields){
      validForm = true;
      $.each(validation.invalid, function (index, invalid) {
          if(invalid){
              validForm = false;
          }
      })
  }
  return validForm;
}