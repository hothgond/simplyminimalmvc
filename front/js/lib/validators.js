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

function changeValidationLang(){
  jQuery.extend(jQuery.validator.messages, {
    required: getTranslationByKey('validator-required'),
    remote: getTranslationByKey('validator-remote'),
    email: getTranslationByKey('validator-email'),
    url: getTranslationByKey('validator-url'),
    date: getTranslationByKey('validator-date'),
    dateISO: getTranslationByKey('validator-dateISO'),
    number: getTranslationByKey('validator-number'),
    digits: getTranslationByKey('validator-digits'),
    creditcard: getTranslationByKey('validator-creditcard'),
    equalTo: getTranslationByKey('validator-equalTo'),
    accept: getTranslationByKey('validator-accept'),
    maxlength: jQuery.validator.format(getTranslationByKey('validator-maxlength-part') +"{0}"+ getTranslationByKey('validator-characters-part')),
    minlength: jQuery.validator.format(getTranslationByKey('validator-minlength-part') +"{0}"+ getTranslationByKey('validator-characters-part')),
    rangelength: jQuery.validator.format(getTranslationByKey('validator-rangelength-part') +"{0}"+ getTranslationByKey('and') +"{1}"+ getTranslationByKey('validator-characters-long-part')),
    range: jQuery.validator.format(getTranslationByKey('validator-range-part') +"{0}"+ getTranslationByKey('and') +"{1}"),
    max: jQuery.validator.format(getTranslationByKey('validator-max-part') +"{0}"),
    min: jQuery.validator.format(getTranslationByKey('validator-min-part') +"{0}")
  })
}