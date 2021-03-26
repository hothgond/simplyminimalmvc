function validateFormsOnInit(){
  // ADD HERE ALL FORMS TO BE DINAMICALY VALIDATED
  validateForm('contactUsForm');
}

function validateForm(formId){
  var numfields = $("#"+formId).find(':input').length;
  var validation = $("#"+formId).validate({
    rules: {
      name : {
        required: true,
        minlength: 3
      },
      message : {
        required: true,
        minlength: 3,
        maxlength: 50
      },
      age: {
        required: true,
        number: true,
        min: 18
      },
      email: {
        required: true,
        email: true
      },
      weight: {
        required: {
          depends: function(elem) {
            return $("#age").val() > 50
          }
        },
        number: true,
        min: 0
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
  if(validForm){
    if(formId == "contactUsForm"){
      $('#modalLoader').removeClass('dnone');
      ajaxSendContactUsMail();
      $('#modalLoader').addClass('dnone');  
    } else {
      console.log('Unhandled petition for Form "'+formId+'" specify it in form validators');
    }
  }
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