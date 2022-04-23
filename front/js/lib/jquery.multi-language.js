// Language JSON File Location
var language = getLocalStorage('language');

// Set Selected Language
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    $(".header__languages .btn").removeClass('selected');
    $(".header__languages .btn[rel="+lang+"]").addClass('selected');
    //$("label.error").addClass('dnone'); // for errors in form translates!
    language = getLocalStorage('language');
    // Run Multi Language Plugin
    getLanguage();
}

// Run Multi Language Plugin
function getLanguage() {
    // Load data of selected language
    $.ajax({
        url: 'assets/locales/' + language + '.json',
        dataType: 'json', async: true
    }).done(function (data) {
        localStorage.setItem('language_active_keys', JSON.stringify(data));
        // add selected language class to the body tag
        $('body').attr('class', language);
        // Loop through message in data
        $.each(data, function (index, val) {
            // head is the only RESTRICTED key!!!
            if (index == 'head'){
                $(document).attr("title", val);
            } else if (index == 'img_alt'){
                // ALTS of IMAGES
                $.each(val, function (i, v) {
                    $("img[key="+i+"]").prop('alt', v);
                });
            } else if (index == 'a_title'){
                // TITLES of LINKS
                $.each(val, function (i, v) {
                    $("a[key="+i+"]").prop('title', v);
                });
            } else if (index == 'text'){
                // NORMAL TEXTS
                $.each(val, function (i, v) {
                    $("[key="+i+"]").html(v);
                });
            }
        })
        changeValidationLang();
    })
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

function getTranslationByKey(key){
    var languageActiveKeys = JSON.parse(getLocalStorage('language_active_keys'));
    return languageActiveKeys['text'][key];
}

// Auto Loader
$(document).ready(function () {
    getLanguage(language);
});
